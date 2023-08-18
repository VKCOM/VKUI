import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import {
  HorizontalScroll,
  HorizontalScrollProps,
  ScrollPositionHandler,
} from '../HorizontalScroll/HorizontalScroll';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './SubnavigationBar.module.css';

export interface SubnavigationBarProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<
      HorizontalScrollProps,
      'showArrows' | 'getScrollToLeft' | 'getScrollToRight' | 'scrollAnimationDuration'
    > {
  mode?: 'fixed' | 'overflow';
}

const defaultScrollToLeft: ScrollPositionHandler = (x) => x - 240;

const defaultScrollToRight: ScrollPositionHandler = (x) => x + 240;

/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationBar
 */
export const SubnavigationBar = ({
  mode = 'overflow',
  children,
  showArrows = true,
  getScrollToLeft = defaultScrollToLeft,
  getScrollToRight = defaultScrollToRight,
  scrollAnimationDuration,
  ...restProps
}: SubnavigationBarProps) => {
  let ScrollWrapper: React.ElementType;
  let scrollWrapperProps = {};

  if (mode === 'fixed') {
    ScrollWrapper = 'div';
  } else {
    ScrollWrapper = HorizontalScroll;
    scrollWrapperProps = {
      showArrows,
      getScrollToLeft,
      getScrollToRight,
      scrollAnimationDuration,
    };
  }

  return (
    <RootComponent
      // TODO: [>=6]
      // Заменить у SubnavigationButton `display: inline-block` на `width: 100%`
      // и удалить применение селектора в `SubnavigationButton.module.css`.
      // 2. Заменить глобальный селектор на CSS Modules `styles['SubnavigationBar--mode-fixed']`
      // mode !== 'fixed' && classNames('vkuiInternalSubnavigationBar--mode-fixed')
      baseClassName={mode === 'fixed' ? 'vkuiInternalSubnavigationBar--mode-fixed' : undefined}
      {...restProps}
    >
      <ScrollWrapper className={styles['SubnavigationBar__in']} {...scrollWrapperProps}>
        <ul className={styles['SubnavigationBar__scrollIn']}>
          {React.Children.map(children, (child, idx) => (
            <li key={idx} className={styles['SubnavigationBar__item']}>
              {child}
            </li>
          ))}
        </ul>
      </ScrollWrapper>
    </RootComponent>
  );
};
