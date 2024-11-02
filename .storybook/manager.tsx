import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, THEME_ID } from "../docs/theme-addon/constants";
import { ThemePicker } from "../docs/theme-addon/components/ThemePicker";
import * as React from "react";

addons.register(ADDON_ID, () => {
  addons.add(THEME_ID, {
    title: "主题",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemePicker,
  });
});
