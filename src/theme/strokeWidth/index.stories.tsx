import { StrokeWidthTokens, teamsLightTheme as theme } from "maodesign";

const meta = {
  title: "主题/strokeWidth",
  parameters: {
    docs: {
      canvas: {
        widthToolbar: false,
        sourceState: "none",
      },
    },
  },
};

export const StrokeWidth = () => {
  const strokeWidthTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("strokeWidth")
  ) as (keyof StrokeWidthTokens)[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "10px 20px",
        alignItems: "cetner",
      }}
    >
      {strokeWidthTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div
          key={`${styleKey}-demo`}
          style={{ borderBottom: `${theme[styleKey]} solid black` }}
        ></div>,
      ])}
    </div>
  );
};

export default meta;
