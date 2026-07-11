export type ProjectPreview = {
  image?: string
  video?: string
  alt: string
  kind: 'image' | 'video' | 'abstract'
}

export const projectPreviews: Record<string, ProjectPreview> = {
  staccato: {
    image: 'assets/projects/staccato/preview.png',
    alt: 'STACCATO AI highway control preview',
    kind: 'image',
  },
  'wizard-defense': { alt: 'Wizard Defense project preview', kind: 'abstract' },
  'inquiry-dataset': { alt: 'Inquiry Dataset project preview', kind: 'abstract' },
  'ai-accident-detection': {
    image: 'assets/projects/ai-accident-detection/preview.png',
    alt: '404 R·N·F AI road hazard detection preview',
    kind: 'image',
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
