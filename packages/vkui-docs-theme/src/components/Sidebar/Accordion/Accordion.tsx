import * as React from 'react';
import { Icon20ChevronUp, Icon20Dropdown } from '@vkontakte/icons';
import {
  AccordionContext,
  Flex,
  Paragraph,
  Tappable,
  type TappableProps,
  Accordion as VKUIAccordion,
  type AccordionProps as VKUIAccordionProps,
} from '@vkontakte/vkui';

export interface AccordionProps extends Omit<TappableProps, 'onChange'> {
  expanded: VKUIAccordionProps['expanded'];
  onChange?: VKUIAccordionProps['onChange'];
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  title: string;
}

function AccordionSummary({
  title,
  className,
  icon: Icon,
  ...restProps
}: Pick<AccordionProps, 'title' | 'className' | 'icon'>) {
  const { expanded, labelId, contentId, onChange } = React.useContext(AccordionContext);

  return (
    <Tappable
      className={className}
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      activeMode="opacity"
      hoverMode="opacity"
      onClick={() => onChange(!expanded)}
      {...restProps}
    >
      <Flex align="center">
        {Icon}
        <Paragraph>{title}</Paragraph>
      </Flex>
      {expanded ? <Icon20ChevronUp /> : <Icon20Dropdown />}
    </Tappable>
  );
}

export function Accordion({ expanded = false, children, onChange, ...restProps }: AccordionProps) {
  return (
    <VKUIAccordion expanded={expanded} onChange={onChange}>
      <AccordionSummary {...restProps} />
      <VKUIAccordion.Content>{children}</VKUIAccordion.Content>
    </VKUIAccordion>
  );
}
