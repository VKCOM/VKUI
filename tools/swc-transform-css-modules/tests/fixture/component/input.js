import styles from "./Component.module.css";
import stylesIOS from "./ComponentIOS.module.css";

const headerLevelClassName = {
  1: styles["Component__header--level-1"],
  2: styles["Component__header--level-2"],
};

const a = styles.Component;
const b = windows.Component;
const c = stylesIOS.Component;

classNames(
  styles.Component,
  disabled && styles["Component--disabled"],
  platform === "ios" && stylesIOS["Component--ios"],
);
