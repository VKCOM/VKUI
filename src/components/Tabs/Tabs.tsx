import * as React from "react";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS, VKCOM } from "../../lib/platform";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { warnOnce } from "../../lib/warnOnce";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useDOM } from "../../lib/dom";
import { pressedKey } from "../../lib/accessibility";
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
  role = "tablist",
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();
  const { document } = useDOM();

  const isTabFlow = role === "tablist";

  const tabsRef = React.useRef<HTMLDivElement>(null);

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

  const getTabEls = () => {
    if (!tabsRef.current) {
      return [];
    }

    return Array.from(
      // eslint-disable-next-line no-restricted-properties
      tabsRef.current.querySelectorAll<HTMLDivElement>(
        "[role=tab]:not([disabled])"
      )
    );
  };

  const handleDocumentKeydown = (event: KeyboardEvent) => {
    if (!document || !tabsRef.current || !isTabFlow) {
      return;
    }

    const key = pressedKey(event);

    switch (key) {
      case "ArrowLeft":
      case "ArrowRight":
      case "End":
      case "Home": {
        const tabEls = getTabEls();
        const currentFocusedElIndex = tabEls.findIndex(
          (el) => document.activeElement === el
        );
        if (currentFocusedElIndex === -1) {
          return;
        }

        let nextIndex = 0;
        if (key === "Home") {
          nextIndex = 0;
        } else if (key === "End") {
          nextIndex = tabEls.length - 1;
        } else {
          const offset = key === "ArrowRight" ? 1 : -1;
          nextIndex = currentFocusedElIndex + offset;
        }

        const nextTabEl = tabEls[nextIndex];

        if (nextTabEl) {
          event.preventDefault();
          nextTabEl.focus();
        }

        break;
      }
      /*
       В JAWS и NVDA стрелка вниз активирует контент.
       Это не прописано в стандартах, но по ссылке ниже это рекомендуется делать.
       https://inclusive-components.design/tabbed-interfaces/
      */
      case "ArrowDown": {
        const tabEls = getTabEls();
        const currentFocusedEl = tabEls.find(
          (el) => document.activeElement === el
        );

        if (
          !currentFocusedEl ||
          currentFocusedEl.getAttribute("aria-selected") !== "true"
        ) {
          return;
        }

        const relatedContentElId =
          currentFocusedEl.getAttribute("aria-controls");
        if (!relatedContentElId) {
          return;
        }

        // eslint-disable-next-line no-restricted-properties
        const relatedContentEl = document.getElementById(relatedContentElId);
        if (!relatedContentEl) {
          return;
        }

        event.preventDefault();
        relatedContentEl.focus();

        break;
      }
      case "Space":
      case "Enter": {
        const tabEls = getTabEls();
        const currentFocusedEl = tabEls.find(
          (el) => document.activeElement === el
        );
        if (currentFocusedEl) {
          currentFocusedEl.click();
        }
      }
    }
  };

  useGlobalEventListener(document, "keydown", handleDocumentKeydown, {
    capture: true,
  });

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
      role={role}
    >
      <div vkuiClass="Tabs__in" ref={tabsRef}>
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
