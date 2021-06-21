import React, { HTMLAttributes, ReactNode, ReactElement, FC, useRef } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';
import { ScrollSaver } from './ScrollSaver';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  tabbar?: ReactNode;
  activeStory: string;
}

const warn = warnOnce('Epic');

export const Epic: FC<EpicProps> = (props: EpicProps) => {
  const platform = usePlatform();
  const scroll = useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, viewWidth, ...restProps } = props;

  if (process.env.NODE_ENV === 'development' && !tabbar && viewWidth < ViewWidth.SMALL_TABLET) {
    warn('Using Epic without tabbar is not recommended on mobile');
  }
  const story = (React.Children.toArray(children) as ReactElement[])
    .find((story) => getNavId(story.props, warn) === activeStory) || null;

  return (
    <div {...restProps} vkuiClass={getClassName('Epic', platform)}>
      <ScrollSaver
        key={activeStory}
        initialScroll={scroll[activeStory] || 0}
        saveScroll={(value) => scroll[activeStory] = value}
      >{story}</ScrollSaver>
      {tabbar}
    </div>
  );
};

export default withAdaptivity(Epic, {
  viewWidth: true,
});
