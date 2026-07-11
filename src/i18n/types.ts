export type Language = 'ko' | 'en'

export type TranslationValue = string | string[] | TranslationTree

export type TranslationTree = {
  [key: string]: TranslationValue
}
