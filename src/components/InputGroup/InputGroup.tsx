import { classNames } from "../../lib/classNames";
import "./InputGroup.css";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
}

export const InputGroup = ({
  mode = "vertical",
  ...restProps
}: InputGroupProps) => (
  <div
    vkuiClass={classNames("InputGroup", `InputGroup--${mode}`)}
    role="presentation"
    {...restProps}
  />
);
