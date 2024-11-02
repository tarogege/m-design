import { MProviderProps } from "maodesign";
import React from "react";
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";

const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, any>
) => {
  if (!target) {
    return undefined;
  }
  const styleEl = target.createElement("style");
  Object.keys(elementAttributes).forEach((key) => {
    styleEl.setAttribute(key, elementAttributes[key]);
  });

  target.head.appendChild(styleEl);
  return styleEl;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule);
  }
};

export const useThemeStyleTag = ({ theme }: Partial<MProviderProps>) => {
  // 生成id
  const generateId = React.useId();
  const escapeId = React.useMemo(
    () => generateId.replace(/:/g, ""),
    [generateId]
  );

  // 根据theme生成css rule 字符串
  const themeClassName = "maodesign-provider" + escapeId;
  const rule = React.useMemo(
    () => createCSSRuleFromTheme(themeClassName, theme),
    [themeClassName, theme]
  );

  // 在文档加载好后，将cssRule插入文档中
  const styleTag = React.useRef<HTMLStyleElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    styleTag.current = createStyleTag(document, { id: themeClassName });
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }

    return () => {
      styleTag.current?.remove();
    };
  }, []);

  return { themeClassName };
};
