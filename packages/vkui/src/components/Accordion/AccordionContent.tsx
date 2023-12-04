import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import { HasRef, HasRootRef } from '../../types';
import { AccordionContext } from './AccordionContext';
import styles from './Accordion.module.css';

/**
 * Функция расчета отрицательного margin, для скрытия контента.
 */
function calcMarginTop(expanded: boolean, el: HTMLElement | null): string {
  if (expanded) {
    return `0px`;
  }

  // В первый рендеринг нельзя узнать высоту элемента, поэтому прячем таким образом
  if (el === null) {
    return '-100%';
  }

  return `${-el.clientHeight}px`;
}

/**
 * В первый рендеринг отключаем анимации.
 */
function calcTransition(el: HTMLElement | null) {
  return el === null ? 'none' : undefined;
}

/**
 * Хук для отслеживания изменения высоты контента.
 */
function useResizeContent(expanded: boolean, inRef: React.MutableRefObject<HTMLDivElement | null>) {
  const resize = () => {
    inRef.current!.style.marginTop = calcMarginTop(expanded, inRef.current);
  };

  const { window } = useDOM();
  useGlobalEventListener(window, 'resize', resize);
}

/**
 * Хук для скрывания или раскрывания контента. Возвращает стили для in элемента.
 */
function useAccordionContent(
  expanded: boolean,
  inRef: React.MutableRefObject<HTMLDivElement | null>,
) {
  const marginTop = calcMarginTop(expanded, inRef.current);
  const transition = calcTransition(inRef.current);

  useResizeContent(expanded, inRef);

  return { marginTop, transition };
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
  const inRef = useExternRef(getRef);
  const { expanded, labelId, contentId } = React.useContext(AccordionContext);

  const inStyle = useAccordionContent(expanded, inRef);

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
