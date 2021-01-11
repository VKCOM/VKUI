import React, { HTMLAttributes, ReactNode, ReactElement, FC, useEffect, useRef } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';
import { ScrollSaver } from './ScrollSaver';

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, HasChildren, AdaptivityProps {
  tabbar?: ReactNode;
  activeStory: string;
}

export const Epic: FC<EpicProps> = (props) => {
  const platform = usePlatform();
  const scroll = useRef<{ [key: string]: number }>({}).current;
  const { className, activeStory, tabbar, children, viewWidth, ...restProps } = props;

  useEffect(() => {
    if (!tabbar && viewWidth < ViewWidth.SMALL_TABLET) {
      console.warn('[Epic] Using Epic without tabbar is not recommended on mobile');
    }
  }, [viewWidth]);
  const story = (React.Children.toArray(children) as ReactElement[]).find((story) => story.props.id === activeStory) || null;

  return (
    <div {...restProps} className={classNames(getClassName('Epic', platform), className)}>
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
