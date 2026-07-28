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

export type ProjectArtifact = {
  label: string
  pathOrUrl: string
  kind: 'csv' | 'docs' | 'code' | 'experiment' | 'repository'
  note: string
}

export type ProjectMetric = {
  label: string
  value: string
  note: string
}

export type ProjectDetailContent = {
  overview: string[]
  problem?: string[]
  designDirection?: string[]
  labelStructure?: string[]
  coreStructure: string[]
  responsibilities: string[]
  implementationStatus: ProjectStatusGroup
  classifierStructure?: string[]
  techStack: string[]
  experimentLog?: string[]
  problemSolving: string[]
  outcomes: string[]
  evidence?: string[]
  scopeLimitations?: string[]
  systemFlow?: string[]
  teamContribution?: string[]
  verification?: string[]
  deployment?: string[]
  milestones?: string[]
  liveDemoNotice?: string[]
  artifacts?: ProjectArtifact[]
  metrics?: ProjectMetric[]
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
    subtitle: 'AI 기반 고속도로 돌발 상황 감지 및 관리 프로젝트',
    category: 'AI PROJECT',
    stage: 'STAGE 01',
    statusCode: 'COMPLETED',
    status: '기본 프로토타입 완료',
    summary:
      '고속도로 CCTV와 신고 영상을 분석해 정차 차량, 갓길 정차 같은 위험 상황을 이벤트로 만들고 관리 화면에서 알림과 리플레이로 확인할 수 있게 연결한 AI 기반 관제 MVP입니다.',
    role: 'AI 분석 결과가 Flask API, MySQL 메타데이터, Next.js 관리 화면까지 이어지는 흐름을 이해하고 영상 분석 결과 표시와 운영 기록 정리에 참여했습니다.',
    highlights: [
      'CCTV와 신고 영상 분석 결과를 인시던트, 알림, 리플레이로 확인하는 흐름 정리',
      'Flask API Gateway를 중심으로 Frontend, AI, ITS, DB VM 역할을 분리한 서버 중계 구조 이해',
      'Linux VM, systemd, 배포/운영 문서를 참고해 실행 상태 점검',
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
      'Python',
      'Flask',
      'FastAPI',
      'YOLOv11',
      'OpenCV',
      'MySQL',
      'Socket.IO',
      'REST API',
      'Linux VM',
    ],
    detail: {
      overview: [
        'STACCATO는 고속도로 CCTV 영상에서 정차 차량, 갓길 정차 등 위험 상황을 탐지하고 관제 화면에서 이벤트로 확인할 수 있게 만든 AI 기반 관제 MVP입니다.',
        'README와 문서 기준으로 YOLOv11 객체 탐지, bbox 중심점 이동량 기반 정차 추정, ROI / Rule Engine, Flask API Gateway, MySQL 메타데이터 저장, Socket.IO 실시간 알림, Next.js 관제 화면을 포함합니다.',
        '상용 운영 완료 서비스가 아니라 팀 프로젝트에서 구현한 MVP와 운영 문서를 바탕으로, AI 분석 결과가 서비스 화면까지 이어지는 구조를 설명하는 포트폴리오 프로젝트입니다.',
      ],
      systemFlow: [
        '서비스 접속과 로그인 후 대시보드 또는 관제 화면에서 이벤트 목록을 확인합니다.',
        '이벤트 상세 화면에서 탐지 정보, Snapshot, MP4 Replay를 확인하고 필요한 경우 이벤트 영상을 다운로드합니다.',
        '신규 이벤트는 Socket.IO 실시간 알림 영역에서 확인하며, 신고 영상은 등록 후 별도의 AI 분석 진입점을 거쳐 같은 관제 흐름으로 연결됩니다.',
        '사용자 신고 등록 → AI 분석 요청 → detection_logs 탐지 근거 저장 → incidents 공식 사고 이벤트 전환 → notifications 실시간 알림 순서로 사고 이벤트 중심의 DB/API 흐름이 이어집니다.',
        '핵심 API는 POST /reports, POST /reports/{id}/analyze, GET /incidents, PATCH /incidents/{id}/status 흐름으로 신고 등록, 분석, 사고 조회, 처리 상태 변경을 연결합니다.',
      ],
      evidence: [
        'GitHub README의 Final MVP Summary와 final MVP scope 문서',
        '사용자·관리자 매뉴얼, 최종 릴리즈 체크리스트, AI VM 운영 문서, VM 인프라 문서',
        'README에 공개된 개발·시연 서비스와 확인된 시연 영상',
      ],
      scopeLimitations: [
        'Final MVP에서 Map API와 GPS 기반 위치 표시는 제외되었습니다.',
        'LLM/chatbot, Docker Compose 통합 실행, 강화학습과 자동 재학습은 Final MVP 범위가 아닙니다.',
        '상용 운영 완료 서비스가 아니라 팀이 구현하고 검증한 관제 MVP입니다.',
      ],
      deployment: [
        'DB VM은 MySQL, Flask VM은 API Gateway, Frontend VM은 Next.js, AI VM은 FastAPI 추론, ITS VM은 교통·CCTV 연계 역할을 나누는 분리 구조입니다.',
        'Frontend는 Flask API Gateway만 호출하고 AI·ITS·DB VM에는 직접 접근하지 않으며, 서버 간 요청과 데이터 흐름은 Gateway를 통해 중계됩니다.',
        '각 VM의 설정과 실행 상태는 docs/infra와 운영 문서를 기준으로 관리합니다.',
      ],
      liveDemoNotice: [
        '공개 링크는 자체서명 인증서를 사용하는 개발·시연 환경이므로 브라우저 보안 경고가 표시될 수 있습니다.',
      ],
      problem: [
        '고속도로 CCTV를 사람이 계속 확인하는 방식은 정차 차량이나 갓길 정차 같은 위험 상황을 놓치기 쉽습니다.',
        'AI 모델 출력이 단순 탐지 결과로만 남으면 관제자가 이벤트 목록, 상세 화면, 스냅샷, 리플레이로 확인하기 어렵습니다.',
        'CCTV 이벤트, 신고 업로드, 분석 결과, 미디어 파일, 권한 관리가 분리되어 있으면 사고 흐름을 추적하기 어렵기 때문에 API, DB, 프론트 화면, 미디어 프록시가 함께 맞물려야 합니다.',
      ],
      coreStructure: [
        'CCTV 또는 신고 영상이 AI VM으로 들어오면 FastAPI 기반 AI 서비스가 YOLOv11로 차량을 탐지합니다.',
        '탐지된 bbox의 중심점 이동량을 바탕으로 정차 상태를 추정하고, ROI / Rule Engine을 통해 LANE_STOP 또는 SHOULDER_STOP 이벤트로 분류합니다.',
        'AI VM은 이벤트 JSON과 스냅샷, MP4 Replay 메타데이터를 Flask API Gateway로 전달하고, Flask VM은 MySQL에 이벤트와 파일 경로 중심의 메타데이터를 저장합니다.',
        'Flask Socket.IO는 신규 인시던트 알림을 Next.js 관제 화면으로 전달하고, 사용자는 이벤트 목록, 상세 정보, 스냅샷, replay 영상을 확인합니다.',
        'Frontend VM, Flask VM, AI VM, ITS VM, DB VM을 분리해 화면, API 중계, AI 추론, 교통·CCTV 연계, 데이터 저장 책임을 나눕니다.',
        'Frontend는 Flask API Gateway만 호출하며 AI·ITS·DB 서버에 직접 접근하지 않습니다. Gateway가 인증과 API 요청을 받아 각 서버로 중계합니다.',
        'incident_reports는 영상과 신고 정보, detection_logs는 AI 탐지 결과와 판단 근거, incidents는 공식 사고 이벤트, notifications는 실시간 알림과 이벤트 처리 상태를 관리합니다.',
      ],
      responsibilities: [
        'AI 분석 결과가 Flask API, MySQL 메타데이터, Next.js 관제 화면으로 이어지는 전체 흐름을 이해하고 포트폴리오에서 설명 가능한 형태로 정리했습니다.',
        'CCTV와 신고 영상 분석 결과, 스냅샷, MP4 Replay 메타데이터가 화면에서 어떻게 확인되는지 검증하고 누락된 설명을 보강했습니다.',
        'Flask API 응답, 프론트 표시 상태, AI media proxy, 서버 실행 상태를 함께 확인하며 문제 원인을 추적하는 방식으로 참여했습니다.',
        'Linux VM 분리 구조, systemd 기반 실행 상태, 배포/운영 문서를 참고해 프로젝트의 기술 구조를 과장 없이 정리했습니다.',
        '직접 구현이 확실하지 않은 항목은 단독 구현으로 쓰지 않고 참여, 검증, 구조 정리, 연동 흐름 확인으로 표현했습니다.',
      ],
      implementationStatus: {
        completed: [
          '프로젝트에서 확인된 고속도로 CCTV 기반 차량 탐지 흐름',
          'YOLOv11 기반 객체 탐지와 bbox 중심점 이동량 기반 정차 추정 흐름',
          'ROI / Rule Engine 기반 LANE_STOP, SHOULDER_STOP 분류 흐름',
          'Flask API Gateway와 MySQL 메타데이터 저장 구조',
          'Frontend, Flask, AI, ITS, DB VM 역할 분리와 Gateway 중심 서버 중계 구조',
          'Frontend가 AI·ITS·DB에 직접 접근하지 않고 Flask API Gateway만 호출하는 구조',
          'incident_reports, detection_logs, incidents, notifications 중심의 사고 이벤트 DB 흐름',
          'POST /reports → POST /reports/{id}/analyze → GET /incidents → PATCH /incidents/{id}/status API 흐름',
          'Socket.IO 기반 신규 인시던트 실시간 알림',
          'Next.js 관제 화면의 이벤트 목록, 상세, Snapshot, MP4 Replay 확인 흐름',
          '신고 업로드와 신고 분석 결과 확인 흐름',
          '인증 기반 AI media proxy와 관리자 회원 승인, 권한 기반 접근 정책 문서 확인',
          '회원가입, 로그인, 관리자 승인, 마이페이지와 이벤트 영상 다운로드 사용자 흐름',
        ],
        inProgress: [
          '신고 영상과 CCTV 분석 결과가 사고 이벤트, 알림, 스냅샷, MP4 Replay로 이어지는 흐름을 중심으로 관제 시스템 구조를 정리했습니다.',
          '분리된 VM 환경에서 Frontend는 Flask API Gateway만 호출하고, AI·ITS·DB 서버는 Gateway를 통해 연결되도록 구성해 역할을 나누었습니다.',
        ],
        planned: [
          '이벤트 목록, 사고 상세, 스냅샷, MP4 Replay 확인 흐름을 더 직관적으로 보여줄 수 있는 화면 자료를 보강할 예정입니다.',
          '개발·시연 환경 특성상 접속 환경에 따라 보안 경고가 표시될 수 있으므로, GitHub 문서와 시연 영상을 함께 제공해 프로젝트 흐름을 확인할 수 있게 유지합니다.',
        ],
      },
      techStack: [
        'Next.js',
        'React',
        'TypeScript',
        'Python',
        'Flask',
        'FastAPI',
        'REST API',
        'YOLOv11',
        'OpenCV',
        'CCTV / Video Processing',
        'MySQL',
        'Socket.IO',
        'ROI / Rule Engine',
        'AI Media Proxy',
        'Linux VM',
        'ITS VM',
        'systemd',
        'Nginx',
      ],
      problemSolving: [
        'AI 감지 결과가 화면에 보이지 않을 때 API 응답, 미디어 URL, 사용자 권한, AI VM 실행 상태, Socket.IO 연결 상태를 함께 확인하며 원인을 좁혔습니다.',
        '대용량 영상 파일은 DB에 직접 저장하지 않고 파일 경로와 메타데이터를 저장하는 구조를 확인해, 데이터 저장 책임과 파일 전달 책임을 나누어 이해했습니다.',
        '스냅샷과 replay 영상은 AI VM에 직접 접근하지 않고 인증된 사용자가 AI media proxy를 통해 확인하는 방식으로 정리했습니다.',
        'AI VM, Flask VM, Frontend VM, DB VM이 분리되어 있어 장애가 발생했을 때 어느 계층의 문제인지 나누어 보는 관점을 익혔습니다.',
        'Frontend의 직접 서버 접근을 막고 Flask API Gateway를 단일 진입점으로 두어 인증, 중계, 장애 지점을 분리해 확인했습니다.',
        '신고 영상 분석과 CCTV 이벤트 분석이 서로 다른 진입점에서 시작되지만 최종적으로 관제 화면의 이벤트 확인 흐름으로 이어지는 지점을 추적했습니다.',
      ],
      outcomes: [
        'AI 모델의 탐지 결과를 관제자가 확인 가능한 인시던트, 알림, 스냅샷, MP4 Replay 흐름으로 설명할 수 있게 정리했습니다.',
        '모델 정확도뿐 아니라 API 계약, 메타데이터 저장, 인증 기반 미디어 제공, 실시간 알림, 운영 문서가 서비스 완성도에 중요하다는 점을 배웠습니다.',
        '직접 구현 범위를 과장하지 않고 팀 프로젝트의 구조 이해, 연동 흐름 검증, 문제 해결 참여 경험을 채용 담당자가 읽기 쉬운 상세 페이지 형태로 복구했습니다.',
      ],
      artifacts: [
        {
          label: 'GitHub 저장소',
          pathOrUrl:
            'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control',
          kind: 'repository',
          note: 'STACCATO 프로젝트 코드와 README, architecture, API, 운영 문서를 확인할 수 있습니다.',
        },
      ],
      media: {
        screenshots: [],
        videos: [
          {
            title: 'STACCATO 시연 영상',
            url: 'https://youtu.be/l2xOOqAfufo',
            type: 'demo',
          },
        ],
        note: 'GitHub 문서와 시연 영상을 통해 관제 흐름을 확인할 수 있으며, 이벤트 목록·사고 상세·Snapshot·MP4 Replay를 더 직관적으로 보여주는 화면 자료는 추후 보강할 예정입니다.',
      },
    },
    links: {
      github:
        'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control',
      youtube: 'https://youtu.be/l2xOOqAfufo',
      service: 'https://mbc-sw.iptime.org:3221/',
    },
  },
  {
    id: 'wizard-defense',
    title: 'Random Wizard Defense',
    subtitle: 'Unity 기반 2D PC / Steam 지향 캐주얼 판타지 타워디펜스 프로토타입',
    category: 'GAME PROJECT',
    stage: 'STAGE 02',
    statusCode: 'PROTOTYPE',
    status: '플레이 가능 프로토타입 단계',
    summary:
      '랜덤 마법사 소환, 원소 조합과 융합 마법사, 전설 마법사 공명, 자동 전투를 중심으로 만든 개인 포트폴리오용 캐주얼 판타지 타워디펜스입니다. PC / Steam 지향 플레이 가능 프로토타입으로 기능을 확장하고 있습니다.',
    role: 'Unity와 C#을 사용해 전투 루프, 층 진행, 랜덤 소환, 원소 융합, Tier 2 자동 스킬, 전설 공명, 공용 설정 UI와 게임 속도 기능을 구현 상태별로 정리했습니다.',
    highlights: [
      '마을에서 층 선택 -> 전투 진입 -> 랜덤 마법사 소환 -> 일반 마법사 융합 -> 전설 마법사 등장 -> 라운드 클리어 -> 다음 층 해금으로 이어지는 흐름 구성',
      '전설 뽑기만 기다리는 구조가 아니라 일반 마법사 융합과 속성 조합을 핵심 재미로 두는 방향성 정리',
      '일반 마법사, 융합 마법사, 전설 마법사의 역할을 분리해 랜덤성과 선택성이 함께 작동하도록 설계',
    ],
    problemSolving: [
      '랜덤 소환의 우연성만 강조하면 플레이어 선택이 약해질 수 있어 일반 마법사 융합과 속성 융합을 성장 선택지로 분리했습니다.',
      '전설 마법사는 융합 대상과 분리하고 동일 전설 배치 수에 따라 공명이 자동 활성화·해제되도록 구성했습니다.',
      '기획 문서와 구현 상태를 분리해 포트폴리오에서 확인된 내용과 확장 예정 내용을 과장 없이 설명할 수 있게 정리했습니다.',
      'Git 기반 버전 관리를 사용해 개인 프로젝트의 변경 흐름을 추적했습니다.',
    ],
    tech: [
      'Unity',
      'C#',
      'Unity 2D',
      '2D Sprite',
      'Tower Defense',
      'Battle Loop',
      'Random Summon',
      'Fusion System',
      'Stage Progression',
      'Git',
    ],
    detail: {
      overview: [
        'Random Wizard Defense는 개인 포트폴리오로 개발 중인 Unity 2D 게임 프로젝트입니다.',
        'Unity 기반 2D PC / Steam 지향 캐주얼 판타지 타워디펜스 게임이며, 현재는 플레이 가능 프로토타입 단계입니다.',
        'PC 플레이 환경과 마우스 조작을 고려하며, Steam 데모와 향후 공개 가능성을 열어 둔 방향으로 개발 중입니다.',
      ],
      coreStructure: [
        '마을에서 층 선택 -> 전투 씬 진입 -> 랜덤 마법사 소환 -> 일반 마법사 융합 -> 새로운 마법사 발견 -> 전설 마법사 등장 -> 전설 스킬과 융합 마법사 시너지 -> 라운드 클리어 -> 다음 층 해금 흐름을 기준으로 구성했습니다.',
        '일반 마법사는 융합을 통해 새로운 마법사로 발전하고, 전설 마법사는 융합 대상이 아니라 별도의 희귀 유닛으로 분리합니다.',
        '불, 물, 바람, 돌, 번개 원소 조합으로 융합 마법사를 생성하고 Tier 2 융합 마법사가 고유 자동 스킬을 사용하는 흐름을 구현했습니다.',
        '동일한 전설 마법사가 2명 이상 배치되면 공명이 자동 활성화되고 1명 이하로 줄면 해제되며, 공명 상태와 보유 수를 전투 UI에 표시합니다.',
        '전설별 고유 스킬은 쿨타임, 피해, 범위, 대상 수, 지속 시간과 버프 강화 값을 각 역할에 맞게 구성했습니다.',
        'ESC 입력은 공용 SettingsPanel을 표시하면서 게임을 일시정지하고, BGM·효과음·전체 화면 설정과 표시 순서·입력 처리를 한 화면에서 관리합니다.',
        '전투 중 게임 속도를 1배와 2배로 전환하고 현재 속도 상태를 UI에 표시합니다.',
      ],
      responsibilities: [
        'Unity와 C#을 사용해 2D 타워디펜스 프로토타입의 주요 흐름을 정리했습니다.',
        '층 선택, 전투 씬 진입, 라운드 진행, 다음 층 해금으로 이어지는 플레이 흐름을 포트폴리오에서 설명 가능한 단위로 나누었습니다.',
        '랜덤 마법사 소환, 일반 마법사 융합, 속성 융합, 전설 마법사의 역할 차이를 문서화했습니다.',
        '기획 문서와 구현 상태를 구분해 확인된 기능과 확장 예정 기능이 섞이지 않도록 관리했습니다.',
      ],
      implementationStatus: {
        completed: [
          '플레이 가능 프로토타입 단계 구성',
          '전투 루프 구성',
          '마법사 랜덤 소환 흐름 구성',
          '전설 마법사별 고유 스킬과 쿨타임·피해·범위·대상 수·지속 시간·버프 강화',
          '층 선택 흐름 구성',
          '라운드 진행 흐름 구성',
          'Git 기반 버전 관리',
          '사거리 내 적을 공격하는 자동 전투',
          'Arden, Orphel, Lumiel, Novarin 전설 마법사 4종',
          '전체 마법사 공격력을 강화하는 Arcane Research',
          '1~50층 선택 UI',
          '원소 조합을 통한 융합 마법사 생성 흐름',
          'Tier 2 융합 마법사의 고유 자동 스킬 구조',
          '동일 전설 2명 이상 배치 시 공명 자동 활성화와 1명 이하일 때 자동 해제',
          '공명 상태와 동일 전설 보유 수 전투 UI 표시',
          'ESC 설정창 표시와 Time.timeScale 기반 게임 일시정지·재개',
          '공용 SettingsPanel의 표시 순서와 입력 처리',
          'BGM 볼륨 실시간 반영·저장과 효과음 설정값 저장',
          '전체 화면 Toggle',
          '전투 중 게임 속도 1배·2배 전환과 현재 속도 UI 표시',
        ],
        inProgress: [
          'PC 플레이 환경과 Steam 데모 공개 가능성을 고려한 방향성 정리',
          '추가 원소 조합과 Tier 2 자동 스킬 밸런스 조정',
          '전설 공명과 융합 마법사 조합의 플레이 시너지 점검',
        ],
        planned: [
          '마우스 조작, PC 해상도, Steam 데모 공개 가능성을 기준으로 UI와 플레이 경험을 추가 점검할 예정입니다.',
          'Steam 페이지나 데모 링크는 아직 확인되지 않았으므로 추가 예정으로 표시합니다.',
          'Steam 페이지나 외부 데모, GitHub 저장소 링크는 실제 URL이 준비되면 추가할 예정입니다.',
          '전설 마법사별 공명 전용 신규 스킬을 추가할 예정입니다.',
        ],
      },
      techStack: [
        'Unity',
        'C#',
        'Unity 2D',
        '2D Sprite',
        'Tower Defense',
        'Battle Loop',
        'Random Summon',
        'Fusion System',
        'Stage Progression',
        'Git',
        'URP 2D',
        'Git LFS',
      ],
      evidence: [
        'v1.2.3에서 확인한 현재 기획 방향과 플레이 영상',
        'Random Wizard Defense README의 구현 상태 표와 Steam Foundation 기록',
        'README, ROADMAP, CHANGELOG, DEVLOG 기반 개발 기록',
      ],
      scopeLimitations: [
        '원소 융합, Tier 2 자동 스킬, 전설 공명 기본 동작은 구현했으며 추가 조합과 밸런스는 계속 점검합니다.',
        'Steam 출시나 공개 데모 완료 상태가 아니며, 현재는 PC / Steam 지향 플레이 가능 프로토타입입니다.',
        '현재 포트폴리오의 속성은 불, 물, 바람, 돌, 번개 기준이며 저장소의 과거 융합 예시는 반영하지 않습니다.',
      ],
      verification: [
        '기능별 브랜치 작업 후 Unity Play Mode 테스트를 수행하고 관련 문서를 함께 갱신하는 흐름으로 관리합니다.',
        'v1.2.2 Hero gameplay video와 이미지 오류 시 preview fallback을 포트폴리오에서 유지합니다.',
      ],
      milestones: [
        'v0.1.0-prototype: 첫 플레이 가능 프로토타입',
        'v0.1.1-steam-pivot: 모바일 중심에서 PC / Steam 방향으로 전환',
        'v0.1.2-steam-foundation: PC / Steam 기본 조작 구조 추가',
        'v0.4.0-tier2-auto-skills: Tier 2 융합 마법사의 자동 스킬 구조 구현',
        'feature/shared-settings-ui: 공용 SettingsPanel과 설정 저장·입력 처리 작업',
        'PR 29: 공용 설정 UI 작업을 main에 병합',
      ],
      problemSolving: [
        '전설 뽑기만 강조하면 플레이가 뽑기 결과에만 의존할 수 있어, 일반 마법사 융합과 속성 융합을 플레이어가 개입할 수 있는 성장 구조로 분리했습니다.',
        '동일 전설 수를 지속적으로 확인해 2명 이상일 때 공명을 활성화하고 1명 이하일 때 해제하여 전투 상태와 UI가 어긋나지 않도록 구성했습니다.',
        'BGM은 변경 즉시 반영·저장하고 효과음과 전체 화면 설정도 공용 SettingsPanel에서 관리하도록 입력 흐름을 통합했습니다.',
        '전투 진행 속도를 1배와 2배로 전환해 반복 플레이의 답답함을 줄이고 현재 속도를 UI에서 확인할 수 있게 했습니다.',
        '이전 방향성 표현을 정리하고 PC / Steam 지향 기획으로 바뀐 내용을 현재 포트폴리오 문구에 반영했습니다.',
        '구현 완료, 진행 중, 향후 확장 예정 내용을 분리해 실제 확인 범위를 넘지 않도록 관리했습니다.',
      ],
      outcomes: [
        '게임 시스템을 기능 목록이 아니라 층 선택, 전투 진입, 소환, 융합, 전설 등장, 라운드 클리어로 이어지는 플레이 흐름 중심으로 설명할 수 있게 정리했습니다.',
        'Unity와 C#으로 만든 2D 게임 프로토타입에서 기획 요소와 구현 상태를 나누어 보여주는 포트폴리오 구조를 마련했습니다.',
        '원소 융합과 Tier 2 자동 스킬, 전설 공명의 구현 상태를 명확히 하고 추가 조합과 밸런스 범위를 분리했습니다.',
      ],
      media: {
        screenshots: [],
        videos: [],
        note: '대표 preview 이미지와 게임플레이 영상을 상세 페이지 상단에 연결해 실제 플레이 흐름을 확인할 수 있게 구성했습니다. 외부 데모 링크나 Steam 페이지는 준비되면 별도로 추가할 예정입니다.',
      },
    },
    links: {
      github: '',
      youtube: '',
      service: '',
    },
  },
  {
    id: 'animal-pang',
    title: '차곡차곡 동물팡',
    subtitle: 'AppInToss 출시를 준비하는 모바일 캐주얼 동물 블록 물리 퍼즐',
    category: 'MOBILE GAME PROJECT',
    stage: 'STAGE 02-A',
    statusCode: 'UPCOMING',
    status: 'AppInToss 출시 준비 중',
    summary:
      '동물 블록을 떨어뜨리고 쌓아 같은 동물을 합치며 점수를 높이는 모바일 캐주얼 퍼즐 게임입니다. 세로 화면에서 짧게 반복 플레이하는 흐름을 중심으로 AppInToss 출시를 준비하고 있습니다.',
    role: 'Unity와 C#으로 낙하·회전 조작, 동물 블록 병합, 점수와 게임오버·재도전 흐름, 세로형 모바일 UI와 캐주얼 에셋 방향을 구성하는 개인 프로젝트입니다.',
    highlights: [
      '동물 블록을 떨어뜨리고 쌓는 물리 퍼즐 중심의 기본 플레이',
      '같은 동물 블록을 합쳐 점수를 높이는 짧고 반복 가능한 게임 흐름',
      '드롭·회전 버튼, 점수 HUD와 랭킹 화면 흐름을 고려한 세로형 모바일 UI',
      'AppInToss 출시 예정에 맞춘 짧은 플레이 세션과 빠른 재도전 구조',
    ],
    problemSolving: [
      '낙하와 병합 규칙을 단순하게 유지해 모바일 세로 화면에서도 플레이 목표를 빠르게 이해할 수 있도록 구성했습니다.',
      '드롭과 회전 조작을 화면 버튼 중심으로 정리해 한 손 플레이와 터치 영역 점검에 적합한 UI 방향을 잡았습니다.',
      '출시 준비 상태와 현재 구현 범위를 분리하고, 랭킹은 랭킹 UI와 경쟁 요소 준비 범위로만 설명합니다.',
    ],
    tech: ['Unity', 'C#', 'Unity 2D', 'Mobile UI', 'Casual Game', 'Physics Puzzle'],
    detail: {
      overview: [
        '차곡차곡 동물팡은 AppInToss 출시를 목표로 준비 중인 개인 모바일 캐주얼 퍼즐 게임입니다.',
        '동물 블록을 떨어뜨리고 쌓은 뒤 같은 동물을 합쳐 점수를 높이는 짧은 반복 플레이를 중심으로 설계했습니다.',
        '세로형 모바일 화면에서 조작, HUD, 게임오버, 재도전과 랭킹 화면 흐름이 자연스럽게 이어지도록 구성하고 있습니다.',
      ],
      problem: [
        '짧은 모바일 플레이에서는 낙하 위치와 회전 조작을 빠르게 이해하고 즉시 다시 도전할 수 있어야 합니다.',
        '귀여운 동물 블록의 시각적 구분과 병합 결과가 작은 세로 화면에서도 명확하게 보여야 합니다.',
        '출시 전 프로젝트이므로 구현된 플레이 요소와 밸런스·랭킹 경쟁 요소 준비 범위를 구분해야 합니다.',
      ],
      designDirection: [
        '세로형 모바일 화면에 플레이 영역, 점수 HUD, 드롭·회전 버튼을 간결하게 배치합니다.',
        '토끼, 여우, 강아지, 고양이 등 동물 블록의 형태와 색을 구분하고 캐주얼한 타이틀·버튼·패널 톤을 유지합니다.',
        '게임오버 뒤 빠르게 재도전할 수 있는 짧은 세션 흐름을 중심으로 구성합니다.',
      ],
      coreStructure: [
        '블록 등장 → 위치 확인과 회전 → 낙하·쌓기 → 같은 동물 병합 → 점수 상승 → 게임오버 → 재도전으로 이어집니다.',
        '드롭과 회전 버튼을 중심으로 단순한 모바일 조작을 제공합니다.',
        '점수 HUD와 랭킹 화면 흐름을 연결하되, 랭킹 경쟁 요소는 출시 준비 과정에서 점검하는 범위로 구분합니다.',
      ],
      responsibilities: [
        'Unity와 C# 기반 모바일 물리 퍼즐의 기본 플레이 구조를 구성했습니다.',
        '동물 블록 병합, 점수, 게임오버와 재도전 흐름을 프로젝트 단위로 정리했습니다.',
        '세로 화면 UI, 버튼 터치 영역, 귀여운 동물 블록과 랭킹 패널의 에셋 방향을 설계하고 있습니다.',
      ],
      implementationStatus: {
        completed: [
          '세로형 모바일 기준 게임 화면 구성',
          '동물 블록 드롭·회전 조작 UI 구성',
          '점수와 게임 진행 상태를 보여주는 HUD 구성',
          '타이틀, 버튼, 랭킹 패널 등 핵심 UI 에셋 방향 정리',
          '토끼, 여우, 강아지, 고양이 등 동물 블록 콘셉트 정리',
        ],
        inProgress: [
          '실제 출시 전 플레이 감각, 난이도와 점수 밸런스 조정',
          '모바일 화면의 버튼 크기, 터치 영역과 가독성 점검',
          '랭킹 화면과 반복 플레이 연결 흐름 다듬기',
        ],
        planned: [
          'AppInToss 등록과 출시 준비',
          '실제 플레이 데이터를 바탕으로 난이도와 점수 밸런스 개선',
          '추가 동물 블록, 이펙트와 UI 연출 보강',
          '랭킹 경쟁 요소와 재도전 흐름 개선',
        ],
      },
      techStack: ['Unity', 'C#', 'Unity 2D', 'Mobile UI', 'Casual Game', 'Puzzle Game', 'Physics Puzzle'],
      problemSolving: [
        '한 화면에서 플레이 영역과 조작 버튼이 경쟁하지 않도록 세로형 레이아웃의 우선순위를 정리했습니다.',
        '같은 동물의 병합 결과를 직관적으로 이해할 수 있도록 블록 외형과 점수 흐름을 함께 설계했습니다.',
        'AppInToss 출시는 예정 상태로만 기록하고 출시 전 검증 항목을 진행 중과 향후 계획으로 분리했습니다.',
      ],
      outcomes: [
        '짧은 세션에 맞춘 동물 블록 낙하·병합 퍼즐의 핵심 흐름을 포트폴리오로 정리했습니다.',
        '모바일 세로 화면을 기준으로 조작, HUD, 게임오버와 재도전 UI 방향을 구체화했습니다.',
      ],
      evidence: [
        '현재 프로젝트에서 정리한 동물 블록, 타이틀, 버튼과 랭킹 패널 UI 에셋 방향',
        'AppInToss 출시 준비를 위한 플레이 흐름과 모바일 UI 점검 항목',
      ],
      scopeLimitations: [
        'AppInToss 출시 예정 프로젝트이며 출시가 완료된 상태가 아닙니다.',
        '랭킹은 화면과 사용자 흐름을 준비하는 범위이며 온라인 랭킹 백엔드 구현을 의미하지 않습니다.',
        '검증된 이미지 파일이 추가되기 전까지 포트폴리오에서는 abstract preview를 사용합니다.',
      ],
      verification: [
        '출시 전 실제 기기에서 버튼 크기, 터치 영역, 가독성과 반복 플레이 흐름을 점검할 예정입니다.',
        '난이도와 점수 밸런스는 실제 플레이 검증을 통해 계속 조정합니다.',
      ],
      milestones: [
        '모바일 세로형 기본 게임 화면과 조작 UI 구성',
        '동물 블록과 캐주얼 UI 에셋 방향 정리',
        'AppInToss 출시 준비와 플레이 밸런스 점검',
      ],
      media: {
        screenshots: [],
        videos: [],
        note: '검증된 이미지와 영상 파일이 아직 없어 abstract preview를 사용합니다. 준비된 미디어는 실제 파일을 확인한 뒤 연결할 예정입니다.',
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
    title: 'Support Browser / Inquiry Dataset',
    subtitle: 'Wizard Defense 문의 분류·응답 초안·검색 구조를 검증하는 Data·AI Support Preview',
    category: 'DATA · AI SUPPORT',
    stage: 'STAGE 03',
    statusCode: 'DATASET',
    status: 'Deterministic support preview 구현',
    summary:
      '합성 문의 데이터셋과 규칙 기반 분류기에서 시작해 FastAPI와 React UI, 재현 가능한 로컬 검색, 안전한 응답 초안, 배포·운영 검증까지 확장한 개인 Data·AI Support 프로젝트입니다.',
    role: '데이터와 라벨 정책, 규칙 기반 라우팅, FastAPI API, React preview UI, deterministic retrieval, demo-only mock adapter, guardrail과 EC2 배포 검증을 단계별 기록으로 관리했습니다.',
    highlights: [
      'v1 100개 합성 한국어 문의에서 v2 150개 문의로 확장하며 라벨 경계 사례를 보강',
      '단순 CSV가 아니라 labeling guide, dataset card, experiment log, error analysis까지 함께 관리',
      'Python rule-based classifier와 test script로 데이터셋 활용 가능성을 검증',
      'FastAPI POST /support/preview와 React UI에서 한국어/영어 분류 결과와 응답 초안을 제공',
      '외부 LLM 없이 deterministic retrieval, mock adapter, guardrail 경계를 재현 가능한 테스트로 검증',
    ],
    problemSolving: [
      '`bug_report`와 기능 category가 겹치는 경계 문제를 문서화했습니다.',
      '`wizard_growth`와 `wizard_acquisition`처럼 비슷한 표현이 있는 문의를 구분하기 위해 라벨링 기준을 세분화했습니다.',
      'baseline 결과와 improved rule 결과를 분리해 기록하고, improved rule v2 결과는 해당 데이터 기준 결과이며 추가 검증이 필요하다고 명확히 표시했습니다.',
    ],
    tech: [
      'Python',
      'CSV',
      'Dataclass',
      'rule-based classifier',
      'TF-IDF',
      'LogisticRegression',
      'scikit-learn',
      'Dataset Card',
      'Labeling Guide',
      'FastAPI',
      'React',
      'Vite',
      'Deterministic Retrieval',
      'AWS EC2',
      'Nginx',
      'systemd',
      'GitHub',
    ],
    detail: {
      overview: [
        'Random Wizard Defense 플레이어 문의를 분류하고 로컬 지식과 안전 정책을 바탕으로 한국어/영어 지원 응답 초안을 보여주는 개인 preview 프로젝트입니다.',
        'v1/v2 합성 한국어 문의와 라벨링 정책, 규칙 기반·TF-IDF 실험을 기반으로 FastAPI API와 React/Vite UI까지 확장했습니다.',
        '기본 경로는 외부 모델을 호출하지 않는 deterministic template이며, retrieval과 MockLLMAdapter는 향후 구조를 안전하게 검증하는 로컬 baseline입니다.',
      ],
      problem: [
        '게임 고객 문의는 같은 기능 단어를 포함해도 정보 요청, 오류 제보, 밸런스 의견처럼 처리 방식이 달라질 수 있습니다.',
        '자동 응답으로 처리 가능한 문의와 사람 검토가 필요한 문의를 구분하려면 category뿐 아니라 urgency와 needs_human 같은 운영 관점의 라벨이 필요합니다.',
        '합성 데이터는 실제 사용자 표현을 모두 담지 못하므로 dataset card와 error analysis에 제한 사항을 함께 기록해야 합니다.',
      ],
      designDirection: [
        'CSV row마다 문의 원문과 라벨을 함께 넣어 rule-based classifier와 baseline 평가에 바로 사용할 수 있게 구성했습니다.',
        'v1 dataset은 100개 합성 한국어 문의로 시작했고, v2 dataset은 라벨 경계 사례를 보강해 150개 문의로 확장했습니다.',
        'v1 파일은 비교 기준으로 보존하고 v2 파일을 별도로 생성해 기존 결과를 덮어쓰지 않는 방식으로 관리했습니다.',
        '`bug_report`, `feedback_balance`, `wizard_growth`, `gameplay_guide`처럼 경계가 약한 category를 v2 개선 대상으로 정리했습니다.',
      ],
      labelStructure: [
        '`id`: 샘플 고유 ID',
        '`text`: 플레이어 문의 원문, 한국어 합성 문장',
        '`category`: gameplay_guide, wizard_acquisition, wizard_growth, tower_progress, skill_combat, bug_report, feedback_balance',
        '`subcategory`: placement, random_draw, resonance, floor_difficulty, cooldown_display 같은 상세 키워드',
        '`urgency`: low, medium, high',
        '`needs_human`: 자동 응답 가능 여부와 사람 검토 필요 여부를 구분하는 boolean 라벨',
      ],
      coreStructure: [
        'dataset card에는 데이터 출처, 라벨 스키마, category 분포, 제한 사항, 프라이버시 고지, 향후 개선 계획을 기록했습니다.',
        'labeling guide에는 category 정의, subcategory 예시, urgency 규칙, needs_human 규칙, 애매한 경우 처리 기준을 정리했습니다.',
        'error analysis에는 오분류 샘플, 예측 라벨, 기대 라벨, 원인, 개선 후보를 기록하는 방식으로 실패 유형을 추적했습니다.',
        'experiment log에는 rule baseline, TF-IDF baseline, dataset v2 평가, improved rule 실험을 날짜와 설정, 결과 중심으로 남겼습니다.',
        '`POST /support/preview`는 문의와 optional language를 받아 분류·라우팅·응답 초안을 반환합니다.',
        'React UI는 입력, 예시 chip, loading/error 상태와 category, urgency, human review, routing reason, response draft를 표시합니다.',
        'local retrieval은 bilingual knowledge chunk를 keyword/token/topic scoring으로 정렬해 재현 가능한 top_k 순서를 반환합니다.',
        'MockLLMAdapter는 API 기본 경로에 연결되지 않은 demo-only deterministic formatter입니다.',
      ],
      responsibilities: [
        '한국어 게임 문의를 분류하기 위한 category와 subcategory 체계를 정리했습니다.',
        'urgency와 needs_human 라벨을 추가해 단순 의도 분류를 넘어 고객지원 플로우 관점까지 표현했습니다.',
        'labeling guide와 dataset card를 작성해 데이터셋의 목적, 한계, 라벨링 규칙을 문서화했습니다.',
        'Python rule-based classifier와 test script를 통해 라벨 구조가 코드에서 어떻게 사용되는지 확인했습니다.',
        'baseline 평가와 error analysis를 함께 남겨 다음 개선 방향을 추적할 수 있게 했습니다.',
      ],
      implementationStatus: {
        completed: [
          'v1 dataset: 100개 합성 한국어 문의 CSV 작성',
          'v2 dataset: 150개 합성 한국어 문의 CSV 작성',
          'category, subcategory, urgency, needs_human 라벨 구조 정리',
          'labeling guide 작성',
          'dataset card 작성',
          'schemas.py의 InquiryResult dataclass 작성',
          'rule_classifier.py의 키워드 기반 분류기 작성',
          'test_rule_classifier.py로 기본 동작 검증',
          'experiment_log.md와 error_analysis.md로 실험 및 오류 분석 기록',
          'Git tag 기반 버전 기록 확인',
          'FastAPI POST /support/preview와 React/Vite 한국어·영어 preview UI',
          '7개 category와 urgency, needs_human, suggested_response_type, routing_reason 라우팅',
          'topic knowledge와 response template 기반 deterministic 응답 초안',
          'keyword/token/topic scoring 기반 local retrieval과 재현 가능한 top_k ordering',
          'demo-only MockLLMAdapter, prompt redaction, 민감 문의 guardrail prototype',
          'AWS EC2의 Nginx 정적 제공, same-origin API proxy, FastAPI systemd 배포 검증',
        ],
        inProgress: [
          '분류 규칙과 라벨 경계 사례를 실험 기록을 바탕으로 계속 다듬을 수 있는 구조로 관리하고 있습니다.',
          'baseline 결과를 비교하며 rule-based 접근과 TF-IDF baseline의 장단점을 나누어 정리하고 있습니다.',
        ],
        planned: [
          '실제 플레이어 로그를 사용하려면 익명화, 동의, 개인정보 검토가 필요하며 현재 데이터셋에는 포함하지 않았습니다.',
          'improved rule v2의 94.00% 결과는 해당 v2 dataset 기준 결과이므로 holdout 또는 새로운 dataset으로 일반화 가능성을 추가 검증해야 합니다.',
          '실제 provider adapter나 다른 retrieval 방식 비교는 별도 승인과 평가 기준을 마련한 뒤 검토합니다.',
        ],
      },
      classifierStructure: [
        '`schemas.py`는 category, subcategory, urgency, needs_human, confidence, matched_keywords를 담는 InquiryResult dataclass를 정의합니다.',
        '`rule_classifier.py`는 category별 한국어 키워드 사전, issue pattern, subcategory rule을 사용해 문의를 분류합니다.',
        '버그 키워드가 매칭되면 `bug_report`를 우선하고, urgency와 needs_human을 함께 설정합니다.',
        '`test_rule_classifier.py`는 대표 문의를 실행해 category, subcategory, urgency, needs_human 결과가 기대값과 맞는지 확인합니다.',
        '`rule_classifier_v2.py`는 refined label policy를 반영한 별도 improved rule 실험으로, 원본 rule classifier는 baseline 결과를 보존한 채 비교하도록 분리되어 있습니다.',
      ],
      techStack: [
        'Python',
        'CSV',
        'Dataclass',
        'rule-based classifier',
        'TF-IDF',
        'LogisticRegression',
        'scikit-learn',
        'Test Script',
        'Dataset Card',
        'Labeling Guide',
        'Error Analysis',
        'Experiment Log',
        'Markdown documentation',
        'Git',
        'GitHub',
      ],
      experimentLog: [
        'v0.3.0 rule baseline에서는 키워드 기반 분류기의 기본 테스트를 기록했습니다.',
        'v0.4.0 rule baseline은 v1 dataset 100개 기준 accuracy 60.00%로 기록했습니다.',
        'v0.9.0 v2 baseline에서는 v2 dataset 150개 기준 rule-based 44.67%, TF-IDF 72.67%로 비교했습니다.',
        'v0.10.0 improved rule v2는 v2 dataset 기준 94.00%를 기록했지만, 이 수치는 해당 데이터 기준 개선 결과이며 일반화 성능으로 보지 않도록 주의 문구를 포함했습니다.',
        'error analysis에는 bug_report, feedback_balance, wizard_growth, gameplay_guide 경계에서 발생한 오분류 패턴과 개선 후보를 기록했습니다.',
      ],
      problemSolving: [
        '기능 단어가 포함된 오류 문의는 feature category보다 bug_report로 검토해야 하는 기준을 labeling guide에 추가했습니다.',
        '강함/약함, 비용 대비 효율, 확률 불만 같은 평가 표현은 feedback_balance로 모으도록 경계 규칙을 정리했습니다.',
        '경험치와 성장 재료를 묻는 방법은 wizard_growth, 신규 마법사 소환과 등장 확률 안내는 wizard_acquisition으로 구분했습니다.',
        '추천 빌드와 배치 전략은 gameplay_guide, 데미지 공식과 쿨타임 조정 질문은 skill_combat으로 나누었습니다.',
        'v1과 v2 산출물을 분리해 baseline 비교가 가능하도록 관리했습니다.',
      ],
      outcomes: [
        '데이터셋을 단순 CSV가 아니라 라벨링 기준, dataset card, 테스트 스크립트, 실험 로그, 오류 분석까지 포함한 포트폴리오 단위로 정리했습니다.',
        'category와 subcategory만이 아니라 urgency와 needs_human을 포함해 고객지원 플로우 관점의 라벨 설계를 경험했습니다.',
        'baseline 성능이 낮게 나온 category를 숨기지 않고 error analysis와 다음 개선 후보로 기록하는 방식의 실험 관리를 배웠습니다.',
        '규칙 기반 접근은 설명 가능성이 높지만 표현 분포에 맞춰질 수 있으므로 improved rule 결과도 추가 검증이 필요하다는 한계를 분리해 설명할 수 있게 했습니다.',
        '데이터 설계에서 API, UI, retrieval, guardrail, 배포 운영 문서까지 연결하되 각 단계의 실제 한계를 함께 기록했습니다.',
      ],
      systemFlow: [
        '사용자 문의 → FastAPI POST /support/preview → rule-based router → topic detector/support knowledge → deterministic local retrieval → response template → preview response 순서로 동작합니다.',
        '민감한 환불·결제·보상·복구 문의는 needs_human=true로 전환하고 금지된 확정 약속을 guardrail로 검사합니다.',
      ],
      evidence: [
        '버전별 dataset, labeling guide, dataset card, experiment log와 error analysis',
        'API contract, frontend README, batch output과 retrieval/mock comparison artifacts',
        'deployment verification, operations runbook, rollback·incident·security/privacy 문서',
      ],
      scopeLimitations: [
        'OpenAI·Claude 등 외부 LLM API를 호출하지 않으며 실제 LLM chatbot이 아닙니다.',
        'embedding/vector DB 또는 semantic vector search가 없는 keyword/token/topic baseline이며 production RAG chatbot이 아닙니다.',
        'MockLLMAdapter는 model quality를 재현하지 않는 로컬 deterministic formatter입니다.',
        'DB, ticket storage, live player data와 실제 결제·환불 처리가 없고 자동 고객지원이나 production-ready 운영을 보장하지 않습니다.',
      ],
      verification: [
        'Backend regression 86 tests passed',
        'API smoke 7/7 preview cases passed',
        '한국어 7개와 영어 7개 mock adapter demo 출력 확인',
        'React/Vite production build와 저장소의 compile·secret/IP scan 기록 확인',
      ],
      deployment: [
        'AWS EC2에서 Nginx가 React build를 제공하고 same-origin /support/preview를 127.0.0.1:8000의 FastAPI systemd service로 proxy하는 구조를 검증했습니다.',
        '공개 5173/8000 포트를 닫고 운영·보안 문서를 작성했지만 production-ready 보장은 아닙니다.',
      ],
      milestones: [
        'v0.1.0–v0.10.0: 데이터셋, 규칙/TF-IDF baseline, 데이터 품질 개선',
        'v0.11.0–v0.19.0: router, response template, FastAPI와 API contract',
        'v0.20.0–v0.25.0: React UI, bilingual mode, EC2 배포·운영·보안 문서',
        'v0.26.0–v0.30.0: knowledge coverage, deterministic retrieval, mock/guardrail, showcase',
      ],
      liveDemoNotice: [
        'https://support.slowlyp.dev 는 규칙 기반 support preview이며 실제 고객지원 처리나 외부 LLM 서비스를 제공하지 않습니다.',
      ],
      artifacts: [
        {
          label: 'GitHub repository',
          pathOrUrl: 'https://github.com/slowlyP/wizard-defense-ai-support',
          kind: 'repository',
          note: 'Inquiry Dataset과 rule-based classifier, experiment 기록이 있는 확인된 저장소입니다.',
        },
        {
          label: 'Dataset v1 CSV',
          pathOrUrl: 'data/raw/wizard_defense_inquiries_raw.csv',
          kind: 'csv',
          note: '100개 합성 한국어 문의가 담긴 v1 dataset입니다.',
        },
        {
          label: 'Dataset v2 CSV',
          pathOrUrl: 'data/raw/wizard_defense_inquiries_v2.csv',
          kind: 'csv',
          note: '라벨 경계 사례를 보강한 150개 합성 한국어 문의 dataset입니다.',
        },
        {
          label: 'Labeling guide',
          pathOrUrl: 'data/labeling_guide.md',
          kind: 'docs',
          note: 'category, subcategory, urgency, needs_human 기준과 경계 규칙을 설명합니다.',
        },
        {
          label: 'Dataset card',
          pathOrUrl: 'data/dataset_card.md',
          kind: 'docs',
          note: '데이터 출처, 라벨 스키마, 제한 사항, 프라이버시 고지를 정리합니다.',
        },
        {
          label: 'Rule classifier',
          pathOrUrl: 'backend/app/rule_classifier.py',
          kind: 'code',
          note: '한국어 키워드 기반 규칙 분류기입니다.',
        },
        {
          label: 'Experiment log',
          pathOrUrl: 'experiments/experiment_log.md',
          kind: 'experiment',
          note: 'baseline, TF-IDF, improved rule 실험의 설정과 결과를 기록합니다.',
        },
        {
          label: 'Error analysis',
          pathOrUrl: 'experiments/error_analysis.md',
          kind: 'experiment',
          note: '오분류 패턴과 개선 후보를 추적합니다.',
        },
      ],
      metrics: [
        {
          label: 'Dataset v1',
          value: '100 samples',
          note: '게임 맥락을 기반으로 만든 합성 한국어 문의입니다.',
        },
        {
          label: 'Dataset v2',
          value: '150 samples',
          note: '라벨 경계 사례를 보강한 별도 dataset이며 v1을 덮어쓰지 않았습니다.',
        },
        {
          label: 'v0.4 rule baseline',
          value: '60.00%',
          note: 'v1 dataset 100개 기준 accuracy입니다.',
        },
        {
          label: 'v2 baseline',
          value: 'rule 44.67% / TF-IDF 72.67%',
          note: 'v2 dataset 150개 기준 비교 결과입니다.',
        },
        {
          label: 'improved rule v2',
          value: '94.00%',
          note: '해당 v2 dataset 기준 개선 결과이며 일반화 가능성은 추가 검증이 필요합니다.',
        },
      ],
      media: {
        screenshots: [],
        videos: [],
        note: 'Inquiry Dataset 관련 이미지와 영상 자료는 아직 확인되지 않아 추가 예정으로 표시합니다.',
      },
    },
    links: {
      github: 'https://github.com/slowlyP/wizard-defense-ai-support',
      youtube: '',
      service: 'https://support.slowlyp.dev',
    },
  },
  {
    id: 'ai-accident-detection',
    title: '404 R·N·F AI',
    subtitle: 'AI 기반 도로 낙하물 탐지 및 위험 알림 팀 미니프로젝트',
    category: 'MINI PROJECT / TEAM PROJECT',
    stage: 'STAGE 04',
    statusCode: 'TEAM MINI',
    status: '팀 프로젝트 참여',
    summary:
      '도로 위 낙하물을 AI로 탐지하고, 위험도 분석과 실시간 알림, 지도 기반 위험 위치 시각화, 경로 기반 위험 분석을 연결한 팀 미니프로젝트입니다.',
    role: '송명근은 부조장으로 참여해 신고 기능, Google Maps API 연동, AI 탐지 기능 개발과 서비스 연계를 담당했습니다. LLM 범위는 신고 제목 자동 생성과 신고 내용 보조로 한정합니다.',
    highlights: [
      'YOLO 기반 객체 탐지로 이미지와 영상 업로드 데이터를 분석하는 흐름 구성',
      '위험/긴급 상황만 필터링해 Flask-SocketIO 기반 실시간 알림으로 전달하는 구조',
      '지도 기반 위험 위치 시각화와 출발지/도착지 기반 경로 위험 분석 기능을 포함한 안전 주행 서비스',
    ],
    problemSolving: [
      '신고 등록, 파일 업로드, AI 분석 연계가 이어지는 사용자 신고 흐름을 팀 프로젝트 안에서 구현 범위로 나누어 작업했습니다.',
      'Google Maps API를 활용해 지도 시각화와 위치 기반 데이터 표시를 서비스 화면에 연결하는 역할을 맡았습니다.',
      'AI 탐지 기능이 단독 기능에 머물지 않고 신고 기능과 서비스 흐름에 이어지도록 연계 작업에 참여했습니다.',
    ],
    tech: [
      'Flask',
      'Python',
      'YOLOv8',
      'RT-DETR',
      'Flask-SocketIO',
      'MySQL',
      'Google Maps API',
      'Kakao Navigation API',
      'LLM',
    ],
    detail: {
      overview: [
        '404 R·N·F AI는 도로 위 낙하물을 AI로 자동 탐지하고, 위험도 판단 결과를 기반으로 실시간 알림을 제공하는 팀 미니프로젝트입니다.',
        'README 기준으로 이미지/영상 업로드 분석, 지도 기반 위험 위치 시각화, 경로 기반 위험 분석, 신고 기능, 관리자 기능을 포함합니다.',
        '대표 프로젝트 3개와 같은 비중이 아니라, 팀 프로젝트 참여 경험을 보여주는 미니프로젝트 카드로 정리합니다.',
      ],
      problem: [
        '도로 위 낙하물은 운전자에게 위험 요소가 될 수 있어, 업로드된 이미지나 영상을 기반으로 빠르게 탐지하고 위험도를 판단하는 흐름이 필요합니다.',
        '탐지 결과가 단순 분석에 그치지 않고 신고, 실시간 알림, 지도 기반 모니터링, 경로 위험 분석으로 이어져야 서비스 흐름이 완성됩니다.',
      ],
      coreStructure: [
        '사용자가 이미지 또는 영상을 업로드하면 YOLO 또는 RT-DETR 모델이 객체 탐지를 수행합니다.',
        '탐지된 객체 정보는 Detection 데이터로 저장되고, 위험도는 주의, 위험, 긴급 단계로 분류됩니다.',
        '위험 또는 긴급 상황이면 Alert를 생성하고 WebSocket 기반으로 관리자 페이지에 실시간 전송합니다.',
        '최종 탐지 결과는 지도 기반 탐지 현황과 경로 위험 분석에 반영됩니다.',
        'Flask backend는 API, Service, Repository, Model 계층으로 요청, 비즈니스 로직, DB 접근, 데이터 구조 책임을 분리합니다.',
      ],
      responsibilities: [
        '송명근은 팀 프로젝트 부조장으로 참여했으며, 아래 범위는 README의 담당 기능과 대표 모듈을 기준으로 합니다.',
        '신고 등록, 파일 업로드, AI 분석 연계 처리를 포함한 신고 기능 구현을 담당했습니다.',
        'Google Maps API 연동을 통해 지도 시각화와 위치 기반 데이터 표시 기능에 참여했습니다.',
        '`yolo_service.py`와 `llm_service.py`를 중심으로 AI 탐지와 서비스 연계를 담당했으며, LLM은 신고 제목 자동 생성과 신고 내용 보조에만 사용했습니다.',
      ],
      implementationStatus: {
        completed: [
          'AI 낙하물 탐지 기능',
          '이미지 / 영상 업로드 자동 분석 흐름',
          '위험도 분석 및 Alert 생성 흐름',
          'Flask-SocketIO 기반 실시간 알림',
          '지도 기반 위험 위치 시각화',
          '경로 기반 위험 분석',
          '신고 기능과 AI 분석 연계',
          'MySQL 기반 데이터 관리',
          '낙석, 박스, 타이어 등 탐지 객체 분류',
          'YOLOv8 기본 모델, YOLOv8-p2 소형 객체 탐지, RT-DETR 비교 분석',
          'SQLAlchemy 모델과 Flask-Migrate/Alembic 스키마 이력',
          '동일 데이터에 대한 세 모델 관리자 비교 기능',
        ],
        inProgress: [
          '업로드된 이미지·영상이 AI 분석, 위험도 분류, 실시간 알림, 지도 기반 확인으로 이어지는 전체 흐름을 중심으로 구조를 정리했습니다.',
          'YOLOv8, YOLOv8-p2, RT-DETR 결과를 비교하며 도로 낙하물 탐지에서 모델별 특징을 확인했습니다.',
        ],
        planned: [
          '탐지 결과 화면, 지도 기반 위험 표시, 관리자 알림 흐름을 더 직관적으로 보여줄 수 있는 시각 자료를 보강할 예정입니다.',
          '야간, 저화질, 작은 낙하물처럼 탐지가 어려운 상황을 기준으로 위험도 판단 흐름을 더 세분화해볼 수 있습니다.',
        ],
      },
      techStack: [
        'Flask',
        'Python',
        'SQLAlchemy',
        'Flask-Migrate',
        'Flask-SocketIO',
        'WebSocket',
        'REST API',
        'File Upload',
        'HTML',
        'CSS',
        'JavaScript',
        'Google Maps API',
        'Kakao Navigation API',
        'YOLOv8',
        'YOLOv8-p2',
        'RT-DETR',
        'LLM',
        'MySQL',
        'Route Risk Analysis',
      ],
      problemSolving: [
        'API, Service, Repository, Model 계층으로 나누어진 Flask 백엔드 구조 안에서 기능별 책임을 분리해 작업했습니다.',
        '신고 기능과 AI 분석 연계를 통해 사용자가 올린 자료가 탐지와 위험도 판단 흐름으로 이어지도록 구성했습니다.',
        '지도 API 연동으로 탐지 결과가 위치 기반 화면에서 확인될 수 있도록 서비스 흐름에 연결했습니다.',
      ],
      systemFlow: [
        '이미지/영상 업로드 → 객체 탐지 → Detection 저장 → 주의/위험/긴급 위험도 분류 → Alert 생성 → 관리자 실시간 전송 → 지도·경로 분석 반영 순서로 연결됩니다.',
      ],
      teamContribution: [
        '팀 전체 범위에는 객체 탐지, 실시간 알림, 지도 모니터링, 경로 위험 분석, 관리자 기능과 데이터 관리가 포함됩니다.',
        '개인 담당 범위는 신고 등록·파일 업로드·AI 분석 연계, Google Maps 위치 표시, AI 개발과 서비스 연계입니다.',
        'LLM은 범용 챗봇이 아니라 신고 제목 자동 생성과 신고 내용 보조 모듈 범위입니다.',
      ],
      evidence: [
        '저장소 README의 팀 구성, 담당 기능/대표 모듈, 시스템 동작 흐름과 기능 명세',
        '프로젝트 발표자료, 코드리뷰 PDF와 시연 영상',
      ],
      scopeLimitations: [
        '팀 미니프로젝트의 전체 기능을 개인 단독 구현으로 표현하지 않습니다.',
        'V2X, 재학습, 스마트시티 확장은 README의 향후 가능성이며 구현 완료 범위가 아닙니다.',
      ],
      outcomes: [
        '팀 프로젝트에서 신고 기능, 지도 API 연동, AI 탐지 기능 서비스 연계에 참여한 경험을 포트폴리오에 추가했습니다.',
        'Flask 기반 백엔드, SocketIO 실시간 알림, MySQL 데이터 관리, AI 객체 탐지 기능이 연결되는 구조를 경험했습니다.',
        '대표 프로젝트보다 낮은 비중의 미니프로젝트로 정리해 팀 프로젝트 참여 경험을 보조적으로 보여줄 수 있게 했습니다.',
      ],
      artifacts: [
        {
          label: 'GitHub 저장소',
          pathOrUrl: 'https://github.com/lms-mini-project/AI-accident-detection',
          kind: 'repository',
          note: '프로젝트 코드와 README를 확인할 수 있습니다.',
        },
        {
          label: '발표자료 PDF',
          pathOrUrl:
            'https://github.com/lms-mini-project/AI-accident-detection/blob/main/404RNF-mini_2026.04.03%28FFFFFinal%29.pdf',
          kind: 'docs',
          note: '프로젝트 발표자료를 확인할 수 있습니다.',
        },
      ],
      media: {
        screenshots: [],
        videos: [
          {
            title: '404 R·N·F AI 시연 영상',
            url: 'https://youtu.be/Iet2QiSkU5s',
            type: 'demo',
          },
        ],
        note: '스크린샷 자산은 별도 확인된 링크가 없어 추가 예정으로 표시합니다.',
      },
    },
    links: {
      github: 'https://github.com/lms-mini-project/AI-accident-detection',
      youtube: 'https://youtu.be/Iet2QiSkU5s',
      service: 'https://404-rnf.ddoriny.com/',
    },
  },
  {
    id: 'loo-ting-lab',
    title: 'Loo Ting Lab',
    subtitle: '프로젝트를 탐색형 case study로 정리한 개인 Portfolio Browser',
    category: 'PORTFOLIO PROJECT',
    stage: 'STAGE 05',
    statusCode: 'DEPLOYED',
    status: 'GitHub Pages 배포·지속 개선',
    summary: 'React, Vite, TypeScript와 Tailwind CSS로 만든 개인 포트폴리오 웹사이트입니다. 프로젝트 소유권, KO/EN, light/dark, 미디어와 검증 기록을 하나의 반응형 Work Gallery로 연결합니다.',
    role: '정보 구조, 프로젝트 데이터 모델, 반응형 UI, 다국어·테마 상태, GitHub Pages 배포와 버전별 작업 문서를 직접 설계하고 관리했습니다.',
    highlights: [
      'Team/Personal 그룹과 상세 case study를 연결하는 HashRouter 기반 프로젝트 브라우저',
      'localStorage에 독립 저장되는 KO/EN과 light/dark 사용자 설정',
      'GitHub Pages 하위 경로, preview asset, Hero gameplay video fallback을 고려한 정적 배포 구조',
    ],
    problemSolving: [
      'GitHub Pages 새로고침과 저장소 하위 경로를 고려해 HashRouter와 Vite base를 유지했습니다.',
      '언어와 테마 상태를 분리 저장해 한 설정 변경이 다른 설정을 덮어쓰지 않게 했습니다.',
      '프로젝트별 이미지와 영상이 없거나 로드에 실패해도 abstract/thumbnail fallback으로 탐색이 끊기지 않게 했습니다.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'GitHub Pages', 'GitHub Actions'],
    detail: {
      overview: [
        'Loo Ting Lab은 단순 이력서 페이지가 아니라 프로젝트를 카드와 상세 case study로 탐색하는 개인 포트폴리오 웹사이트입니다.',
        'React 19, Vite, TypeScript, Tailwind CSS와 React Router를 사용하며 GitHub Pages에 배포합니다.',
        '프로젝트 설명은 완료·진행·계획·제한을 구분하고 versioned request, validation, worklog, release 문서와 함께 관리합니다.',
      ],
      problem: [
        '프로젝트 목록만 나열하면 팀/개인 역할, 구현 흐름, 검증 근거와 한계를 함께 전달하기 어렵습니다.',
        '정적 호스팅에서도 상세 경로, 하위 asset 경로, 언어·테마 설정과 미디어 fallback이 안정적으로 동작해야 합니다.',
      ],
      coreStructure: [
        '`projects.ts`와 KO/EN project translations가 카드와 상세 페이지의 공통 데이터 원본을 제공합니다.',
        'ProjectBrowser는 Team/Personal 순서로 프로젝트를 그룹화하고 ProjectDetail은 optional case-study section을 렌더링합니다.',
        'LanguageContext와 ThemeContext는 각 설정을 별도 localStorage key로 저장합니다.',
        'projectPreviews와 projectVideos는 `import.meta.env.BASE_URL`을 사용해 GitHub Pages 하위 경로에서 asset URL을 해석합니다.',
        'canvas network background, responsive gallery, project thumbnails와 Wizard Defense Hero video가 공통 레이아웃 안에서 동작합니다.',
      ],
      responsibilities: [
        '개인 프로젝트로 정보 구조, UI 구현, 프로젝트 콘텐츠와 배포 흐름을 관리했습니다.',
        'KO/EN 콘텐츠와 light/dark theme를 독립 상태로 구현하고 반응형 화면에 적용했습니다.',
        'GitHub Actions의 lint/build/Pages 배포 흐름과 버전별 문서 기록을 유지했습니다.',
      ],
      implementationStatus: {
        completed: [
          'React/Vite/TypeScript/Tailwind CSS 기반 반응형 Work Gallery',
          'HashRouter 프로젝트 목록·상세 경로',
          'KO/EN 전환과 localStorage 저장',
          'light/dark theme 전환과 독립 localStorage 저장',
          'Team/Personal 프로젝트 그룹화와 thumbnail',
          'Wizard Defense Hero gameplay video와 오류 시 thumbnail fallback',
          'canvas network background와 Resume PDF 연결',
          'GitHub Actions를 통한 GitHub Pages 배포',
          'change-request, validation, worklog, release 기반 버전 문서화',
        ],
        inProgress: ['GitHub README와 확인된 문서를 기준으로 프로젝트 case study를 계속 감사하고 보강합니다.'],
        planned: ['검증된 새 프로젝트 미디어와 접근성·반응형 개선을 버전 단위로 추가합니다.'],
      },
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'HashRouter', 'Canvas API', 'localStorage', 'GitHub Actions', 'GitHub Pages'],
      problemSolving: [
        'Vite base와 BASE_URL 기반 asset 해석으로 `/loo-ting-lab/` 하위 배포 경로를 일관되게 처리했습니다.',
        '영상 재생 오류를 상태로 감지해 기존 project thumbnail로 되돌리는 fallback을 유지했습니다.',
        '확인된 사실과 계획을 데이터와 문서에서 분리해 프로젝트 설명이 구현 범위를 넘지 않게 관리했습니다.',
      ],
      outcomes: [
        '다섯 프로젝트의 문제, 구조, 역할, 상태, 검증과 제한을 탐색 가능한 하나의 포트폴리오로 연결했습니다.',
        '프론트엔드 구현뿐 아니라 배포와 콘텐츠 근거 관리 과정을 함께 보여주는 개인 프로젝트로 정리했습니다.',
      ],
      systemFlow: ['Work Gallery → 프로젝트 카드 → HashRouter 상세 경로 → 프로젝트별 case study와 검증된 외부 리소스 순서로 탐색합니다.'],
      evidence: ['이 저장소의 source code, AGENTS/WORKFLOW/VERSION_PLAN 문서와 버전별 request·validation·worklog·release 기록', 'GitHub Actions Pages workflow와 공개 GitHub Pages 배포'],
      scopeLimitations: ['CMS나 자동 번역 시스템이 아니며 KO/EN 콘텐츠를 직접 관리합니다.', 'SSR 또는 영상 스트리밍 시스템이 아닌 정적 React 포트폴리오입니다.'],
      verification: ['각 버전 완료 전 ESLint와 TypeScript/Vite production build를 통과해야 합니다.', 'GitHub Pages workflow도 npm ci, lint, build 후 Pages artifact를 배포합니다.'],
      deployment: ['Vite base `/loo-ting-lab/`와 HashRouter를 사용해 GitHub Pages 저장소 하위 경로에 배포합니다.', 'main push 또는 수동 workflow dispatch로 GitHub Actions Pages 배포를 실행합니다.'],
      milestones: ['v1.0: GitHub Pages 배포 준비', 'v1.1: Work/About/Detail redesign과 KO/EN', 'v1.2: light/dark theme와 network background tuning', 'v1.3: GitHub 근거 기반 project content audit'],
      liveDemoNotice: ['공개 사이트는 정적 GitHub Pages 배포이며 저장소의 main 기준 릴리즈를 보여줍니다.'],
      media: { screenshots: [], videos: [], note: '별도 preview 이미지를 만들지 않고 abstract fallback을 사용합니다.' },
    },
    links: {
      github: 'https://github.com/slowlyP/loo-ting-lab',
      service: 'https://slowlyp.github.io/loo-ting-lab/',
    },
  },
]

export const findProject = (projectId: string | undefined) =>
  projects.find((project) => project.id === projectId)
