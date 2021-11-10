import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { IOS } from "../../lib/platform";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import { SplitColContext } from "../SplitCol/SplitCol";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { ScrollContext } from "../AppRoot/ScrollContext";
import { NavTransitionProvider } from "../NavTransitionContext/NavTransitionContext";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { useDOM } from "../../lib/dom";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useTimeout } from "../../hooks/useTimeout";
import { usePlatform } from "../../hooks/usePlatform";
import "./Root.css";

export interface RootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    NavIdProps {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
   *
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   */
  popout?: React.ReactNode;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
   *
   * Свойство для отрисовки `ModalRoot`.
   */
  modal?: React.ReactNode;
}

export interface RootState {
  activeView: string;
  transition: boolean;
  isBack?: boolean;
  prevView?: string;
}

const warn = warnOnce("Root");
const Root: React.FC<RootProps> = ({
  popout = null,
  modal,
  children,
  activeView: _activeView,
  onTransition,
  nav,
  ...restProps
}: RootProps) => {
  const scroll = React.useContext(ScrollContext);
  const platform = usePlatform();
  const { document } = useDOM();
  const scrolls = React.useRef<Record<string, number>>({}).current;
  const viewNodes = React.useRef<Record<string, HTMLElement | null>>(
    {}
  ).current;

  const { transitionMotionEnabled = true } = React.useContext(
    ConfigProviderContext
  );
  const { animate } = React.useContext(SplitColContext);
  const disableAnimation = !transitionMotionEnabled || !animate;

  const views = React.Children.toArray(children) as React.ReactElement[];

  const [{ prevView, activeView, transition, isBack }, _setState] =
    React.useState<RootState>({
      activeView: _activeView,
      transition: false,
    });
  const transitionTo = (panel: string) => {
    if (panel !== activeView) {
      const viewIds = views.map((view) => getNavId(view.props, warn));
      const isBack = viewIds.indexOf(panel) < viewIds.indexOf(activeView);
      scrolls[activeView] = scroll.getScroll().y;
      _setState({
        activeView: panel,
        prevView: activeView,
        transition: true,
        isBack,
      });
    }
  };
  const finishTransition = React.useCallback(
    () => _setState({ activeView, prevView, isBack, transition: false }),
    [activeView, isBack, prevView]
  );

  useIsomorphicLayoutEffect(() => {
    (document!.activeElement as HTMLElement).blur();
  }, [!!popout, activeView]);

  // Нужен переход
  useIsomorphicLayoutEffect(() => transitionTo(_activeView), [_activeView]);
  useIsomorphicLayoutEffect(() => {
    if (!transition && prevView) {
      // Закончился переход
      scroll.scrollTo(0, isBack ? scrolls[activeView] : 0);
      onTransition &&
        onTransition({
          isBack: Boolean(isBack),
          from: prevView,
          to: activeView,
        });
    }
  }, [transition]);

  const fallbackTransition = useTimeout(
    finishTransition,
    platform === IOS ? 600 : 300
  );
  React.useEffect(() => {
    if (!transition) {
      fallbackTransition.clear();
      return;
    }
    disableAnimation ? finishTransition() : fallbackTransition.set();
  }, [disableAnimation, fallbackTransition, finishTransition, transition]);

  const onAnimationEnd = (e: React.AnimationEvent) => {
    if (
      [
        "vkui-root-android-animation-hide-back",
        "vkui-root-android-animation-show-forward",
        "vkui-root-ios-animation-hide-back",
        "vkui-root-ios-animation-show-forward",
      ].includes(e.animationName)
    ) {
      finishTransition();
    }
  };

  if (process.env.NODE_ENV === "development") {
    popout &&
      warn(
        "Свойство popout устарело и будет удалено в 5.0.0. Используйте одноименное свойство у SplitLayout."
      );
    modal &&
      warn(
        "Свойство modal устарело и будет удалено в 5.0.0. Используйте одноименное свойство у SplitLayout."
      );
  }

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName("Root", platform), {
        "Root--transition": !disableAnimation && transition,
        "Root--no-motion": disableAnimation,
      })}
    >
      {views.map((view) => {
        const viewId = getNavId(view.props, warn);
        if (viewId !== activeView && !(transition && viewId === prevView)) {
          return null;
        }
        const isTransitionTarget =
          transition && viewId === (isBack ? prevView : activeView);
        const compensateScroll =
          transition &&
          (viewId === prevView || (isBack && viewId === activeView));
        return (
          <div
            key={viewId}
            ref={(e) => viewId && (viewNodes[viewId] = e)}
            onAnimationEnd={isTransitionTarget ? onAnimationEnd : undefined}
            vkuiClass={classNames("Root__view", {
              "Root__view--hide-back":
                transition && viewId === prevView && isBack,
              "Root__view--hide-forward":
                transition && viewId === prevView && !isBack,
              "Root__view--show-back":
                transition && viewId === activeView && isBack,
              "Root__view--show-forward":
                transition && viewId === activeView && !isBack,
              "Root__view--active": !transition && viewId === activeView,
            })}
          >
            <NavTransitionProvider
              entering={transition && viewId === activeView}
            >
              <div
                vkuiClass="Root__scrollCompensation"
                style={{
                  marginTop: compensateScroll
                    ? viewId && -(scrolls[viewId] ?? 0)
                    : undefined,
                }}
              >
                {view}
              </div>
            </NavTransitionProvider>
          </div>
        );
      })}
      <AppRootPortal>
        {!!popout && <div vkuiClass="Root__popout">{popout}</div>}
        {!!modal && <div vkuiClass="Root__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Root;
