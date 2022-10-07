import * as React from "react";
import { Tappable } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { IOS, VKCOM } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { TabsModeContext, TabsContextProps } from "../Tabs/Tabs";
import { Headline } from "../Typography/Headline/Headline";
import { Subhead } from "../Typography/Subhead/Subhead";
import { warnOnce } from "../../lib/warnOnce";
import "./TabsItem.css";

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

const warn = warnOnce("TabsItem");

/**
 * @see https://vkcom.github.io/VKUI/#/TabsItem
 */
export const TabsItem = ({
  before,
  children,
  status,
  after,
  selected = false,
  role = "tab",
  tabIndex: tabIndexProp,
  ...restProps
}: TabsItemProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const { mode, withGaps }: TabsContextProps =
    React.useContext(TabsModeContext);
  let statusComponent = null;

  const isTabFlow = role === "tab";

  if (status) {
    statusComponent =
      typeof status === "number" ? (
        <Subhead
          Component="span"
          vkuiClass="TabsItem__status TabsItem__status--count"
          weight="2"
        >
          {status}
        </Subhead>
      ) : (
        <span vkuiClass="TabsItem__status">{status}</span>
      );
  }

  if (process.env.NODE_ENV === "development" && isTabFlow) {
    if (!restProps["aria-controls"]) {
      warn(`Передайте в "aria-controls" id контролируемого блока`, "warn");
    } else if (!restProps["id"]) {
      warn(
        `Передайте "id" компоненту для использования в "aria-labelledby" контролируемого блока`,
        "warn"
      );
    }
  }

  let tabIndex = tabIndexProp;
  if (isTabFlow && tabIndex === undefined) {
    tabIndex = selected ? 0 : -1;
  }

  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(
        "TabsItem",
        (platform === IOS || platform === VKCOM) && `TabsItem--${platform}`,
        mode && `TabsItem--${mode}`,
        selected && "TabsItem--selected",
        // TODO v5.0.0 новая адаптивность
        sizeY && `TabsItem--sizeY-${sizeY}`,
        withGaps && "TabsItem--withGaps"
      )}
      hoverMode="TabsItem--hover"
      activeMode="TabsItem--active"
      focusVisibleMode={mode === "segmented" ? "outside" : "inside"}
      hasActive={mode === "segmented"}
      role={role}
      aria-selected={selected}
      tabIndex={tabIndex}
    >
      {before && <div vkuiClass="TabsItem__before">{before}</div>}
      <Headline
        Component="span"
        vkuiClass="TabsItem__label"
        level={mode === "default" ? "1" : "2"}
        weight="2"
      >
        {children}
      </Headline>
      {statusComponent}
      {after && <div vkuiClass="TabsItem__after">{after}</div>}
      {mode === "default" && (
        <div
          vkuiClass="TabsItem__underline"
          aria-hidden
          data-selected={selected}
        />
      )}
    </Tappable>
  );
};
