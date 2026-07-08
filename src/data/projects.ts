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

export type ProjectDetailContent = {
  problem: string[]
  responsibilities: string[]
  features: string[]
  architecture: string[]
  outcomes: string[]
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
      '고속도로 CCTV와 신고 영상을 분석해 정차 차량, 갓길 정차 같은 위험 상황을 이벤트로 만들고 관제 화면에서 스냅샷과 리플레이로 확인할 수 있게 연결한 AI 기반 관제 MVP입니다.',
    role: 'AI 분석 결과가 Flask API, MySQL 메타데이터, Next.js 관제 화면까지 이어지는 흐름을 이해하고, 영상 분석 결과 표시와 운영 기록 정리에 참여했습니다.',
    highlights: [
      'CCTV/신고 영상 분석 결과를 인시던트, 스냅샷, 리플레이로 확인하는 흐름 정리',
      'Flask API Gateway, AI VM, Frontend VM, DB VM으로 나뉜 서비스 구조 이해',
      'Linux VM, systemd, 배포/운영 문서를 참고한 실행 상태 점검',
    ],
    problemSolving: [
      'AI 감지 결과가 화면에 보이지 않을 때 API 응답, 미디어 URL, 권한, 서버 상태를 함께 확인하는 방식으로 원인을 좁혔습니다.',
      '대용량 영상 파일은 직접 DB에 저장하지 않고 파일 경로와 메타데이터를 나누어 관리하는 구조를 이해하고 화면 표시 흐름을 정리했습니다.',
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
    detail: {
      problem: [
        '기존 관제 방식은 많은 CCTV 영상을 사람이 계속 확인해야 해서 위험 상황을 놓치기 쉽습니다.',
        'AI 탐지 결과가 단순 모델 출력으로 끝나면 실제 관제자가 확인하고 대응하기 어렵습니다.',
        '신고 영상, CCTV 이벤트, 스냅샷, 리플레이, 권한 관리가 분리되어 있으면 사고 흐름을 추적하기 어렵습니다.',
      ],
      responsibilities: [
        'AI 분석 결과가 관제 화면에서 인시던트 정보로 보이는 전체 흐름을 이해하고 정리했습니다.',
        'CCTV/신고 영상 분석 결과, 스냅샷, MP4 replay 메타데이터가 화면에 표시되는 과정을 검증했습니다.',
        'Flask API 응답, 프론트 표시 상태, AI media proxy, 서버 실행 상태를 함께 확인하며 문제 원인을 추적했습니다.',
        'Linux VM 분리 구조, systemd 서비스 제어, 배포/운영 문서를 포트폴리오에 설명 가능한 형태로 정리했습니다.',
      ],
      features: [
        'YOLOv11 기반 차량 탐지와 bbox 중심점 이동량을 활용한 정차 차량 추정',
        'ROI / Rule Engine 기반 LANE_STOP, SHOULDER_STOP 이벤트 판단 흐름',
        'AI VM에서 생성된 이벤트 JSON을 Flask API Gateway가 수신하고 MySQL에 메타데이터 저장',
        'Socket.IO 기반 신규 인시던트 실시간 알림',
        '관제 화면에서 이벤트 목록, 상세 정보, 스냅샷, MP4 replay 확인',
        '사용자 신고 영상 업로드와 분석 결과 확인 흐름',
        '로그인, 회원가입 승인, 권한 기반 관리자 화면과 AI media proxy 접근 제어',
      ],
      architecture: [
        'CCTV / 신고 영상 -> AI VM FastAPI 분석 -> YOLOv11 차량 탐지 -> bbox 이동량/ROI 판단',
        'AI VM 이벤트 JSON -> Flask VM 내부 이벤트 API -> MySQL 메타데이터 저장',
        'Flask Socket.IO 이벤트 -> Next.js 관제 화면 실시간 알림',
        '스냅샷/리플레이 파일 -> AI media proxy -> 인증된 사용자만 화면에서 확인',
        'Frontend VM, Flask VM, AI VM, DB VM을 분리해 각 서버의 책임을 나눈 구조',
      ],
      outcomes: [
        'AI 모델 결과를 관제 화면에서 확인 가능한 서비스 흐름으로 설명할 수 있게 정리했습니다.',
        '프론트 화면, API 응답, 미디어 프록시, 서버 운영 상태를 함께 보는 디버깅 관점을 얻었습니다.',
        '모델 정확도뿐 아니라 권한, 저장 구조, 영상 전달, 운영 문서가 실제 서비스 품질에 중요하다는 점을 배웠습니다.',
      ],
    },
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
    subtitle: '2D 캐주얼 판타지 타워 디펜스 게임',
    category: 'GAME PROJECT',
    stage: 'STAGE 02',
    statusCode: 'IN PROGRESS',
    status: '전투 시스템 제작 중',
    summary:
      '마법사를 배치해 몬스터를 막는 Unity 기반 2D 타워 디펜스 게임입니다. 배치, 전투, 장비, 공명 규칙을 중심으로 게임 루프를 설계했습니다.',
    role: '전투 시스템, 몬스터 이동, 장비 인벤토리, 마법사 공명 규칙 구현을 담당했습니다.',
    highlights: [
      '마법사 배치와 몬스터 이동 흐름 구현',
      '장비 인벤토리와 전투 루프 구성',
      '조합 전략을 만드는 마법사 공명 규칙 설계',
    ],
    problemSolving: [
      '전투 규칙이 복잡해져도 플레이 흐름이 끊기지 않도록 시스템을 나누어 구성했습니다.',
      '장비와 공명 효과가 전투 결과에 자연스럽게 반영되도록 데이터 흐름을 정리했습니다.',
    ],
    tech: ['Unity', 'C#', '2D sprites', 'Tower defense', 'Inventory'],
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
      '한국어 게임 고객 문의를 카테고리별로 분류하기 위한 데이터셋 프로젝트입니다. 라벨링 기준, 데이터셋 카드, 규칙 기반 기준선을 함께 정리했습니다.',
    role: '문의 유형 정의, 라벨링 가이드 작성, CSV 구조 정리, 기본 분류 규칙 설계를 맡았습니다.',
    highlights: [
      'CSV 데이터 구조와 라벨링 가이드 작성',
      '문의 카테고리 분류 기준 정리',
      '데이터셋 카드와 규칙 기반 분류기 계획 수립',
    ],
    problemSolving: [
      '비슷해 보이는 문의를 일관되게 분류할 수 있도록 라벨 기준을 구체화했습니다.',
      '데이터셋을 처음 보는 사람도 목적과 한계를 이해할 수 있게 문서화했습니다.',
    ],
    tech: ['CSV', 'Data labeling', 'Dataset card', 'Classification', 'Rules'],
  },
]

export const findProject = (projectId: string | undefined) =>
  projects.find((project) => project.id === projectId)
