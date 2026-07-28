import { useEffect, useMemo, useRef, useState } from 'react'
import { getProjectGallery } from '../data/projectGalleries'
import type { Language } from '../i18n/types'

const sharedCopy = {
  ko: {
    title: '비주얼 갤러리',
    previous: '이전 이미지',
    next: '다음 이미지',
    close: '갤러리 닫기',
  },
  en: {
    title: 'Visual Gallery',
    previous: 'Previous image',
    next: 'Next image',
    close: 'Close gallery',
  },
} satisfies Record<Language, Record<string, string>>

const projectCopy: Record<string, Record<Language, { description: string; dialog: string }>> = {
  'wizard-defense': {
    ko: {
      description: '게임 화면, 캐릭터, 몬스터, 스킬 이펙트, UI 에셋을 한눈에 볼 수 있도록 정리했습니다.',
      dialog: 'Random Wizard Defense 비주얼 갤러리',
    },
    en: {
      description: 'A horizontal gallery of gameplay screens, characters, monsters, skill effects, and UI assets.',
      dialog: 'Random Wizard Defense visual gallery',
    },
  },
  'animal-pang': {
    ko: {
      description: '타이틀부터 동물 블록 쌓기, 병합과 점수, 게임오버까지 실제 플레이 화면을 순서대로 정리했습니다.',
      dialog: '차곡차곡 동물팡 비주얼 갤러리',
    },
    en: {
      description: 'A horizontal gallery covering the title, animal block stacking, merge and score flow, and game over.',
      dialog: 'Stack Stack Animal Pang visual gallery',
    },
  },
}

export function ProjectVisualGallery({ projectId, language }: { projectId: string; language: Language }) {
  const gallery = useMemo(() => getProjectGallery(projectId), [projectId])
  const [failedSources, setFailedSources] = useState<Set<string>>(() => new Set())
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const isDraggingRef = useRef(false)
  const suppressClickRef = useRef(false)

  const items = gallery.filter((item) => !failedSources.has(item.src))
  const selectedItem = selectedIndex === null ? undefined : items[selectedIndex]
  const labels = {
    ...sharedCopy[language],
    ...(projectCopy[projectId]?.[language] ?? {
      description: '',
      dialog: `${projectId} visual gallery`,
    }),
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSelectedIndex((current) => current === null ? null : (current - 1 + items.length) % items.length)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSelectedIndex((current) => current === null ? null : (current + 1) % items.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [items.length, selectedIndex])

  if (!items.length) return null

  const markFailed = (src: string) => {
    setFailedSources((current) => new Set(current).add(src))
  }

  const showPrevious = () => {
    setSelectedIndex((current) => current === null ? null : (current - 1 + items.length) % items.length)
  }

  const showNext = () => {
    setSelectedIndex((current) => current === null ? null : (current + 1) % items.length)
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50/80 px-6 py-8 dark:border-slate-700/70 dark:bg-slate-950/35 sm:px-9 lg:px-12" aria-labelledby={`${projectId}-gallery-title`}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="max-w-3xl">
          <h2 id={`${projectId}-gallery-title`} className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50">{labels.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">{labels.description}</p>
        </div>
        <p className="text-xs font-black uppercase tracking-[0.15em] text-violet-600 dark:text-violet-300">{items.length} images</p>
      </div>

      <div
        ref={scrollerRef}
        className={`mt-6 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return
          const scroller = scrollerRef.current
          if (!scroller) return
          isDraggingRef.current = true
          setIsDragging(true)
          suppressClickRef.current = false
          dragStartXRef.current = event.clientX
          dragStartScrollRef.current = scroller.scrollLeft
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (event.pointerType !== 'mouse' || !isDraggingRef.current) return
          const distance = event.clientX - dragStartXRef.current
          if (Math.abs(distance) > 6) suppressClickRef.current = true
          event.currentTarget.scrollLeft = dragStartScrollRef.current - distance
        }}
        onPointerUp={(event) => {
          if (event.pointerType !== 'mouse') return
          isDraggingRef.current = false
          setIsDragging(false)
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
        }}
        onPointerCancel={() => { isDraggingRef.current = false; setIsDragging(false) }}
        onClickCapture={(event) => {
          if (!suppressClickRef.current) return
          event.preventDefault()
          event.stopPropagation()
          suppressClickRef.current = false
        }}
        onWheel={(event) => {
          const scroller = event.currentTarget
          if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return
          const canScroll = event.deltaY > 0
            ? scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth
            : scroller.scrollLeft > 0
          if (!canScroll) return
          event.preventDefault()
          scroller.scrollLeft += event.deltaY
        }}
      >
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group w-[78vw] max-w-80 shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-violet-500/70 sm:w-80"
            aria-label={`${item.caption[language]} ${index + 1}/${items.length}`}
          >
            <span className="flex h-48 items-center justify-center bg-slate-100 p-2 dark:bg-slate-950/70">
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                loading="lazy"
                onError={() => markFailed(item.src)}
                className="size-full object-contain transition duration-300 group-hover:scale-[1.02]"
              />
            </span>
            <span className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-sm font-black text-slate-900 dark:text-slate-100">{item.caption[language]}</span>
              <span className="text-[10px] font-black uppercase tracking-wider text-violet-600 dark:text-violet-300">{item.category}</span>
            </span>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialog}
          onMouseDown={() => setSelectedIndex(null)}
        >
          <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onMouseDown={(event) => event.stopPropagation()}>
            <div className="mb-3 flex w-full items-center justify-between gap-4 text-white">
              <div>
                <p className="font-black">{selectedItem.caption[language]}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">{(selectedIndex ?? 0) + 1} / {items.length} · {selectedItem.category}</p>
              </div>
              <button type="button" onClick={() => setSelectedIndex(null)} aria-label={labels.close} className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl font-light transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">×</button>
            </div>
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/50 p-2 sm:p-4">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                onError={() => { markFailed(selectedItem.src); setSelectedIndex(null) }}
                className="max-h-[78vh] max-w-full object-contain"
              />
              {items.length > 1 ? (
                <>
                  <button type="button" onClick={showPrevious} aria-label={labels.previous} className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-2xl text-white transition hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5">‹</button>
                  <button type="button" onClick={showNext} aria-label={labels.next} className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-2xl text-white transition hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5">›</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
