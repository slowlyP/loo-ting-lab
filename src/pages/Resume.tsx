import { useState } from 'react'
import { TechStackBadges } from '../components/TechStackBadges'
import { resumeContent } from '../data/resume'

export function Resume() {
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false)
  const resume = resumeContent

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Developer Character Sheet
        </p>
        <h1 className="text-3xl font-black text-white">{resume.pageTitle}</h1>
        <p className="max-w-3xl leading-7 text-slate-300">{resume.intro}</p>
      </header>

      <section className="rounded-lg border border-violet-400/30 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/30 backdrop-blur md:p-6">
        <div className="space-y-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
              Basic Profile
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              {resume.name}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              {resume.headline}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {resume.basicInfo.map((info) => {
              const content = (
                <>
                  <p className="text-xs font-bold uppercase text-slate-500">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {info.value}
                  </p>
                </>
              )

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-cyan-300/40 bg-slate-950/70 p-3 transition hover:bg-cyan-300/10"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.label}
                  className="rounded-md border border-slate-700 bg-slate-950/70 p-3"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
              Resume Document
            </p>
            <h2 className="mt-2 text-xl font-black text-white">
              {resume.resumeDocument.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              {resume.resumeDocument.note}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            {resume.resumeDocument.fileUrl ? (
              <a
                href={resume.resumeDocument.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
              >
                이력서 PDF 열기
              </a>
            ) : (
              <span className="inline-flex w-fit rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-slate-400">
                이력서 PDF 추가 예정
              </span>
            )}
            {resume.externalResumeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-md border border-violet-300/60 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/10"
              >
                {link.label}
              </a>
            ))}
            {resume.externalResumeLinks.map((link) => (
              <p
                key={`${link.href}-note`}
                className="max-w-xs text-xs leading-5 text-slate-500 md:text-right"
              >
                {link.note}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">희망 직무</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          {resume.desiredRole}
        </p>
      </section>

      <section className="rounded-lg border border-violet-400/30 bg-slate-950/75 p-6 backdrop-blur">
        <h2 className="text-xl font-black text-white">Profile Summary</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          {resume.profileSummary}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-white">Core Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {resume.coreSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur"
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
          {resume.projectExperience.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur"
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

      <section className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">Education / Training</h2>
        <div className="mt-4 space-y-4">
          {resume.educationTraining.map((education) => (
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

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">자격증</h2>
          <div className="mt-4 space-y-3">
            {resume.licenses.map((license) => (
              <div
                key={license.title}
                className="rounded-lg border border-slate-700 bg-slate-950/70 p-4"
              >
                <h3 className="text-lg font-black text-white">
                  {license.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{license.issuer}</p>
                <p className="mt-3 leading-7 text-slate-300">{license.note}</p>
                <span className="mt-3 inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-slate-400">
                  정리 예정
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-violet-400/30 bg-slate-950/75 p-5 backdrop-blur">
        <h2 className="text-xl font-black text-white">자기소개 요약</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          {resume.coverLetter.summary}
        </p>
        <button
          type="button"
          onClick={() => setIsCoverLetterOpen((current) => !current)}
          className="mt-5 rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          {isCoverLetterOpen
            ? resume.coverLetter.closeLabel
            : resume.coverLetter.openLabel}
        </button>

        {isCoverLetterOpen ? (
          <div className="mt-5 space-y-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <h3 className="text-lg font-black text-white">
              자기소개 자세히 보기
            </h3>
            {resume.coverLetter.details.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">
            Portfolio Highlights
          </h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {resume.portfolioHighlights.map((item) => (
              <li key={item} className="border-l-2 border-violet-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 backdrop-blur">
          <h2 className="text-xl font-black text-white">Links / Contact</h2>
          <div className="mt-4 grid gap-3">
            {resume.contactLinks.map((contact) =>
              contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-cyan-300/70 bg-slate-950/80 p-4 font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
                >
                  {contact.label}: {contact.value}
                </a>
              ) : (
                <p
                  key={contact.label}
                  className="rounded border border-slate-700 bg-slate-950/80 p-4 text-slate-300"
                >
                  {contact.label}: {contact.value}
                </p>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
