import { Meta, StoryObj } from "@storybook/react/*";
import { Text } from "maodesign";
import Default from "./Default.stories";
import DefaultRaw from "./Default.stories?raw";
import Align from "./Align.stories";
import AlignRaw from "./Align.stories?raw";
import Presets from "./Presets.stories";
import PresetsRaw from "./Presets.stories?raw";

const meta = {
  title: "组件/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

(Default as Story).parameters = {
  docs: {
    source: {
      code: DefaultRaw,
    },
  },
};

(Presets as Story).parameters = {
  docs: {
    source: {
      code: PresetsRaw,
    },
  },
};

(Align as Story).parameters = {
  docs: {
    source: {
      code: AlignRaw,
    },
  },
};

export { Default, Presets, Align };
