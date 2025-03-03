import * as React from 'react';
import { Icon20ChevronUp, Icon20Dropdown } from '@vkontakte/icons';
import {
  AccordionContext,
  Flex,
  Tappable,
  type TappableProps,
  Accordion as VKUIAccordion,
  type AccordionProps as VKUIAccordionProps,
} from '@vkontakte/vkui';
import styles from './Accordion.module.css';

export interface AccordionProps extends Omit<TappableProps, 'onChange' | 'title'> {
  expanded: VKUIAccordionProps['expanded'];
  onChange: (e?: React.MouseEvent<HTMLElement>, toggle?: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  title: React.ReactNode;
}

interface AccordionSummaryProps
  extends Pick<AccordionProps, 'title' | 'className'>,
    Pick<AccordionProps, 'onChange'> {}

function AccordionSummary({ title, className, onChange, ...restProps }: AccordionSummaryProps) {
  const { expanded, labelId, contentId } = React.useContext(AccordionContext);

  return (
    <Tappable
      className={className}
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      activeMode="opacity"
      hoverMode="opacity"
      onClick={onChange}
      {...restProps}
    >
      <Flex align="center">{title}</Flex>
      <Tappable className={styles.icon} onClick={(e) => onChange(e, true)}>
        {expanded ? <Icon20ChevronUp /> : <Icon20Dropdown />}
      </Tappable>
    </Tappable>
  );
}

export function Accordion({ expanded = false, children, onChange, ...restProps }: AccordionProps) {
  return (
    <VKUIAccordion expanded={expanded}>
      <AccordionSummary {...restProps} onChange={onChange} />
      <VKUIAccordion.Content>{children}</VKUIAccordion.Content>
    </VKUIAccordion>
  );
}
