import * as React from 'react';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { HasChildren } from '../../types';
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
   * Функция изменения
   */
  onChange?(e: boolean): void;
  disabled?: boolean;
}

export const Accordion = ({
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

  const context = useObjectMemo({
    labelId,
    contentId,
    expanded: expanded || false,
    onChange,
  });

  return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
};

Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;
