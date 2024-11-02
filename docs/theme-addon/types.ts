import { THEME_ID } from "./constants";
import type { ThemeIds } from "./themes";
import { Args, Parameters, StoryContext } from "@storybook/types";

export interface FishStoryContext extends StoryContext {
  globals: FishGlobals;
}

/**
 * Extends the storybook globals object to include fluent specific properties
 */
export interface FishGlobals extends Args {
  [THEME_ID]?: ThemeIds;
}
