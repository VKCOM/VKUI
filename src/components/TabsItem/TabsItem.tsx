import * as React from "react";
import { Tappable } from "../Tappable/Tappable";
import { classNamesString } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { TabsModeContext, TabsContextProps } from "../Tabs/Tabs";
import { Headline } from "../Typography/Headline/Headline";
import { Subhead } from "../Typography/Subhead/Subhead";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import styles from "./TabsItem.module.css";

export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Добавляет иконку слева.
   *
   * - Для `mode="default"` используйте иконки размером 24.
   * - Для всех остальных `mode` используйте иконки размером 20.
   */
  before?: React.ReactNode;
  /**
   * Добавляет элемент слева от `after`.
   *
   * - `React.ReactElement` – либо [`Badge`](https://vkcom.github.io/VKUI/#/Badge) с параметром `mode="prominent"`.
   *   либо [`Counter`](https://vkcom.github.io/VKUI/#/Counter) с параметрами `mode="prominent" size="s"`.
   * - `number` – для показа текстового блока с переданным числом.
   */
  status?: React.ReactElement | number;
  /**
   * Добавляет иконку справа.
   *
   * Например, `<Icon16Dropdown />`
   */
  after?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/TabsItem
 */
export const TabsItem = ({
  before,
  children,
  status,
  after,
  selected = false,
  className,
  ...restProps
}: TabsItemProps) => {
  const { sizeY } = useAdaptivity();
  const { mode, withGaps }: TabsContextProps =
    React.useContext(TabsModeContext);
  let statusComponent = null;

  if (status) {
    statusComponent =
      typeof status === "number" ? (
        <Subhead
          Component="span"
          className={classNamesString(
            styles["TabsItem__status"],
            styles["TabsItem__status--count"]
          )}
          weight="2"
        >
          {status}
        </Subhead>
      ) : (
        <span className={styles["TabsItem__status"]}>{status}</span>
      );
  }

  return (
    <Tappable
      {...restProps}
      className={classNamesString(
        styles["TabsItem"],
        mode && styles[`TabsItem--mode-${mode}`],
        selected && styles["TabsItem--selected"],
        getSizeYClassName("TabsItem", sizeY, styles),
        withGaps && styles["TabsItem--withGaps"],
        className
      )}
      hoverMode={styles["TabsItem--hover"]}
      activeMode={styles["TabsItem--active"]}
      focusVisibleMode="inside"
      hasActive={false}
    >
      {before && <div className={styles["TabsItem__before"]}>{before}</div>}
      <Headline
        Component="span"
        className={styles["TabsItem__label"]}
        level={mode === "default" ? "1" : "2"}
        weight="2"
      >
        {children}
      </Headline>
      {statusComponent}
      {after && <div className={styles["TabsItem__after"]}>{after}</div>}
      {mode === "default" && (
        <div
          className={styles["TabsItem__underline"]}
          aria-hidden
          data-selected={selected}
        />
      )}
    </Tappable>
  );
};
