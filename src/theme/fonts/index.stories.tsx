import { makeStyles } from "@griffel/react";
import {
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LineHeightTokens,
  teamsLightTheme as theme,
} from "maodesign";

const meta = {
  title: "主题/fonts",
  parameters: {
    docs: {
      canvas: {
        withToolbar: false,
        sourceState: "none",
      },
    },
  },
};

const useStyles = makeStyles({
  propGrid: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "10px 20px",
    alignItems: "center",
  },
});

export const FontSize = () => {
  const styles = useStyles();
  const fontSizeTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("fontSize")
  ) as (keyof FontSizeTokens)[];

  return (
    <div className={styles.propGrid}>
      {fontSizeTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div key={`${styleKey}-demo`} style={{ fontSize: theme[styleKey] }}>
          maodesign
        </div>,
      ])}
    </div>
  );
};

export const FontWeight = () => {
  const styles = useStyles();
  const fontWeightTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("fontWeight")
  ) as (keyof FontWeightTokens)[];

  return (
    <div className={styles.propGrid}>
      {fontWeightTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div key={`${styleKey}-demo`} style={{ fontWeight: theme[styleKey] }}>
          maodesign
        </div>,
      ])}
    </div>
  );
};

export const FontFamily = () => {
  const styles = useStyles();
  const fontFamilyTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("fontFamily")
  ) as (keyof FontFamilyTokens)[];

  return (
    <div className={styles.propGrid}>
      {fontFamilyTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div key={`${styleKey}-demo`} style={{ fontFamily: theme[styleKey] }}>
          maodesign 1234
        </div>,
      ])}
    </div>
  );
};

export const LineHeight = () => {
  const styles = useStyles();
  const lineHeightTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("lineHeight")
  ) as (keyof LineHeightTokens)[];

  return (
    <div className={styles.propGrid}>
      {lineHeightTokens.map((styleKey) => [
        <div key={styleKey}>{styleKey}</div>,
        <div
          key={`${styleKey}-demo`}
          style={{ lineHeight: theme[styleKey], backgroundColor: "#eee" }}
        >
          maodesign 1234
        </div>,
      ])}
    </div>
  );
};

export default meta;
