export type ProjectOwnershipType = 'team' | 'personal' | 'personal-data'

export const projectOwnership: Record<string, ProjectOwnershipType> = {
  staccato: 'team',
  'ai-accident-detection': 'team',
  'wizard-defense': 'personal',
  'inquiry-dataset': 'personal-data',
  'loo-ting-lab': 'personal',
}

export const projectGroupOrder = {
  team: ['staccato', 'ai-accident-detection'],
  personal: ['wizard-defense', 'inquiry-dataset', 'loo-ting-lab'],
} as const

export function getProjectOwnership(projectId: string): ProjectOwnershipType {
  return projectOwnership[projectId] ?? 'personal'
}

export function getOwnershipTranslationKey(projectId: string) {
  const ownership = getProjectOwnership(projectId)
  return ownership === 'personal-data' ? 'ownership.personalData' : `ownership.${ownership}`
}
