import { mergeClasses } from "@griffel/react";
import * as React from "react";
import {
  dividerClassName,
  useBaseStyle,
  useHorizentalStyle,
  useVerticalStyle,
} from "./useDividerStyles.styles";
import { ForwardRefComponent } from "../../utilities";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 分隔线内内容的对齐方式。
   * @default 'horizental'
   */
  direction?: "horizental" | "vertical";
  /**
   * 内容对齐方式
   * @default 'center'
   */
  alignContent?: "start" | "end" | "center";
  /**
   * 默认外观,线条颜色
   * @default 'default'
   */
  appearance?: "brand" | "default" | "strong" | "subtle";

  /**
   * 线型
   * @default solid
   */
  variant?: "solid" | "dashed" | "dotted";
};

export const Divider: ForwardRefComponent<DividerProps> = React.forwardRef(
  (
    {
      children,
      style,
      className,
      appearance = "default",
      direction = "horizental",
      alignContent = "center",
      variant = "solid",
    },
    ref
  ) => {
    const baseStyles = useBaseStyle();
    const horizentalStyles = useHorizentalStyle();
    const verticalStyles = useVerticalStyle();
    const isHorizental = direction === "horizental";
    const isVertical = !isHorizental;
    let hasChildren = children !== null && children !== undefined;
    if (hasChildren && typeof children === "string") {
      hasChildren = !!children.trim();
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={mergeClasses(
          dividerClassName.root,
          baseStyles.base,
          baseStyles[alignContent],
          baseStyles[appearance],

          isHorizental && horizentalStyles.base,
          isHorizental && horizentalStyles[alignContent],
          isHorizental && horizentalStyles[variant],

          isVertical && verticalStyles.base,
          isVertical && hasChildren && verticalStyles.withChildren,
          isVertical && verticalStyles[alignContent],
          isVertical && verticalStyles[variant],

          !hasChildren && baseStyles.childless,
          className
        )}
        style={style}
        role="separator"
        aria-orientation={isVertical ? "vertical" : "horizontal"}
      >
        {hasChildren && (
          <span className={dividerClassName.wrapper}>{children}</span>
        )}
      </div>
    );
  }
);
