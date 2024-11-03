import { makeStyles } from "@griffel/react";
import { Text } from "maodesign";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
});

const Align = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.container}>
        <Text align="start">Here is the text</Text>
        <Text align="center">Here is the text</Text>
        <Text align="end">Here is the text</Text>
        <Text align="justify">
          Justified text: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Praesentium accusamus voluptate autem? Recusandae alias corporis
          dicta quisquam sequi molestias deleniti, libero necessitatibus,
          eligendi, omnis cumque enim asperiores quasi quidem sit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Possimus repellat
          consectetur, sed aperiam ex nulla repellendus tempora vero illo
          aliquam autem! Impedit ipsa praesentium vero veritatis unde eos, fuga
          magnam!
        </Text>
      </div>
    </>
  );
};

export default Align;
