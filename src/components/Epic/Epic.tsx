import React, { HTMLAttributes, ReactNode, ReactElement, FC, useEffect, useRef } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';
import { ScrollSaver } from './ScrollSaver';
import { getNavId } from '../../lib/getNavId';

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  tabbar?: ReactNode;
  activeStory: string;
}

export const Epic: FC<EpicProps> = (props: EpicProps) => {
  const platform = usePlatform();
  const scroll = useRef<{ [key: string]: number }>({}).current;
  const { activeStory, tabbar, children, viewWidth, ...restProps } = props;

  useEffect(() => {
    if (!tabbar && viewWidth < ViewWidth.SMALL_TABLET) {
      console.warn('[Epic] Using Epic without tabbar is not recommended on mobile');
    }
  }, [viewWidth]);
  const story = (React.Children.toArray(children) as ReactElement[]).find((story) => getNavId(story.props) === activeStory) || null;

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
