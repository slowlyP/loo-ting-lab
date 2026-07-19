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
  'wizard-defense': {
    subtitle: 'Unity 2D casual fantasy tower-defense prototype for PC / Steam',
    status: 'Playable prototype',
    summary: 'A personal casual fantasy tower-defense prototype centered on random summons, elemental fusion, Tier 2 auto skills, Legendary Resonance, and auto battle. It is being expanded for a PC / Steam-oriented play environment.',
    role: 'Used Unity and C# to implement and document the battle loop, floor progression, summons, elemental fusion, Tier 2 auto skills, Legendary Resonance, shared settings UI, and game-speed controls.',
    highlights: ['Built a flow from floor selection and combat to summons, fusion, legendary wizards, round clear, and the next floor', 'Positioned normal-wizard and elemental fusion—not only rare draws—as the central source of decisions', 'Separated normal, fused, and legendary wizard roles so randomness and player choice can work together'],
    problemSolving: ['Added elemental fusion as a player-driven growth choice so random summons do not remove agency.', 'Separated legendary wizards from the fusion pool and automated Resonance from the number of matching legendary units.', 'Separated confirmed implementation from future plans and tracked the personal project with Git.'],
    detail: {
      overview: ['Random Wizard Defense is a personal Unity 2D portfolio game project.', 'It is a casual fantasy tower-defense game for PC / Steam and is currently a playable prototype.', 'The current direction considers mouse controls and a PC play environment, while leaving room for a possible Steam demo and future public release.'],
      coreStructure: ['The loop runs from floor selection to combat, random summons, elemental fusion, legendary-wizard appearances, round clear, and the next floor.', 'Fire, water, wind, stone, and lightning combinations create fused wizards whose Tier 2 variants use unique auto skills.', 'Legendary Resonance activates automatically with two or more matching legendary wizards and deactivates at one or fewer; the battle UI shows Resonance state and unit count.', 'Legendary skills define cooldown, damage, range, target count, duration, and buff upgrades for each role.', 'ESC opens the shared SettingsPanel and pauses the game; BGM, sound-effect, fullscreen, display order, and input behavior are managed in the shared flow.', 'Combat speed switches between 1x and 2x and the current speed is shown in the UI.'],
      responsibilities: ['Organized the main Unity and C# flow of the 2D tower-defense prototype.', 'Separated floor selection, combat entry, round progress, and floor unlocks into portfolio-ready units.', 'Documented the different roles of random summons, normal fusion, elemental fusion, and legendary wizards.', 'Kept confirmed features distinct from future work.'],
      implementationStatus: { completed: ['Playable prototype, battle loop, random summons, and auto battle', 'Arden, Orphel, Lumiel, and Novarin with distinct skill parameters', 'Arcane Research and 1–50 floor-selection UI', 'Elemental combinations and fused-wizard creation', 'Unique Tier 2 fused-wizard auto skills', 'Automatic Legendary Resonance activation at two matching units and deactivation at one or fewer', 'Battle UI for Resonance state and matching-unit count', 'ESC settings display with Time.timeScale pause/resume', 'Shared SettingsPanel display order and input handling', 'Realtime persisted BGM volume, persisted sound-effect values, and fullscreen toggle', '1x/2x combat speed switching and current-speed UI', 'Git version control'], inProgress: ['Refining the direction for a PC play environment and possible Steam demo', 'Balancing additional elemental combinations and Tier 2 auto skills', 'Checking play synergy between Legendary Resonance and fused wizards'], planned: ['Review mouse controls, PC resolutions, and UI for a possible Steam demo.', 'Add a Steam page, external demo, or repository link only after each URL is confirmed.', 'Add new Resonance-exclusive skills for each legendary wizard.'] },
      problemSolving: ['Kept elemental fusion as player-controlled growth so play does not depend only on legendary draws.', 'Synchronized Resonance state and battle UI by activating it at two matching legendary units and removing it at one or fewer.', 'Unified BGM, sound-effect, fullscreen, display-order, and input behavior in the shared SettingsPanel.', 'Reduced repeated-play friction with 1x/2x speed controls and a visible current-speed state.', 'Separated completed, in-progress, and planned items to stay within confirmed scope.'],
      outcomes: ['Explained the game through its playable loop rather than a flat feature list.', 'Created a portfolio structure that separates design intent from implementation status.', 'Clarified elemental fusion, Tier 2 auto skills, and Legendary Resonance as implemented systems while separating future combinations and balance work.'],
      evidence: ['The v1.2.3 confirmed direction and gameplay video', 'README implementation table and Steam Foundation notes', 'README, ROADMAP, CHANGELOG, and DEVLOG records'],
      scopeLimitations: ['Elemental fusion, Tier 2 auto skills, and core Legendary Resonance behavior are implemented; additional combinations and balance remain under review.', 'The project is a PC / Steam-oriented playable prototype, not a released Steam game or completed public demo.', 'The current portfolio retains fire, water, wind, stone, and lightning and does not reuse historical fusion examples.'],
      verification: ['Features are managed through branches, Unity Play Mode checks, and accompanying documentation.', 'The v1.2.2 Hero gameplay video and thumbnail fallback remain connected.'],
      milestones: ['v0.1.0-prototype: first playable prototype', 'v0.1.1-steam-pivot: shifted from mobile-first to PC / Steam', 'v0.1.2-steam-foundation: foundational PC controls', 'v0.4.0-tier2-auto-skills: implemented Tier 2 fused-wizard auto skills', 'feature/shared-settings-ui: developed the shared settings UI and persistence flow', 'PR 29: merged the shared settings UI work into main'],
    },
  },
  'inquiry-dataset': {
    subtitle: 'Data and AI support preview for classification, safe drafts, and deterministic retrieval', status: 'Deterministic support preview implemented',
    summary: 'A personal Data·AI Support project that grew from synthetic inquiry data and rule baselines into a FastAPI/React preview, reproducible local retrieval, safe response drafts, and deployment documentation.',
    role: 'Managed data policy, rule routing, FastAPI, the React preview, deterministic retrieval, a demo-only mock adapter, guardrails, and EC2 deployment verification as versioned milestones.',
    highlights: ['Expanded 100 synthetic Korean v1 inquiries to 150 v2 samples with more boundary cases', 'Connected POST /support/preview to a bilingual React support preview', 'Verified deterministic retrieval, a demo-only mock adapter, and guardrails without an external LLM'],
    problemSolving: ['Documented overlap between bug_report and feature categories.', 'Refined rules for similar wizard_growth and wizard_acquisition expressions.', 'Kept baseline and improved-rule results separate and marked the need for further validation.'],
    detail: {
      overview: ['A personal preview that classifies Random Wizard Defense inquiries and drafts Korean or English support responses from local knowledge and safety policy.', 'It extends the versioned synthetic datasets and rule/TF-IDF experiments into a FastAPI API and React/Vite UI.', 'The default path is a deterministic template; retrieval and MockLLMAdapter are local baselines for architecture validation.'],
      problem: ['Similar game terms can still require different handling as information requests, bug reports, or balance feedback.', 'Operations-oriented labels such as urgency and needs_human are needed alongside category.', 'Synthetic data cannot cover all real user language, so limitations must remain explicit.'],
      designDirection: ['Each CSV row combines Korean inquiry text and labels for direct classifier and baseline evaluation.', 'v1 began with 100 synthetic inquiries; v2 expanded to 150 with additional boundary cases.', 'v1 remains as a baseline and v2 is stored separately.', 'Weak boundaries such as bug_report, feedback_balance, wizard_growth, and gameplay_guide were targeted in v2.'],
      labelStructure: ['id: unique sample ID', 'text: synthetic Korean player inquiry', 'category: gameplay_guide, wizard_acquisition, wizard_growth, tower_progress, skill_combat, bug_report, feedback_balance', 'subcategory: detailed keywords such as placement, random_draw, resonance, floor_difficulty, cooldown_display', 'urgency: low, medium, high', 'needs_human: boolean label for automatic handling versus human review'],
      coreStructure: ['The dataset card records source, schema, distribution, limits, privacy, and future improvements.', 'The labeling guide defines categories, subcategories, urgency, needs_human, and ambiguous-case rules.', 'Error analysis tracks samples, predictions, expected labels, causes, and improvement ideas.', 'Experiment logs preserve rule baselines, TF-IDF baselines, v2 evaluation, and improved-rule settings and results.', 'POST /support/preview accepts inquiry text and an optional language and returns classification, routing, and response-draft fields.', 'The React UI shows inquiry examples, loading/error states, category, urgency, human review, routing reason, and response draft.', 'Local retrieval ranks bilingual knowledge chunks with deterministic keyword, token, and topic scoring for reproducible top_k output.', 'MockLLMAdapter is not on the default API path and is used only as a demo-only deterministic formatter.'],
      responsibilities: ['Designed category and subcategory structures for Korean game inquiries.', 'Added urgency and needs_human to reflect support operations.', 'Documented purpose, limits, and policy in the labeling guide and dataset card.', 'Verified label use through a Python rule-based classifier and test script.', 'Kept baseline evaluation and error analysis together for traceable iteration.'],
      implementationStatus: { completed: ['Versioned 100-row v1 and 150-row v2 synthetic datasets', 'Labels, guide, dataset card, rules, TF-IDF comparison, and error analysis', 'FastAPI POST /support/preview and bilingual React/Vite UI', 'Seven categories plus urgency, needs_human, suggested_response_type, and routing_reason', 'Deterministic topic knowledge, response templates, and reproducible top_k retrieval', 'Demo-only MockLLMAdapter, prompt redaction, and sensitive-request guardrails', 'EC2/Nginx/systemd deployment verification and operations documentation'], inProgress: ['Maintaining rules, boundary cases, knowledge coverage, and deterministic evaluation artifacts.'], planned: ['Require privacy review before real player logs.', 'Validate improved-rule results on holdout or new data.', 'Evaluate any real provider adapter or alternative retrieval approach only with separate approval and criteria.'] },
      classifierStructure: ['schemas.py defines InquiryResult with category, subcategory, urgency, needs_human, confidence, and matched_keywords.', 'rule_classifier.py uses Korean keyword dictionaries, issue patterns, and subcategory rules.', 'Bug keywords prioritize bug_report and also set urgency and needs_human.', 'test_rule_classifier.py compares representative outputs with expected labels.', 'rule_classifier_v2.py keeps the refined experiment separate from the original baseline.'],
      experimentLog: ['v0.3.0 recorded initial rule-classifier tests.', 'v0.4.0 recorded 60.00% accuracy on the 100-row v1 dataset.', 'v0.9.0 compared rule-based 44.67% and TF-IDF 72.67% on 150 v2 rows.', 'v0.10.0 recorded 94.00% for improved rule v2 on that dataset, with an explicit generalization warning.', 'Error analysis records boundary failures and improvement candidates.'],
      problemSolving: ['Prioritized bug_report when error language appears with feature terms.', 'Grouped strength, cost efficiency, and probability complaints under feedback_balance.', 'Separated wizard_growth from wizard_acquisition.', 'Separated build and placement guidance from skill-combat questions.', 'Kept v1 and v2 outputs separate for baseline comparison.'],
      outcomes: ['Turned the dataset into a documented portfolio unit with policy, tests, experiments, and error analysis.', 'Practiced support-flow labels through urgency and needs_human.', 'Recorded weak baselines instead of hiding them and used errors to define next steps.', 'Documented that explainable rules can overfit the expression distribution and need further validation.'],
      systemFlow: ['Inquiry → POST /support/preview → rule router → topic knowledge → deterministic local retrieval → response template → preview response.', 'Refund, payment, compensation, and restoration cases route to human review and prohibited promises are checked by guardrails.'],
      evidence: ['Versioned datasets, labeling guide, dataset card, experiments, and error analysis', 'API/frontend documentation and reproducible comparison artifacts', 'Deployment verification, operations, rollback, incident, security, and privacy records'],
      scopeLimitations: ['No OpenAI/Claude call and not a real LLM chatbot.', 'No embeddings or vector DB; retrieval is keyword/token/topic scoring and not production RAG.', 'MockLLMAdapter is a local deterministic formatter.', 'No database, ticket storage, live player data, real payment/refund handling, automated support, or production-ready guarantee.'],
      verification: ['86 backend regression tests passed', '7/7 API smoke cases passed', 'Seven Korean and seven English mock demos recorded', 'React production build and repository compile/secret scans recorded'],
      deployment: ['Verified Nginx serving the React build and proxying same-origin requests to a FastAPI systemd service on 127.0.0.1:8000.', 'The deployment verifies structure; it does not guarantee production readiness.'],
      milestones: ['v0.1–v0.10: data and classification baselines', 'v0.11–v0.19: routing, templates, FastAPI, and API contract', 'v0.20–v0.25: React, bilingual preview, deployment and operations', 'v0.26–v0.30: knowledge, retrieval, mock/guardrail, and showcase'],
      liveDemoNotice: ['https://support.slowlyp.dev is a deterministic support preview, not a live helpdesk or external-LLM service.'],
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
  'inquiry-dataset': { labels: ['GitHub repository', 'Dataset v1 CSV', 'Dataset v2 CSV', 'Labeling guide', 'Dataset card', 'Rule classifier', 'Experiment log', 'Error analysis'], notes: ['Confirmed repository for the dataset, classifier, and experiment records.', '100 synthetic Korean inquiries in the v1 dataset.', '150 synthetic Korean inquiries with additional boundary cases.', 'Category, subcategory, urgency, needs_human, and boundary rules.', 'Source, schema, limitations, and privacy notice.', 'Korean keyword-based rule classifier.', 'Settings and results for baseline, TF-IDF, and improved-rule experiments.', 'Misclassification patterns and improvement candidates.'] },
  'ai-accident-detection': { labels: ['GitHub repository', 'Presentation PDF'], notes: ['Project code and README.', 'Confirmed project presentation document.'] },
}

const mediaCopy: Record<string, { titles?: string[]; note: string }> = {
  staccato: { titles: ['STACCATO demo video'], note: 'The GitHub documentation and demo video show the monitoring flow. Clearer visuals for event lists, incident details, Snapshot, and MP4 Replay can be added later.' },
  'wizard-defense': { note: 'The representative preview image and gameplay video are connected at the top of the detail page so the playable flow can be reviewed. An external demo or Steam page will be added separately when ready.' },
  'inquiry-dataset': { note: 'Images and video will be added when verified assets are available.' },
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
