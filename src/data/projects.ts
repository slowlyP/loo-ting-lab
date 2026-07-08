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
      'CCTV 영상 분석, YOLO 객체 감지, Flask 서버, 관제 대시보드를 연결해 정지 차량과 돌발 상황을 탐지하는 교통 안전 프로젝트입니다.',
    role: '영상 분석 흐름 설계, 감지 결과 처리, 대시보드 연동 구조 정리를 맡았습니다.',
    highlights: [
      '정지 차량과 돌발 상황 감지 흐름 구성',
      '보고용 영상 분석 결과를 대시보드에서 확인하는 구조 설계',
      'Linux VM 환경에서 실행과 배포 흐름 점검',
    ],
    problemSolving: [
      '영상 분석 결과를 관제 화면에서 이해하기 쉽게 보여주는 데 집중했습니다.',
      'AI 감지 결과와 서비스 화면 사이의 데이터 흐름을 단순하게 정리했습니다.',
    ],
    tech: ['Flask', 'YOLO', 'Next.js', 'TypeScript', 'Linux VM', 'CCTV'],
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
