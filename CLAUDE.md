# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Electron application with React and TypeScript, built using Vite and electron-vite for optimal development experience.

### Tech Stack
- **Electron**: Desktop application framework
- **React 19**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **electron-vite**: Electron-specific Vite configuration
- **pnpm**: Package manager

## Commands

### Development
```bash
pnpm dev         # Start development server with hot reload
pnpm start       # Preview built application
```

### Build & Quality
```bash
# Linting and Type Checking (run before committing)
pnpm lint               # Run all linters (ESLint, Prettier, TypeScript)
pnpm lint:eslint        # Run ESLint only
pnpm lint:prettier      # Check Prettier formatting
pnpm lint:typecheck     # Type check both node and web code

# Fix Issues
pnpm fix                # Fix all auto-fixable issues
pnpm fix:eslint         # Auto-fix ESLint issues
pnpm fix:prettier       # Auto-fix formatting

# Build
pnpm build              # Build with type checking
pnpm build:win          # Build for Windows
pnpm build:mac          # Build for macOS
pnpm build:linux        # Build for Linux
```

## Architecture

### Directory Structure
```
src/
├── main/           # Electron main process (Node.js environment)
│   └── index.ts    # Application entry point
├── preload/        # Preload scripts (bridge between main and renderer)
│   └── index.ts    # Context bridge setup
└── renderer/       # Electron renderer process (browser environment)
    ├── index.html  # Entry HTML
    └── src/
        ├── main.tsx      # React entry point
        ├── App.tsx       # Root React component
        └── components/   # React components
```

### Process Architecture
- **Main Process**: Manages application lifecycle, creates browser windows, handles native APIs
- **Renderer Process**: Runs React application in a sandboxed browser environment  
- **Preload Script**: Provides secure bridge between main and renderer processes

### Key Configuration Files
- `electron.vite.config.ts`: Vite configuration for all three process types
- `tsconfig.json`: Base TypeScript configuration
- `tsconfig.node.json`: TypeScript config for main/preload processes
- `tsconfig.web.json`: TypeScript config for renderer process

## Development Workflow

### Pre-commit Hooks
The project uses Husky and lint-staged to ensure code quality:
- ESLint fixes are applied automatically
- Prettier formatting is enforced
- TypeScript compilation is verified
- Runs on staged files only for efficiency

### CI/CD
GitHub Actions workflow (`.github/workflows/ci.yml`) runs on:
- Pull requests to main
- Pushes to main
- Executes: `pnpm lint` and `pnpm build`

### Import Aliases
- `@renderer`: Maps to `src/renderer/src/` for cleaner imports in renderer process

## Best Practices

1. **Type Safety**: Always run `pnpm lint:typecheck` before committing
2. **Code Formatting**: Let Prettier handle formatting via `pnpm fix:prettier`
3. **Process Separation**: Keep main process logic separate from renderer
4. **Security**: Use preload scripts for IPC, never expose Node.js APIs directly to renderer
5. **Testing**: Run `pnpm lint` to verify code quality before building
