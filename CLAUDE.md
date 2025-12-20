# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev                  # Start development server on localhost:3000
pnpm build                # Build for production
pnpm preview              # Preview production build
pnpm typecheck            # Run TypeScript type checking
pnpm lint                 # Run ESLint (uses @antfu/eslint-config)

# Database
pnpm docker:up            # Start PostgreSQL container
pnpm docker:down          # Stop PostgreSQL container (add via docker compose)
pnpm docker:clean         # Reset database (down -v, rebuild, up)
pnpm db:push              # Push Drizzle schema to database
pnpm db:studio            # Open Drizzle Studio GUI

# Testing
pnpm exec -- tsx scripts/fake-seeder.ts  # Generate 100 fake users
```

## Architecture

### Stack
- **Nuxt 4** with TypeScript strict mode
- **Better-Auth** for authentication (email/password, admin roles, sessions)
- **Drizzle ORM** with PostgreSQL
- **Nuxt UI Pro** for components
- **Pinia** for state management

### Directory Structure

```
app/                      # Frontend (Nuxt app directory)
├── composables/          # Vue composables (useAuthClient)
├── middleware/           # Route guards (is-authenticated, is-admin)
├── pages/                # File-based routing
├── stores/               # Pinia stores (auth.store, admin.store)
└── utils/                # Client utilities

server/                   # Backend (Nitro server)
├── api/                  # API routes (file-based)
├── config/               # Environment config (validates NUXT_* vars)
├── database/             # Drizzle schema and connection
├── guards/               # Server-side auth guards
├── locator/              # Service locator pattern (repositories, hooks)
├── middleware/           # Server middleware
├── repositories/         # Data access layer (ItemRepository)
└── utils/                # Server utilities (auth.ts = Better-Auth config)

shared/                   # Shared between client/server
├── plugins/              # Better-Auth plugins (avatar)
└── types/                # Shared TypeScript types
```

### Authentication Flow

1. **Client**: `useAuthClient()` composable wraps Better-Auth Vue client
2. **Store**: `useAuthStore()` manages session state, exposes `isAuthenticated`, `isAdmin`, `currentUser`
3. **Route Middleware**: `is-authenticated.ts` redirects unauthenticated users to `/auth/login`
4. **Server Middleware**: `server/middleware/auth.ts` attaches user to `event.context.user`
5. **Server Guards**: `isAuthenticated()` and `isAdmin()` throw 401/403 errors

Better-Auth configuration is in `server/utils/auth.ts`. First registered user automatically becomes admin (via `databaseHooks.user.create.before`).

### ItemRepository Pattern

The `ItemRepository` provides a flexible document-store-like interface over PostgreSQL with JSONB:

```typescript
const repo = getItemRepository(event)
const items = await repo.collection('products').queryMany({
  page: 1,
  pageSize: 10,
  filters: { filterField: 'status', filterOperator: '_eq', filterValue: 'active' },
  search: { term: 'query', fields: ['name', 'description'] },
  orderBy: ['-createdAt']
})
```

Tables are auto-created with schema: `id TEXT, data JSONB, created_at, updated_at, created_by, updated_by`.

### Environment Variables

Required (validated in `server/config/index.ts`):
- `NUXT_SITE_NAME`, `NUXT_SITE_ENV`, `NUXT_SITE_URL`
- `NUXT_DATABASE_URL` - PostgreSQL connection string
- `NUXT_AUTH_SECRET`, `NUXT_SESSION_SECRET`

Optional:
- `NUXT_ADMIN_EMAIL`, `NUXT_ADMIN_PASSWORD` - Pre-configure admin credentials

### Key Files

- `server/utils/auth.ts` - Better-Auth configuration with plugins
- `server/config/index.ts` - Centralized environment config
- `app/composables/useAuthClient.ts` - Auth client factory
- `server/locator/index.ts` - Service locator for repositories
- `drizzle.config.ts` - Database migrations config (schema in `server/database/schema/*`)

## Agent Workflow

### Slash Commands

Available Claude Code commands for structured development:

| Command | Purpose | Output Location |
|---------|---------|-----------------|
| `/create-wiki` | Create project knowledgebase via discovery questions | `/agent/knowledge/` |
| `/create-prd` | Generate PRD from feature request | `/tasks/[feature]/prd-[feature].md` |
| `/generate-tasks` | Convert PRD into task list | `/tasks/[feature]/tasks-[feature].md` |
| `/process-tasks` | Work through task list with commit protocol | Updates task file in place |
| `/end-session` | Log session history, issues, and research | `/agent/history/`, `/agent/issues/`, `/agent/research/` |

### Workflow Sequence

1. `/create-wiki` → Gather requirements via systematic discovery
2. `/create-prd` → Formalize feature into PRD
3. `/generate-tasks` → Break PRD into actionable tasks
4. `/process-tasks` → Implement one subtask at a time
5. `/end-session` → Document what was done

### Task Protocol

When processing tasks:
- One subtask at a time, wait for user confirmation
- Mark `[x]` when complete
- When all subtasks done: run tests → git add → commit (conventional format) → mark parent `[x]`
- Maintain "Relevant Files" section

### Agent Directory Structure

```
agent/
├── tools/          # Original .mdc workflow definitions (Cursor format)
├── knowledge/      # Project knowledgebase from /create-wiki
├── history/        # Session logs from /end-session
├── issues/         # Documented problems
└── research/       # Useful findings for future reference
```
