export type ProjectPreview = {
  image?: string
  video?: string
  alt: string
  kind: 'image' | 'video' | 'abstract'
  fit?: 'cover' | 'contain'
}

export const projectPreviews: Record<string, ProjectPreview> = {
  staccato: {
    image: 'assets/projects/staccato/preview.png',
    alt: 'STACCATO AI highway control preview',
    kind: 'image',
  },
  'animal-pang': {
    image: 'assets/projects/animal-pang/preview.png',
    alt: 'Stack Stack Animal Pang abstract project preview',
    kind: 'image',
  },
  'ai-accident-detection': {
    image: 'assets/projects/ai-accident-detection/preview.png',
    alt: '404 R·N·F AI road hazard detection preview',
    kind: 'image',
  },
  'guild-director': {
    image: 'assets/projects/guild-director/concept/hero-recruitment-negotiation.png',
    alt: 'Project Guild Director 용병 영입 협상 비주얼 컨셉 시안',
    kind: 'image',
    fit: 'contain',
  },
}

function resolveAssetPath(path: string | undefined) {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getProjectPreview(projectId: string, title: string): ProjectPreview {
  const preview = projectPreviews[projectId] ?? {
    alt: `${title} project preview`,
    kind: 'abstract',
  }
  return {
    ...preview,
    image: resolveAssetPath(preview.image),
    video: resolveAssetPath(preview.video),
  }
}
