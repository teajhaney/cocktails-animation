# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Automatic Commit Message Generation

This project is configured with Commitizen to help generate standardized commit messages when pushing to GitHub. To use this feature:

1. Stage your changes: `git add .`
2. Run: `npm run commit` (instead of `git commit`)
3. Follow the interactive prompts to generate your commit message
4. Push your changes: `git push`

For detailed instructions on setting up and using automatic commit message generation in WebStorm, see the [WebStorm Commit Guide](./WEBSTORM_COMMIT_GUIDE.md).
