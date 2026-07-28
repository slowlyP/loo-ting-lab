import type { Language } from '../i18n/types'

export type ProjectVideo = {
  src: string
  poster: string
  title: Record<Language, string>
  fit?: 'cover' | 'contain'
}

const projectVideos: Record<string, ProjectVideo> = {
  'wizard-defense': {
    src: 'assets/projects/wizard-defense/demo.mp4',
    poster: 'assets/projects/wizard-defense/preview.png',
    title: {
      ko: '랜덤 마법사 디펜스 게임플레이 영상',
      en: 'Wizard Defense Gameplay Video',
    },
  },
  'animal-pang': {
    src: 'assets/projects/animal-pang/videos/demo.mp4',
    poster: 'assets/projects/animal-pang/preview.png',
    fit: 'contain',
    title: {
      ko: '차곡차곡 동물팡 게임플레이 편집 영상',
      en: 'Stack Stack Animal Pang Gameplay Demo',
    },
  },
}

function resolveAssetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getProjectVideo(projectId: string): ProjectVideo | undefined {
  const video = projectVideos[projectId]
  if (!video) return undefined

  return {
    ...video,
    src: resolveAssetPath(video.src),
    poster: resolveAssetPath(video.poster),
  }
}
