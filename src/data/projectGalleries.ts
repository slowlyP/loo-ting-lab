import type { Language } from '../i18n/types'

export type ProjectGalleryCategory = 'gameplay' | 'ui' | 'wizard' | 'skill' | 'monster'

export type ProjectGalleryItem = {
  src: string
  category: ProjectGalleryCategory
  caption: Record<Language, string>
  alt: string
}

const projectGalleries: Record<string, ProjectGalleryItem[]> = {
  'animal-pang': [
    {
      src: 'assets/projects/animal-pang/gallery/title_screen_01.png',
      category: 'ui',
      caption: { ko: '타이틀 화면', en: 'Title Screen' },
      alt: 'Stack Stack Animal Pang title screen',
    },
    {
      src: 'assets/projects/animal-pang/gallery/gameplay_01.png',
      category: 'gameplay',
      caption: { ko: '기본 플레이 화면', en: 'Core Gameplay' },
      alt: 'Stack Stack Animal Pang core gameplay screen',
    },
    {
      src: 'assets/projects/animal-pang/gallery/gameplay_02.png',
      category: 'gameplay',
      caption: { ko: '동물 블록 쌓기', en: 'Animal Block Stacking' },
      alt: 'Animal block stacking gameplay screen',
    },
    {
      src: 'assets/projects/animal-pang/gallery/gameplay_03.png',
      category: 'gameplay',
      caption: { ko: '병합과 점수 흐름', en: 'Merge and Score Flow' },
      alt: 'Animal block merge and score flow screen',
    },
    {
      src: 'assets/projects/animal-pang/gallery/game_over_01.png',
      category: 'ui',
      caption: { ko: '게임오버 화면', en: 'Game Over Screen' },
      alt: 'Stack Stack Animal Pang game over screen',
    },
  ],
}

function resolveAssetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getProjectGallery(projectId: string): ProjectGalleryItem[] {
  return (projectGalleries[projectId] ?? []).map((item) => ({
    ...item,
    src: resolveAssetPath(item.src),
  }))
}
