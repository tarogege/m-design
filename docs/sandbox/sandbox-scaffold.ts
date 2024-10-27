import { type Data } from "./sandobx-utils";
import dedent from "dedent";
import { serializeJson } from "./utils";

const commonDevDeps = {
  "@types/react": "^18",
  "@types/react-dom": "^18",
  typescript: "^5.2.2",
};

const scaffold = (config: Data) => {
  const base = {
    "package.json": Vite.getPkgJson(config),
    "vite.config.ts": Vite.getViteCfg(),
    "tsconfig.json": Vite.getTsconfig(),
    "tsconfig.node.json": Vite.getTsconfigNode(),
    "index.html": Vite.getHTML(),
    "src/index.tsx": Vite.getRootIndex(),
    "src/App.tsx": Vite.getApp(),
    "src/example.tsx": Vite.getExample(config),
  };
  // TODO:
  // if (config.provider === "stackblitz-cloud") {
  //   Object.assign(base, getStackblitzConfig());
  // }
  if (config.provider === "codesandbox-cloud") {
    Object.assign(base, getCodesandboxConfig("vite"));
  }
  return base;
};

const Vite = {
  getHTML: () => dedent`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React + TS</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/index.tsx"></script>
    </body>
  </html>
  `,
  getRootIndex: getIndex,
  getExample,
  getApp,
  getViteCfg: () => {
    return dedent`
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'

      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [react()],
      })
    `;
  },
  getTsconfigNode: () => {
    return serializeJson({
      compilerOptions: {
        composite: true,
        skipLibCheck: true,
        module: "ESNext",
        moduleResolution: "bundler",
        allowSyntheticDefaultImports: true,
      },
      include: ["vite.config.ts"],
    });
  },
  getTsconfig: () => {
    return serializeJson({
      compilerOptions: {
        target: "ES2020",
        useDefineForClassFields: true,
        lib: ["ES2020", "DOM", "DOM.Iterable"],
        module: "ESNext",
        skipLibCheck: true,

        /* Bundler mode */
        moduleResolution: "node",
        // moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: "react-jsx",

        /* Linting */
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true,
      },
      include: ["src"],
      references: [{ path: "./tsconfig.node.json" }],
    });
  },
  getPkgJson: (data: Data) => {
    return serializeJson({
      name: "vite-react-typescript-starter",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview",
      },
      dependencies: {
        ...data.dependencies,
      },
      devDependencies: {
        ...commonDevDeps,
        "@vitejs/plugin-react": "^4.2.0",
        vite: "^5.0.0",
      },
    });
  },
};
function getApp() {
  const code = dedent`
    import { MProvider, webLightTheme } from 'maodesign';
    import { default as Example } from './example';

    const App = () => {
        return (
          <MProvider theme={webLightTheme}>
            <Example />
          </MProvider>
        );
    };

    export default App;
  `;

  return code;
}

function getIndex() {
  return dedent`
    import * as React from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App';

    const root = createRoot(document.getElementById('root') as HTMLElement);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  `;
}

function getExample(demoData: Data) {
  return demoData.storyFile;
}

function getCodesandboxConfig(kind: "vite") {
  const startConfig = {
    vite: { command: "yarn dev", preview: { port: 5173 } },
  };
  return {
    ".devcontainer/devcontainer.json": serializeJson({
      name: "Devcontainer",
      build: {
        dockerfile: "./Dockerfile",
      },
    }),
    ".devcontainer/Dockerfile": `FROM node:20-bullseye`,
    ".codesandbox/tasks.json": serializeJson({
      // These tasks will run in order when initializing your CodeSandbox project.
      setupTasks: [
        {
          name: "Install Dependencies",
          command: "yarn install",
        },
      ],

      // These tasks can be run from CodeSandbox. Running one will open a log in the app.
      tasks: {
        dev: {
          name: "dev",
          runAtStart: true,
          ...startConfig[kind],
        },
        build: {
          name: "build",
          command: "yarn build",
          runAtStart: false,
        },
        preview: {
          name: "preview",
          command: "yarn preview",
          runAtStart: false,
        },
      },
    }),
  };
}

export default scaffold;
