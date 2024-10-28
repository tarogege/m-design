import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "maodesign";

const contentSpacing = "12px";
const insetSpacing = "12px";
const maxStartEndLength = "8px";
const minStartEndLength = "8px;";

export const dividerClassName = {
  root: "m-ui-divider",
  wrapper: "m-ui-divider__wrapper",
};

export const useBaseStyle = makeStyles({
  base: {
    display: "flex",
    alignItems: "center",

    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,

    "::before": {
      boxSizing: "border-box",
      flexGrow: 1,
    },
    "::after": {
      boxSizing: "border-box",
      flexGrow: 1,
    },
  },

  //   alignContent
  center: {
    "::before": {
      content: '""',
    },
    "::after": {
      content: '""',
    },
  },
  start: {
    "::after": {
      content: '""',
    },
  },
  end: {
    "::before": {
      content: '""',
    },
  },

  // appearance
  brand: {
    color: tokens.colorBrandForeground1,

    "::before": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  default: {
    color: tokens.colorNeutralForeground2,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },
  },
  strong: {
    color: tokens.colorNeutralForeground1,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },
  },
  subtle: {
    color: tokens.colorNeutralForeground3,

    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },
  },

  //   childless
  childless: {
    "::before": {
      marginRight: 0,
      marginBottom: 0,
    },
    "::after": {
      marginLeft: 0,
      marginTop: 0,
    },
  },
});

export const useHorizentalStyle = makeStyles({
  base: {
    width: "100%",
    marginBlock: tokens.spacingVerticalM,

    "::before": {
      borderBlockStartWidth: tokens.strokeWidthThin,
      minWidth: minStartEndLength,
    },

    "::after": {
      borderBlockStartWidth: tokens.strokeWidthThin,
      minWidth: minStartEndLength,
    },
  },

  // variant
  solid: {
    "::before": {
      borderBlockStartStyle: "solid",
    },
    "::after": {
      borderBlockStartStyle: "solid",
    },
  },
  dashed: {
    "::before": {
      borderBlockStartStyle: "dashed",
    },
    "::after": {
      borderBlockStartStyle: "dashed",
    },
  },
  dotted: {
    "::before": {
      borderBlockStartStyle: "dotted",
    },
    "::after": {
      borderBlockStartStyle: "dotted",
    },
  },

  //   alignContent
  center: {
    "::before": {
      marginRight: contentSpacing,
    },
    "::after": {
      marginLeft: contentSpacing,
    },
  },
  start: {
    "::after": {
      marginLeft: contentSpacing,
    },
  },
  end: {
    "::before": {
      marginRight: contentSpacing,
    },
  },
});

export const useVerticalStyle = makeStyles({
  base: {
    height: "100%",
    minHeight: "20px",
    display: "inline-flex",
    flexDirection: "column",
    marginInline: tokens.spacingHorizontalM,

    "::before": {
      borderLeftWidth: tokens.strokeWidthThin,
      minHeight: minStartEndLength,
    },

    "::after": {
      borderLeftWidth: tokens.strokeWidthThin,
      minHeight: minStartEndLength,
    },
  },

  // alignContent
  center: {
    "::before": {
      marginBottom: contentSpacing,
    },
    "::after": {
      marginTop: contentSpacing,
    },
  },
  start: {
    "::after": {
      marginTop: contentSpacing,
    },
  },
  end: {
    "::before": {
      marginBottom: contentSpacing,
    },
  },

  // variant
  solid: {
    "::before": {
      borderLeftStyle: "solid",
    },
    "::after": {
      borderLeftStyle: "solid",
    },
  },
  dashed: {
    "::before": {
      borderLeftStyle: "dashed",
    },
    "::after": {
      borderLeftStyle: "dashed",
    },
  },
  dotted: {
    "::before": {
      borderLeftStyle: "dotted",
    },
    "::after": {
      borderLeftStyle: "dotted",
    },
  },

  withChildren: {
    minHeight: "84px",
  },
});
