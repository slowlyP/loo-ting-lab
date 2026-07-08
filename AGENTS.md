# AGENTS.md

## Project Name

Loo Ting Lab

## Project Type

React + Vite + TypeScript portfolio website.

## Main Goal

This project is a personal project archive and portfolio website.

It should not feel like a generic resume website.
It should feel like a personal project browser where visitors can explore projects like a game stage selection screen.

## Design Direction

- Dark developer portfolio
- Game HUD feeling
- Purple and sky-blue accent colors
- Project cards like stage selection panels
- Clean responsive layout
- Portfolio + resume + project archive

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Git

## Main Projects to Show

### STACCATO

AI-based highway traffic incident and stopped-vehicle detection/control project.

Keywords:

- Flask
- YOLO
- Next.js
- TypeScript
- Linux VM
- CCTV
- report video analysis
- incident dashboard

### Wizard Defense

2D casual fantasy tower defense game.

Keywords:

- Unity
- C#
- 2D sprites
- tower defense
- wizard placement
- equipment inventory
- monster movement
- battle system
- wizard resonance

### Inquiry Dataset

Korean game customer inquiry classification dataset.

Keywords:

- CSV
- data labeling
- labeling guide
- dataset card
- category classification
- rule-based classifier

## Required Workflow Before Any Code Edit

Before editing code, always do these steps:

1. Read AGENTS.md.
2. Read CLAUDE.md if it exists.
3. Read docs/WORKFLOW.md.
4. Read docs/VERSION_PLAN.md.
5. Read docs/CHECKLIST.md.
6. Check the latest file in docs/worklog.
7. Run git status.
8. Check the current branch.
9. Check the current project structure.
10. Compare the requested change with the existing code.
11. Write a short implementation plan.
12. Write a task checklist.
13. Wait for user approval before editing files.

## Required Workflow After Code Edit

After editing code:

1. Run npm run lint.
2. Run npm run build.
3. Fix any errors before saying the task is complete.
4. Update or create a markdown worklog in docs/worklog.
5. List changed files.
6. Record test results.
7. Record remaining issues.
8. Recommend the next task.
9. Suggest git add and git commit commands.

## Safety Rules

Do not delete existing files unless explicitly requested.

Do not replace large files without explaining why.

Do not change project structure without updating documentation.

Do not make unrelated changes.

Do not mark work as complete unless these commands pass:

- npm run lint
- npm run build

## Git Rules

Use version-based work.

Branch examples:

- dev
- feature/v0.1-project-setup
- feature/v0.2-home-layout
- feature/v0.3-project-detail-pages

main should be used only for stable release versions.

## Version Plan Summary

- v0.1: project setup
- v0.2: home page layout
- v0.3: project detail pages
- v0.4: resume/about/contact pages
- v0.5: design polish
- v1.0: release-ready version
