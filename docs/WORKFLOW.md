# Workflow

## Before Editing

1. Read `AGENTS.md`.
2. Read `CLAUDE.md` if it exists.
3. Read `docs/WORKFLOW.md`.
4. Read `docs/VERSION_PLAN.md`.
5. Read `docs/CHECKLIST.md`.
6. Check the latest file in `docs/worklog`.
7. Run `git status`.
8. Check the current branch.
9. Check the current project structure.
10. Compare the request with the existing code.
11. Write a short implementation plan.
12. Write a task checklist.
13. Wait for user approval before editing files.

## After Editing

1. Run `npm.cmd run lint`.
2. Run `npm.cmd run build`.
3. Fix errors before calling the task complete.
4. Update or create a worklog in `docs/worklog`.
5. List changed files.
6. Record test results.
7. Record remaining issues.
8. Recommend the next task.
9. Suggest git add and git commit commands.
