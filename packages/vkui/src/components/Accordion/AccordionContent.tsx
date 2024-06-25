import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasRef, HasRootRef } from '../../types';
import { AccordionContext } from './AccordionContext';
import styles from './Accordion.module.css';

/**
 * Функция расчета max-height, для скрытия или раскрытия контента.
 */
function calcMaxHeight(expanded: boolean, el: HTMLElement | null): string {
  if (!expanded) {
    return '0px';
  }

  // В первый рендеринг нельзя узнать высоту элемента
  if (el === null) {
    return 'inherit';
  }

  return `${el.scrollHeight}px`;
}

/**
 * Хук для скрывания или раскрывания контента. Возвращает стили для in элемента.
 */
function useAccordionContent(expanded: boolean) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const maxHeight = calcMaxHeight(expanded, ref.current);

  const resize = () => {
    const el = ref.current;
    el!.style.maxHeight = calcMaxHeight(expanded, el);
  };

  const { window } = useDOM();
  useGlobalEventListener(window, 'resize', resize);
  useIsomorphicLayoutEffect(resize, []);

  return [ref, { maxHeight }] as const;
}

export interface AccordionContentProps
  extends HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {}

export const AccordionContent = ({
  getRootRef,
  getRef,
  className,
  children,
  ...restProps
}: AccordionContentProps) => {
  const { expanded, labelId, contentId } = React.useContext(AccordionContext);

  const [ref, inStyle] = useAccordionContent(expanded);

  const inRef = useExternRef(ref, getRef);

  return (
    <div
      ref={getRootRef}
      id={contentId}
      role="region"
      aria-labelledby={labelId}
      aria-hidden={!expanded}
      className={classNames(styles['AccordionContent'], className)}
      {...restProps}
    >
      <div ref={inRef} className={styles['AccordionContent__in']} style={inStyle}>
        {children}
      </div>
    </div>
  );
};

AccordionContent.displayName = 'AccordionContent';
