# next-component-lib

A Next.js component library built with TypeScript and Tailwind CSS, providing a structured set of reusable UI primitives organised around an Atomic Design pattern.

## Overview

Components are split into two tiers:

- **Atoms** — bare, self-contained primitives (inputs, buttons, typography)
- **Molecules** — atoms composed with a `Label`, ready to drop into a form

A live showcase of every component is available in `app/page.tsx`, grouped inside collapsible `Curtain` sections.

## Components

### Atoms / Buttons
`ActionButton`, `HeroIconActionButton`, `HeroIconTextButton`, `RedirectButton`, `SubmitDataButton`

Each button accepts an `altButton` prop that switches to an outlined/inverse style. All are built on a shared base `Button` component that renders as `<button>` or `<a>` depending on the props passed.

### Atoms / Inputs
Full coverage of native HTML input types: `Text`, `Email`, `Password`, `Search`, `Tel`, `Url`, `Number`, `Range`, `Color`, `TextArea`, `Date`, `DateTimeLocal`, `Month`, `Week`, `Time`, `CheckBox`, `Radio`, `File`, `Hidden`, `Reset`, `Submit` — plus `ReactDatePicker` and `ReactTimeInput` for enhanced date/time picking.

### Atoms / Typography
`H1`–`H6`, `BodyLargeText`, `BodySmallText`, `Label`, `Overline`, `Caption`

### Molecules
Every Atom input and button has a corresponding `Labeled*` molecule that wraps it with a `Label` component.

### Curtain
A collapsible section component (`Molecules/Curtains/Curtain`) with animated open/close transitions, used to group related components in the showcase.

## Project Structure

```
├── app/
│   ├── globals.css
│   └── page.tsx              # Component showcase
├── components/
│   ├── Atoms/
│   │   ├── Buttons/
│   │   ├── Inputs/
│   │   └── Typography/
│   └── Molecules/
│       ├── Buttons/
│       ├── Curtains/
│       └── Inputs/
├── types/
│   ├── buttons/
│   ├── icons/
│   └── typography/
└── utils/
    └── cn.ts                 # clsx + tailwind-merge helper
```

## Requirements

- Next.js 14+
- TypeScript
- Tailwind CSS
- Heroicons (`@heroicons/react`)
- `clsx` + `tailwind-merge`
- `react-datepicker`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.
