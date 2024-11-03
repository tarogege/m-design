import { mergeClasses } from "@griffel/react";
import { Text, TextPresetProps } from "maodesign";
// 高阶函数

type Options = {
  useStyles: () => Record<"root", string>;
  displayName: string;
};
export const createPreset = ({ useStyles, displayName }: Options) => {
  const Wrapper = (props: TextPresetProps) => {
    const className = `m-ui-${displayName}`;
    const styles = useStyles();
    return <Text className={mergeClasses(className, styles.root)} {...props} />;
  };
  Wrapper.displayName = displayName;
  return Wrapper;
};
