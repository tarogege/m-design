import { TinyColor } from "@ctrl/tinycolor";
import { useEffect, useRef } from "react";

export interface ColorRampItemProps {
  //  color name
  name?: string;
  //  color value
  value?: string | number;
}
export const ColorRampItem = ({ name, value }: ColorRampItemProps) => {
  const divRef = useRef(null!);
  useEffect(() => {
    // 这里使用了计算属性，计算了实际的背景颜色，因为value的值可能有多种情况 rgb hxl white 或者自定义变量，通过computedStyle可以统一处理
    const computedStyle = window.getComputedStyle(divRef.current);
    const bgColor = computedStyle.getPropertyValue("background-color");
    const color = new TinyColor(bgColor);
    const isDark = color.isDark();
    const isTransparent = color.getAlpha() < 0.5;
    const txtColor = isTransparent ? "#000" : isDark ? "#fff" : "#000";
    (divRef.current as HTMLDivElement).style.color = txtColor;
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        width: "150px",
        height: "100%",
        background: value,
        display: "flex",
        alignItems: "space-between",
        justifyContent: "center",
        padding: "1.5vh",
      }}
    >
      {name && <span>{name}</span>}
      {value && <span>{value}</span>}
    </div>
  );
};
