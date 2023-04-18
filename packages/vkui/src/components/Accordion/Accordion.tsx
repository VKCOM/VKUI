import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { AccordionSummary } from './AccordionSummary';
import styles from './Accordion.module.css';

export type AccordionProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  HasRootRef<HTMLDetailsElement>;

/**
 * Компонент, позволяет отображать несколько разделов контента в ограниченном
 * пространстве и сворачивать или разворачивать их пользователем.
 *
 * Обертка над details.
 *
 * @since 5.3.0
 * @see https://vkcom.github.io/VKUI/#/Accordion
 */
export const Accordion = ({ getRootRef, className, ...restProps }: AccordionProps) => (
  <details className={classNames(styles['Accordion'], className)} ref={getRootRef} {...restProps} />
);

Accordion.Summary = AccordionSummary;
