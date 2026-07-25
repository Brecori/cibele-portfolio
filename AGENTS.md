<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Guide

This is a Next.js 16 App Router portfolio built with React 19, TypeScript and styled-components. Treat `src/app` routes as thin composition layers, keep reusable UI in `src/components`, page/section composition in `src/templates`, and content/data in `src/slugs` or local `constants.ts` files.

## Architecture

Use the existing Atomic Design structure:

- `src/components`: reusable atoms and molecules. Examples: `SectionTitle`, `ContentParagraph`, `ResponsiveImage`, `BrandingCard`, `Modal`, `Navbar`.
- `src/templates`: organisms and page templates composed from components. Examples: `home/*`, `projects/*`, `galleries/*`, `shared/*`.
- `src/app`: route entries only. Keep route files focused on params, metadata, notFound handling and rendering the correct template.
- `src/slugs`: typed content for dynamic routes. Gallery and project pages should be driven from slug data, not hardcoded route UI.
- `src/styles`: global style and theme tokens.
- `src/lib`: framework helpers such as styled-components registry, responsive helpers and metadata builders.

Follow the local file convention for UI modules:

- `index.tsx`: component implementation.
- `styles.ts`: styled-components only.
- `props.ts`: exported prop types/interfaces.
- `constants.ts` or `constants.tsx`: local display strings, links and static lists.

Prefer extending an existing component/template before introducing a new abstraction. Add a new abstraction only when it removes real duplication or matches the current component boundaries.

## Next.js And React Rules

- This project uses Next.js `16.2.9`; read `node_modules/next/dist/docs/` before changing framework APIs, routing, metadata, image behavior or server/client boundaries.
- App Router pages in `src/app/**/page.tsx` should stay server components unless interactivity is required.
- Add `"use client"` only to components that use state, effects, browser APIs, animations, event handlers that require client state, or styled-components client behavior.
- Keep dynamic route metadata in `src/lib/metadata.ts` and route files. Do not duplicate SEO logic in templates.
- Use the `@/*` alias for imports from `src`.

## Styling

This project uses styled-components, not CSS modules or Tailwind.

- Put styles in `styles.ts` beside the component/template.
- Import colors from `@/styles/theme`; avoid raw hex values in components unless adding a new token first.
- Add new colors to `theme` with clear semantic/reusable names and use `ColorFamily` where slug data needs a token key.
- Use `rem` for spacing, size, radius and typography. The global CSS makes `1rem` approximately `10px` at the active viewport base, so convert design pixels with `px / 10`.
- Use `var(--default-padding)` for page horizontal padding. It is defined globally and changes by breakpoint.
- Keep border radius consistent with the project: common cards and media use `0.8rem`.
- Use `line-height` as unitless values or `em` consistently with nearby code.
- Avoid one-off layout magic in JSX. Put layout decisions in styled-components props prefixed with `$`.

## Responsive Rules

Use the helpers from `@/lib/media-query`:

- `mediaMaxDesktop1024` for tablet/smaller desktop adjustments.
- `mediaMaxMobile` for mobile adjustments.
- `mediaMaxIpadVertical` only when a portrait iPad-specific case is actually needed.

The project is desktop-first. Define the desktop layout first, then override down with `mediaMaxDesktop1024` and `mediaMaxMobile`.

When adapting responsive values:

- Preserve visual proportions across breakpoints instead of copying desktop numbers.
- Keep grid tracks stable with `grid-template-columns`, `grid-auto-rows`, `aspect-ratio`, or explicit dimensions.
- Make large grid/media items collapse predictably on mobile. Existing gallery wide items span 2 columns on mobile.
- Do not scale font-size directly with viewport units; the global `html` rem scaling already handles viewport-relative sizing.

## Data-Driven Pages

Projects and galleries are data-driven.

Project slugs use `ProjectProps` from `src/slugs/projects/props.ts`:

- Keep project data in the matching `src/slugs/projects/<slug>/index.tsx`.
- Do not add fields for removed sections. If a template does not render a section, remove obsolete slug props and type fields.

Gallery slugs use `GalleryProps` from `src/slugs/galleries/props.ts`:

- `images.imgs` contains the ordered image list.
- `images.specialHeight` opts into taller grid rows.
- `images.specialGrid` opts into the special campaign grid.
- Supported image `type` values currently are `1x1`, `1x2`, `2x1`, `2x2`, and `3x1`.
- In the special grid, the visual spans are remapped in CSS; do not create slug-only fake types for layout experiments.

Keep route order in `src/slugs/galleries/index.ts` and `src/slugs/projects/index.ts`.

## Images And Performance

- Prefer committed local assets under `public/imgs/**` for project and gallery visuals.
- Prefer `.webp` for static raster images.
- Keep `.gif` only when animation must be preserved.
- Delete unused source PNG/JPG files after converting, but preserve files still referenced by code.
- Use `next/image` through existing components or styled wrappers.
- Always provide useful `alt` text for content images.
- Gallery images use eager loading only for the first visible group and lazy loading for the rest. Preserve that behavior unless there is a measured reason to change it.
- Gallery cards include a CSS skeleton behind images. Keep it layout-neutral: it must not add wrappers or change grid sizing.

## Validation

Use lightweight validation during routine edits:

- `npm run lint`
- `npx tsc --noEmit`

Do not run `npm run build` unless the user explicitly asks for a build. The build can be slow in this project and should not be used as the default validation step.

## Editing Discipline

- Keep edits scoped to the requested feature or bug.
- Do not revert unrelated dirty work in the repository.
- Prefer `apply_patch` for manual edits.
- Do not introduce new dependencies unless the user explicitly approves them.
- Maintain ASCII file/path names and predictable asset numbering for gallery images.
