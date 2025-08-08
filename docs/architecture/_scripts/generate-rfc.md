# RFC Generation Script Template

This document provides templates and examples for generating RFC documents using Claude Code's automation capabilities.

## Quick Start

To generate an RFC document, use one of these command patterns with Claude Code:

### Basic Research Request

```
Generate an RFC for: [TOPIC]
Requirements: [SPECIFIC REQUIREMENTS]
Context: [PROJECT CONTEXT]
```

### Detailed Research Request

```
@research-specialist Please create an RFC document for:
Topic: [SPECIFIC TECHNICAL CHALLENGE]
Current Implementation: [EXISTING SOLUTION IF ANY]
Pain Points: [PROBLEMS TO SOLVE]
Constraints: [TECHNICAL/BUSINESS CONSTRAINTS]
Success Criteria: [MEASURABLE OUTCOMES]
```

## Command Templates

### 1. Library Selection Research

```
@research-specialist Create RFC for selecting a [PURPOSE] library
Requirements:
- Must support TypeScript
- Compatible with Electron [VERSION]
- [ADDITIONAL REQUIREMENTS]
Compare at least: [LIBRARY1], [LIBRARY2], [LIBRARY3]
```

Example:

```
@research-specialist Create RFC for selecting a state management library
Requirements:
- Must support TypeScript with full type inference
- Compatible with Electron v32+ and React 19
- Bundle size under 50KB
- Support for DevTools
Compare at least: Zustand, Jotai, Valtio
```

### 2. Architecture Pattern Research

```
@research-specialist Research and document [PATTERN] implementation
For: [USE CASE]
Requirements:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
Evaluate patterns: [PATTERN1], [PATTERN2], [PATTERN3]
```

Example:

```
@research-specialist Research and document IPC communication patterns
For: Type-safe communication between main and renderer processes
Requirements:
- Full TypeScript support with autocompletion
- Minimal boilerplate
- Support for streaming data
Evaluate patterns: typed-ipc, electron-trpc, custom implementation
```

### 3. Performance Optimization Research

```
@research-specialist Analyze performance optimization strategies for [AREA]
Current issues:
- [ISSUE 1]
- [ISSUE 2]
Target metrics:
- [METRIC 1]: [TARGET VALUE]
- [METRIC 2]: [TARGET VALUE]
```

### 4. Security Enhancement Research

```
@research-specialist Research security best practices for [COMPONENT]
Threat model: [DESCRIPTION]
Compliance requirements: [STANDARDS]
Current vulnerabilities: [IF KNOWN]
```

## Automation Workflow

### Step 1: Trigger Research

Use one of the command templates above to initiate the research process.

### Step 2: Automated Parallel Research

Claude Code will automatically:

1. Launch the research-specialist agent
2. Execute parallel searches across multiple sources:
   - WebSearch for recent articles and discussions
   - Context7 for library documentation
   - DeepWiki for repository analysis
   - Codebase analysis for current implementation

### Step 3: Document Generation

The agent will:

1. Create RFC document at `docs/architecture/rfc/YYYY-MM-DD-{topic}.md`
2. Follow the template structure from `@docs/architecture/_templates/rfc.md`
3. Include all research findings and analysis
4. Generate comparison matrices and decision flows

### Step 4: Metadata Update

The system will update `docs/architecture/rfc/index.yaml` with:

- Document metadata
- Tags for categorization
- Status tracking
- Cross-references

## Advanced Usage

### Specifying Research Depth

```
@research-specialist [BASIC REQUEST]
Research depth: [shallow|standard|deep]
Time budget: [15min|30min|1hour]
```

### Including Specific Sources

```
@research-specialist [BASIC REQUEST]
Also check:
- GitHub: [REPO_OWNER/REPO_NAME]
- Documentation: [SPECIFIC_URL]
- NPM packages: [PACKAGE_NAMES]
```

### Focusing on Specific Criteria

```
@research-specialist [BASIC REQUEST]
Prioritize evaluation on:
1. [CRITERION_1] (weight: HIGH)
2. [CRITERION_2] (weight: MEDIUM)
3. [CRITERION_3] (weight: LOW)
```

## Integration with Task Tool

For complex research requiring multiple RFCs:

```typescript
// Conceptual multi-RFC generation
Task.parallel([
  {
    subagent: 'research-specialist',
    prompt: 'RFC for state management solution'
  },
  {
    subagent: 'research-specialist',
    prompt: 'RFC for testing framework selection'
  },
  {
    subagent: 'research-specialist',
    prompt: 'RFC for build optimization strategy'
  }
])
```

## Validation and Review

After RFC generation, use these commands:

### Validate RFC Completeness

```
Check if RFC @docs/architecture/rfc/[FILENAME] covers all required sections
```

### Request Additional Research

```
Expand RFC @docs/architecture/rfc/[FILENAME] section on [SPECIFIC_TOPIC]
Add more alternatives/details about [ASPECT]
```

### Convert to ADR

```
Based on RFC @docs/architecture/rfc/[FILENAME], create ADR with decision: [CHOSEN_OPTION]
```

## Best Practices

### 1. Provide Clear Context

- Specify current tech stack
- Mention team size and expertise
- Include performance requirements
- State any hard constraints

### 2. Request Specific Comparisons

- Name specific libraries/tools to compare
- Define evaluation criteria upfront
- Set clear success metrics

### 3. Iterate on Results

- Review generated RFC
- Request expansions where needed
- Validate recommendations against requirements

### 4. Maintain Metadata

- Ensure index.yaml stays updated
- Tag documents appropriately
- Link related RFCs and ADRs

## Troubleshooting

### If Research is Incomplete

```
Continue RFC @docs/architecture/rfc/[FILENAME] with additional research on [MISSING_ASPECT]
```

### If Recommendations are Unclear

```
Clarify recommendations in RFC @docs/architecture/rfc/[FILENAME]
Add decision flow for edge cases: [SCENARIOS]
```

### If Information is Outdated

```
Update RFC @docs/architecture/rfc/[FILENAME] with latest information (current year: YYYY)
Recheck: [SPECIFIC_LIBRARIES_OR_TOPICS]
```

## Example Full Workflow

```bash
# 1. Initial request
"@research-specialist Create RFC for implementing real-time collaborative features
Requirements:
- Support 10+ concurrent users
- Conflict resolution for simultaneous edits
- Offline support with sync
- End-to-end encryption
Compare: Yjs, OT.js, ShareJS, Automerge"

# 2. After review, request expansion
"Expand security section in RFC docs/architecture/rfc/2025-01-08-realtime-collaboration.md
Focus on E2E encryption implementation patterns"

# 3. Create ADR based on research
"Create ADR from RFC docs/architecture/rfc/2025-01-08-realtime-collaboration.md
Decision: Use Yjs with y-webrtc provider"

# 4. Generate implementation plan
"Based on ADR, create implementation checklist for Yjs integration"
```

## Performance Tips

1. **Batch Related Research**: Combine related topics in single request
2. **Specify Time Constraints**: Set reasonable time budgets
3. **Cache Results**: Reuse previous research when applicable
4. **Incremental Updates**: Build on existing RFCs rather than recreating

## References

- RFC Template: @docs/architecture/\_templates/rfc.md
- ADR Template: @docs/architecture/\_templates/adr.md
- Research Agent: @.claude/agents/research-specialist.md
- Workflow Documentation: @docs/research-adr-workflow.md
