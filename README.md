# Sveltekit + TypeScript + Tailwindcss

This template should help get you started developing with [Sveltekit](https://kit.svelte.dev/docs/introduction) and TypeScript in Vite. The template uses tailwindcss write css, check out the [Tailwindcss docs](https://www.tailwindcss.cn/) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build:env(dev/test/uat/prod)
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
