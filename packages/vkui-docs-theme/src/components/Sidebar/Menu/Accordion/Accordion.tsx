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
  onClick: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
  className?: string;
  title: React.ReactNode;
}

type AccordionSummaryProps = Pick<AccordionProps, 'title' | 'className' | 'onClick'>;

function AccordionSummary({ title, className, onClick, ...restProps }: AccordionSummaryProps) {
  const { expanded, labelId, contentId } = React.useContext(AccordionContext);

  return (
    <Tappable
      className={className}
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      activeMode="opacity"
      borderRadiusMode="inherit"
      onClick={onClick}
      {...restProps}
    >
      <Icon24ChevronDown className={classNames(styles.icon, expanded && styles.iconActive)} />
      <Headline level="1">{title}</Headline>
    </Tappable>
  );
}

export function Accordion({ expanded = false, children, onClick, ...restProps }: AccordionProps) {
  return (
    <VKUIAccordion expanded={expanded}>
      <AccordionSummary {...restProps} onClick={onClick} />
      <VKUIAccordion.Content aria-hidden={false}>{children}</VKUIAccordion.Content>
    </VKUIAccordion>
  );
}
