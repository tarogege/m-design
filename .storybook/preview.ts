import type { Preview } from "@storybook/react";
import useExportToSandbox from "../docs/sandbox/decorators/useExportToSandbox";
import withMProvider from "../docs/src/withMProvider";
import MaoDocsPage from "../docs/src/MaoDocsPage.stories";
import { THEME_ID } from "../docs/theme-addon";

const decorators = [withMProvider, useExportToSandbox];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    exportToSandbox: {
      requiredDependencies: {
        react: "^18",
        "react-dom": "^18",
      },
    },
    docs: {
      page: MaoDocsPage,
      toc: {
        title: "Contents",
      },
      canvas: {
        withToolbar: false,
      },
    },
  },
  tags: ["autodocs"],
  decorators,
  initialGlobals: {
    [THEME_ID]: undefined,
  },
};

export default preview;
