import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import "./Epic.css";

export interface EpicProps extends React.HTMLAttributes<HTMLDivElement> {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

/**
 * @see https://vkcom.github.io/VKUI/#/Epic
 */
export const Epic: React.FC<EpicProps> = (props) => {
  const platform = usePlatform();
  const scroll = React.useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, ...restProps } = props;

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
