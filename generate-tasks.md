# Generate Task List from PRD

Create a detailed, step-by-step task list from an existing PRD.

## Process

1. **Receive PRD Reference:** Point me to the specific PRD file.
2. **Analyze PRD:** Read functional requirements, user stories, and other sections.
3. **Phase 1 - Parent Tasks:** Generate high-level tasks (typically ~5). Present them and ask: "Ready to generate sub-tasks? Respond with 'Go' to proceed."
4. **Wait for Confirmation:** Pause until user says "Go".
5. **Phase 2 - Sub-Tasks:** Break down each parent into actionable sub-tasks.
6. **Identify Relevant Files:** List files to create or modify, including test files.
7. **Save Task List:** Save to `/tasks/[feature-name]/tasks-[feature-name].md`

## Output Format

```markdown
## Relevant Files

- `path/to/file.ts` - Brief description of why this file is relevant
- `path/to/file.test.ts` - Unit tests for `file.ts`

### Notes

- Unit tests should be placed alongside the code files they test
- Use `pnpm vitest [path]` to run tests

## Tasks

- [ ] 1.0 Parent Task Title
  - [ ] 1.1 [Sub-task description]
  - [ ] 1.2 [Sub-task description]
- [ ] 2.0 Parent Task Title
  - [ ] 2.1 [Sub-task description]
- [ ] 3.0 Parent Task Title
```

## Target Audience

Write for a **junior developer** who will implement the feature.

## Output

- **Format:** Markdown
- **Location:** `/tasks/[feature-name]/`
- **Filename:** `tasks-[feature-name].md`
