import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import {
  HorizontalScroll,
  HorizontalScrollProps,
  ScrollPositionHandler,
} from '../HorizontalScroll/HorizontalScroll';
import styles from './SubnavigationBar.module.css';

export interface SubnavigationBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
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
  className,
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
    <div
      {...restProps}
      className={classNamesString(
        styles['SubnavigationBar'],
        styles[`SubnavigationBar--mode-${mode}`],
        className,
      )}
    >
      <ScrollWrapper className={styles['SubnavigationBar__in']} {...scrollWrapperProps}>
        <div className={styles['SubnavigationBar__scrollIn']}>{children}</div>
      </ScrollWrapper>
    </div>
  );
};
