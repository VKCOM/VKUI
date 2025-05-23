import * as React from 'react';
import { Icon24ChevronDown } from '@vkontakte/icons';
import {
  AccordionContext,
  classNames,
  Headline,
  Tappable,
  type TappableProps,
  Accordion as VKUIAccordion,
  type AccordionProps as VKUIAccordionProps,
} from '@vkontakte/vkui';
import styles from './Accordion.module.css';

export interface AccordionProps extends Omit<TappableProps, 'onChange' | 'title'> {
  expanded: VKUIAccordionProps['expanded'];
  onChange: React.MouseEventHandler<HTMLElement>;
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
      borderRadiusMode="inherit"
      onClick={onChange}
      {...restProps}
    >
      <Icon24ChevronDown className={classNames(styles.icon, expanded && styles.iconActive)} />
      <Headline level="1">{title}</Headline>
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
