import { TextProps, ForwardRefComponent } from "maodesign";
import { textClassName, useTextStyles } from "./useTextStyles.styles";
import React from "react";
import { mergeClasses } from "@griffel/react";

export const Text: ForwardRefComponent<TextProps> = React.forwardRef(
  (
    {
      align = "start",
      block = false,
      font = "base",
      italic = false,
      size = 300,
      strikethrough = false,
      truncate = false,
      underline = false,
      weight = "regular",
      wrap = true,
      className,
      style,
      children,
    },
    ref
  ) => {
    const styles = useTextStyles();
    return (
      <span
        ref={ref as React.Ref<HTMLElement>}
        className={mergeClasses(
          textClassName.root,
          styles.root,
          styles[align],
          block && styles.block,
          styles[font],
          italic && styles.italic,
          styles[`base${size}`],
          strikethrough && styles.strikethrough,
          truncate && styles.truncate,
          underline && styles.underline,
          styles[weight],
          !wrap && styles.nowrap,
          className
        )}
        style={style}
      >
        {children}
      </span>
    );
  }
);
