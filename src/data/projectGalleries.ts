import type { Language } from '../i18n/types'

export type ProjectGalleryCategory = 'gameplay' | 'ui' | 'wizard' | 'skill' | 'monster'

export type ProjectGalleryItem = {
  src: string
  category: ProjectGalleryCategory
  caption: Record<Language, string>
  alt: string
}

const projectGalleries: Record<string, ProjectGalleryItem[]> = {
  'wizard-defense': [
    {
      src: 'assets/projects/wizard-defense/gallery/title_screen_01.png',
      category: 'gameplay',
      caption: { ko: '타이틀 화면', en: 'Title Screen' },
      alt: 'Random Wizard Defense title screen',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/gameplay_combat_tier2_skill_01.png',
      category: 'gameplay',
      caption: { ko: 'Tier 2 스킬 전투 화면', en: 'Tier 2 Skill Combat' },
      alt: 'Random Wizard Defense gameplay combat with Tier 2 skill effect',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/ui_settings_panel_01.png',
      category: 'ui',
      caption: { ko: '설정창 UI', en: 'Settings Panel UI' },
      alt: 'Random Wizard Defense settings panel with audio and fullscreen options',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/fusion_wizard_lava_01.png',
      category: 'wizard',
      caption: { ko: '용암 융합 마법사', en: 'Lava Fusion Wizard' },
      alt: 'Lava fusion wizard character asset',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/legendary_wizard_arcane_01.png',
      category: 'wizard',
      caption: { ko: '전설 마법사', en: 'Legendary Wizard' },
      alt: 'Legendary wizard character asset',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/skill_thundercloud_sprite_sheet_01.png',
      category: 'skill',
      caption: { ko: '천둥구름 스킬 시트', en: 'Thundercloud Skill Sheet' },
      alt: 'Thundercloud skill sprite sheet',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/monster_goblin_lineup_01.png',
      category: 'monster',
      caption: { ko: '고블린 몬스터 라인업', en: 'Goblin Monster Lineup' },
      alt: 'Goblin monster lineup asset',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/monster_slime_01.png',
      category: 'monster',
      caption: { ko: '슬라임 몬스터', en: 'Slime Monster' },
      alt: 'Slime monster asset',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/ui_settings_checkbox_sheet_01.png',
      category: 'ui',
      caption: { ko: '설정 체크박스 UI', en: 'Settings Checkbox UI' },
      alt: 'Settings checkbox UI sprite sheet',
    },
    {
      src: 'assets/projects/wizard-defense/gallery/ui_settings_slider_sheet_01.png',
      category: 'ui',
      caption: { ko: '설정 슬라이더 UI', en: 'Settings Slider UI' },
      alt: 'Settings slider UI sprite sheet',
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
