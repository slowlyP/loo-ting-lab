import { resumeContent } from '../data/resume'

const projectLinks = [
  {
    label: 'Portfolio Repository',
    href: 'https://github.com/slowlyP/loo-ting-lab',
    description: '현재 포트폴리오 사이트 저장소',
  },
  {
    label: 'Inquiry Dataset',
    href: 'https://github.com/slowlyP/wizard-defense-ai-support',
    description: '한국어 문의 데이터셋과 rule-based classifier 저장소',
  },
  {
    label: 'STACCATO',
    href: 'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control',
    description: 'AI 기반 고속도로 돌발 상황 감지/관리 프로젝트 저장소',
  },
]

const contactTopics = [
  'AI 모델 개발과 AI 기반 분석/탐지 서비스 구현 경험',
  'Unity / C# 기반 게임 프로토타입 정리 경험',
  'Python / CSV 기반 한국어 데이터셋과 rule-based classifier 실험 경험',
  '프로젝트 문서화, worklog, validation 기록 방식',
]

export function Contact() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Contact Portal
        </p>
        <h1 className="text-3xl font-black text-white">연락 포털</h1>
        <p className="max-w-3xl leading-7 text-slate-300">
          포트폴리오와 프로젝트 기록을 확인하고 연락할 수 있도록 기본 링크를
          정리했습니다. 개인 연락처는 확인된 정보만 공개하고, 미확정 항목은
          추가 예정으로 표시합니다.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">연락 안내</h2>
          <p className="mt-3 leading-7 text-slate-300">
            채용, 협업, 프로젝트 확인과 관련된 연락 정보를 정리하는 영역입니다.
          </p>
        </div>
        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">Email</h2>
          <a
            href="mailto:vvckfn@gmail.com"
            className="mt-3 inline-flex max-w-full break-words rounded-md border border-cyan-300/70 px-3 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
          >
            vvckfn@gmail.com
          </a>
        </div>
        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">GitHub</h2>
          <a
            href="https://github.com/slowlyP"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex max-w-full rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
          >
            slowlyP 계정 보기
          </a>
        </div>
      </section>

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">
          External Access: Portfolio repository
        </h2>
        <a
          href="https://github.com/slowlyP/loo-ting-lab"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex max-w-full break-words rounded-md border border-violet-300 px-4 py-2 text-sm font-black text-violet-100 transition hover:bg-violet-300/10"
        >
          loo-ting-lab 저장소 보기
        </a>
      </section>

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">
          Resume Access
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          이력서 PDF와 외부 이력서 확인 링크를 보조 자료로 정리했습니다.
          인크루트 링크는 접속 환경에 따라 로그인 페이지가 먼저 표시될 수 있습니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {resumeContent.resumeDocument.fileUrl ? (
            <a
              href={resumeContent.resumeDocument.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-full break-words rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
            >
              이력서 PDF 열기
            </a>
          ) : (
            <span className="inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-slate-400">
              이력서 PDF 추가 예정
            </span>
          )}
          {resumeContent.externalResumeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-full break-words rounded-md border border-violet-300/70 px-4 py-2 text-sm font-black text-violet-100 transition hover:bg-violet-300/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-white">주요 프로젝트 링크</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {projectLinks.map((link) => (
            <article
              key={link.href}
              className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur"
            >
              <h3 className="text-lg font-black text-white">{link.label}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                {link.description}
              </p>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex max-w-full break-words rounded-md border border-cyan-300/70 px-3 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
              >
                링크 열기
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">
          채용 / 협업 담당자용 안내
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          이 포트폴리오는 프로젝트 결과만 보여주기보다 어떤 문제를 다뤘고,
          어떤 구조로 정리했으며, 무엇을 검증했고 어떤 한계가 남아 있는지
          확인할 수 있도록 구성했습니다. 아래 주제와 관련된 확인 요청을 받을
          수 있도록 연락 정보를 계속 정리할 예정입니다.
        </p>
        <ul className="mt-4 space-y-3 text-slate-300">
          {contactTopics.map((topic) => (
            <li key={topic} className="border-l-2 border-violet-300 pl-3">
              {topic}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
