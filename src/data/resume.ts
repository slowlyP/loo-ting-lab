export type ResumeInfoItem = {
  label: string
  value: string
  href?: string
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

export type ResumeDocument = {
  title: string
  status: 'available' | 'planned'
  fileUrl: string
  note: string
}

export type ResumeContact = {
  label: string
  value: string
  href?: string
}

export type ResumeExternalLink = {
  label: string
  href: string
  note: string
}

export type ResumeContent = {
  pageTitle: string
  intro: string
  name: string
  headline: string
  basicInfo: ResumeInfoItem[]
  resumeDocument: ResumeDocument
  externalResumeLinks: ResumeExternalLink[]
  desiredRole: string
  profileSummary: string
  coreSkills: ResumeSkillGroup[]
  projectExperience: ResumeProject[]
  educationTraining: ResumeEducation[]
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

const resumeDocumentUrl = `${import.meta.env.BASE_URL}assets/resume/documents/resume.pdf`

export const resumeContent: ResumeContent = {
  pageTitle: '이력서 / 자기소개 요약',
  intro:
    '프로젝트를 구조화하고 구현 내용과 검증 기록을 함께 남기는 방식으로 성장하고 있는 개발자 포트폴리오입니다.',
  name: '송명근',
  headline:
    'AI 모델 개발, AI 기반 서비스 구현, Unity 게임 기획·개발 경험을 포트폴리오로 정리하며, 구현 내용과 검증 기록을 함께 보여주는 개발자를 목표로 하고 있습니다.',
  basicInfo: [
    { label: '이름', value: '송명근' },
    { label: '희망 직무', value: 'AI 모델 개발 / AI 서비스 개발 / 게임 기획·개발' },
    { label: 'Email', value: 'vvckfn@gmail.com', href: 'mailto:vvckfn@gmail.com' },
    { label: 'GitHub', value: 'slowlyP', href: 'https://github.com/slowlyP' },
  ],
  resumeDocument: {
    title: '이력서 PDF',
    status: 'available',
    fileUrl: resumeDocumentUrl,
    note: '새 탭에서 이력서 PDF를 확인할 수 있습니다.',
  },
  externalResumeLinks: [
    {
      label: '인크루트 이력서 확인',
      href: 'https://www.incruit.com/resume/resumelist.asp',
      note: '인크루트 이력서 관리/확인 페이지입니다. 접속 환경에 따라 로그인 페이지가 먼저 표시될 수 있습니다.',
    },
  ],
  desiredRole:
    'AI 모델 개발과 AI 기반 서비스 구현, 그리고 Unity 기반 게임 기획·개발 직무를 희망합니다. AI 프로젝트에서는 데이터 흐름, 모델 추론 결과, 서비스 연동 구조를 이해하고 검증하는 경험을 쌓았고, 게임 프로젝트에서는 전투 시스템, 캐릭터 배치, UI 흐름, 성장 구조를 직접 설계하고 구현하며 게임 개발 역량을 확장하고 있습니다. React와 TypeScript 경험은 주력 직무가 아니라, AI 결과나 게임 프로젝트를 사용자에게 보여주기 위한 서비스 화면 구현 경험으로 정리하고 있습니다.',
  profileSummary:
    'STACCATO와 AI Accident Detection을 통해 AI 기반 분석/탐지 서비스의 데이터 흐름과 서비스 연동 구조를 정리했고, Inquiry Dataset에서는 데이터셋 구성과 분류 실험을 경험했습니다. Wizard Defense에서는 Unity 기반 게임 기획과 전투 시스템, 캐릭터 배치, 성장 구조를 구현하며 게임 개발 역량을 확장하고 있습니다.',
  coreSkills: [
    {
      title: 'Service UI Support',
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
      title: '한국IT전문대학 게임그래픽학과',
      period: '중퇴',
      description: '게임그래픽학과 과정에 재학했으며, 졸업이 아닌 중퇴로 표기합니다.',
      learned: [
        '게임 제작과 그래픽 분야의 기초 흐름을 학습했습니다.',
        '현재 포트폴리오에서는 졸업 이력으로 표시하지 않습니다.',
      ],
    },
    {
      title: '학점은행제 컴퓨터공학학과',
      period: '진행중',
      description: '현재 학점은행제로 컴퓨터공학학과 과정을 진행중입니다.',
      learned: [
        '컴퓨터공학 기반 지식을 보강하는 중입니다.',
        '진행중인 학습 상태로 표기하며 졸업으로 표현하지 않습니다.',
      ],
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
      '저는 프로젝트를 구현하고 끝내기보다, 구조와 역할, 검증 결과를 함께 남기는 방식으로 개발 경험을 정리하고 있습니다. AI 기반 분석/탐지 서비스, Unity 게임 프로토타입, 데이터셋 프로젝트를 각각 다루며 확인된 사실과 향후 확장 예정 내용을 분리해 설명하는 데 집중하고 있습니다.',
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
    'AI 프로젝트와 Unity 게임 프로젝트 경험을 희망 직무 방향에 맞게 정리',
    'AI 관제, Unity 게임 프로토타입, 한국어 데이터셋 프로젝트를 취업용 경험으로 정리',
    '프로젝트별 역할, 사용 기술, 문제 해결, 검증 결과, 한계를 구분해 기록',
  ],
  contactLinks: [
    { label: 'Email', value: 'vvckfn@gmail.com', href: 'mailto:vvckfn@gmail.com' },
    { label: 'GitHub', value: 'slowlyP', href: 'https://github.com/slowlyP' },
    { label: '학력 / 자격증 / 상세 연락 정보', value: '정리 예정' },
  ],
}
