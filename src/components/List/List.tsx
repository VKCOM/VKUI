import * as React from "react";
import { classNames } from "../../lib/classNames";
import { ListContext } from "./ListContext";
import "./List.css";

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({
  children,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isDragging, toggleDrag] = React.useState(false);

  return (
    <div
      role="list"
      {...restProps}
      vkuiClass={classNames("List", isDragging && "List--dragging")}
    >
      <ListContext.Provider value={React.useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </div>
  );
};
