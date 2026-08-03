import { projects, type Project, type ProjectArtifact, type ProjectMetric } from '../data/projects'
import type { Language } from './types'

type ProjectCopy = Pick<Project, 'subtitle' | 'status' | 'summary' | 'role' | 'highlights' | 'problemSolving'> & {
  detail?: Partial<NonNullable<Project['detail']>>
}

const en: Record<string, ProjectCopy> = {
  staccato: {
    subtitle: 'AI-powered highway incident detection and management project',
    status: 'Core prototype completed',
    summary: 'An AI monitoring MVP that analyzes highway CCTV and reported videos, turns stopped vehicles and shoulder stops into incidents, and connects them to alerts and replays in an operations dashboard.',
    role: 'Participated in reviewing and documenting the flow from AI analysis through the Flask API and MySQL metadata to the Next.js dashboard, including how video analysis results appear in the service.',
    highlights: [
      'Documented the flow from CCTV and report-video analysis to incidents, alerts, and replay',
      'Reviewed the Gateway-centered structure separating Frontend, Flask, AI, ITS, and DB VM roles',
      'Checked runtime status using Linux VM, systemd, deployment, and operations documentation',
    ],
    problemSolving: [
      'Narrowed down missing AI results by checking API responses, media URLs, permissions, and server status together.',
      'Reviewed the design that stores file paths and metadata separately instead of placing large video files in the database.',
      'Traced the points where realtime alerts, incident details, and report-video results cross separate servers.',
    ],
    detail: {
      overview: [
        'STACCATO is an AI monitoring MVP that detects stopped vehicles and shoulder stops in highway CCTV footage and exposes them as events in an operations dashboard.',
        'The confirmed project documentation covers YOLOv11 detection, stop estimation from bbox-center movement, an ROI / Rule Engine, Flask API Gateway, MySQL metadata, Socket.IO alerts, and a Next.js dashboard.',
        'This case study describes the team-built MVP and its service flow; it does not present the project as a commercially operated service.',
      ],
      problem: [
        'Continuous manual CCTV monitoring can miss stopped vehicles and shoulder stops.',
        'Raw model output alone is difficult for operators to review as event lists, details, snapshots, and replays.',
        'CCTV events, reports, analysis results, media, and access control must connect across the API, database, UI, and media proxy.',
      ],
      coreStructure: [
        'A FastAPI AI service receives CCTV or report footage and uses YOLOv11 to detect vehicles.',
        'It estimates stops from bbox-center movement and classifies LANE_STOP or SHOULDER_STOP through the ROI / Rule Engine.',
        'The AI VM sends event JSON, snapshots, and MP4 Replay metadata to the Flask API Gateway, which stores event metadata and file paths in MySQL.',
        'Flask Socket.IO delivers new-incident alerts to the Next.js dashboard, where operators review lists, details, snapshots, and replay.',
        'Frontend, Flask, AI, ITS, and DB VMs separate UI, API brokering, inference, traffic/CCTV integration, and storage responsibilities.',
        'The Frontend calls only the Flask API Gateway and never accesses AI, ITS, or DB servers directly; the Gateway brokers authenticated requests between services.',
        'incident_reports stores report media and report information, detection_logs stores AI results and evidence, incidents manages official incident events, and notifications manages realtime alerts and event processing.',
      ],
      responsibilities: [
        'Reviewed and documented the end-to-end flow from AI results to Flask, MySQL, and the Next.js dashboard.',
        'Verified how CCTV and report analysis, snapshots, and MP4 Replay metadata are exposed in the UI.',
        'Participated in tracing issues across Flask responses, frontend state, the AI media proxy, and server runtime status.',
        'Used deployment and operations records to describe the VM and systemd structure without overstating ownership.',
        'Items without confirmed individual ownership remain described as participation, verification, and architecture review.',
      ],
      implementationStatus: {
        completed: ['Confirmed highway CCTV vehicle-detection flow', 'YOLOv11 detection and bbox-center stop-estimation flow', 'ROI / Rule Engine classification for LANE_STOP and SHOULDER_STOP', 'Flask API Gateway and MySQL metadata structure', 'Gateway-centered Frontend, Flask, AI, ITS, and DB VM separation', 'Frontend access through the Flask API Gateway without direct AI, ITS, or DB access', 'Incident-centered incident_reports, detection_logs, incidents, and notifications data flow', 'POST /reports → POST /reports/{id}/analyze → GET /incidents → PATCH /incidents/{id}/status API flow', 'Socket.IO realtime incident alerts', 'Next.js event list, details, Snapshot, and MP4 Replay flow', 'Report upload and analysis-result flow', 'Documented authenticated AI media proxy and role-based access policy', 'Signup, login, admin approval, mypage, and event-video download flow'],
        inProgress: ['Organized the monitoring structure around the path from report/CCTV analysis to incident events, alerts, snapshots, and MP4 Replay.', 'Separated VM responsibilities so the Frontend calls only the Flask API Gateway while AI, ITS, and DB services connect through the Gateway.'],
        planned: ['Add clearer visual material for the event list, incident details, Snapshot, and MP4 Replay flow.', 'Keep the GitHub documentation and demo video available alongside the development/demo service, which may show a browser security warning depending on the access environment.'],
      },
      problemSolving: ['Checked API responses, media URLs, permissions, AI VM status, and Socket.IO together when results were missing.', 'Separated database metadata responsibility from large media-file delivery.', 'Documented authenticated snapshot and replay access through the AI media proxy.', 'Learned to isolate failures across the AI, Flask, Frontend, ITS, and DB VMs.', 'Used the Flask API Gateway as the single Frontend entry point to separate authentication, brokering, and failure boundaries.', 'Traced both report-video and CCTV entry points to the shared dashboard flow.'],
      outcomes: ['Organized model output as an operator-facing flow of incidents, alerts, snapshots, and MP4 Replay.', 'Learned that API contracts, metadata, authenticated media, realtime alerts, and operations records matter alongside model accuracy.', 'Presented team-project participation and architecture understanding without claiming unverified individual implementation.'],
      systemFlow: ['Sign in, review the dashboard event list, open detection details with Snapshot and MP4 Replay, download media when needed, and monitor realtime alerts.', 'Report videos enter through a separate analysis path and join the shared operations flow.', 'Report submission → AI analysis request → detection_logs evidence → incidents conversion → notifications realtime alert forms the incident-centered DB/API flow.', 'POST /reports, POST /reports/{id}/analyze, GET /incidents, and PATCH /incidents/{id}/status connect report registration, analysis, incident review, and status updates.'],
      evidence: ['Final MVP Summary and scope documentation', 'User/admin manuals, release checklist, AI operations records, and VM infrastructure documentation', 'Confirmed repository, demo environment, and demo video'],
      scopeLimitations: ['Map/GPS, LLM/chatbot, Docker Compose runtime, reinforcement learning, and automatic retraining are excluded from the Final MVP.', 'This is a team-built and verified monitoring MVP, not a commercially operated service.'],
      deployment: ['DB VM runs MySQL, Flask VM brokers APIs, Frontend VM runs Next.js, AI VM runs FastAPI inference, and ITS VM handles traffic/CCTV integration.', 'The Frontend calls only the Flask API Gateway; AI, ITS, and DB services are reached through the Gateway.'],
      liveDemoNotice: ['The development/demo environment uses a self-signed certificate, so browsers may display a security warning.'],
    },
  },
  'animal-pang': {
    subtitle: 'A mobile casual animal-block physics puzzle preparing for an AppInToss release',
    status: 'Preparing for AppInToss Release',
    summary: 'A mobile casual puzzle game about dropping and stacking animal blocks, merging matching animals, and building a higher score through short repeatable sessions. It is being prepared for an AppInToss release.',
    role: 'Building a personal Unity and C# project around drop and rotate controls, animal-block merging, score, game-over and retry flow, portrait mobile UI, and a casual asset direction.',
    highlights: ['Core physics-puzzle play based on dropping and stacking animal blocks', 'Short repeatable sessions where matching animal blocks merge and increase the score', 'Portrait mobile UI with drop and rotate buttons, a score HUD, and a ranking-screen flow', 'Quick retry flow designed for an upcoming AppInToss release'],
    problemSolving: ['Kept drop and merge rules simple so the goal remains easy to understand on a portrait mobile screen.', 'Organized drop and rotate as screen controls suitable for one-handed play and touch-target review.', 'Separated the upcoming release state from current implementation and described ranking only as UI and competition-flow preparation.'],
    detail: {
      overview: ['Stack Stack Animal Pang is a personal mobile casual puzzle game being prepared for release on AppInToss.', 'The game is built around dropping and stacking animal blocks, merging matching animals, and increasing the score through short repeatable play sessions.', 'Controls, HUD, game-over, retry, and ranking-screen flow are organized around a portrait mobile screen.'],
      problem: ['Short mobile sessions need understandable placement and rotation controls plus a quick retry path.', 'Animal blocks and merge results need to remain visually distinct on a small portrait screen.', 'Because this is a pre-release project, implemented play elements must remain separate from balance and ranking-competition preparation.'],
      designDirection: ['Keep the play area, score HUD, and drop/rotate controls concise on a portrait mobile screen.', 'Use distinct shapes and colors for animal blocks such as rabbits, foxes, dogs, and cats with a casual title, button, and panel style.', 'Build around short sessions that move quickly from game over to retry.'],
      coreStructure: ['Animal block → position and rotate → drop and stack → merge matching animals → increase score → game over → retry.', 'Simple mobile controls center on drop and rotate buttons.', 'The score HUD connects to a ranking-screen flow, while ranking competition remains a release-preparation item.'],
      responsibilities: ['Built the basic play structure of a Unity and C# mobile physics puzzle.', 'Organized animal-block merging, score, game-over, and retry flow.', 'Designing portrait UI, touch targets, and the asset direction for animal blocks and ranking panels.'],
      implementationStatus: {
        completed: ['Portrait mobile game-screen layout', 'Drop and rotate control UI for animal blocks', 'HUD showing score and game progress', 'Core UI asset direction for the title, buttons, and ranking panel', 'Animal-block concepts including rabbit, fox, dog, and cat'],
        inProgress: ['Tuning pre-release play feel, difficulty, and score balance', 'Reviewing button size, touch targets, and readability on mobile screens', 'Refining the connection between the ranking screen and repeat play'],
        planned: ['AppInToss registration and release preparation', 'Improve difficulty and scoring from actual play data', 'Add more animal blocks, effects, and UI polish', 'Improve ranking competition elements and retry flow'],
      },
      problemSolving: ['Prioritized the portrait layout so the play area and control buttons do not compete for space.', 'Designed block appearance and score feedback together so matching-animal merges remain understandable.', 'Kept AppInToss as an upcoming release and separated pre-release verification into in-progress and planned work.'],
      outcomes: ['Organized the core drop, stack, and merge loop as a portfolio-ready short-session puzzle.', 'Defined controls, HUD, game-over, and retry UI around portrait mobile play.'],
      evidence: ['Current asset direction for animal blocks, title, buttons, and ranking panels', 'Play-flow and mobile-UI review items for AppInToss release preparation'],
      scopeLimitations: ['This is an upcoming AppInToss release and has not been released yet.', 'Ranking refers to screen and user-flow preparation, not a completed online ranking backend.', 'The portfolio uses an abstract preview until verified image files are added.'],
      verification: ['Button sizes, touch areas, readability, and repeat-play flow will be reviewed on physical devices before release.', 'Difficulty and score balance will continue to be tuned through playtesting.'],
      milestones: ['Built the portrait game screen and basic controls', 'Defined the animal-block and casual UI asset direction', 'Preparing for AppInToss release and play-balance review'],
    },
  },
  'ai-accident-detection': {
    subtitle: 'Team mini-project for AI road-debris detection and risk alerts', status: 'Team project participation',
    summary: 'A team mini-project connecting AI road-debris detection with risk assessment, realtime alerts, map-based visualization, and route-risk analysis.',
    role: 'Participated as deputy lead on reports, Google Maps integration, AI development, and service integration. LLM scope is limited to generating report titles and assisting report descriptions.',
    highlights: ['Analyzed uploaded images and videos with YOLO-based object detection', 'Filtered risk and emergency cases into Flask-SocketIO realtime alerts', 'Connected map visualization and route-risk analysis in a driving-safety service'],
    problemSolving: ['Split the report, upload, and AI-analysis workflow into team implementation tasks.', 'Connected Google Maps API visualization and location data to the service UI.', 'Participated in connecting AI detection to the report and service flow rather than presenting it as a standalone model.'],
    detail: {
      overview: ['404 R·N·F AI is a team mini-project that detects road debris and provides realtime alerts from risk assessment.', 'The README confirms image/video upload analysis, map visualization, route-risk analysis, reports, and admin features.', 'It is presented as a supporting team project, not with the same weight as the three primary projects.'],
      problem: ['Road debris needs a fast flow from uploaded media to detection and risk assessment.', 'Detection must connect to reports, realtime alerts, map monitoring, and route-risk analysis to form a service workflow.'],
      coreStructure: ['YOLO or RT-DETR analyzes uploaded images or videos for debris such as rocks, boxes, and tires.', 'YOLOv8 is the base detector, YOLOv8-p2 targets small-object performance, and RT-DETR provides a Transformer-based comparison.', 'Detection data is stored and risk is classified as caution, danger, or emergency.', 'Danger or emergency results create an Alert delivered to the admin page through Flask-SocketIO.', 'Final results appear in Google Maps monitoring and Kakao Navigation route-risk analysis.', 'The Flask backend separates API, Service, Repository, and Model responsibilities.'],
      responsibilities: ['Participated as deputy lead; the scope below follows the README role and module table.', 'Worked on report submission, file upload, and AI-analysis integration.', 'Worked on Google Maps visualization and location data.', 'Worked on AI-service integration through yolo_service.py and llm_service.py; LLM scope is limited to report-title and report-description assistance.'],
      implementationStatus: { completed: ['AI road-debris detection and automatic image/video analysis', 'Rock, box, and tire classification examples', 'YOLOv8 base, YOLOv8-p2 small-object, and RT-DETR comparison roles', 'Caution/danger/emergency risk assessment and Alert flow', 'Flask-SocketIO realtime alerts', 'Google Maps visualization and Kakao Navigation route-risk analysis', 'API, Service, Repository, and Model backend layers', 'SQLAlchemy models and Flask-Migrate/Alembic schema history', 'Report and AI-analysis integration', 'Same-data comparison across three detection models', 'MySQL data management'], inProgress: ['Organized the end-to-end flow from uploaded media through AI analysis, risk classification, realtime alerts, and map-based review.', 'Compared YOLOv8, YOLOv8-p2, and RT-DETR results to review model-specific behavior in road-debris detection.'], planned: ['Add clearer visuals for detection results, map-based risks, and the admin-alert flow.', 'Further refine risk assessment for difficult cases such as nighttime footage, low-quality media, and small debris.'] },
      problemSolving: ['Worked within a Flask backend split into API, Service, Repository, and Model layers.', 'Connected uploaded report material to detection and risk assessment.', 'Connected detection results to location-based screens through the map API.'],
      outcomes: ['Added confirmed team participation in reporting, maps, and AI-service integration.', 'Experienced a connected Flask, SocketIO, MySQL, and object-detection structure.', 'Kept this as a lower-weight mini-project that supports the main portfolio work.'],
      systemFlow: ['Upload → object detection → Detection storage → caution/danger/emergency classification → Alert → realtime admin delivery → map and route analysis.'],
      teamContribution: ['The team scope covers detection, alerts, monitoring, route analysis, administration, and data.', 'Personal scope covers reports/uploads/AI integration, Google Maps display, and AI-service integration.', 'LLM work is limited to report-title and report-description assistance, not a general chatbot.'],
      evidence: ['Repository team/role tables, module list, system flow, presentation, code-review PDF, and demo video'],
      scopeLimitations: ['Team-wide features are not presented as solo work.', 'V2X, retraining, and smart-city applications remain future possibilities.'],
    },
  },
  'loo-ting-lab': {
    subtitle: 'A personal Portfolio Browser for evidence-backed project case studies',
    status: 'Deployed on GitHub Pages and evolving',
    summary: 'A personal React, Vite, TypeScript, and Tailwind CSS portfolio that connects ownership, bilingual content, themes, media, and validation records in a responsive Work Gallery.',
    role: 'Designed and managed the information architecture, data model, responsive UI, language and theme state, GitHub Pages delivery, and versioned work documentation.',
    highlights: ['HashRouter project browser with Team/Personal groups and detailed case studies', 'Independent KO/EN and light/dark settings persisted in localStorage', 'GitHub Pages subpath assets, project previews, and Hero-video fallback'],
    problemSolving: ['Kept HashRouter and the Vite base for static subpath routing.', 'Stored language and theme independently.', 'Used abstract and thumbnail fallbacks when media is absent or fails.'],
    detail: {
      overview: ['Loo Ting Lab is a personal portfolio website organized as an explorable project browser rather than a simple resume page.', 'It uses React 19, Vite, TypeScript, Tailwind CSS, and React Router and is deployed on GitHub Pages.', 'Confirmed, in-progress, planned, and limited scope is tracked with versioned request, validation, worklog, and release records.'],
      problem: ['A flat project list cannot clearly communicate ownership, implementation flow, evidence, and limitations.', 'Static hosting still needs stable detail routes, subpath assets, persisted settings, and media fallback.'],
      coreStructure: ['Project data and English overlays feed shared cards and detail pages.', 'ProjectBrowser groups ownership while ProjectDetail renders optional case-study sections.', 'Language and theme contexts use separate localStorage keys.', 'Preview and video paths resolve through import.meta.env.BASE_URL.', 'The responsive gallery combines project media with a canvas network background.'],
      responsibilities: ['Managed the information architecture, UI, project content, and deployment as a personal project.', 'Implemented independent language and theme state.', 'Maintained lint/build/Pages delivery and versioned documentation.'],
      implementationStatus: { completed: ['Responsive React/Vite/TypeScript/Tailwind Work Gallery', 'HashRouter list and detail routes', 'KO/EN and light/dark persistence', 'Ownership groups and project thumbnails', 'Wizard Defense Hero video with thumbnail fallback', 'Canvas network background and Resume PDF access', 'GitHub Actions and GitHub Pages delivery', 'Versioned request, validation, worklog, and release documentation'], inProgress: ['Auditing project case studies against current repositories and confirmed records.'], planned: ['Add verified media and accessibility/responsive refinements by version.'] },
      problemSolving: ['Resolved repository-subpath assets with Vite base and BASE_URL.', 'Returned to the project thumbnail when Hero video loading fails.', 'Separated confirmed facts from plans in both data and documentation.'],
      outcomes: ['Connected five projects into one evidence-oriented portfolio browser.', 'Presented frontend work together with delivery and documentation practice.'],
      systemFlow: ['Work Gallery → project card → HashRouter detail route → case study and verified external resources.'],
      evidence: ['Repository source, workflow/version records, and GitHub Actions Pages configuration', 'Public GitHub Pages deployment'],
      scopeLimitations: ['Not a CMS or automatic translation system; KO/EN content is maintained directly.', 'A static React portfolio, not SSR or a video-streaming system.'],
      verification: ['Every completed version must pass ESLint and the TypeScript/Vite production build.', 'The Pages workflow runs npm ci, lint, and build before deployment.'],
      deployment: ['Uses Vite base /loo-ting-lab/ and HashRouter for the GitHub Pages repository subpath.', 'Deploys from main or manual workflow dispatch through GitHub Actions Pages.'],
      milestones: ['v1.0: GitHub Pages preparation', 'v1.1: Work/About/Detail redesign and KO/EN', 'v1.2: light/dark and network tuning', 'v1.3: GitHub content audit'],
      liveDemoNotice: ['The public static site reflects the release state deployed from main.'],
    },
  },
}

