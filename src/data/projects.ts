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
    subtitle: 'Random Wizard Defense 한국어 고객 문의 분류 데이터셋',
    category: 'DATA PROJECT',
    stage: 'STAGE 03',
    statusCode: 'DATASET',
    status: '데이터셋 / 규칙 기반 분류기 정리',
    summary:
      'Random Wizard Defense 플레이어 문의를 분류하기 위해 합성 한국어 문의 CSV, 라벨링 가이드, dataset card, rule-based classifier, 실험 기록을 함께 정리한 데이터 프로젝트입니다.',
    role: '문의 category, subcategory, urgency, needs_human 라벨 구조를 설계하고, v1/v2 CSV 데이터셋과 라벨링 기준, 규칙 기반 분류기, 실험/오류 분석 문서를 포트폴리오용 근거로 정리했습니다.',
    highlights: [
      'v1 100개 합성 한국어 문의에서 v2 150개 문의로 확장하며 라벨 경계 사례를 보강',
      '단순 CSV가 아니라 labeling guide, dataset card, experiment log, error analysis까지 함께 관리',
      'Python rule-based classifier와 test script로 데이터셋 활용 가능성을 검증',
    ],
    problemSolving: [
      '`bug_report`와 기능 category, `feedback_balance`와 기능 category가 섞이는 경계 문제를 문서화했습니다.',
      '`wizard_growth`와 `wizard_acquisition`처럼 비슷한 표현을 쓰는 문의를 구분하기 위해 라벨링 기준을 세분화했습니다.',
      'baseline 결과와 improved rule 결과를 분리해 기록하고, improved rule v2는 해당 데이터 기준 결과이며 추가 검증이 필요하다고 명확히 남겼습니다.',
    ],
    tech: [
      'Python',
      'CSV',
      'Dataclass',
      'rule-based classifier',
      'TF-IDF',
      'LogisticRegression',
      'scikit-learn',
      'GitHub',
    ],
    detail: {
      overview: [
        'Inquiry Dataset은 Random Wizard Defense 게임의 플레이어 문의를 분류하기 위한 한국어 합성 데이터셋 프로젝트입니다.',
        '실제 사용자 문의 데이터가 아니라 게임 맥락을 바탕으로 만든 합성 문의를 사용하며, 데이터셋 설계와 라벨링 기준 정리, 규칙 기반 분류기 실험을 포트폴리오 근거로 삼습니다.',
        '저장소 README에는 의도 분류, 문서 검색, 근거 기반 응답 설계를 위한 AI support scaffold로 정리되어 있지만, 포트폴리오에서는 데이터 설계와 분류 실험 중심으로 설명합니다.',
      ],
      problem: [
        '게임 고객 문의는 같은 기능 단어를 포함해도 정보 요청, 오류 제보, 밸런스 의견처럼 처리 방식이 달라질 수 있습니다.',
        '자동 응답으로 처리 가능한 문의와 사람 검토가 필요한 문의를 구분하려면 category뿐 아니라 urgency와 needs_human 같은 운영 관점의 라벨이 필요합니다.',
        '합성 데이터는 실제 사용자 표현을 모두 담지 못하므로, dataset card와 error analysis에 제한 사항을 함께 기록해야 합니다.',
      ],
      designDirection: [
        'CSV row마다 문의 원문과 라벨을 함께 두어 rule-based classifier와 baseline 평가에 바로 사용할 수 있게 구성했습니다.',
        'v1 dataset은 100개 합성 한국어 문의로 시작했고, v2 dataset은 라벨 경계 사례를 보강해 150개 문의로 확장했습니다.',
        'v1 파일은 비교 기준으로 보존하고 v2 파일을 별도로 생성해 기존 결과를 덮어쓰지 않는 방식으로 관리했습니다.',
        '`bug_report`, `feedback_balance`, `wizard_growth`, `gameplay_guide`처럼 경계가 약한 category를 v2 개선 대상으로 정리했습니다.',
      ],
      labelStructure: [
        '`id`: 샘플 고유 ID',
        '`text`: 플레이어 문의 원문, 한국어 합성 문장',
        '`category`: gameplay_guide, wizard_acquisition, wizard_growth, tower_progress, skill_combat, bug_report, feedback_balance',
        '`subcategory`: placement, random_draw, resonance, floor_difficulty, cooldown_display 같은 상세 영어 키워드',
        '`urgency`: low, medium, high',
        '`needs_human`: 자동 응답 가능 여부와 사람 검토 필요 여부를 구분하는 boolean 라벨',
      ],
      coreStructure: [
        'dataset card에는 데이터 출처, 라벨 스키마, category 분포, 제한 사항, 프라이버시 고지, 향후 개선 계획을 기록했습니다.',
        'labeling guide에는 category 정의, subcategory 예시, urgency 규칙, needs_human 규칙, 애매한 경우 처리 기준을 정리했습니다.',
        'error analysis에는 오분류 샘플, 예측 라벨, 기대 라벨, 원인, 개선 후보를 기록하는 방식으로 실패 유형을 추적했습니다.',
        'experiment log에는 rule baseline, TF-IDF baseline, dataset v2 평가, improved rule 실험을 날짜와 설정, 결과 중심으로 남겼습니다.',
      ],
      responsibilities: [
        '한국어 게임 문의를 분류하기 위한 category와 subcategory 체계를 정리했습니다.',
        'urgency와 needs_human 라벨을 추가해 단순 의도 분류를 넘어 고객지원 라우팅 관점까지 표현했습니다.',
        'labeling guide와 dataset card를 작성해 데이터셋의 목적, 한계, 라벨링 규칙을 문서화했습니다.',
        'Python rule-based classifier와 test script를 통해 라벨 구조가 코드에서 어떻게 활용되는지 확인했습니다.',
        'baseline 평가와 error analysis를 남겨 다음 개선 방향을 추적할 수 있게 했습니다.',
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
        ],
        inProgress: [
          '분류 규칙과 라벨 경계 사례를 실험 기록을 바탕으로 계속 다듬을 수 있는 구조로 관리하고 있습니다.',
          'baseline 결과를 비교하면서 rule-based 접근과 TF-IDF baseline의 장단점을 나누어 정리하고 있습니다.',
        ],
        planned: [
          '실제 플레이어 로그를 사용하려면 익명화, 동의, 개인정보 검토가 필요하며 현재 데이터셋에는 포함하지 않습니다.',
          'improved rule v2의 94.00% 결과는 해당 v2 dataset 기준 결과이므로, holdout 또는 새로운 dataset으로 일반화 가능성을 추가 검증해야 합니다.',
          '검색 기반 응답이나 실제 고객지원 연동은 향후 확장 후보이며, 현재 포트폴리오에서는 데이터셋 설계와 분류 실험 중심으로 표시합니다.',
        ],
      },
      classifierStructure: [
        '`schemas.py`는 category, subcategory, urgency, needs_human, confidence, matched_keywords를 담는 InquiryResult dataclass를 정의합니다.',
        '`rule_classifier.py`는 category별 한국어 키워드 사전, issue pattern, subcategory rule을 사용해 문의를 분류합니다.',
        '버그 키워드가 매칭되면 `bug_report`를 우선하고, urgency와 needs_human을 함께 설정합니다.',
        '`test_rule_classifier.py`는 대표 문의를 실행해 category, subcategory, urgency, needs_human 결과가 기대값과 맞는지 확인합니다.',
        '`rule_classifier_v2.py`는 refined label policy를 반영한 별도 improved rule 실험으로, 원본 rule classifier와 baseline 결과를 보존한 채 비교하도록 분리되어 있습니다.',
      ],
      techStack: [
        'Python',
        'CSV',
        'Dataclass',
        'rule-based classifier',
        'TF-IDF',
        'LogisticRegression',
        'scikit-learn',
        'Markdown documentation',
        'Git',
        'GitHub',
      ],
      experimentLog: [
        'v0.3.0 rule baseline에서는 키워드 기반 분류기와 기본 테스트를 기록했습니다.',
        'v0.4.0 rule baseline은 v1 dataset 100개 기준 accuracy 60.00%로 기록되었습니다.',
        'v0.9.0 v2 baseline에서는 v2 dataset 150개 기준 rule-based 44.67%, TF-IDF 72.67%로 비교했습니다.',
        'v0.10.0 improved rule v2는 v2 dataset 기준 94.00%를 기록했지만, 이 수치는 해당 데이터 기준 개선 결과이며 일반화 성능으로 보지 않도록 주의 문구를 남겼습니다.',
        'error analysis에는 bug_report, feedback_balance, wizard_growth, gameplay_guide 경계에서 발생한 오분류 패턴과 개선 후보를 기록했습니다.',
      ],
      problemSolving: [
        '기능 단어가 포함된 오류 문의는 feature category보다 bug_report로 검토해야 하는 기준을 labeling guide에 추가했습니다.',
        '강함/약함, 비용 대비 효율, 확률 불만 같은 평가 표현은 feedback_balance로 다루도록 경계 규칙을 정리했습니다.',
        '경험치와 성장 재료를 얻는 방법은 wizard_growth, 신규 마법사 소환과 등장 확률 안내는 wizard_acquisition으로 구분했습니다.',
        '추천 빌드와 배치 전략은 gameplay_guide, 데미지 공식과 쿨타임, 판정 질문은 skill_combat으로 나누었습니다.',
        'v1과 v2 산출물을 분리해 baseline 비교가 가능하도록 관리했습니다.',
      ],
      outcomes: [
        '데이터셋을 단순 CSV가 아니라 라벨링 기준, dataset card, 테스트 스크립트, 실험 로그, 오류 분석까지 포함한 포트폴리오 단위로 정리했습니다.',
        'category와 subcategory만이 아니라 urgency와 needs_human을 포함해 고객지원 라우팅 관점의 라벨 설계를 경험했습니다.',
        'baseline 성능이 낮게 나온 category를 숨기지 않고 error analysis와 다음 개선 후보로 기록하는 방식의 실험 관리를 배웠습니다.',
        '규칙 기반 접근은 설명 가능성이 높지만 표현 분포에 맞춰질 수 있으므로, improved rule 결과도 추가 검증이 필요하다는 한계를 분리해 설명할 수 있게 되었습니다.',
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
          note: '라벨 경계 사례를 보강한 별도 dataset이며 v1을 덮어쓰지 않습니다.',
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
      service: '',
    },
  },
]

export const findProject = (projectId: string | undefined) =>
  projects.find((project) => project.id === projectId)
