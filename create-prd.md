# Create Product Requirements Document

Guide me through creating a detailed PRD for a new feature.

## Process

1. **Receive Initial Prompt:** I'll describe the feature or functionality.
2. **Ask Clarifying Questions:** Gather sufficient detail before writing. Provide letter/number options for easy responses.
3. **Generate PRD:** Create the document using the structure below.
4. **Save PRD:** Save as `/tasks/[feature-name]/prd-[feature-name].md`

## Clarifying Questions

Adapt based on the prompt, but explore:

- **Problem/Goal:** What problem does this solve? What's the main goal?
- **Target User:** Who is the primary user?
- **Core Functionality:** Key actions users should perform?
- **User Stories:** "As a [user], I want to [action] so that [benefit]"
- **Acceptance Criteria:** How do we know it's successful?
- **Scope/Boundaries:** What should this NOT do (non-goals)?
- **Data Requirements:** What data to display or manipulate?
- **Design/UI:** Existing mockups or desired look/feel?
- **Edge Cases:** Potential error conditions?
- **Testing:** Unit tests, integration tests, E2E, or none?

## PRD Structure

1. **Introduction/Overview:** Feature description and problem it solves
2. **Goals:** Specific, measurable objectives
3. **User Stories:** User narratives with benefits
4. **Functional Requirements:** Numbered list of required functionalities
5. **Non-Goals (Out of Scope):** What's explicitly excluded
6. **Design Considerations:** UI/UX requirements, mockups
7. **Technical Considerations:** Constraints, dependencies, suggestions
8. **Success Metrics:** How success will be measured
9. **Open Questions:** Remaining areas needing clarification

## Target Audience

Write for a **junior developer** - requirements should be explicit, unambiguous, and avoid jargon.

## Output

- **Format:** Markdown
- **Location:** `/tasks/[feature-name]/`
- **Filename:** `prd-[feature-name].md`

## Instructions

1. Do NOT start implementing the PRD
2. Ask clarifying questions first
3. Use answers to improve the PRD
4. Save to the correct location
