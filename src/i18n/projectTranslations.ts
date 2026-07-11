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
      'Reviewed the service structure separated into Flask API Gateway, AI VM, Frontend VM, and DB VM',
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
        'Frontend, Flask, AI, and DB VMs separate UI, API, inference, and storage responsibilities.',
      ],
      responsibilities: [
        'Reviewed and documented the end-to-end flow from AI results to Flask, MySQL, and the Next.js dashboard.',
        'Verified how CCTV and report analysis, snapshots, and MP4 Replay metadata are exposed in the UI.',
        'Participated in tracing issues across Flask responses, frontend state, the AI media proxy, and server runtime status.',
        'Used deployment and operations records to describe the VM and systemd structure without overstating ownership.',
        'Items without confirmed individual ownership remain described as participation, verification, and architecture review.',
      ],
      implementationStatus: {
        completed: ['Confirmed highway CCTV vehicle-detection flow', 'YOLOv11 detection and bbox-center stop-estimation flow', 'ROI / Rule Engine classification for LANE_STOP and SHOULDER_STOP', 'Flask API Gateway and MySQL metadata structure', 'Socket.IO realtime incident alerts', 'Next.js event list, details, Snapshot, and MP4 Replay flow', 'Report upload and analysis-result flow', 'Documented authenticated AI media proxy and role-based access policy'],
        inProgress: ['The portfolio only restores details confirmed in the STACCATO repository and related records.', 'Unclear individual contributions remain framed around structure, participation, and verification.'],
        planned: ['Add screenshots and presentation assets when verified URLs are available.', 'Keep portfolio access focused on the confirmed GitHub repository and demo video.'],
      },
      problemSolving: ['Checked API responses, media URLs, permissions, AI VM status, and Socket.IO together when results were missing.', 'Separated database metadata responsibility from large media-file delivery.', 'Documented authenticated snapshot and replay access through the AI media proxy.', 'Learned to isolate failures across the AI, Flask, Frontend, and DB VMs.', 'Traced both report-video and CCTV entry points to the shared dashboard flow.'],
      outcomes: ['Organized model output as an operator-facing flow of incidents, alerts, snapshots, and MP4 Replay.', 'Learned that API contracts, metadata, authenticated media, realtime alerts, and operations records matter alongside model accuracy.', 'Presented team-project participation and architecture understanding without claiming unverified individual implementation.'],
    },
  },
  'wizard-defense': {
    subtitle: 'Unity 2D casual fantasy tower-defense prototype for PC / Steam',
    status: 'Playable prototype',
    summary: 'A personal casual fantasy tower-defense prototype centered on random wizard summons, normal-wizard fusion, elemental fusion, and synergy experiments with legendary wizards. Its current planning direction targets PC and Steam.',
    role: 'Used Unity and C# to organize the battle loop, floor selection, rounds, random summons, normal-wizard fusion, and legendary-wizard structure into confirmed, in-progress, and planned work.',
    highlights: ['Built a flow from floor selection and combat to summons, fusion, legendary wizards, round clear, and the next floor', 'Positioned normal-wizard and elemental fusion—not only rare draws—as the central source of decisions', 'Separated normal, fused, and legendary wizard roles so randomness and player choice can work together'],
    problemSolving: ['Added normal-wizard and elemental fusion as player-driven growth choices so random summons do not remove agency.', 'Kept legendary wizards outside the fusion pool as rare variables with distinct synergy roles.', 'Separated confirmed implementation from future plans and tracked the personal project with Git.'],
    detail: {
      overview: ['Wizard Defense is the personal portfolio game documented as Random Wizard Defense in its planning notes.', 'It is a Unity 2D casual fantasy tower-defense game for PC / Steam and is currently a playable prototype.', 'The current direction considers mouse controls, a PC play environment, a possible Steam demo, and a future Steam release.'],
      coreStructure: ['The loop runs from floor selection to combat, random summons, normal-wizard fusion, discovery, legendary-wizard appearances, synergy, round clear, and the next floor.', 'Normal wizards develop through fusion; legendary wizards remain separate rare units.', 'Legendary wizards create large shifts, while normal-wizard fusion creates varied combinations each run.', 'Confirmed elemental examples include fire + water → mist, mist + wood → poison, lightning + wind → storm, and stone + fire → lava.'],
      responsibilities: ['Organized the main Unity and C# flow of the 2D tower-defense prototype.', 'Separated floor selection, combat entry, round progress, and floor unlocks into portfolio-ready units.', 'Documented the different roles of random summons, normal fusion, elemental fusion, and legendary wizards.', 'Kept confirmed features distinct from future work.'],
      implementationStatus: { completed: ['Playable prototype', 'Battle loop', 'Random wizard summon flow', 'Legendary wizard skill structure', 'Floor selection flow', 'Round progression flow', 'Git version control'], inProgress: ['Refining the direction for a PC play environment and possible Steam demo', 'Refining normal and elemental fusion as the main source of fun', 'Testing synergy between legendary and fused wizards'], planned: ['Review mouse controls, PC resolutions, and UI for a possible Steam demo.', 'Add a Steam page or demo link only after it is confirmed.', 'Add screenshots, video, and a repository link when verified URLs are available.'] },
      problemSolving: ['Separated normal and elemental fusion as player-controlled growth so play does not depend only on legendary draws.', 'Gave legendary skills and fused wizards distinct roles.', 'Updated the portfolio to reflect the current PC / Steam direction.', 'Separated completed, in-progress, and planned items to stay within confirmed scope.'],
      outcomes: ['Explained the game through its playable loop rather than a flat feature list.', 'Created a portfolio structure that separates design intent from implementation status.', 'Clarified fusion and legendary-wizard synergy experiments as the project’s central source of fun.'],
    },
  },
  'inquiry-dataset': {
    subtitle: 'Korean customer-inquiry classification dataset for Random Wizard Defense', status: 'Dataset and rule-based classifier documented',
    summary: 'A data project combining synthetic Korean inquiry CSV files with a labeling guide, dataset card, rule-based classifier, experiment logs, and error analysis for Random Wizard Defense.',
    role: 'Designed category, subcategory, urgency, and needs_human labels, then documented the v1/v2 CSV datasets, labeling policy, classifier, experiments, and error analysis as portfolio evidence.',
    highlights: ['Expanded 100 synthetic Korean v1 inquiries to 150 v2 samples with more label-boundary cases', 'Managed a labeling guide, dataset card, experiment log, and error analysis alongside the CSV', 'Tested dataset usability with a Python rule-based classifier and test script'],
    problemSolving: ['Documented overlap between bug_report and feature categories.', 'Refined rules for similar wizard_growth and wizard_acquisition expressions.', 'Kept baseline and improved-rule results separate and marked the need for further validation.'],
    detail: {
      overview: ['A synthetic Korean inquiry dataset for classifying player questions about Random Wizard Defense.', 'It uses game-context synthetic inquiries rather than live customer data and focuses on dataset design, labeling policy, and classifier experiments.', 'Although the repository describes a broader AI-support scaffold, this case study stays focused on confirmed data and classification work.'],
      problem: ['Similar game terms can still require different handling as information requests, bug reports, or balance feedback.', 'Operations-oriented labels such as urgency and needs_human are needed alongside category.', 'Synthetic data cannot cover all real user language, so limitations must remain explicit.'],
      designDirection: ['Each CSV row combines Korean inquiry text and labels for direct classifier and baseline evaluation.', 'v1 began with 100 synthetic inquiries; v2 expanded to 150 with additional boundary cases.', 'v1 remains as a baseline and v2 is stored separately.', 'Weak boundaries such as bug_report, feedback_balance, wizard_growth, and gameplay_guide were targeted in v2.'],
      labelStructure: ['id: unique sample ID', 'text: synthetic Korean player inquiry', 'category: gameplay_guide, wizard_acquisition, wizard_growth, tower_progress, skill_combat, bug_report, feedback_balance', 'subcategory: detailed keywords such as placement, random_draw, resonance, floor_difficulty, cooldown_display', 'urgency: low, medium, high', 'needs_human: boolean label for automatic handling versus human review'],
      coreStructure: ['The dataset card records source, schema, distribution, limits, privacy, and future improvements.', 'The labeling guide defines categories, subcategories, urgency, needs_human, and ambiguous-case rules.', 'Error analysis tracks samples, predictions, expected labels, causes, and improvement ideas.', 'Experiment logs preserve rule baselines, TF-IDF baselines, v2 evaluation, and improved-rule settings and results.'],
      responsibilities: ['Designed category and subcategory structures for Korean game inquiries.', 'Added urgency and needs_human to reflect support operations.', 'Documented purpose, limits, and policy in the labeling guide and dataset card.', 'Verified label use through a Python rule-based classifier and test script.', 'Kept baseline evaluation and error analysis together for traceable iteration.'],
      implementationStatus: { completed: ['v1: 100 synthetic Korean inquiry rows', 'v2: 150 synthetic Korean inquiry rows', 'category, subcategory, urgency, and needs_human labels', 'Labeling guide and dataset card', 'InquiryResult dataclass in schemas.py', 'Keyword classifier in rule_classifier.py', 'Basic verification with test_rule_classifier.py', 'Experiment and error-analysis records', 'Git tag history'], inProgress: ['Maintaining rules and boundary cases as an iterative experiment.', 'Comparing strengths and limits of rules and the TF-IDF baseline.'], planned: ['Require anonymization, consent, and privacy review before using real player logs.', 'Validate the 94.00% improved-rule v2 result on holdout or new data.', 'Keep retrieval-based answers and live support integration as future work.'] },
      classifierStructure: ['schemas.py defines InquiryResult with category, subcategory, urgency, needs_human, confidence, and matched_keywords.', 'rule_classifier.py uses Korean keyword dictionaries, issue patterns, and subcategory rules.', 'Bug keywords prioritize bug_report and also set urgency and needs_human.', 'test_rule_classifier.py compares representative outputs with expected labels.', 'rule_classifier_v2.py keeps the refined experiment separate from the original baseline.'],
      experimentLog: ['v0.3.0 recorded initial rule-classifier tests.', 'v0.4.0 recorded 60.00% accuracy on the 100-row v1 dataset.', 'v0.9.0 compared rule-based 44.67% and TF-IDF 72.67% on 150 v2 rows.', 'v0.10.0 recorded 94.00% for improved rule v2 on that dataset, with an explicit generalization warning.', 'Error analysis records boundary failures and improvement candidates.'],
      problemSolving: ['Prioritized bug_report when error language appears with feature terms.', 'Grouped strength, cost efficiency, and probability complaints under feedback_balance.', 'Separated wizard_growth from wizard_acquisition.', 'Separated build and placement guidance from skill-combat questions.', 'Kept v1 and v2 outputs separate for baseline comparison.'],
      outcomes: ['Turned the dataset into a documented portfolio unit with policy, tests, experiments, and error analysis.', 'Practiced support-flow labels through urgency and needs_human.', 'Recorded weak baselines instead of hiding them and used errors to define next steps.', 'Documented that explainable rules can overfit the expression distribution and need further validation.'],
    },
  },
  'ai-accident-detection': {
    subtitle: 'Team mini-project for AI road-debris detection and risk alerts', status: 'Team project participation',
    summary: 'A team mini-project connecting AI road-debris detection with risk assessment, realtime alerts, map-based visualization, and route-risk analysis.',
    role: 'Participated as a team member in report submission, Google Maps API integration, AI detection, and service integration. The repository also confirms participation in LLM-assisted report titles and descriptions.',
    highlights: ['Analyzed uploaded images and videos with YOLO-based object detection', 'Filtered risk and emergency cases into Flask-SocketIO realtime alerts', 'Connected map visualization and route-risk analysis in a driving-safety service'],
    problemSolving: ['Split the report, upload, and AI-analysis workflow into team implementation tasks.', 'Connected Google Maps API visualization and location data to the service UI.', 'Participated in connecting AI detection to the report and service flow rather than presenting it as a standalone model.'],
    detail: {
      overview: ['404 R·N·F AI is a team mini-project that detects road debris and provides realtime alerts from risk assessment.', 'The README confirms image/video upload analysis, map visualization, route-risk analysis, reports, and admin features.', 'It is presented as a supporting team project, not with the same weight as the three primary projects.'],
      problem: ['Road debris needs a fast flow from uploaded media to detection and risk assessment.', 'Detection must connect to reports, realtime alerts, map monitoring, and route-risk analysis to form a service workflow.'],
      coreStructure: ['YOLO or RT-DETR analyzes an uploaded image or video.', 'Detection data is stored and risk is classified as caution, danger, or emergency.', 'Danger or emergency results create an Alert delivered to the admin page over WebSocket.', 'Final results appear in map-based status and route-risk analysis.'],
      responsibilities: ['Participated as a team member.', 'Worked on report submission, file upload, and AI-analysis integration.', 'Participated in Google Maps API visualization and location data display.', 'Participated in AI detection and service integration, including the README-confirmed LLM report assistance.'],
      implementationStatus: { completed: ['AI road-debris detection', 'Automatic image/video upload analysis', 'Risk assessment and Alert flow', 'Flask-SocketIO realtime alerts', 'Map-based risk visualization', 'Route-risk analysis', 'Report and AI-analysis integration', 'MySQL data management'], inProgress: ['Keeping this portfolio entry concise and limited to participation confirmed by the README.'], planned: ['Add images only when verified asset links are available.', 'Keep the confirmed presentation PDF and demo video links.'] },
      problemSolving: ['Worked within a Flask backend split into API, Service, Repository, and Model layers.', 'Connected uploaded report material to detection and risk assessment.', 'Connected detection results to location-based screens through the map API.'],
      outcomes: ['Added confirmed team participation in reporting, maps, and AI-service integration.', 'Experienced a connected Flask, SocketIO, MySQL, and object-detection structure.', 'Kept this as a lower-weight mini-project that supports the main portfolio work.'],
    },
  },
}

