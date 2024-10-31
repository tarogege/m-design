import * as React from "react";
import { MProvider, webLightTheme } from "../../src";

const withMProvider = (Story) => {
  const theme = webLightTheme;

  return (
    <MProvider>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </MProvider>
  );
};

export default withMProvider;
