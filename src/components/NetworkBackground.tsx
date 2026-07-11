import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; vx: number; vy: number }

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

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = width < 640 ? 24 : Math.min(54, Math.floor(width / 24))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12,
      }))
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      points.forEach((point, index) => {
        if (!reducedMotion) {
          const dx = point.x - pointer.x
          const dy = point.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < 130 && distance > 0) {
            point.x += (dx / distance) * 0.18
            point.y += (dy / distance) * 0.18
          }
          point.x += point.vx
          point.y += point.vy
          if (point.x < -10 || point.x > width + 10) point.vx *= -1
          if (point.y < -10 || point.y > height + 10) point.vy *= -1
        }
        for (let next = index + 1; next < points.length; next += 1) {
          const other = points[next]
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < 145) {
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(other.x, other.y)
            context.strokeStyle = `rgba(100, 116, 139, ${0.1 * (1 - distance / 145)})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
        context.beginPath()
        context.arc(point.x, point.y, 1.4, 0, Math.PI * 2)
        context.fillStyle = 'rgba(109, 40, 217, 0.18)'
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
