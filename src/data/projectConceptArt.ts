import type { Language } from '../i18n/types'

type LocalizedText = Record<Language, string>

export type ProjectConceptArtItem = {
  src: string
  title: LocalizedText
  description: LocalizedText
  alt: LocalizedText
  layout: 'banner' | 'portrait'
  objectPosition?: string
}

export type ProjectConceptArt = {
  sectionTitle: LocalizedText
  noticeTitle: LocalizedText
  notice: LocalizedText
  hero: Omit<ProjectConceptArtItem, 'layout'>
  world: ProjectConceptArtItem
  character: ProjectConceptArtItem
  mission: ProjectConceptArtItem
}

const guildDirectorConceptArt: ProjectConceptArt = {
  sectionTitle: { ko: '비주얼 컨셉 시안', en: 'Concept Art' },
  noticeTitle: { ko: 'AI 생성 비주얼 컨셉 시안입니다.', en: 'AI-generated visual concept art.' },
  notice: {
    ko: '프로젝트의 분위기와 용병 영입 장면을 전달하기 위한 참고 이미지이며, 현재 구현된 실제 게임 플레이 화면은 아닙니다.',
    en: 'These reference images communicate the project mood and mercenary recruitment direction. They do not depict the currently implemented game experience.',
  },
  hero: {
    src: 'assets/projects/guild-director/concept/hero-recruitment-negotiation.png',
    title: { ko: '용병 영입 장면 비주얼 컨셉 시안', en: 'Mercenary Recruitment Visual Concept' },
    description: {
      ko: '실제 게임 화면이 아닌 영입 대화와 계약 협상의 연출 방향입니다.',
      en: 'A direction study for recruitment dialogue and contract negotiation, not an implemented game view.',
    },
    alt: {
      ko: '선술집에서 단장과 정찰병 용병 후보가 계약을 협상하는 AI 비주얼 컨셉 시안',
      en: 'AI visual concept of a guild director negotiating a contract with a scout candidate in a tavern',
    },
  },
  world: {
    src: 'assets/projects/guild-director/concept/tavern-world-banner.png',
    title: { ko: '용병 선술집 비주얼 컨셉 시안', en: 'Mercenary Tavern Visual Concept' },
    description: {
      ko: '용병 후보 탐색과 계약 협상이 시작되는 공간입니다.',
      en: 'The setting where candidate scouting and contract negotiations begin.',
    },
    alt: {
      ko: '용병 후보들이 모여 있는 선술집 내부의 AI 비주얼 컨셉 시안',
      en: 'AI visual concept of a tavern filled with mercenary candidates',
    },
    layout: 'banner',
  },
  character: {
    src: 'assets/projects/guild-director/concept/lia-tavern-portrait.png',
    title: { ko: '리아 베른 — 여성 정찰병', en: 'Lia Verne — Scout' },
    description: {
      ko: '빠른 이동과 회피, 선행 정찰과 후방 경계에 특화된 용병 후보입니다.',
      en: 'A mercenary candidate specializing in mobility, evasion, forward scouting, and rear security.',
    },
    alt: {
      ko: '선술집에 서 있는 여성 정찰병 리아 베른의 AI 비주얼 컨셉 시안',
      en: 'AI visual concept portrait of Lia Verne, a scout candidate in the tavern',
    },
    layout: 'portrait',
    objectPosition: '62% center',
  },
  mission: {
    src: 'assets/projects/guild-director/concept/lia-scouting-mission.png',
    title: { ko: '정찰 임무 비주얼 컨셉 시안', en: 'Scouting Mission Visual Concept' },
    description: {
      ko: '길목 확인과 위험 징후 탐지에 특화된 정찰병 역할을 보여주는 이미지입니다.',
      en: 'A role study showing a scout checking routes and detecting signs of danger.',
    },
    alt: {
      ko: '숲길에서 위험 징후를 살피는 정찰병 리아 베른의 AI 비주얼 컨셉 시안',
      en: 'AI visual concept of scout Lia Verne checking a forest route for danger',
    },
    layout: 'portrait',
  },
}

const projectConceptArt: Record<string, ProjectConceptArt> = {
  'guild-director': guildDirectorConceptArt,
}

function resolveAssetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getProjectConceptArt(projectId: string) {
  const conceptArt = projectConceptArt[projectId]
  if (!conceptArt) return undefined

  return {
    ...conceptArt,
    hero: { ...conceptArt.hero, src: resolveAssetPath(conceptArt.hero.src) },
    world: { ...conceptArt.world, src: resolveAssetPath(conceptArt.world.src) },
    character: { ...conceptArt.character, src: resolveAssetPath(conceptArt.character.src) },
    mission: { ...conceptArt.mission, src: resolveAssetPath(conceptArt.mission.src) },
  }
}
