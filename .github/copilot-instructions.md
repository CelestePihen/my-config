# Copilot Instructions for my-config

## Build, Test, and Lint Commands

### Running Tests
- Full test suite with coverage: `npm test`
- Interactive UI mode: `npm run test:ui`
- Run a single test file: `npx vitest run tests/maths.test.ts`
- Watch mode for development: `npx vitest`

### Building
- Compile TypeScript to JavaScript: `npm run build`
- Type-check without emitting files: `npm run ts:check`

### Linting and Formatting
- Run ESLint: `npm run lint`
- Auto-fix ESLint issues: `npm run lint:fix`
- Format code with Prettier: `npm run format`

### Development
- Start with hot reload: `npm run dev`

## Code Quality Standards

### Test Coverage Requirements
The project enforces 100% code coverage on:
- Branches, functions, lines, and statements
- Exceptions configured in `vitest.config.ts`:
  - Config files (`*.config.ts`)
  - Entry points (`src/index.ts`)
  - Type definitions (`src/types/**`)
  - Test files themselves

### ESLint Rules
- **Import sorting**: Enforced via `eslint-plugin-simple-import-sort` (auto-fixable)
- **Strict equality**: Must use `===` and `!==` (eqeqeq rule)
- **No `any` type**: Enforced with `fixToUnknown: true` - will error on `any`
- **Unused variables**: Prefix with `_` to ignore (e.g., `_unusedParam`)
- **Const preference**: Use `const` when possible with destructuring

### Prettier Configuration
- Single quotes, no semicolons
- Trailing commas always
- 80-character print width
- 2-space indentation
- LF line endings

## TypeScript Configuration

### Module System
- Using **CommonJS** (`type: "commonjs"` in package.json)
- Target: ES2022
- Output directory: `./dist`

### Strict Mode
All strict TypeScript checks enabled including:
- `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`
- `noUnusedLocals`, `noUnusedParameters`
- `noImplicitReturns`, `noFallthroughCasesInSwitch`

### Path Alias
- `@` resolves to `./src` (configured in vitest.config.ts)

## Conventions

### Error Handling Patterns
The codebase uses two approaches:
1. **Result type pattern**: Functions like `divide()` return discriminated unions:
   ```typescript
   type DivisionResult = 
     | { success: true; value: number }
     | { success: false; error: string }
   ```
2. **Throwing exceptions**: For truly exceptional cases (e.g., `squareRoot(-4)`)

### Type Organization
- Keep types in `src/types.ts`
- Use discriminated unions for result types with `success` flag
- Export operation types: `MathOperation`, `UnaryMathOperation`

### Documentation
- All exported functions have JSDoc comments in French
- Keep comments minimal and descriptive

## Commit Conventions

Uses conventional commits enforced by commitlint and Husky:
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`
- **Format**: `type: subject` (subject must be lowercase, not start with uppercase or PascalCase)
- **Hook**: Runs on `commit-msg` via Husky

Example: `feat: add square root function`
