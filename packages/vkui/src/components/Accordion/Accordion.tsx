import React, { HTMLProps } from 'react';
import { HasRef } from '../../types';
import { AccordionSummary } from './AccordionSummary';

export type AccordionProps = HTMLProps<HTMLDetailsElement> & HasRef<HTMLDetailsElement>;

/**
 * Компонент, позволяет отображать несколько разделов контента в ограниченном
 * пространстве и сворачивать или разворачивать их пользователем.
 *
 * Обертка над details.
 *
 * @version 5.3.0
 * @see  https://vkcom.github.io/VKUI/#/Accordion
 */
export const Accordion = ({ getRef, ...restProps }: AccordionProps) => (
  <details ref={getRef} {...restProps} />
);

Accordion.Summary = AccordionSummary;
