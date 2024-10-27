import type { Preview } from "@storybook/react";
import useExportToSandbox from "../docs/sandbox/decorators/useExportToSandbox";

const decorators = [useExportToSandbox];

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
  },
  tags: ["autodocs"],
  decorators,
};

export default preview;
