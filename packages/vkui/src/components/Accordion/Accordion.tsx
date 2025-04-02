'use client';

import * as React from 'react';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HasChildren } from '../../types';
import { AccordionContent } from './AccordionContent';
import { AccordionContext } from './AccordionContext';
import { AccordionSummary } from './AccordionSummary';

function useAccordionId(id: AccordionProps['id']) {
  const generatedId = React.useId();
  const labelId = id ?? `Accordion${generatedId}`;
  const contentId = `AccordionContent${id ?? generatedId}`;

  return { labelId, contentId };
}

export interface AccordionProps extends HasChildren {
  /**
   * Используется для генерации id для заголовка и контента(a11y).
   */
  id?: string;
  /**
   * Управляет раскрытием и скрытием контента.
   */
  expanded?: boolean;
  /**
   * Значение по умолчанию.
   */
  defaultExpanded?: boolean;
  /**
   * Возвращает новое значение при изменении раскрытия/сворачивания контента.
   */
  onChange?: (newValue: boolean) => void;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
}

export const Accordion: React.FC<AccordionProps> & {
  Summary: typeof AccordionSummary;
  Content: typeof AccordionContent;
} = ({
  id,
  expanded: expandedProp,
  defaultExpanded = false,
  onChange: onChangeProp,
  children,
  ...restProps
}: AccordionProps) => {
  const { labelId, contentId } = useAccordionId(id);

  const [expanded, onChange] = useCustomEnsuredControl({
    value: expandedProp,
    defaultValue: defaultExpanded,
    onChange: onChangeProp,
    disabled: restProps.disabled,
  });

  const context = React.useMemo(
    () => ({
      labelId,
      contentId,
      expanded: expanded || false,
      onChange,
    }),
    [contentId, expanded, labelId, onChange],
  );

  return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
};

Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(Accordion.Summary, 'Accordion.Summary');
  defineComponentDisplayNames(Accordion.Content, 'Accordion.Content');
}
