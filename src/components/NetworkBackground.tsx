import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; vx: number; vy: number }
type Connection = { from: number; to: number; distance: number }

const CONNECTION_DISTANCE = 148
const POINTER_RADIUS = 170

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -1000, y: -1000 }
    let points: Point[] = []
    let width = 0
    let height = 0
    let frame = 0
    let lastFrameTime = 0
    let isMobile = false

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      isMobile = width < 640
      const count = isMobile
        ? Math.min(34, Math.max(26, Math.floor(width / 14)))
        : Math.min(72, Math.max(58, Math.floor(width / 22)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1,
      }))
    }

    const draw = (time = 0) => {
      if (!reducedMotion && isMobile && time - lastFrameTime < 32) {
        frame = window.requestAnimationFrame(draw)
        return
      }
      lastFrameTime = time
      context.clearRect(0, 0, width, height)
      points.forEach((point) => {
        if (!reducedMotion) {
          const dx = point.x - pointer.x
          const dy = point.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < POINTER_RADIUS && distance > 0) {
            const force = (1 - distance / POINTER_RADIUS) * 0.24
            point.x += (dx / distance) * force
            point.y += (dy / distance) * force
          }
          point.x += point.vx
          point.y += point.vy
          if (point.x < 0 || point.x > width) {
            point.x = Math.max(0, Math.min(width, point.x))
            point.vx *= -1
          }
          if (point.y < 0 || point.y > height) {
            point.y = Math.max(0, Math.min(height, point.y))
            point.vy *= -1
          }
        }
      })

      const connections: Connection[] = []
      const neighbors = points.map(() => [] as { index: number; distance: number }[])
      points.forEach((point, index) => {
        for (let next = index + 1; next < points.length; next += 1) {
          const other = points[next]
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < CONNECTION_DISTANCE) {
            connections.push({ from: index, to: next, distance })
            neighbors[index].push({ index: next, distance })
            neighbors[next].push({ index, distance })
          }
        }
      })

      const triangleLimit = isMobile ? 7 : 18
      let triangleCount = 0
      for (let origin = 0; origin < points.length && triangleCount < triangleLimit; origin += 1) {
        const closest = neighbors[origin]
          .sort((a, b) => a.distance - b.distance)
          .slice(0, isMobile ? 3 : 4)
        for (let first = 0; first < closest.length - 1 && triangleCount < triangleLimit; first += 1) {
          for (let second = first + 1; second < closest.length && triangleCount < triangleLimit; second += 1) {
            const pointA = points[closest[first].index]
            const pointB = points[closest[second].index]
            if (Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y) >= CONNECTION_DISTANCE) continue
            const point = points[origin]
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(pointA.x, pointA.y)
            context.lineTo(pointB.x, pointB.y)
            context.closePath()
            context.fillStyle = triangleCount % 2 === 0
              ? 'rgba(129, 140, 248, 0.026)'
              : 'rgba(148, 163, 184, 0.022)'
            context.fill()
            triangleCount += 1
          }
        }
      }

      connections.forEach(({ from, to, distance }) => {
        const point = points[from]
        const other = points[to]
        context.beginPath()
        context.moveTo(point.x, point.y)
        context.lineTo(other.x, other.y)
        context.strokeStyle = `rgba(100, 116, 139, ${0.115 * (1 - distance / CONNECTION_DISTANCE)})`
        context.lineWidth = 0.65
        context.stroke()
      })

      points.forEach((point, index) => {
        context.beginPath()
        context.arc(point.x, point.y, index % 5 === 0 ? 1.7 : 1.3, 0, Math.PI * 2)
        context.fillStyle = index % 3 === 0
          ? 'rgba(109, 40, 217, 0.2)'
          : 'rgba(100, 116, 139, 0.18)'
        context.fill()
      })
      if (!reducedMotion) frame = window.requestAnimationFrame(draw)
    }
    const onPointerMove = (event: PointerEvent) => { pointer.x = event.clientX; pointer.y = event.clientY }
    const onPointerLeave = () => { pointer.x = -1000; pointer.y = -1000 }
    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-80" />
}
