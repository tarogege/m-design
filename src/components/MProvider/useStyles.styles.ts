import { makeStyles, mergeClasses } from "@griffel/react";
import { MProviderProps, tokens } from "m-design";
import { useThemeStyleTag } from "./useThemeStyleTag";

const mDesignProviderClassName = {
  root: "m-design-provider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({ className, theme }: Partial<MProviderProps>) => {
  const baseStyles = useBaseStyles();
  // 根据theme创建cssrules
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    mDesignProviderClassName.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
