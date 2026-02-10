# NextJS App 03

Sample Next.js application currently on version **14.0.4** using the App Router.

## Current Version

- **Next.js**: 14.0.4
- **React**: 18.2.0
- **TypeScript**: 5.3.2

## Architecture

- **Router**: App Router (`app/` directory)
- **Styling**: CSS Modules
- **TypeScript**: Enabled with strict mode

## Breaking Changes Needed for Next.js 15 Upgrade

### 1. Link Component Pattern (PRIMARY ISSUE)
- Uses deprecated `<Link><a>` pattern
- Next.js 13+ automatically renders `<a>` tag
- **Fix**: Remove explicit `<a>` children from `<Link>` components
- Example:
  ```tsx
  // Current (broken in Next.js 15)
  <Link href="/about">
    <a className={styles.link}>Link text</a>
  </Link>

  // Should be:
  <Link href="/about" className={styles.link}>
    Link text
  </Link>
  ```

### 2. TypeScript Updates
- May need to update types for React 19 compatibility
- Some deprecated type definitions need updates

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Related Repositories

Part of **Exit Criteria Scenario 2: Bulk Repository Updates**
- Repo 3 of 10 requiring Next.js 15 upgrade
