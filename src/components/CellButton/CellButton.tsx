import { classNames } from "../../lib/classNames";
import { SimpleCell, SimpleCellProps } from "../SimpleCell/SimpleCell";
import "./CellButton.css";

export interface CellButtonProps extends SimpleCellProps {
  mode?: "primary" | "danger";
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CellButton
 */
export const CellButton = ({
  centered = false,
  mode = "primary",
  ...restProps
}: CellButtonProps) => {
  return (
    <SimpleCell
      stopPropagation={true}
      {...restProps}
      vkuiClass={classNames(
        "CellButton",
        `CellButton--${mode}`,
        centered && "CellButton--centered"
      )}
    />
  );
};
