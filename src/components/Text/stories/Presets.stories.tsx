import { makeStyles } from "@griffel/react";
import {
  Body1,
  Body1Strong,
  Body1Stronger,
  Body2,
  Caption1,
  Caption1Strong,
  Caption1Stronger,
  Caption2,
  Caption2Strong,
  Display,
  LargeTitle,
  Subtitle1,
  Subtitle2,
  Subtitle2Stronger,
  Title1,
  Title2,
  Title3,
} from "maodesign";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

const Presets = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Body1>Hi maomao</Body1>
      <Body1Strong>Hi maomao</Body1Strong>
      <Body1Stronger>Hi maomao</Body1Stronger>
      <Body2>Hi maomao</Body2>
      <Caption1>Hi maomao</Caption1>
      <Caption1Strong>Hi maomao</Caption1Strong>
      <Caption1Stronger>Hi maomao</Caption1Stronger>
      <Caption2>Hi maomao</Caption2>
      <Caption2Strong>Hi maomao</Caption2Strong>
      <Display>Hi maomao</Display>
      <LargeTitle>Hi maomao</LargeTitle>
      <Subtitle1>Hi maomao</Subtitle1>
      <Subtitle2>Hi maomao</Subtitle2>
      <Subtitle2Stronger>Hi maomao</Subtitle2Stronger>
      <Title1>Hi maomao</Title1>
      <Title2>Hi maomao</Title2>
      <Title3>Hi maomao</Title3>
    </div>
  );
};

export default Presets;