const artifactCopy: Record<string, { labels: string[]; notes: string[] }> = {
  staccato: { labels: ['GitHub repository'], notes: ['Project code, README, architecture, API, and operations documentation.'] },
  'ai-accident-detection': { labels: ['GitHub repository', 'Presentation PDF'], notes: ['Project code and README.', 'Confirmed project presentation document.'] },
}

const mediaCopy: Record<string, { titles?: string[]; note: string }> = {
  staccato: { titles: ['STACCATO demo video'], note: 'The GitHub documentation and demo video show the monitoring flow. Clearer visuals for event lists, incident details, Snapshot, and MP4 Replay can be added later.' },
  'animal-pang': { note: 'Verified image and video files are not available yet, so the abstract preview is used. Media will be connected only after the files are confirmed.' },
  'ai-accident-detection': { titles: ['404 R·N·F AI demo video'], note: 'Screenshots will be added when verified assets are available.' },
  'loo-ting-lab': { note: 'No new preview image was created; the abstract fallback is used.' },
}

function applyEnglishCopy(project: Project): Project {
  const copy = en[project.id]
  if (!copy) return project
  const artifacts = project.detail?.artifacts?.map((artifact, index): ProjectArtifact => ({ ...artifact, label: artifactCopy[project.id]?.labels[index] ?? artifact.label, note: artifactCopy[project.id]?.notes[index] ?? artifact.note }))
  const metrics = project.detail?.metrics?.map((metric, index): ProjectMetric => ({ ...metric, note: [
    'Synthetic Korean inquiries based on the game context.', 'A separate dataset with more label-boundary cases; v1 was preserved.', 'Accuracy on the 100-row v1 dataset.', 'Comparison on the 150-row v2 dataset.', 'Result on this v2 dataset; generalization requires further validation.',
  ][index] ?? metric.note }))
  const media = project.detail?.media ? { ...project.detail.media, note: mediaCopy[project.id]?.note ?? project.detail.media.note, videos: project.detail.media.videos?.map((video, index) => ({ ...video, title: mediaCopy[project.id]?.titles?.[index] ?? video.title })) } : undefined
  return { ...project, ...copy, detail: project.detail && copy.detail ? { ...project.detail, ...copy.detail, techStack: project.detail.techStack, artifacts, metrics, media } : project.detail }
}

export function getLocalizedProjects(language: Language): Project[] {
  return language === 'en' ? projects.map(applyEnglishCopy) : projects
}

export function getLocalizedProject(projectId: string | undefined, language: Language) {
  return getLocalizedProjects(language).find((project) => project.id === projectId)
}
