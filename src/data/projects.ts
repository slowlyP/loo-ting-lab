export type ProjectStatusGroup = {
  completed: string[]
  inProgress: string[]
  planned: string[]
}

export type ProjectMedia = {
  screenshots?: {
    src: string
    alt: string
    caption: string
  }[]
  videos?: {
    title: string
    url: string
    type: 'youtube' | 'demo' | 'prototype'
  }[]
  note?: string
}

export type ProjectDetailContent = {
  overview: string[]
  coreStructure: string[]
  responsibilities: string[]
  implementationStatus: ProjectStatusGroup
  techStack: string[]
  problemSolving: string[]
  outcomes: string[]
  media?: ProjectMedia
}

export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  stage: string
  statusCode: string
  status: string
  summary: string
  role: string
  highlights: string[]
  problemSolving: string[]
  tech: string[]
  detail?: ProjectDetailContent
  links?: {
    github?: string
    youtube?: string
    service?: string
  }
}

export const projects: Project[] = [
  {
    id: 'staccato',
    title: 'STACCATO',
    subtitle: 'AI 기반 고속도로 돌발 상황 감지 및 관제 프로젝트',
    category: 'AI PROJECT',
    stage: 'STAGE 01',
    statusCode: 'COMPLETED',
    status: '기본 프로토타입 완료',
    summary:
      '고속도로 CCTV와 신고 영상을 분석해 정차 차량, 갓길 정차 같은 위험 상황을 이벤트로 만들고 관제 화면에서 알림과 리플레이로 확인할 수 있게 연결한 AI 기반 관제 MVP입니다.',
    role: 'AI 분석 결과가 Flask API, MySQL 메타데이터, Next.js 관제 화면까지 이어지는 흐름을 이해하고 영상 분석 결과 표시와 운영 기록 정리에 참여했습니다.',
    highlights: [
      'CCTV와 신고 영상 분석 결과를 인시던트, 알림, 리플레이로 확인하는 흐름 정리',
      'Flask API Gateway, AI VM, Frontend VM, DB VM으로 나뉜 서비스 구조 이해',
      'Linux VM, systemd, 배포/운영 문서를 참고한 실행 상태 점검',
    ],
    problemSolving: [
      'AI 감지 결과가 화면에 보이지 않을 때 API 응답, 미디어 URL, 권한, 서버 상태를 함께 확인하는 방식으로 원인을 좁혔습니다.',
      '대용량 영상 파일은 DB에 직접 저장하지 않고 파일 경로와 메타데이터를 나누어 관리하는 구조를 이해했습니다.',
      '실시간 알림, 이벤트 상세, 신고 영상 분석 결과가 서로 다른 서버를 거쳐 연결되는 지점을 추적했습니다.',
    ],
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Flask',
      'FastAPI',
      'YOLOv11',
      'OpenCV',
      'MySQL',
      'Socket.IO',
      'Linux VM',
      'systemd',
    ],
    links: {
      github:
        'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control',
      youtube: '',
      service: '',
    },
  },
  {
    id: 'wizard-defense',
    title: 'Wizard Defense',
    subtitle: 'Unity 기반 2D 모바일 가로형 캐주얼 판타지 타워디펜스 프로토타입',
    category: 'GAME PROJECT',
    stage: 'STAGE 02',
    statusCode: 'PROTOTYPE',
    status: '플레이 가능 프로토타입 단계',
    summary:
      '랜덤 마법사 소환, 일반 마법사 융합, 전설 마법사 등장, 층 진행을 중심으로 만든 개인 포트폴리오용 캐주얼 판타지 타워디펜스 프로토타입입니다.',
    role: 'Unity와 C#을 사용해 전투 루프, 층 선택, 라운드 진행, 랜덤 마법사 소환, 일반 마법사 융합, 전설 마법사 구조를 기획과 구현 상태로 나누어 정리했습니다.',
    highlights: [
      '마을에서 층을 선택하고 전투 씬에 진입한 뒤 라운드를 클리어하면 다음 층으로 이어지는 흐름 구성',
      '전설 뽑기만이 아니라 일반 마법사 융합을 핵심 성장 재미로 두는 구조 설계',
      '일반 마법사와 전설 마법사의 역할을 분리해 랜덤성과 선택성이 함께 작동하도록 기획',
    ],
    problemSolving: [
      '랜덤 소환의 우연성과 융합 시스템의 선택성을 함께 살리기 위해 일반 마법사와 전설 마법사의 역할을 분리했습니다.',
      '구현된 내용과 기획 중인 내용을 문서에서 나누어 관리해 포트폴리오에서 과장 없이 설명할 수 있도록 정리했습니다.',
      'Git 기반 버전 관리를 사용해 개인 프로젝트의 변경 흐름을 추적할 수 있게 했습니다.',
    ],
    tech: [
      'Unity',
      'C#',
      '2D Sprite',
      'Mobile Landscape',
      'Tower Defense',
      'Battle Loop',
      'Random Summon',
      'Fusion System',
      'Stage Progression',
      'Git',
    ],
    detail: {
      overview: [
        'Wizard Defense는 Notion 기획서에서 랜덤 마법사 디펜스 또는 Random Wizard Defense로 정리된 개인 포트폴리오 프로젝트입니다.',
        'Unity 기반 2D 모바일 가로형 캐주얼 판타지 타워디펜스 게임이며, 현재는 출시 완료 게임이 아니라 플레이 가능 프로토타입 단계입니다.',
        '랜덤 마법사 소환, 전설 마법사, 층 진행, 자동 전투, 전설 공명 시스템을 중심으로 개발 중인 프로젝트로 정리되어 있습니다.',
      ],
      coreStructure: [
        '마을에서 층 선택 -> 전투 씬 진입 -> 마법사 랜덤 소환 -> 일반 마법사 융합 -> 새로운 마법사 발견 -> 전설 마법사 등장 -> 전설 스킬과 융합 마법사 시너지 -> 라운드 클리어 -> 다음 층 해금 흐름을 기준으로 구성했습니다.',
        '일반 마법사는 융합을 통해 새로운 마법사로 발전하고, 전설 마법사는 융합 대상이 아니라 별도의 희귀 유닛으로 분리됩니다.',
        '전설 마법사는 판을 뒤집는 특별 변수로 두고, 일반 마법사 융합은 매 판 다른 조합을 만들어 내는 핵심 성장 구조로 설계했습니다.',
        'Notion에서 확인된 융합 예시는 불 + 물 -> 안개, 안개 + 나무 -> 독, 번개 + 바람 -> 폭풍, 돌 + 불 -> 용암입니다.',
      ],
      responsibilities: [
        'Unity와 C#을 사용해 모바일 가로 화면 기준의 2D 디펜스 프로토타입 구조를 정리했습니다.',
        '층 선택, 전투 씬 진입, 라운드 진행, 다음 층 해금으로 이어지는 플레이 흐름을 포트폴리오에서 설명 가능한 단위로 나누었습니다.',
        '랜덤 마법사 소환과 일반 마법사 융합을 핵심 재미 요소로 두고, 전설 마법사와의 역할 차이를 문서화했습니다.',
        '기획 문서와 구현 상태를 구분해 확인된 기능과 확장 예정 기능이 섞이지 않도록 관리했습니다.',
      ],
      implementationStatus: {
        completed: [
          '모바일 가로 화면을 기준으로 한 플레이 가능 프로토타입 단계 구성',
          '전투 루프 구성',
          '마법사 소환 흐름 구성',
          '전설 마법사 스킬 구성',
          '층 선택 흐름 구성',
          '라운드 진행 흐름 구성',
          'Git 기반 버전 관리',
        ],
        inProgress: [
          '랜덤 마법사 소환, 전설 마법사, 층 진행, 자동 전투, 전설 공명 시스템을 중심으로 개인 포트폴리오 프로젝트를 개발 중입니다.',
          '일반 마법사 융합과 전설 마법사의 시너지가 게임의 중심 재미로 작동하도록 기획과 구현 내용을 정리하고 있습니다.',
        ],
        planned: [
          'Notion에서 확인된 전설 마법사 아르덴은 광역 폭발형 전설 마법사 예시로만 표시하고, 상세 구현 범위는 추가 확인 후 보강합니다.',
          '스크린샷, 시연 영상, GitHub 저장소 링크는 실제 URL이 준비되면 추가합니다.',
          '마법사별 상세 능력치, 전설 공명 규칙, 밸런스 수치는 확인 가능한 자료가 정리되면 별도 섹션으로 확장합니다.',
        ],
      },
      techStack: [
        'Unity',
        'C#',
        '2D Sprite',
        'Mobile Landscape',
        'Tower Defense',
        'Battle Loop',
        'Random Summon',
        'Fusion System',
        'Stage Progression',
        'Git',
      ],
      problemSolving: [
        '랜덤 소환만 강조하면 운에만 의존하는 구조가 되기 쉬워, 일반 마법사 융합을 핵심 성장 시스템으로 두어 플레이어가 조합을 만들어 갈 수 있게 설계했습니다.',
        '전설 마법사를 융합 대상에서 분리해 희귀 유닛으로 두면서, 일반 마법사 융합과 전설 스킬 시너지가 서로 다른 역할을 갖도록 정리했습니다.',
        '구현 완료, 진행 중, 기획 예정 내용을 분리해 포트폴리오 문구가 실제 확인된 범위를 넘지 않도록 관리했습니다.',
        'Git 기반 버전 관리를 통해 개인 프로젝트의 변경 이력을 추적하며 작업 흐름을 관리했습니다.',
      ],
      outcomes: [
        '게임 시스템을 기능 목록이 아니라 층 선택, 전투 진입, 소환, 융합, 전설 등장, 라운드 클리어로 이어지는 플레이 흐름 중심으로 설명할 수 있게 정리했습니다.',
        'Unity와 C#으로 만든 2D 디펜스 프로토타입에서 기획 요소와 구현 상태를 나누어 보여 주는 포트폴리오 구조를 마련했습니다.',
        '전설 뽑기 중심이 아니라 일반 마법사 융합이 핵심 재미라는 점을 명확히 드러내어 프로젝트의 설계 의도를 설명하기 쉬워졌습니다.',
      ],
      media: {
        screenshots: [],
        videos: [],
        note: 'Notion에서 이미지 항목은 확인했지만 포트폴리오에 사용할 실제 이미지/영상 URL은 아직 확인되지 않아 추가 예정으로 표시합니다.',
      },
    },
    links: {
      github: '',
      youtube: '',
      service: '',
    },
  },
  {
    id: 'inquiry-dataset',
    title: 'Inquiry Dataset',
    subtitle: '한국어 게임 고객 문의 분류 데이터셋',
    category: 'DATA PROJECT',
    stage: 'STAGE 03',
    statusCode: 'DATASET',
    status: '라벨링 기준 정리',
    summary:
      '한국어 게임 고객 문의를 카테고리별로 분류하기 위한 데이터셋 프로젝트입니다. 라벨링 기준, 데이터셋 카드, 규칙 기반 분류 기준을 함께 정리했습니다.',
    role: '문의 유형 정의, 라벨링 가이드 작성, CSV 구조 정리, 기본 분류 규칙 설계를 맡았습니다.',
    highlights: [
      'CSV 데이터 구조와 라벨링 가이드 작성',
      '문의 카테고리 분류 기준 정리',
      '데이터셋 카드와 규칙 기반 분류기 계획 수립',
    ],
    problemSolving: [
      '비슷해 보이는 문의를 일관되게 분류할 수 있도록 라벨 기준을 구체화했습니다.',
      '데이터셋을 처음 보는 사람이 목적과 한계를 이해할 수 있도록 문서화했습니다.',
    ],
    tech: ['CSV', 'Data Labeling', 'Dataset Card', 'Classification', 'Rules'],
  },
]

export const findProject = (projectId: string | undefined) =>
  projects.find((project) => project.id === projectId)
