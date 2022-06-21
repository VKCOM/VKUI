import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import "./Epic.css";

export interface EpicProps extends React.HTMLAttributes<HTMLDivElement> {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

/**
 * @see https://vkcom.github.io/VKUI/#/Epic
 */
export const Epic = (props: EpicProps) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivity();
  const scroll = React.useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, ...restProps } = props;

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
