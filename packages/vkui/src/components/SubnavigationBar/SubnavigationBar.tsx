import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
      // TODO: [>=6]
      // Заменить у SubnavigationButton `display: inline-block` на `width: 100%`
      // и удалить применение селектора в `SubnavigationButton.module.css`.
      // 2. Заменить глобальный селектор на CSS Modules `styles['SubnavigationBar--mode-fixed']`
      // mode !== 'fixed' && classNames('vkuiInternalSubnavigationBar--mode-fixed')
      className={classNames(
        mode === 'fixed' && classNames('vkuiInternalSubnavigationBar--mode-fixed'),
        className,
      )}
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
    </div>
  );
};
