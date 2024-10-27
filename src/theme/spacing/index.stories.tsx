import {
  HorizontalSpacingTokens,
  teamsLightTheme as theme,
  VerticalSpacingTokens,
} from "maodesign";

const meta = {
  title: "主题/spacing",
  parameters: {
    docs: {
      canvas: {
        withToolbar: false,
        sourceState: "none",
      },
    },
  },
};

export const HorizentalSpacing = () => {
  const spacingHorizontalTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("spacingHorizontal")
  ) as (keyof HorizontalSpacingTokens)[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {spacingHorizontalTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div
          key={`${styleKey}-demo`}
          style={{
            width: theme[styleKey],
            height: "2em",
            background: "#00CC6A",
          }}
        ></div>,
      ])}
    </div>
  );
};

export const verticalSpacing = () => {
  const spacingVerticalTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("spacingVertical")
  ) as (keyof VerticalSpacingTokens)[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {spacingVerticalTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div
          key={`${styleKey}-demo`}
          style={{
            height: theme[styleKey],
            width: "2em",
            background: "#00CC6A",
          }}
        ></div>,
      ])}
    </div>
  );
};

export default meta;
