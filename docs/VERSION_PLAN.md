# Version Plan

## v0.1 Project Setup

- React + Vite + TypeScript baseline.
- Tailwind CSS setup.
- React Router HashRouter setup.
- Basic pages and layout components.
- Project data module.
- Initial workflow, checklist, release, and worklog docs.

## v0.2 Home Page Layout

- Improve the main stage-select home screen.
- Add stronger visual hierarchy and responsive polish.
- Expand project preview content.

## v0.3 Project Detail Pages

- Add richer project detail layouts.
- Add per-project sections for goals, stack, process, and results.
- Prepare assets for each project.

## v0.4 Wizard Defense Detail

- Strengthen the Wizard Defense project detail page.
- Describe the Unity and C# prototype as a playable personal portfolio project, not a released game.
- Separate completed, in-progress, and planned content.
- Add media and GitHub link placeholder areas for future assets.
- Use only confirmed Notion reference content and avoid overstating implementation status.

## v0.5 Inquiry Dataset Detail

- Strengthen the Inquiry Dataset project detail page.
- Present the Korean synthetic inquiry dataset design for Random Wizard Defense.
- Explain label structure, labeling guide, dataset card, rule-based classifier, tests, experiment logs, and error analysis.
- Show confirmed dataset and experiment numbers with clear limitations.
- Link the confirmed GitHub repository.

## v0.6 Resume, About, Contact

- Strengthen Resume, About, and Contact pages for recruiting review.
- Summarize skills, project experience, work style, and portfolio highlights.
- Explain the developer profile without overstating unconfirmed experience.
- Mark unconfirmed private contact information as planned.
- Clean up Header and Footer Korean copy.

## v0.7 Wizard Defense PC / Steam Direction

- Update Wizard Defense copy from the earlier direction to the latest PC / Steam direction confirmed in Notion.
- Keep the project described as a playable prototype, not a released Steam game.
- Emphasize normal wizard fusion, elemental fusion, and synergy experiments as the main fun loop.
- Record that v0.4 historical documents remain unchanged and v0.7 documents explain the direction change.

## v0.8 Design Polish

- Refine HUD styling, motion, spacing, and accessibility.
- Improve responsive views.
- Finalize visual system.

## v0.9 AI Accident Detection Mini Project

- Add AI Accident Detection as a mini project / team project card.
- Use only the confirmed README content from `https://github.com/lms-mini-project/AI-accident-detection`.
- Keep the card lower weight than STACCATO, Wizard Defense, and Inquiry Dataset.
- Describe the role as team member / 조원 participation, not solo ownership.
- Link the confirmed GitHub repository, demo video, and presentation PDF.

## v0.10 STACCATO Detail Completion

- Restore and strengthen missing STACCATO detail page content from v0.3 records and the confirmed STACCATO GitHub repository.
- Reintroduce AI detection flow, ROI / Rule Engine, LANE_STOP / SHOULDER_STOP, VM-separated architecture, media proxy, report upload, realtime notification, and monitoring UI details.
- Keep personal contribution wording conservative by using participation, verification, structure summary, and integration-flow wording where direct ownership is not confirmed.
- Add confirmed GitHub and demo video links without describing the project as commercially operated.

## v0.10.1 Tech Stack Badge UI

- Improve project tech stack display with horizontal icon + label badges.
- Remove the duplicated lower `사용 기술스택` detail section from project detail pages.
- Reuse the same badge component on project detail pages and project list cards.
- Use `react-icons` brand icons where available and fallback icons for ambiguous technologies.

## v0.11 Resume / Cover Letter Page Upgrade

- Upgrade the Resume page into a cleaner recruiting-oriented resume layout.
- Add an ID photo placeholder area with 3:4 ratio guidance and recommended image sizes.
- Add desired role, profile summary, core skills, project experience, education / training, cover letter summary, expandable detailed cover letter, and links / contact sections.
- Keep unconfirmed personal information such as email, education, certifications, and photo as planned or to be organized.
- Apply Noto Sans KR through CSS import and font-family fallback without storing font files in the repository.

## v0.12 Resume Content Slots

- Move Resume page content into `src/data/resume.ts` so profile, cover letter, education, certificates, licenses, and contact slots can be edited more easily.
- Connect the provided profile photo and certificate PDF from `public/assets/resume`.
- Keep missing files such as `certificate-02.pdf` in a safe planned state instead of linking broken URLs.
- Record that public resume assets are deployed as public static files and must not contain unmasked sensitive information.

## v0.13 Unique Lab Browser Concept

- Shift the portfolio concept toward Loo Ting Lab OS, Developer Lab Browser, and Project Archive System.
- Reduce generic fantasy RPG menu wording and use lab console, project file, experiment record, system modules, developer character sheet, and contact portal labels.
- Improve the visual tone with deep navy, ink purple, cyan / mint accents, glass panels, thin borders, subtle grid, and light scanline texture.
- Keep project facts and v0.12 Resume photo/certificate asset links intact.
- Update Resume privacy posture by removing direct profile photo / certificate exposure, connecting the public resume PDF document, and adding a secondary Incruit resume link.

## v1.0 Release Preparation

- Complete content pass.
- Final build verification.
- Prepare stable release branch or tag.
- Prepare GitHub Pages deployment for `https://slowlyp.github.io/loo-ting-lab/`.
- Set Vite `base` for the repository subpath.
- Keep HashRouter routing for static hosting refresh safety.
- Add GitHub Actions deployment workflow and release documentation.
