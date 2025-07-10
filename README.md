Test task for AADS.

Demo: [https://test-task-sunr1sen.netlify.app/](https://test-task-sunr1sen.netlify.app/)

## Technologies

- **React 18** + **TypeScript**
- **Vite** - build tool
- **Zustand** - state management
- **Ant Design** - UI components and icons
- **SCSS** - modular styles and variables

## Project Structure

```
src/
├── components/          # Reusable components
├── features/            # Feature blocks
├── layouts/             # Layout components
├── pages/               # Application pages
├── store/               # Zustand store
├── styles/              # Global and variable SCSS
└── types/               # TypeScript types
```

## Features
- View, filter, create and delete campaigns
- Responsive design (grids, large checkboxes, mobile modal)
- Data persistence in localStorage
- Basic form validation

## Installation and Setup

```bash
git clone <repository-url>
cd test-task
npm install
npm run dev
```

## Development Guidelines
- Use variables from `src/styles/variables.scss`
- Follow conventional commits structure (feat:, fix:, refactor:, chore: ...)
- All styles through SCSS modules, no global margin/padding

## License
MIT License
