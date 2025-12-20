# Create Project Knowledgebase

Guide me through creating a comprehensive knowledgebase for this project based on an initial idea.

## Process

1. **Receive Initial Idea:** I'll provide a brief project idea or concept.
2. **Systematic Discovery:** Ask systematic clarifying questions across all relevant domains.
3. **Generate Knowledgebase:** Create structured markdown files covering all aspects.
4. **Save Files:** Save all generated documents in `/agent/knowledge/`.

## Discovery Areas

Ask questions section by section, providing letter/number options for easy responses:

### 1. Project Vision & Scope
- Core problem being solved
- Primary target audience
- Main value proposition
- Key success metrics
- Existing solutions to improve upon

### 2. Technical Architecture
- Application type: (a) Web App (b) Mobile App (c) Desktop App (d) API/Backend (e) Other
- Tech stack confirmation (Default: Nuxt 4 + TypeScript + Nuxt UI Pro + Better-Auth + Drizzle ORM + PostgreSQL)
- Authentication requirements
- Deployment target

### 3. Business Logic & Data Models
- Main entities users work with
- Information to store for each entity
- CRUD operations needed
- Business rules and constraints
- Entity relationships
- Automatic actions/triggers

### 4. UI/UX & Design
- Look and feel
- Design system (Default: Nuxt UI Pro)
- Target devices
- Accessibility requirements
- Reference websites/apps

### 5. Features & Functionality
- MVP must-have features
- Nice-to-have features
- Admin interface requirements
- Real-time features
- Offline functionality

### 6. Quality & Standards
- Testing requirements
- Performance requirements
- Security/compliance needs
- i18n/l10n needs

## Output Files

Generate in `/agent/knowledge/`:
- `project-overview.md` - Vision, goals, audience, scope
- `technical-architecture.md` - Stack, schema, APIs, auth, deployment
- `business-logic.md` - Entities, rules, workflows
- `ui-ux-design.md` - Design system, guidelines, flows
- `features-requirements.md` - MVP features, roadmap
- `coding-standards.md` - Conventions, patterns, testing
- `decisions-log.md` - Key decisions and rationale

## Instructions

1. Do NOT start implementing anything
2. Ask discovery questions systematically, one section at a time
3. Confirm understanding before generating files
4. Save all files to `/agent/knowledge/`
5. Offer to refine based on feedback
