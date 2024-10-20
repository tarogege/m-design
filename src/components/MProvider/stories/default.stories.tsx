import { makeStyles } from "@griffel/react";
import {
  MProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "m-design";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

const DefaultWithHooks = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <MProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </MProvider>
      </div>
      <div>
        <MProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </MProvider>
      </div>
      <div>
        <MProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </MProvider>
      </div>
      <div>
        <MProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </MProvider>
      </div>
      <div>
        <MProvider className={styles.provider} theme={teamsHighContrastTheme}>
          <div className={styles.text}>teamsHighContrastTheme</div>
        </MProvider>
      </div>
    </>
  );
};

export const Default = {
  render: () => <DefaultWithHooks />,
};
