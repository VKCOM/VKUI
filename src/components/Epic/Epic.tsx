import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import styles from "./Epic.module.css";

export interface EpicProps extends React.HTMLAttributes<HTMLDivElement> {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

/**
 * @see https://vkcom.github.io/VKUI/#/Epic
 */
export const Epic = (props: EpicProps) => {
  const scroll = React.useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, className, ...restProps } = props;

  const story =
    (React.Children.toArray(children).find(
      (story) =>
        React.isValidElement(story) &&
        getNavId(story.props, warn) === activeStory
    ) as React.ReactElement | undefined) ?? null;

  return (
    <div {...restProps} className={classNamesString(styles["Epic"], className)}>
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
