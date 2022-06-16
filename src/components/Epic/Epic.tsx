import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity, ViewWidth } from "../../hoc/withAdaptivity";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import "./Epic.css";

export interface EpicProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

const EpicComponent: React.FC<EpicProps & AdaptivityContextInterface> = (
  props
) => {
  const platform = usePlatform();
  const scroll = React.useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, viewWidth, ...restProps } = props;

  if (
    process.env.NODE_ENV === "development" &&
    !tabbar &&
    viewWidth < ViewWidth.SMALL_TABLET
  ) {
    warn(
      `Не рекомендуется использовать Epic без Tabbar при ширине окна меньше ${ViewWidth.SMALL_TABLET}px`
    );
  }
  const story =
    (React.Children.toArray(children).find(
      (story) =>
        React.isValidElement(story) &&
        getNavId(story.props, warn) === activeStory
    ) as React.ReactElement | undefined) ?? null;

  return (
    <div {...restProps} vkuiClass={getClassName("Epic", platform)}>
      <ScrollSaver
        key={activeStory}
        initialScroll={scroll[activeStory] || 0}
        saveScroll={(value) => (scroll[activeStory] = value)}
      >
        {story}
      </ScrollSaver>
      {tabbar}
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Epic
 */
export const Epic = withAdaptivity(EpicComponent, {
  viewWidth: true,
});

Epic.displayName = "Epic";
