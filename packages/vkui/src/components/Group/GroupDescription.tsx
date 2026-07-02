import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRender, HTMLAttributesWithRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Group.module.css';

export type GroupDescriptionProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent &
  HasRender<HTMLElement>;

export const GroupDescription = ({ className, ...restProps }: GroupDescriptionProps) => (
  <Footnote className={classNames(className, styles.description)} {...restProps} />
);
