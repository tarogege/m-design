import { StoryContext } from "@storybook/react";
import { ParametersExtension } from "./public-types";
import getDependencies from "./getDependencies";

type ParametersConfig = NonNullable<ParametersExtension["exportToSandbox"]>;
export type Data = Pick<Required<ParametersConfig>, "provider"> & {
  storyFile: string;
  dependencies: Record<string, string>;
  title: string;
  description: string;
};

export function prepareContainer(context: StoryContext) {
  const selector = `#anchor--${context.id} .docs-story`;
  const rootEl = document.querySelector(selector);

  if (!rootEl) {
    throw new Error(`css selector: ${selector} doesnot exist`);
  }

  const showButton = rootEl.querySelector(".docblock-code-toggle");
  const container = showButton?.parentElement;
  if (!container) {
    throw new Error(`css selector: '.docblock-code-toggle', doesnot exist`);
  }

  const classList = (
    showButton.classList.value + " with-code-sandbox-button"
  ).split(" ");

  // remove button if it already existed
  const ourButtons = container.querySelectorAll(`.with-code-sandbox-button`);
  ourButtons.forEach((node) => node.remove());

  return { container, cssClasses: classList };
}

const addonConfigDefaults = {
  requiredDependencies: {},
  optionalDependencies: {},
};

export function prepareData(context: StoryContext) {
  // 1.依赖项
  const contextRelativeParms = context.parameters.exportToSandbox;
  if (!contextRelativeParms) {
    throw new Error("exportToSandbox config parameter cannot be empty");
  }

  const addOnConfig: Required<ParametersConfig> = {
    ...addonConfigDefaults,
    ...contextRelativeParms,
  };

  // 2.源文件
  const storyFile = context.parameters.docs.source.code;
  // 没有源文件 不显示
  if (!storyFile) {
    return null;
  }

  const { requiredDependencies, optionalDependencies, provider } = addOnConfig;
  const dependencies = getDependencies(
    storyFile,
    requiredDependencies,
    optionalDependencies
  );

  const description = `Story demo: ${context.title} - ${context.name}`;
  const title = "maomao";

  return {
    storyFile,
    dependencies,
    description,
    title,
    provider,
  };
}

export function addHiddenInput(
  form: HTMLFormElement,
  name: string,
  value: any
) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  form.appendChild(input);
}
