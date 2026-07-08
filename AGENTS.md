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

## GitHub 확인 규칙

새 작업을 시작하기 전에 반드시 GitHub 최신 상태를 확인한다.

작업 전 필수 확인 명령어:

- git status
- git branch --show-current
- git remote -v
- git fetch origin
- git --no-pager log --oneline --decorate --graph --all -n 20

현재 작업 브랜치가 dev 기준이면 origin/dev와 비교한다.

- git diff --stat origin/dev...HEAD
- git diff --name-only origin/dev...HEAD

현재 작업 브랜치가 main 기준이면 origin/main과 비교한다.

- git diff --stat origin/main...HEAD
- git diff --name-only origin/main...HEAD

작업 전에 반드시 아래 내용을 요약한다.

- 현재 브랜치
- 현재 로컬 최신 커밋
- origin/dev 최신 커밋
- origin/main 최신 커밋
- 변경된 파일
- 추적되지 않은 파일
- 작업 트리가 깨끗한지 여부
- 이번 요청이 기존 코드와 충돌하는지 여부
- 이번 요청이 VERSION_PLAN과 맞는지 여부

사용자가 승인하기 전에는 코드를 수정하지 않는다.

## 작업 요청 문서 규칙

새 작업마다 아래 폴더에 요청 문서를 만든다.

docs/change-request/

파일 이름 형식:

YYYY-MM-DD-vX.X-task-name-request.md

요청 문서에는 아래 내용을 포함한다.

- 작업 날짜
- 목표 버전
- 목표 브랜치
- 사용자 요청 요약
- 현재 GitHub 상태 요약
- 관련된 이전 worklog 파일
- 예상 수정 파일
- 위험 요소 체크리스트
- 완료 기준 체크리스트

## 검증 문서 규칙

새 작업마다 아래 폴더에 검증 문서를 만든다.

docs/validation/

파일 이름 형식:

YYYY-MM-DD-vX.X-task-name-validation.md

검증 문서에는 아래 내용을 포함한다.

- 작업 전 체크리스트
- 작업 후 체크리스트
- lint 결과
- build 결과
- 페이지/라우팅 확인 결과
- 남은 문제
- dev에 병합해도 안전한지 여부

## 계속 이어가기 규칙

새 작업을 시작할 때마다 아래 파일들을 먼저 읽는다.

- AGENTS.md
- docs/WORKFLOW.md
- docs/VERSION_PLAN.md
- docs/CHECKLIST.md
- docs/change-request 최신 파일
- docs/validation 최신 파일
- docs/worklog 최신 파일
- docs/release 최신 파일

이전 MD 기록을 참고해서 같은 작업을 반복하지 않고, 기존 기능을 깨지 않게 작업한다.
