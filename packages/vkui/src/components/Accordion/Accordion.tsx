import React, { DetailsHTMLAttributes } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRef } from '../../types';
import { AccordionSummary } from './AccordionSummary';
import styles from './Accordion.module.css';

export type AccordionProps = DetailsHTMLAttributes<HTMLDetailsElement> & HasRef<HTMLDetailsElement>;

/**
 * Компонент, позволяет отображать несколько разделов контента в ограниченном
 * пространстве и сворачивать или разворачивать их пользователем.
 *
 * Обертка над details.
 *
 * @version 5.3.0
 * @see  https://vkcom.github.io/VKUI/#/Accordion
 */
export const Accordion = ({ getRef, className, onToggle, ...restProps }: AccordionProps) => {
  const [open, setOpen] = React.useState<boolean | undefined>(undefined);

  const toggle: AccordionProps['onToggle'] = (e) => {
    // @ts-expect-error: TS2339 Property 'open' does not exist on type 'EventTarget'
    setOpen(e.target.open);

    onToggle && onToggle(e);
  };

  return (
    <details
      ref={getRef}
      className={classNames(
        styles['Accordion'],
        open && styles['Accordion--open'],
        open === false && styles['Accordion--close'],
        className,
      )}
      onToggle={toggle}
      {...restProps}
    />
  );
};

Accordion.Summary = AccordionSummary;
