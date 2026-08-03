export type ProjectOwnershipType = 'team' | 'personal'

export const projectOwnership: Record<string, ProjectOwnershipType> = {
  staccato: 'team',
  'ai-accident-detection': 'team',
  'animal-pang': 'personal',
  'guild-director': 'personal',
}

export const projectGroupOrder = {
  team: ['staccato', 'ai-accident-detection'],
  personal: ['animal-pang', 'guild-director'],
} as const

export function getProjectOwnership(projectId: string): ProjectOwnershipType {
  return projectOwnership[projectId] ?? 'personal'
}

export function getOwnershipTranslationKey(projectId: string) {
  const ownership = getProjectOwnership(projectId)
  return `ownership.${ownership}`
}
