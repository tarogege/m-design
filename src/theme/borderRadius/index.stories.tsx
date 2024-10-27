import { teamsLightTheme } from "maodesign";
import { BorderRadiusTokens } from "maodesign";

const theme = teamsLightTheme;

const meta = {
  title: "主题/borderRadisu",
  parameters: {
    docs: {
      canvas: {
        withToolbar: false,
        sourceState: "none",
      },
    },
  },
};

export const Default = () => {
  const borderRaiusTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("borderRadius")
  ) as (keyof BorderRadiusTokens)[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto) 1fr ",
        gap: "10px 20px",
        alignItems: "center",
      }}
    >
      {borderRaiusTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div key={`${styleKey}-key`}>{theme[styleKey]}</div>,
        <div
          key={`${styleKey}-col1`}
          style={{
            background: "#bbb",
            width: "3em",
            height: "3em",
            borderRadius: theme[styleKey],
          }}
        ></div>,
        <div
          key={`${styleKey}-col2`}
          style={{
            border: `${theme.strokeWidthThin} solid black`,
            width: "3em",
            height: "3em",
            borderRadius: theme[styleKey],
          }}
        ></div>,
      ])}
    </div>
  );
};

export default meta;
