'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasRef, HasRootRef } from '../../types';
import { AccordionContext } from './AccordionContext';
import styles from './Accordion.module.css';

const CUSTOM_PROPERTY_ACCORDION_CONTENT_HEIGHT = '--vkui_internal--AccordionContent_height';

const stateClassNames = {
  enter: styles.inEnter,
  entering: styles.inEnter,
  entered: styles.inEntered,
  exit: styles.inExit,
  exiting: styles.inExit,
  exited: styles.inExited,
};

export interface AccordionContentProps
  extends HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  getRootRef,
  getRef,
  className,
  children,
  ...restProps
}) => {
  const { expanded, labelId, contentId } = React.useContext(AccordionContext);

  const inRef = useExternRef(getRef);
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    expanded ? 'enter' : 'exit',
    undefined,
    true,
  );

  useIsomorphicLayoutEffect(() => {
    const inEl = inRef.current;

    /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
    if (!inEl) {
      return;
    }

    switch (animationState) {
      case 'enter':
      case 'exit':
        inEl.style.setProperty(CUSTOM_PROPERTY_ACCORDION_CONTENT_HEIGHT, `${inEl.scrollHeight}px`);
        break;
      case 'entered':
      case 'exited':
        inEl.style.removeProperty(CUSTOM_PROPERTY_ACCORDION_CONTENT_HEIGHT);
        break;
    }
  }, [animationState, inRef]);

  return (
    <div
      ref={getRootRef}
      id={contentId}
      role="region"
      aria-labelledby={labelId}
      aria-hidden={!expanded}
      className={classNames(styles.host, className)}
      {...restProps}
    >
      <div
        ref={inRef}
        className={classNames(styles.in, stateClassNames[animationState])}
        {...animationHandlers}
      >
        {children}
      </div>
    </div>
  );
};

AccordionContent.displayName = 'AccordionContent';
