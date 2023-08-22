import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { ScrollSaver } from './ScrollSaver';
import styles from './Epic.module.css';

export interface EpicProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  tabbar?: React.ReactNode;
  activeStory: string;
  children: React.ReactElement | Iterable<React.ReactElement>;
}

const warn = warnOnce('Epic');

/**
 * @see https://vkcom.github.io/VKUI/#/Epic
 */
export const Epic = ({ activeStory, tabbar, children, ...restProps }: EpicProps) => {
  const scroll = React.useRef<{ [key: string]: number }>({}).current;

  const story =
    (React.Children.toArray(children).find(
      (story) => React.isValidElement(story) && getNavId(story.props, warn) === activeStory,
    ) as React.ReactElement | undefined) ?? null;

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(styles['Epic'], tabbar && 'vkuiInternalEpic--hasTabbar')}
    >
      <ScrollSaver
        key={activeStory}
        initialScroll={scroll[activeStory] || 0}
        saveScroll={(value) => (scroll[activeStory] = value)}
      >
        {story}
      </ScrollSaver>
      {tabbar}
    </RootComponent>
  );
};
