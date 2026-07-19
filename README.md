# Loo Ting Lab

React, Vite, TypeScript, and Tailwind CSS로 만든 개인 프로젝트 아카이브 포트폴리오입니다.

단순한 이력서 목록 대신 Team/Personal 프로젝트를 카드로 탐색하고, 각 상세 페이지에서 문제, 구조, 역할, 구현 상태, 검증 근거와 제한 사항을 함께 확인하는 Portfolio Browser를 지향합니다.

## Live site

- GitHub Pages: https://slowlyp.github.io/loo-ting-lab/

## Main features

- React Router `HashRouter` 기반 Work Gallery와 프로젝트 상세 경로
- Team Project / Personal Project / Personal Data·AI Support 구분
- 한국어/영어 전환과 `localStorage` 저장
- light/dark theme 전환과 독립된 `localStorage` 저장
- 반응형 프로젝트 카드와 상세 case study
- 프로젝트 thumbnail과 abstract fallback
- Wizard Defense Hero gameplay video와 오류 시 thumbnail fallback
- light/dark palette를 사용하는 canvas network background
- Resume PDF 연결
- GitHub Pages 저장소 하위 경로를 위한 Vite `base` 및 `BASE_URL` asset 처리
- GitHub Actions 기반 lint, build, Pages 배포
- versioned change request, validation, worklog, release 문서

## Projects

### Team projects

- STACCATO — AI 기반 고속도로 정차 차량 탐지·관제 MVP
- 404 R·N·F AI — AI 기반 도로 낙하물 탐지·위험 알림 팀 미니프로젝트

### Personal projects

- Random Wizard Defense — Unity 2D PC / Steam 지향 플레이 가능 프로토타입
- Wizard Defense AI Support Preview — 합성 문의 데이터, 규칙 기반 분류, deterministic support preview
- Loo Ting Lab — 이 포트폴리오 웹사이트 자체의 설계·구현·배포 기록

프로젝트 설명은 현재 공개 README와 확인된 저장소 문서를 기준으로 작성하며, 팀 전체 구현과 개인 기여, 완료·진행·계획·제한을 구분합니다.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Icons
- Canvas API
- GitHub Actions
- GitHub Pages

## Local development

```powershell
npm install
npm run dev
```

## Verification

```powershell
npm run lint
npm run build
git diff --check
```

`npm run build`는 TypeScript project build 후 Vite production build를 실행합니다.

## Deployment

- Vite base: `/loo-ting-lab/`
- Routing: `HashRouter`
- Trigger: `main` push 또는 manual workflow dispatch
- Pipeline: `npm ci` → lint → build → Pages artifact upload → deploy

## Documentation

- `docs/VERSION_PLAN.md`: 버전별 목표
- `docs/change-request/`: 승인된 작업 범위와 위험 요소
- `docs/validation/`: 작업 전후 점검과 검증 결과
- `docs/worklog/`: 구현 기록
- `docs/release/`: 릴리즈별 변경 사항

## Scope

Loo Ting Lab은 직접 관리하는 정적 React 포트폴리오입니다. CMS, 자동 번역, SSR, 또는 영상 스트리밍 시스템으로 표현하지 않습니다.
