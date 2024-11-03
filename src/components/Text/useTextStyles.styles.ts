import { makeStyles } from "@griffel/react";
import { tokens } from "maodesign";

export const textClassName = {
  root: "m-ui-Text",
};

export const useTextStyles = makeStyles({
  root: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    fontFamily: tokens.fontFamilyBase,
    lineHeight: tokens.lineHeightBase300,
    textAlign: "start",
    display: "inline",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  },
  //   align
  start: {
    textAlign: "start",
  },
  center: {
    textAlign: "center",
  },
  end: {
    textAlign: "end",
  },
  justify: {
    textAlign: "justify",
  },
  //   display: block
  block: {
    display: "block",
  },
  //   font family
  base: {
    fontFamily: tokens.fontFamilyBase,
  },
  monospace: {
    fontFamily: tokens.fontFamilyMonospace,
  },
  numeric: {
    fontFamily: tokens.fontFamilyNumeric,
  },
  //   font style
  italic: {
    fontStyle: "italic",
  },
  //   font size
  base100: {
    fontSize: tokens.fontSizeBase100,
  },
  base200: {
    fontSize: tokens.fontSizeBase200,
  },
  base300: {
    fontSize: tokens.fontSizeBase300,
  },
  base400: {
    fontSize: tokens.fontSizeBase400,
  },
  base500: {
    fontSize: tokens.fontSizeBase500,
  },
  base600: {
    fontSize: tokens.fontSizeBase600,
  },
  base700: {
    fontSize: tokens.fontSizeHero700,
  },
  base800: {
    fontSize: tokens.fontSizeHero800,
  },
  base900: {
    fontSize: tokens.fontSizeHero900,
  },
  base1000: {
    fontSize: tokens.fontSizeHero1000,
  },
  //   line through
  strikethrough: {
    textDecorationLine: "line-through",
  },
  //   text overflow
  truncate: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  //   underline
  underline: {
    textDecorationLine: "underline",
  },
  //   font weight
  regular: {
    fontWeight: tokens.fontWeightRegular,
  },
  medium: {
    fontWeight: tokens.fontWeightMedium,
  },
  semibold: {
    fontWeight: tokens.fontWeightSemibold,
  },
  bold: {
    fontWeight: tokens.fontWeightBold,
  },
  nowrap: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});
