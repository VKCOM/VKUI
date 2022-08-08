import * as React from "react";
import { withAdaptivity, ViewWidth } from "../../hoc/withAdaptivity";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { SMALL_TABLET_SIZE } from "../AdaptivityProvider/AdaptivityProvider";
import "./Epic.css";

export interface EpicProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

const EpicComponent = ({
  activeStory,
  tabbar,
  children,
  viewWidth,
  ...restProps
}: EpicProps & AdaptivityContextInterface) => {
  const scroll = React.useRef<{ [key: string]: number }>({}).current;

  if (
    process.env.NODE_ENV === "development" &&
    !tabbar &&
    viewWidth < ViewWidth.SMALL_TABLET
  ) {
    warn(
      `Не рекомендуется использовать Epic без Tabbar при ширине окна меньше ${SMALL_TABLET_SIZE}px`
    );
  }
  const story =
    (React.Children.toArray(children).find(
      (story) =>
        React.isValidElement(story) &&
        getNavId(story.props, warn) === activeStory
    ) as React.ReactElement | undefined) ?? null;

  return (
    <div {...restProps} vkuiClass="Epic">
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
