import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Group.module.css';

export type GroupDescriptionProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

export const GroupDescription = ({ className, ...restProps }: GroupDescriptionProps) => (
  <Footnote className={classNames(className, styles.description)} {...restProps} />
);
