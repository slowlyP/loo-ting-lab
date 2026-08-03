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
    id: 'guild-director',
    title: 'Project Guild Director',
    subtitle: '용병단 운영 프로토타입',
    category: 'GAME PROTOTYPE',
    stage: 'STAGE 05',
    statusCode: 'IN PROGRESS',
    status: '초기 프로토타입 · 핵심 루프 검증 중',
    summary: '선술집에서 용병 후보를 고르고, 계약 조건을 따져 용병단을 꾸리는 Unity 전술 운영 프로토타입입니다.',
    role: '3×3 자동 전투와 선술집 후보·계약 데이터를 연결하며 전투와 용병단 운영의 기본 흐름을 검증하고 있습니다.',
    highlights: [
      '3×3 그리드 자동 전투의 전열 차단, 같은 열 우선 공격 경로와 전방 우선 대상 선택 규칙',
      '용병 정의 데이터와 고유 ID·개인 이름을 가진 개별 용병 인스턴스의 분리',
      '성격, 능력치 편차, 개인 명성, 요구 용병단 명성과 기본 계약금을 포함한 선술집 후보 생성',
    ],
    problemSolving: [
      '전투 규칙을 먼저 작게 검증하기 위해 3×3 배치와 공격 대상 선택 기준부터 분리해 구현했습니다.',
      '공통 용병 정의와 플레이마다 달라지는 개별 인스턴스를 나누고, 전투 유닛이 해당 인스턴스를 참조하도록 연결했습니다.',
      '후보의 표시 정보와 계약 조건이 뒤섞이지 않도록 계약 조건 데이터를 MercenaryCandidate에 분리했습니다.',
    ],
    tech: ['Unity', 'C#', 'Prototype', 'Grid Tactics', 'Auto Battle', 'Guild Management'],
    detail: {
      overview: [
        'Project Guild Director는 선술집에서 용병 후보를 고르고 계약 조건을 따져 용병단을 꾸리는 개인 Unity 프로토타입입니다.',
        '선술집 후보 생성, 후보별 성격과 능력치 편차, 개인 명성, 요구 용병단 명성, 기본 계약금과 3×3 자동 전투 흐름을 차례로 붙여가며 검증하고 있습니다.',
        '현재 작업명은 최종 제목이 아니며, 출시작이 아닌 초기 프로토타입입니다. 아직은 그래픽보다 데이터 구조와 게임 루프를 먼저 잡는 단계입니다.',
      ],
      problem: [
        '자동 전투 규칙과 용병 영입·운영 데이터가 하나의 반복 가능한 게임 루프로 자연스럽게 이어져야 합니다.',
        '공통 캐릭터 정의와 후보마다 달라지는 이름, 능력치, 명성, 계약 조건을 구분해 관리할 필요가 있습니다.',
      ],
      coreStructure: [
        '3×3 그리드에서 근접 전열 차단, 같은 열 우선 공격 경로와 전방 우선 대상 선택 규칙으로 자동 전투의 기초를 구성했습니다.',
        '용병 정의 데이터와 개별 용병 인스턴스를 분리하고, 각 인스턴스에 고유 ID와 개인 이름을 부여했습니다.',
        '전투 유닛과 용병 인스턴스를 연결해 운영 단계의 개별 용병이 전투에 이어지는 구조를 만들고 있습니다.',
        '선술집은 후보를 생성하고 새로고침하며, 후보마다 성격, 능력치 편차와 개인 명성을 가집니다.',
        '요구 용병단 명성과 기본 계약금을 포함한 계약 조건은 MercenaryCandidate에 분리해 관리합니다.',
      ],
      responsibilities: [
        '개인 프로젝트로 전투 규칙, 용병 데이터 구조와 선술집 후보 생성 흐름을 설계하고 구현하고 있습니다.',
        '완성된 게임으로 포장하지 않고 현재 구현, 다음 검증 항목과 아직 없는 UI·미디어를 구분해 기록합니다.',
      ],
      implementationStatus: {
        completed: [
          '3×3 그리드 기반 자동 전투 기초',
          '근접 전열 차단과 같은 열 우선 공격 경로',
          '전방 우선 대상 선택 규칙',
          '용병 정의 데이터와 개별 용병 인스턴스 분리',
          '고유 ID와 개인 이름',
          '전투 유닛과 용병 인스턴스 연결',
          '선술집 후보 생성과 새로고침',
          '후보별 성격과 능력치 편차',
          '용병 개인 명성, 요구 용병단 명성과 기본 계약금',
          '계약 조건 데이터의 MercenaryCandidate 분리',
        ],
        inProgress: [
          '자동 전투와 선술집 영입 흐름을 하나의 핵심 루프로 연결하고 있습니다.',
          '아직은 그래픽보다 데이터 구조와 게임 규칙의 초반 검증에 집중하고 있습니다.',
        ],
        planned: [
          '용병단 명성과 보유 자금',
          '계약 가능, 추가 계약금과 거절 판정',
          '영입 성공 후 보유 용병 목록 갱신',
          '인맥록과 재접촉 흐름',
          '실제 마을과 선술집 UI',
        ],
      },
      techStack: ['Unity', 'C#', 'Prototype', 'Grid Tactics', 'Auto Battle', 'Guild Management'],
      problemSolving: [
        '공격 대상 선택 규칙을 전열, 열과 전방 우선순위로 나누어 자동 전투의 기본 동작을 확인했습니다.',
        '정의 데이터, 개별 인스턴스와 전투 유닛의 책임을 나누어 영입한 용병이 전투까지 이어질 수 있게 구성했습니다.',
        '계약 관련 값을 후보 데이터에 분리해 이후 자금과 명성 판정을 붙일 자리를 마련했습니다.',
      ],
      outcomes: [
        '3×3 자동 전투와 용병 후보 생성의 기초 흐름을 구현해 핵심 루프를 검증할 수 있는 초기 상태를 만들었습니다.',
        '다음 단계에서 계약 판정과 보유 용병 목록을 연결할 수 있도록 데이터 경계를 정리했습니다.',
      ],
      scopeLimitations: [
        '현재 작업명은 최종 제목이 아니며 출시가 확정된 게임이 아닙니다.',
        '초기 프로토타입 단계로, 실제 마을·선술집 UI와 완성된 그래픽은 아직 없습니다.',
      ],
      milestones: [
        '현재: 3×3 자동 전투와 선술집 후보·계약 데이터 기초 검증',
        '다음: 용병단 명성·자금과 계약 판정 연결',
        '이후: 보유 용병, 인맥록과 실제 운영 UI 연결',
      ],
      media: { screenshots: [], videos: [], note: '확인된 이미지와 영상 asset이 없어 abstract placeholder를 사용합니다.' },
    },
    links: {
      github: 'https://github.com/slowlyP/GridTacticsPrototype',
    },
  },
]

export const findProject = (projectId: string | undefined) =>
  projects.find((project) => project.id === projectId)
