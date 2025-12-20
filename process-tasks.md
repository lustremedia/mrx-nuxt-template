# Process Task List

Work through a task list to implement a feature from a PRD.

## Task Implementation Protocol

- **One sub-task at a time:** Do NOT start the next sub-task until user says "yes" or "y"
- **Completion protocol:**
  1. When you finish a sub-task, mark it `[x]` immediately
  2. If ALL subtasks under a parent are now `[x]`:
     - Run the full test suite (`pnpm vitest`)
     - Only if tests pass: stage changes (`git add .`)
     - Remove any temporary files/code before committing
     - Commit with conventional format:
       ```
       git commit -m "feat: add payment validation" -m "- Validates card type" -m "- Adds unit tests" -m "Related to task in PRD"
       ```
  3. Mark the parent task `[x]` after commit
- **Stop after each sub-task** and wait for user go-ahead

## Task List Maintenance

1. **Update as you work:**
   - Mark tasks/subtasks `[x]` per protocol above
   - Add new tasks as they emerge

2. **Maintain "Relevant Files" section:**
   - List every file created or modified
   - One-line description of each file's purpose

## Before Starting

1. Read the task list file
2. Check which sub-task is next
3. Confirm with user before starting

## After Each Sub-Task

1. Update the task file (mark complete, add new tasks if needed)
2. Update "Relevant Files" section
3. Pause and ask for permission to continue

## Commit Message Format

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `docs:` - Documentation

Include:
- Summary of what was accomplished
- Key changes as bullet points
- Reference to task/PRD
