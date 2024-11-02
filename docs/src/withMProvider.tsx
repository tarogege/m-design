import * as React from "react";
import { MProvider, webLightTheme } from "../../src";
import { StoryContext } from "@storybook/types";
import { THEME_ID, themes } from "../theme-addon";
import { defaultTheme } from "../theme-addon/themes";

function findTheme(id) {
  if (!id) {
    return;
  }

  return themes.find((theme) => theme.id === id);
}

function getActiveTheme(globals) {
  const themeId = globals[THEME_ID];
  const { theme } = findTheme(themeId) ?? defaultTheme;
  return { theme };
}

const withMProvider = (Story: React.ElementType, context: StoryContext) => {
  const { theme } = getActiveTheme(context.globals);

  return (
    <MProvider theme={theme}>
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
