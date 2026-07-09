export type ResumeInfoItem = {
  label: string
  value: string
  href?: string
}

export type ResumePhoto = {
  src: string
  alt: string
  placeholder: string
  ratio: string
  recommendedSize: string
}

export type ResumeSkillGroup = {
  title: string
  items: string[]
}

export type ResumeProject = {
  name: string
  role: string
  summary: string
  tags: string[]
}

export type ResumeEducation = {
  title: string
  period: string
  description: string
  learned: string[]
}

export type ResumeCertificate = {
  title: string
  issuer: string
  status: 'available' | 'planned'
  fileUrl?: string
  note: string
}

export type ResumeContact = {
  label: string
  value: string
  href?: string
}

export type ResumeContent = {
  pageTitle: string
  intro: string
  name: string
  headline: string
  profilePhoto: ResumePhoto
  basicInfo: ResumeInfoItem[]
  desiredRole: string
  profileSummary: string
  coreSkills: ResumeSkillGroup[]
  projectExperience: ResumeProject[]
  educationTraining: ResumeEducation[]
  certificates: ResumeCertificate[]
  licenses: ResumeCertificate[]
  coverLetter: {
    summary: string
    details: string[]
    openLabel: string
    closeLabel: string
  }
  portfolioHighlights: string[]
  contactLinks: ResumeContact[]
}

