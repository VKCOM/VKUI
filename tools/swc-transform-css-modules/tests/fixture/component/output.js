import "./Component.module.css";
import "./ComponentIOS.module.css";

const headerLevelClassName = {
  1: "vkuiComponent__header--level-1",
  2: "vkuiComponent__header--level-2",
};

const a = "vkuiComponent";
const b = windows.Component;
const c = "vkuiComponent";

classNames(
  "vkuiComponent",
  disabled && "vkuiComponent--disabled",
  platform === "ios" && "vkuiComponent--ios",
  `vkuiComponent--mode-${mode}`,
  `vkuiComponent--gradient-${appearance}-${gradientColor}`
);
