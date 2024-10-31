import { Meta, StoryObj } from "@storybook/react";
import { Divider, MProvider, webLightTheme } from "maodesign";
import DividerDefault from "./DividerDefault.stories";
import DividerDefaultRaw from "./DividerDefault.stories?raw";
import DividerVertical from "./DividerVertical.stories";
import DividerVerticalRaw from "./DividerVertical.stories?raw";
import DividerAlignContent from "./DividerAlignContent.stories";
import DividerAlignContentRaw from "./DividerAlignContent.stories?raw";
import DividerVariant from "./DividerVariant.stories";
import DividerVariantRaw from "./DividerVariant.stories?raw";

const meta = {
  title: "组件/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

(DividerDefault as Story).parameters = {
  docs: {
    source: {
      code: DividerDefaultRaw,
    },
    description: {
      story: "默认divider",
    },
  },
};

(DividerVertical as Story).parameters = {
  docs: {
    source: {
      code: DividerVerticalRaw,
    },
    description: {
      story: "竖向divider",
    },
  },
};

(DividerAlignContent as Story).parameters = {
  docs: {
    source: {
      code: DividerAlignContentRaw,
    },
  },
};

(DividerVariant as Story).parameters = {
  docs: {
    source: {
      code: DividerVariantRaw,
    },
  },
};

export { DividerDefault, DividerVertical, DividerAlignContent, DividerVariant };
