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
import styles from './Accordion.module.css';

export interface AccordionProps extends Omit<TappableProps, 'onChange'> {
  expanded: VKUIAccordionProps['expanded'];
  onChange: (e?: React.MouseEvent<HTMLElement>, toggle?: boolean) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  title: string;
}

function AccordionSummary({
  title,
  className,
  icon: Icon,
  onChange,
  ...restProps
}: Pick<AccordionProps, 'title' | 'className' | 'icon'> & Pick<AccordionProps, 'onChange'>) {
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
      <Flex align="center">
        {Icon}
        <Paragraph>{title}</Paragraph>
      </Flex>
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
