import { Link, useParams } from 'react-router'
import { TechStackBadges } from '../components/TechStackBadges'
import { findProject } from '../data/projects'

type DetailSectionProps = {
  title: string
  items: string[]
  tone?: 'cyan' | 'violet'
}

function DetailSection({ title, items, tone = 'cyan' }: DetailSectionProps) {
  const borderColor = tone === 'cyan' ? 'border-cyan-300' : 'border-violet-300'

  return (
    <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className={`border-l-2 ${borderColor} pl-3 leading-7`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

type StatusColumnProps = {
  title: string
  items: string[]
  tone: 'cyan' | 'violet' | 'amber'
}

function getArtifactActionLabel(kind: string, label: string) {
  if (kind === 'repository') {
    return '저장소 보기'
  }

  if (label.toLowerCase().includes('pdf')) {
    return 'PDF 보기'
  }

  return '자료 보기'
}

function StatusColumn({ title, items, tone }: StatusColumnProps) {
  const toneClass = {
    cyan: 'border-cyan-300 text-cyan-100',
    violet: 'border-violet-300 text-violet-100',
    amber: 'border-amber-300 text-amber-100',
  }[tone]

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-950/80 p-4">
      <h3 className={`border-l-2 pl-3 text-lg font-black ${toneClass}`}>
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const project = findProject(projectId)

  if (!project) {
    return (
      <section className="rounded-lg border border-slate-700 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300">
          Stage Missing
        </p>
        <h1 className="mt-2 text-3xl font-black text-white">
          프로젝트를 찾을 수 없습니다
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
        >
          프로젝트 목록으로 돌아가기
        </Link>
      </section>
    )
  }

  const hasScreenshots = Boolean(project.detail?.media?.screenshots?.length)
  const hasVideos = Boolean(project.detail?.media?.videos?.length)

  return (
    <article className="space-y-6">
      <Link
        to="/projects"
        className="inline-flex text-sm font-bold text-cyan-300 transition hover:text-cyan-100"
      >
        프로젝트 목록으로
      </Link>

      <header className="rounded-lg border border-violet-400/30 bg-slate-900/90 p-5 sm:p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
          {project.category} · {project.stage}
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-black text-white">{project.title}</h1>
            <p className="mt-2 leading-7 text-slate-300">
              {project.subtitle}
            </p>
          </div>
          <span className="w-fit shrink-0 rounded border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-black text-cyan-100">
            {project.status}
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-[1fr_0.7fr]">
        <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">프로젝트 개요</h2>
          <p className="mt-3 font-semibold leading-7 text-cyan-100">
            {project.role}
          </p>
          <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
          <ul className="mt-5 space-y-3 text-slate-300">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l-2 border-cyan-300 pl-3 leading-7"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
          <h2 className="text-xl font-black text-white">사용 기술스택</h2>
          <div className="mt-4">
            <TechStackBadges techs={project.tech} />
          </div>
        </aside>
      </section>

      <DetailSection
        title="문제 해결 / 설계 포인트"
        items={project.problemSolving}
        tone="violet"
      />

      {project.detail ? (
        <>
          <DetailSection title="프로젝트 개요" items={project.detail.overview} />
          {project.detail.problem ? (
            <DetailSection
              title="해결하려는 문제"
              items={project.detail.problem}
              tone="violet"
            />
          ) : null}
          {project.detail.designDirection ? (
            <DetailSection
              title="데이터셋 설계 방향"
              items={project.detail.designDirection}
            />
          ) : null}
          {project.detail.labelStructure ? (
            <DetailSection
              title="라벨 구조"
              items={project.detail.labelStructure}
              tone="violet"
            />
          ) : null}
          <DetailSection
            title={
              project.id === 'wizard-defense'
                ? '게임 핵심 구조'
                : project.id === 'staccato'
                  ? '아키텍처 / 데이터 흐름'
                : '문서 / 데이터 구성'
            }
            items={project.detail.coreStructure}
          />
          <DetailSection
            title="내가 맡은 역할"
            items={project.detail.responsibilities}
            tone="violet"
          />

          <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
            <h2 className="text-xl font-black text-white">구현 상태 구분</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <StatusColumn
                title="구현 / 작성한 내용"
                items={project.detail.implementationStatus.completed}
                tone="cyan"
              />
              <StatusColumn
                title="진행 중인 내용"
                items={project.detail.implementationStatus.inProgress}
                tone="violet"
              />
              <StatusColumn
                title="향후 확장 예정"
                items={project.detail.implementationStatus.planned}
                tone="amber"
              />
            </div>
          </section>

          {project.detail.classifierStructure ? (
            <DetailSection
              title="규칙 기반 분류기 구조"
              items={project.detail.classifierStructure}
              tone="violet"
            />
          ) : null}

          {project.detail.experimentLog ? (
            <DetailSection
              title="실험 / 기록 방식"
              items={project.detail.experimentLog}
              tone="violet"
            />
          ) : null}

          {project.detail.metrics?.length ? (
            <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
              <h2 className="text-xl font-black text-white">
                확인된 결과 지표
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {project.detail.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-slate-700 bg-slate-950/80 p-4"
                  >
                    <p className="text-sm font-bold uppercase text-violet-300">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-black text-cyan-100">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <DetailSection
            title="문제 해결 / 설계 포인트"
            items={project.detail.problemSolving}
            tone="violet"
          />
          <DetailSection title="결과 및 배운 점" items={project.detail.outcomes} />

          {project.detail.artifacts?.length ? (
            <section className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
              <h2 className="text-xl font-black text-white">프로젝트 자료</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {project.detail.artifacts.map((artifact) => {
                  const isExternal = artifact.pathOrUrl.startsWith('http')
                  const content = (
                    <>
                      <p className="text-sm font-bold text-cyan-100">
                        {artifact.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {artifact.note}
                      </p>
                      <p className="mt-3 break-words text-xs text-slate-500">
                        {artifact.pathOrUrl}
                      </p>
                      {isExternal ? (
                        <span className="mt-4 inline-flex rounded-md border border-cyan-300/70 px-3 py-2 text-sm font-black text-cyan-100 transition group-hover:bg-cyan-300/10">
                          {getArtifactActionLabel(
                            artifact.kind,
                            artifact.label,
                          )}
                        </span>
                      ) : null}
                    </>
                  )

                  return isExternal ? (
                    <a
                      key={artifact.label}
                      href={artifact.pathOrUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-lg border border-slate-700 bg-slate-950/80 p-4 transition hover:border-cyan-300 hover:bg-slate-950"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={artifact.label}
                      className="rounded-lg border border-slate-700 bg-slate-950/80 p-4"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>
            </section>
          ) : null}

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
              <h2 className="text-xl font-black text-white">
                {hasVideos ? '시연 영상 / 이미지' : '이미지 / 영상 추가 예정'}
              </h2>
              {hasScreenshots || hasVideos ? (
                <div className="mt-4 space-y-3 text-slate-300">
                  {project.detail.media?.screenshots?.map((screenshot) => (
                    <figure
                      key={screenshot.src}
                      className="rounded border border-slate-700 p-3"
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full rounded"
                      />
                      <figcaption className="mt-2 text-sm text-slate-400">
                        {screenshot.caption}
                      </figcaption>
                    </figure>
                  ))}
                  {project.detail.media?.videos?.map((video) => (
                    <a
                      key={video.url}
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-md border border-cyan-300 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
                    >
                      {video.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 leading-7 text-slate-300">
                  {project.detail.media?.note ??
                    '확인된 이미지와 영상 링크가 없어 추가 예정으로 표시합니다.'}
                </p>
              )}
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-5">
              <h2 className="text-xl font-black text-white">GitHub 링크</h2>
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-md border border-violet-300 px-4 py-2 text-sm font-black text-violet-100 transition hover:bg-violet-300/10"
                >
                  저장소 보기
                </a>
              ) : (
                <p className="mt-4 leading-7 text-slate-300">
                  확인된 GitHub 저장소 URL이 없어 추가 예정으로 표시합니다.
                </p>
              )}
            </div>
          </section>
        </>
      ) : null}
    </article>
  )
}
