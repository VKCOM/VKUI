import * as React from 'react';
import { type AdaptiveProp, resolveLayoutProps } from '../../lib/layouts';
import { type SpacingSizeProp } from '../../lib/spacings/sizes';
import { type HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_GAP = '--vkui_internal--spacing_size';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга.
   *
   * Принимает значения дизайн-системы, числовые значения и css-переменные.
   */
  size?: AdaptiveProp<SpacingSizeProp>;
  /**
   * @deprecated 7.0.0.
   *
   * Свойство устарело и будет удалено в v8.
   */
  children?: React.ReactNode;
}
/**
 * @see https://vkui.io/components/spacing
 */
export const Spacing = ({ size = 'm', ...restProps }: SpacingProps): React.ReactNode => {
  const resolvedProps = resolveLayoutProps({ size, ...restProps });
  return <RootComponent {...resolvedProps} baseClassName={styles.host} />;
};
