import type { Language } from '../i18n/types'

type LocalizedText = Record<Language, string>

export type ProjectContentReviewMetric = {
  label: LocalizedText
  value: string
  tone: 'neutral' | 'pass' | 'partial' | 'revise'
}

export type ProjectContentReview = {
  title: LocalizedText
  description: LocalizedText
  image: string
  imageAlt: LocalizedText
  captionTitle: LocalizedText
  caption: LocalizedText
  metrics: ProjectContentReviewMetric[]
  workflow: LocalizedText
}

const projectContentReviews: Record<string, ProjectContentReview> = {
  'guild-director': {
    title: {
      ko: '제타 AI 캐릭터 콘텐츠 검수 기록',
      en: 'Zeta AI Character Content Review Record',
    },
    description: {
      ko: '제타 AI 캐릭터 콘텐츠는 한 번 생성하고 끝내지 않고, 실제 대화처럼 테스트해보며 검수했습니다. 캐릭터 설정이 흔들리지 않는지, 계약 조건을 잘못 말하지 않는지, 없는 경력이나 허위 왕실 설정을 만들어내지 않는지 확인했고, 문제가 있는 답변은 프롬프트를 수정해 다시 테스트했습니다.',
      en: 'Zeta AI character content was reviewed through conversation-like test cases rather than treated as complete after one generation. The review checked character consistency, incorrect contract terms, invented experience, and false royal affiliations. Problematic answers were tested again after prompt revisions.',
    },
    image: 'assets/projects/guild-director/validation/ai-content-review-dashboard.png',
    imageAlt: {
      ko: '캐릭터 대화 품질과 계약 조건, 허위 정보 생성을 점검한 제타 AI 콘텐츠 검수 대시보드',
      en: 'Zeta AI content review dashboard checking dialogue quality, contract terms, and fabricated information',
    },
    captionTitle: {
      ko: '제타 AI 캐릭터 콘텐츠 검수 대시보드',
      en: 'Zeta AI Character Content Review Dashboard',
    },
    caption: {
      ko: '캐릭터 대화 품질, 계약 조건, 허위 정보 생성 여부를 테스트 케이스로 점검한 기록입니다.',
      en: 'A test-case record reviewing character dialogue quality, contract terms, and fabricated information.',
    },
    metrics: [
      { label: { ko: '전체 테스트', en: 'Total Tests' }, value: '6', tone: 'neutral' },
      { label: { ko: '최종 통과', en: 'Final Pass' }, value: '3', tone: 'pass' },
      { label: { ko: '부분 통과', en: 'Partial Pass' }, value: '2', tone: 'partial' },
      { label: { ko: '수정 필요', en: 'Needs Revision' }, value: '1', tone: 'revise' },
      { label: { ko: '엄격 통과율', en: 'Strict Pass Rate' }, value: '50%', tone: 'pass' },
      { label: { ko: '재검증 완료', en: 'Retested' }, value: '3', tone: 'neutral' },
    ],
    workflow: {
      ko: '테스트 케이스 실행 → 문제 답변 확인 → 프롬프트 수정 → 동일 조건 재검증',
      en: 'Run test case → review problematic answer → revise prompt → retest under the same conditions',
    },
  },
}

function resolveAssetPath(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getProjectContentReview(projectId: string) {
  const review = projectContentReviews[projectId]
  return review ? { ...review, image: resolveAssetPath(review.image) } : undefined
}
