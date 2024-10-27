import { StoryContext } from "@storybook/react";
import { useEffect } from "react";
import { addDemoActionButton } from "../sandbox-factory";

const useExportToSandbox = (
  storyFn: (context: StoryContext) => JSX.Element,
  context: StoryContext
) => {
  useEffect(() => {
    if (context.parameters.docs?.canvas?.sourceState === "none") {
      return;
    }
    if (context.viewMode === "docs") {
      addDemoActionButton(context);
    }
  }, [context]);
  return storyFn(context);
};

export default useExportToSandbox;
