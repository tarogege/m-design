import { useCallback, useRef, useState } from "react";
import { ColorRampItem } from "./ColorRamp.stories";
import {
  webLightTheme,
  webDarkTheme,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  Theme,
} from "m-design";
import { makeStyles } from "@griffel/react";

const theme = {
  light: webLightTheme,
  dark: webDarkTheme,
  teamLight: teamsLightTheme,
  teamDark: teamsDarkTheme,
  teamHC: teamsHighContrastTheme,
};
const meta = {
  title: "主题/colors",
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
  searchContainer: {
    display: "flex",
    alignItems: "center",
  },
  inputSearch: {
    width: "100%",
  },
});

const tokens: Array<keyof Theme> = (
  Object.keys(theme.light) as Array<keyof Theme>
).filter(
  (tokenName) =>
    tokenName.match(/^color(?!Palette).*/) ||
    tokenName.startsWith(`colorPalette`)
);

export const Colors = () => {
  const styles = useStyles();
  const [colorTokenResult, setColorTokenResult] = useState(tokens);
  const [inputValue, setInputValue] = useState("");

  const searchTokens = (newValue) => {
    const searchResult = tokens.filter(
      (colorName) =>
        colorName.toLowerCase().includes(newValue) ||
        theme.light[colorName].toString().includes(newValue) ||
        theme.dark[colorName].toString().includes(newValue) ||
        theme.teamLight[colorName].toString().includes(newValue) ||
        theme.teamDark[colorName].toString().includes(newValue) ||
        theme.teamHC[colorName].toString().includes(newValue)
    );

    setColorTokenResult(searchResult);
  };

  const searchTokenDebounce = useDebounce(
    searchTokens as (...args: unknown[]) => void,
    220
  );

  const onInputChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      searchTokenDebounce(newValue.trim().toLowerCase());
    },
    [searchTokenDebounce]
  );

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          className={styles.inputSearch}
          placeholder={"Search for tokens by name or color"}
          onChange={onInputChange}
          value={inputValue}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "24em repeat(5, auto)",
          columnGap: "20px",
          alignItems: "stretch",
        }}
      >
        <h3 key="hrTokens" style={{ padding: "1em", margin: 0 }}>
          Design Token
        </h3>
        <h3 key="hrLight" style={{ padding: "1em", margin: 0 }}>
          Light
        </h3>
        <h3 key="hrDark" style={{ padding: "1em", margin: 0 }}>
          Dark
        </h3>
        <h3 key="hrTLight" style={{ padding: "1em", margin: 0 }}>
          Team Light
        </h3>
        <h3 key="hrTDark" style={{ padding: "1em", margin: 0 }}>
          Team Dark
        </h3>
        <h3 key="hrHC" style={{ padding: "1em", margin: 0 }}>
          Team High Contrast
        </h3>
        {colorTokenResult.map((colorName) => [
          <div key={colorName}>{colorName}</div>,
          <ColorRampItem
            key={`light-${colorName}`}
            value={theme.light[colorName]}
          />,
          <ColorRampItem
            key={`dark-${colorName}`}
            value={theme.dark[colorName]}
          />,
          <ColorRampItem
            key={`teamLight-${colorName}`}
            value={theme.teamLight[colorName]}
          />,
          <ColorRampItem
            key={`teamDark-${colorName}`}
            value={theme.teamDark[colorName]}
          />,
          <ColorRampItem
            key={`teamHC-${colorName}`}
            value={theme.teamHC[colorName]}
          />,
        ])}
      </div>
    </div>
  );
};

const useDebounce = (fn: (...args: unknown[]) => void, duration: number) => {
  const timeoutRef = useRef(0);
  return useCallback(
    (...args: unknown[]) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        fn(...args);
      }, duration);
    },
    [duration, fn]
  );
};

export default meta;
