import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity, ViewWidth } from "../../hoc/withAdaptivity";
import { ScrollSaver } from "./ScrollSaver";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { AdaptivityContextInterface } from "../AdaptivityProvider/AdaptivityContext";
import "./Epic.css";

export interface EpicProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityContextInterface {
  tabbar?: React.ReactNode;
  activeStory: string;
}

const warn = warnOnce("Epic");

export const Epic: React.FC<EpicProps> = (props: EpicProps) => {
  const platform = usePlatform();
  const scroll = React.useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, viewWidth, ...restProps } = props;

  if (
    process.env.NODE_ENV === "development" &&
    !tabbar &&
    viewWidth < ViewWidth.SMALL_TABLET
  ) {
    warn("Using Epic without tabbar is not recommended on mobile");
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

export default withAdaptivity(Epic, {
  viewWidth: true,
});
