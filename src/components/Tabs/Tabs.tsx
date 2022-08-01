import * as React from "react";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS, VKCOM } from "../../lib/platform";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { warnOnce } from "../../lib/warnOnce";
import "./Tabs.css";

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    AdaptivityProps {
  /**
   * Задаёт вид кнопок.
   *
   * > ⚠️ Значения `"buttons"`, `"segmented"` устарели и будут удалены в 5.0.0. Вместо `"buttons"` используйте `"secondary"`.
   * > Режим `"segmented"` переехал в отдельный компонент [`SegmentedControl`](https://vkcom.github.io/VKUI#/SegmentedControl),
   * > поэтому используйте его вместо `Tabs`.
   */
  mode?: "buttons" | "segmented" | "default" | "accent" | "secondary";
}

const warn = warnOnce("Tabs");

export interface TabsContextProps {
  mode: TabsProps["mode"];
  withGaps: boolean;
}

export const TabsModeContext = React.createContext<TabsContextProps>({
  mode: "default",
  withGaps: false,
});

const TabsComponent = ({
  children,
  mode = "default",
  getRootRef,
  sizeX,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();

  if (
    (mode === "buttons" || mode === "segmented") &&
    process.env.NODE_ENV === "development"
  ) {
    const expectedValueText =
      mode === "buttons"
        ? `значения "secondary"`
        : "компонент SegmentedControl";
    warn(
      `mode="${mode}" устарело и будет удалено в 5.0.0. Используйте ${expectedValueText}`
    );
  }

  if (platform !== IOS && mode === "segmented") {
    mode = "default";
  }

  if (mode === "buttons") {
    mode = "secondary";
  }

  const withGaps = mode === "accent" || mode === "secondary";

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Tabs",
        (platform === IOS || platform === VKCOM) && `Tabs--${platform}`,
        `Tabs--${mode}`,
        withGaps && "Tabs--withGaps",
        // TODO v5.0.0 новая адаптивность
        `Tabs--sizeX-${sizeX}`
      )}
    >
      <div vkuiClass="Tabs__in">
        <TabsModeContext.Provider value={{ mode, withGaps }}>
          {children}
        </TabsModeContext.Provider>
      </div>
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Tabs
 */
export const Tabs = withAdaptivity(TabsComponent, { sizeX: true });

Tabs.displayName = "Tabs";
