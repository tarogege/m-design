import { mergeClasses } from "@griffel/react";
import { ForwardRefComponent } from "maodesign";
import type { LabelProps } from "maodesign";
import * as React from "react";
import { labelClassName, useLabelStyles } from "./useLabelStyles.styles";

export const Label: ForwardRefComponent<LabelProps> = React.forwardRef(
  (
    {
      children,
      className,
      required = false,
      disabled = false,
      size = "medium",
      weight = "regular",
      ...rest
    },
    ref
  ) => {
    const styles = useLabelStyles();

    return (
      <label
        {...rest}
        ref={ref as React.Ref<HTMLLabelElement>}
        className={mergeClasses(
          labelClassName.root,
          styles[size],
          weight === "semibold" && styles.semibold,
          disabled && styles.disabled,
          className
        )}
        aria-hidden="true"
      >
        {children}
        {required && (
          <span
            className={mergeClasses(
              labelClassName.required,
              styles.required,
              disabled && styles.disabled
            )}
          >
            {typeof required === "boolean" ? "*" : required}
          </span>
        )}
      </label>
    );
  }
);

export default Label;
