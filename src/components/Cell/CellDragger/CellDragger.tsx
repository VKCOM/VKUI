import * as React from "react";
import { Icon24Reorder, Icon24ReorderIos } from "@vkontakte/icons";
import { getClassName } from "../../../helpers/getClassName";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { IOS } from "../../../lib/platform";
import { Touch } from "../../Touch/Touch";
import { DraggableProps } from "../useDraggable";
import "./CellDragger.css";

type CellDraggerProps = DraggableProps & React.HTMLAttributes<HTMLElement>;

export const CellDragger: React.FC<CellDraggerProps> = ({
  onDragStart,
  onDragMove,
  onDragEnd,
  ...restProps
}) => {
  const platform = usePlatform();

  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Touch
      vkuiClass={classNames(getClassName("CellDragger", platform))}
      onStart={onDragStart}
      onMoveY={onDragMove}
      onEnd={onDragEnd}
      onClick={onClick}
      {...restProps}
    >
      {platform === IOS ? <Icon24ReorderIos /> : <Icon24Reorder />}
    </Touch>
  );
};