export const resumeContent: ResumeContent = {
  pageTitle: '이력서 / 자기소개 요약',
  intro:
    '프로젝트를 구조화하고 구현 내용과 검증 기록을 함께 남기는 방식으로 성장하고 있는 개발자 포트폴리오입니다.',
  name: '송명근',
  headline:
    'React, TypeScript, Unity, Python 기반 프로젝트를 포트폴리오로 정리하며, 구현 내용과 검증 기록을 함께 보여주는 개발자를 목표로 하고 있습니다.',
  profilePhoto: {
    src: '/assets/resume/profile/profile-photo.jpg',
    alt: '송명근 증명사진',
    placeholder: '증명사진 추가 예정',
    ratio: '3:4',
    recommendedSize: '300x400px 또는 360x480px',
  },
  basicInfo: [
    { label: '이름', value: '송명근' },
    { label: '희망 직무', value: '프론트엔드 / 웹 개발 / 프로젝트형 개발 직무' },
    { label: 'Email', value: '추가 예정' },
    { label: 'GitHub', value: 'slowlyP', href: 'https://github.com/slowlyP' },
  ],
  desiredRole:
    'React와 TypeScript 기반 웹 UI 구현을 중심으로, 프로젝트 구조를 이해하고 문서화하며 검증 결과를 남기는 개발 직무를 희망합니다. AI/데이터 프로젝트와 Unity 게임 프로토타입 경험은 서비스 흐름과 시스템 구조를 이해하는 보조 경험으로 정리하고 있습니다.',
  profileSummary:
    'React 기반 포트폴리오, Unity 게임 프로토타입, 한국어 문의 데이터셋 프로젝트를 통해 화면 구성, 게임 시스템 이해, 데이터 라벨링 기준 정리, 규칙 기반 분류 실험을 경험했습니다. 현재는 프로젝트별 역할과 검증 과정을 취업용으로 설명할 수 있도록 정리하고 있습니다.',
  coreSkills: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    },
    {
      title: 'Backend / AI Support',
      items: ['Python', 'Flask', 'FastAPI', 'MySQL', 'rule-based classifier'],
    },
    {
      title: 'Game / Data',
      items: ['Unity', 'C#', 'CSV', 'Data Labeling', 'Dataset Card'],
    },
  ],
  projectExperience: [
    {
      name: 'STACCATO',
      role: 'AI 관제 프로젝트 구조 정리 / 연동 흐름 검증 참여',
      summary:
        '고속도로 CCTV와 신고 영상 분석 결과가 Flask API, MySQL 메타데이터, Socket.IO 알림, Next.js 관제 화면으로 이어지는 흐름을 이해하고 정리했습니다.',
      tags: ['Flask', 'YOLOv11', 'Next.js', 'Linux VM', 'MySQL'],
    },
    {
      name: 'Wizard Defense',
      role: 'Unity 게임 프로토타입 기획 / 구현 상태 정리',
      summary:
        'Unity와 C# 기반 2D 타워디펜스 프로토타입에서 전투 루프, 랜덤 소환, 일반 마법사 융합, 전설 마법사 구조를 기획과 구현 상태로 나누어 정리했습니다.',
      tags: ['Unity', 'C#', '2D Sprite', 'Tower Defense'],
    },
    {
      name: 'Inquiry Dataset',
      role: '한국어 데이터셋 설계 / 규칙 기반 분류 실험',
      summary:
        '한국어 합성 고객 문의 데이터셋, 라벨링 기준, dataset card, rule-based classifier, 실험 기록과 오류 분석을 함께 구성했습니다.',
      tags: ['Python', 'CSV', 'rule-based classifier', 'TF-IDF', 'GitHub'],
    },
  ],
  educationTraining: [
    {
      title: '교육기관 / 과정명',
      period: '정리 예정',
      description:
        '실제 교육기관명과 기간은 확인된 정보 기준으로 추후 정리할 예정입니다.',
      learned: [
        'React / TypeScript 기반 화면 구성',
        'Python / Flask 기반 API 구조 이해',
        'Unity / C# 기반 게임 프로토타입 구조 이해',
        'CSV 데이터셋과 라벨링 기준 정리',
      ],
    },
  ],
  certificates: [
    {
      title: '수료증 1',
      issuer: '발급 기관명 정리 예정',
      status: 'available',
      fileUrl: '/assets/resume/certificates/certificate-01.pdf',
      note: 'public/assets/resume/certificates/certificate-01.pdf 파일을 연결했습니다.',
    },
    {
      title: '수료증 2',
      issuer: '정리 예정',
      status: 'planned',
      note: 'certificate-02.pdf 파일이 아직 없어 추가 예정으로 표시합니다.',
    },
  ],
  licenses: [
    {
      title: '자격증',
      issuer: '정리 예정',
      status: 'planned',
      note: '확인된 자격증 정보가 준비되면 추가할 예정입니다.',
    },
  ],
  coverLetter: {
    summary:
      '저는 프로젝트를 구현하고 끝내기보다, 구조와 역할, 검증 결과를 함께 남기는 방식으로 개발 경험을 정리하고 있습니다. 웹 UI, 게임 프로토타입, 데이터셋 프로젝트를 각각 다루며 확인된 사실과 향후 확장 예정 내용을 분리해 설명하는 데 집중하고 있습니다.',
    openLabel: '자기소개 자세히 보기',
    closeLabel: '자기소개 접기',
    details: [
      '저는 프로젝트를 단순히 완성 여부로만 설명하기보다, 어떤 문제를 다뤘고 어떤 구조로 풀었으며 무엇을 검증했는지 기록하는 방식에 관심이 있습니다.',
      'STACCATO에서는 AI 탐지 결과가 실제 관제 화면에서 확인 가능한 이벤트, 알림, 스냅샷, 리플레이 흐름으로 이어지는 구조를 이해하고 정리했습니다.',
      'Wizard Defense에서는 Unity와 C#을 사용한 개인 게임 프로토타입을 기획/구현 상태로 나누어 관리하며, 랜덤성과 플레이어 선택성이 함께 작동하는 구조를 정리했습니다.',
      'Inquiry Dataset에서는 한국어 합성 문의 데이터셋을 만들고, 라벨링 기준과 dataset card, rule-based classifier, 실험 기록, 오류 분석을 함께 남기는 방식으로 데이터 프로젝트를 관리했습니다.',
      '아직 모든 경험이 완성된 전문가 수준이라고 말하기보다는, 확인 가능한 프로젝트를 바탕으로 구조화하고 검증하며 꾸준히 개선하는 개발자로 성장하고 있습니다.',
    ],
  },
  portfolioHighlights: [
    'React + TypeScript 기반 개인 포트폴리오를 직접 구성',
    'AI 관제, Unity 게임 프로토타입, 한국어 데이터셋 프로젝트를 취업용 경험으로 정리',
    '프로젝트별 역할, 사용 기술, 문제 해결, 검증 결과, 한계를 구분해 기록',
  ],
  contactLinks: [
    { label: 'Email', value: '추가 예정' },
    { label: 'GitHub', value: 'slowlyP', href: 'https://github.com/slowlyP' },
    { label: '학력 / 자격증 / 상세 연락 정보', value: '정리 예정' },
  ],
}
