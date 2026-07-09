import { useState } from 'react'
import { TechStackBadges } from '../components/TechStackBadges'

const basicInfo = [
  { label: '이름', value: '송명근' },
  { label: '희망 직무', value: '프론트엔드 / 웹 개발 / 프로젝트형 개발 직무' },
  { label: 'Email', value: '추가 예정' },
  { label: 'GitHub', value: 'slowlyP' },
]

const coreSkills = [
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
]

const projectExperience = [
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
]

const educationTraining = [
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
]

const coverLetterDetails = [
  '저는 프로젝트를 단순히 완성 여부로만 설명하기보다, 어떤 문제를 다뤘고 어떤 구조로 풀었으며 무엇을 검증했는지 기록하는 방식에 관심이 있습니다.',
  'STACCATO에서는 AI 탐지 결과가 실제 관제 화면에서 확인 가능한 이벤트, 알림, 스냅샷, 리플레이 흐름으로 이어지는 구조를 이해하고 정리했습니다.',
  'Wizard Defense에서는 Unity와 C#을 사용한 개인 게임 프로토타입을 기획/구현 상태로 나누어 관리하며, 랜덤성과 플레이어 선택성이 함께 작동하는 구조를 정리했습니다.',
  'Inquiry Dataset에서는 한국어 합성 문의 데이터셋을 만들고, 라벨링 기준과 dataset card, rule-based classifier, 실험 기록, 오류 분석을 함께 남기는 방식으로 데이터 프로젝트를 관리했습니다.',
  '아직 모든 경험이 완성된 전문가 수준이라고 말하기보다는, 확인 가능한 프로젝트를 바탕으로 구조화하고 검증하며 꾸준히 개선하는 개발자로 성장하고 있습니다.',
]

const portfolioHighlights = [
  'React + TypeScript 기반 개인 포트폴리오를 직접 구성',
  'AI 관제, Unity 게임 프로토타입, 한국어 데이터셋 프로젝트를 취업용 경험으로 정리',
  '프로젝트별 역할, 사용 기술, 문제 해결, 검증 결과, 한계를 구분해 기록',
]

export function Resume() {
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false)

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Resume
        </p>
        <h1 className="text-3xl font-black text-white">
          이력서 / 자기소개 요약
        </h1>
        <p className="max-w-3xl leading-7 text-slate-300">
          프로젝트를 구조화하고 구현 내용과 검증 기록을 함께 남기는 방식으로
          성장하고 있는 개발자 포트폴리오입니다.
        </p>
      </header>

      <section className="grid gap-5 rounded-lg border border-violet-400/30 bg-slate-900/90 p-5 md:grid-cols-[180px_1fr] md:p-6">
        <div>
          <div className="flex aspect-[3/4] w-full max-w-[180px] flex-col items-center justify-center rounded-lg border border-dashed border-cyan-300/50 bg-slate-950/70 p-4 text-center">
            <p className="text-sm font-black text-cyan-100">
              증명사진 추가 예정
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              권장 비율 3:4
              <br />
              300x400px 또는 360x480px
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
              Basic Profile
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">송명근</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              React, TypeScript, Unity, Python 기반 프로젝트를 포트폴리오로
              정리하며, 구현 내용과 검증 기록을 함께 보여주는 개발자를 목표로
              하고 있습니다.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {basicInfo.map((info) => (
              <div
                key={info.label}
                className="rounded-md border border-slate-700 bg-slate-950/70 p-3"
              >
                <p className="text-xs font-bold uppercase text-slate-500">
                  {info.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
        <h2 className="text-xl font-black text-white">희망 직무</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          React와 TypeScript 기반 웹 UI 구현을 중심으로, 프로젝트 구조를
          이해하고 문서화하며 검증 결과를 남기는 개발 직무를 희망합니다.
          AI/데이터 프로젝트와 Unity 게임 프로토타입 경험은 서비스 흐름과
          시스템 구조를 이해하는 보조 경험으로 정리하고 있습니다.
        </p>
      </section>

      <section className="rounded-lg border border-violet-400/30 bg-slate-900/90 p-6">
        <h2 className="text-xl font-black text-white">Profile Summary</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          React 기반 포트폴리오, Unity 게임 프로토타입, 한국어 문의 데이터셋
          프로젝트를 통해 화면 구성, 게임 시스템 이해, 데이터 라벨링 기준 정리,
          규칙 기반 분류 실험을 경험했습니다. 현재는 프로젝트별 역할과 검증
          과정을 취업용으로 설명할 수 있도록 정리하고 있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-white">Core Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {coreSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-lg border border-slate-700 bg-slate-900/90 p-5"
            >
              <h3 className="text-lg font-black text-cyan-100">
                {skill.title}
              </h3>
              <div className="mt-4">
                <TechStackBadges techs={skill.items} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-white">Project Experience</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {projectExperience.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-slate-700 bg-slate-900/90 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
                {project.role}
              </p>
              <h3 className="mt-2 text-lg font-black text-white">
                {project.name}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.summary}
              </p>
              <div className="mt-4">
                <TechStackBadges techs={project.tags} size="sm" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
        <h2 className="text-xl font-black text-white">Education / Training</h2>
        <div className="mt-4 space-y-4">
          {educationTraining.map((education) => (
            <article
              key={education.title}
              className="rounded-lg border border-slate-700 bg-slate-950/70 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-black text-cyan-100">
                    {education.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    {education.description}
                  </p>
                </div>
                <span className="w-fit rounded border border-violet-300/50 px-3 py-1 text-sm font-bold text-violet-100">
                  {education.period}
                </span>
              </div>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {education.learned.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-cyan-300 pl-3 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-violet-400/30 bg-slate-900/90 p-5">
        <h2 className="text-xl font-black text-white">자기소개 요약</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          저는 프로젝트를 구현하고 끝내기보다, 구조와 역할, 검증 결과를 함께
          남기는 방식으로 개발 경험을 정리하고 있습니다. 웹 UI, 게임
          프로토타입, 데이터셋 프로젝트를 각각 다루며 확인된 사실과 향후 확장
          예정 내용을 분리해 설명하는 데 집중하고 있습니다.
        </p>
        <button
          type="button"
          onClick={() => setIsCoverLetterOpen((current) => !current)}
          className="mt-5 rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          {isCoverLetterOpen ? '자기소개 접기' : '자기소개 자세히 보기'}
        </button>

        {isCoverLetterOpen ? (
          <div className="mt-5 space-y-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <h3 className="text-lg font-black text-white">
              자기소개 자세히 보기
            </h3>
            {coverLetterDetails.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">
            Portfolio Highlights
          </h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {portfolioHighlights.map((item) => (
              <li key={item} className="border-l-2 border-violet-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">Links / Contact</h2>
          <div className="mt-4 grid gap-3">
            <p className="rounded border border-slate-700 bg-slate-950/80 p-4 text-slate-300">
              Email: 추가 예정
            </p>
            <a
              href="https://github.com/slowlyP"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-cyan-300/70 bg-slate-950/80 p-4 font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              GitHub: slowlyP
            </a>
            <p className="rounded border border-slate-700 bg-slate-950/80 p-4 text-slate-300">
              학력 / 자격증 / 상세 연락 정보: 정리 예정
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
