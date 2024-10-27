import React from "react";
import { Theme, webLightTheme } from "maodesign";
import { useStyles } from "./useStyles.styles";

type ThemeProviderValue = Theme | Partial<Theme> | undefined;
const ThemeProvider = React.createContext<ThemeProviderValue>(undefined);

export type MProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeProviderValue>
> & {
  theme: ThemeProviderValue;
};

const MProvider = ({
  children,
  className,
  theme = webLightTheme,
  ...restProps
}: MProviderProps) => {
  // 1.将theme 放到context里面
  // 2.通过theme obj 构建css样式，定义css 变量
  const cls = useStyles({ className, theme });
  console.log(cls, "clssss");
  return (
    <ThemeProvider.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeProvider.Provider>
  );
};

export { MProvider };
