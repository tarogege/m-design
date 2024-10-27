import { StoryContext } from "@storybook/react";
import {
  addHiddenInput,
  type Data,
  prepareContainer,
  prepareData,
} from "./sandobx-utils";
import scaffold from "./sandbox-scaffold";
import { getParameters } from "codesandbox/lib/api/define";

const defaultFileToPreview = encodeURIComponent("src/example.tsx");

export function addDemoActionButton(context: StoryContext) {
  // 通过context拿到 story容器和定义class类
  const { container, cssClasses } = prepareContainer(context);
  // prepare config, 准备依赖项和example源文件
  const config = prepareData(context);
  if (!config) {
    return;
  }
  // 调用codesandbox api，发送post请求打开页面
  addActionButton(
    container,
    { ...config, provider: "codesandbox-cloud" },
    cssClasses
  );
  //   TODO:
  //   addActionButton(
  //     container,
  //     { ...config, provider: "stackblitz-cloud" },
  //     cssClasses
  //   );
}

function openCodeSandbox({
  files,
  provider,
}: { files: Record<string, string> } & Data) {
  const normalizedFilesApi = Object.entries(files).reduce((result, current) => {
    result[current[0]] = { isBinary: false, content: current[1] };
    return result;
  }, {} as any);

  const env = provider === "codesandbox-cloud" ? "server" : "browser";
  const parameters = getParameters({ files: normalizedFilesApi });

  const form = document.createElement("form");
  form.method = "POST";
  form.target = "_blank";
  form.action = `https://codesandbox.io/api/v1/sandboxes/define?environment=${env}`;

  addHiddenInput(form, "parameters", parameters);
  addHiddenInput(form, "query", `file=${defaultFileToPreview}`);

  console.log(parameters, "ppppp");

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

const actionConfig = {
  "codesandbox-cloud": {
    label: "CodeSandbox",
    factory: (files: Record<string, string>, config: Data) =>
      openCodeSandbox({ files, ...config }),
  },
  "codesandbox-browser": {
    label: "CodeSandbox",
    factory: (files: Record<string, string>, config: Data) =>
      openCodeSandbox({ files, ...config }),
  },
  //   TODO:
  //   "stackblitz-cloud": {
  //     label: "Stackblitz",
  //     factory: (files: Record<string, string>, config: Data) =>
  //       openStackblitz({ files, ...config }),
  //   },
};

function addActionButton(
  container: HTMLElement,
  config: Data,
  cssClasses: string[]
) {
  const files = scaffold(config);
  const action = actionConfig[config.provider];
  const button = document.createElement("button");
  button.textContent = `open in ${action.label}`;
  button.classList.add(...cssClasses);
  container.prepend(button);
  button.addEventListener("click", () => {
    action.factory(files, config);
  });
}
