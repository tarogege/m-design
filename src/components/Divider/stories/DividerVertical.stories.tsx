import { makeStyles } from "@griffel/react";
import { Divider } from "maodesign";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    lineHeight: "20px",
    marginBottom: "40px",
  },
});

const DividerVertical = () => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.wrapper}>
        <span>sports</span>
        <Divider direction="vertical" />
        <span>math</span>
        <Divider direction="vertical" />
        <span>computer</span>
      </div>
      <div className={styles.wrapper}>
        <Divider direction="vertical">divider</Divider>
        <Divider direction="vertical" alignContent="start">
          divider
        </Divider>
        <Divider direction="vertical" alignContent="end">
          divider
        </Divider>
      </div>
    </>
  );
};

export default DividerVertical;