const artifactCopy: Record<string, { labels: string[]; notes: string[] }> = {
  staccato: { labels: ['GitHub repository'], notes: ['Project code, README, architecture, API, and operations documentation.'] },
  'inquiry-dataset': { labels: ['GitHub repository', 'Dataset v1 CSV', 'Dataset v2 CSV', 'Labeling guide', 'Dataset card', 'Rule classifier', 'Experiment log', 'Error analysis'], notes: ['Confirmed repository for the dataset, classifier, and experiment records.', '100 synthetic Korean inquiries in the v1 dataset.', '150 synthetic Korean inquiries with additional boundary cases.', 'Category, subcategory, urgency, needs_human, and boundary rules.', 'Source, schema, limitations, and privacy notice.', 'Korean keyword-based rule classifier.', 'Settings and results for baseline, TF-IDF, and improved-rule experiments.', 'Misclassification patterns and improvement candidates.'] },
  'ai-accident-detection': { labels: ['GitHub repository', 'Presentation PDF'], notes: ['Project code and README.', 'Confirmed project presentation document.'] },
}

const mediaCopy: Record<string, { titles?: string[]; note: string }> = {
  staccato: { titles: ['STACCATO demo video'], note: 'More screenshots will be added when verified URLs are available.' },
  'wizard-defense': { note: 'Images, video, a Steam page, and a demo link will be added only when verified.' },
  'inquiry-dataset': { note: 'Images and video will be added when verified assets are available.' },
  'ai-accident-detection': { titles: ['404 R·N·F AI demo video'], note: 'Screenshots will be added when verified assets are available.' },
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
