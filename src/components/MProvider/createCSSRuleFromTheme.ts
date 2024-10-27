import { Theme } from "maodesign";
/**
 * 根据theme，创建一个css规则，
 * .maodesign-provider0 {
 *    --borderRadiusNone: 0;
 *    --borderRadiusSmall: 2px;
 *    略...
 * }
 */

export const createCSSRuleFromTheme = (
  selector: string,
  theme: Theme | Partial<Theme> | undefined
) => {
  if (theme) {
    const cssVars = (Object.keys(theme) as (keyof typeof theme)[]).reduce(
      (result, current) => `${result}--${current}: ${theme[current]}; `,
      ""
    );
    return `.${selector} { ${cssVars} }`;
  }

  return `.${selector} {}`;
};
