import { MProvider } from "m-design";
import { Meta, StoryObj } from "@storybook/react";
import { Default } from "./default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./default.stories?raw";

const meta = {
  title: "组件/MProvider",
  component: MProvider,
} satisfies Meta<typeof MProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

(Default as any as Story).parameters = {
  docs: { source: { code: DefaultSource } },
};
export { Default };
