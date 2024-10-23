import { makeStyles } from "@griffel/react";
import {
  teamsLightTheme as theme,
  DurationTokens,
  CurveTokens,
} from "m-design";
import { useState } from "react";

const meta = {
  title: "主题/animation",
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
  durationAnimation: {
    width: "4px",
    height: "64px",
    // margin: "0 30px",
    backgroundColor: "#ccc",
    position: "relative",
    animationName: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(180deg)" },
    },
    animationIterationCount: "infinite",
  },
  curveAnimatiom: {
    width: "64px",
    height: "64px",
    borderRadius: "64px",
    backgroundColor: "#ccc",
    position: "relative",
    animationIterationCount: "infinite",
    animationName: {
      from: { left: 0 },
      to: { left: "200px" },
    },
  },
});

export const AnimationDurations = () => {
  const [animationEnable, setAnimationEnable] = useState(true);
  const styles = useStyles();
  const durationTokens = Object.keys(theme).filter((themeName) =>
    themeName.startsWith("duration")
  ) as (keyof DurationTokens)[];

  return (
    <div>
      <input
        type="checkbox"
        checked={animationEnable}
        onChange={(e) => {
          setAnimationEnable(e.target.checked);
        }}
      />
      <label htmlFor="durationEnableAnimations">Enable animations</label>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto 1fr",
          gap: "10px 30px",
          alignItems: "center",
        }}
      >
        {durationTokens.map((styleKey) => [
          <div key={styleKey}>{styleKey}</div>,
          <div key={`${styleKey}-value`}>{theme[styleKey]}</div>,
          <div
            key={`${styleKey}-demo`}
            className={styles.durationAnimation}
            style={{
              animationDuration: animationEnable ? theme[styleKey] : "0ms",
            }}
          ></div>,
        ])}
      </div>
    </div>
  );
};

export const AnimationCurves = () => {
  const [animationEnable, setAnimationEnable] = useState(true);
  const styles = useStyles();
  const curveTokens = Object.keys(theme).filter((themeKey) =>
    themeKey.startsWith("curve")
  ) as (keyof CurveTokens)[];

  return (
    <div>
      <input
        type="checkbox"
        checked={animationEnable}
        onChange={(e) => {
          setAnimationEnable(e.target.checked);
        }}
      />
      <label htmlFor="durationEnableAnimations">Enable animations</label>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto 1fr",
          gap: "10px 20px",
          alignItems: "center",
        }}
      >
        {curveTokens.map((styleKey) => [
          <div key={styleKey}>{styleKey}</div>,
          <div key={`${styleKey}-value`}>{theme[styleKey]}</div>,
          <div key={`${styleKey}-demo`}>
            <div
              className={styles.curveAnimatiom}
              style={{
                animationDuration: animationEnable ? "4s" : "0s",
                animationTimingFunction: theme[styleKey],
              }}
            ></div>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default meta;
