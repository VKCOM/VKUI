'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import type { HTMLAttributesWithRootRef } from '../../../../types';
import { RootComponent } from '../../../RootComponent/RootComponent';
import { Paragraph } from '../../../Typography/Paragraph/Paragraph';
import { Subhead } from '../../../Typography/Subhead/Subhead';
import styles from './Basic.module.css';

const stylesLayout = {
  none: styles.layoutNone,
  vertical: styles.layoutVertical,
  horizontal: styles.layoutHorizontal,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
};

export interface BasicProps {
  /**
   * Элемент действия.
   * Не может использоваться одновременно с `subtitle`
   */
  action?: React.ReactNode;

  /**
   * Контент в правой части, может быть иконкой 24x24
   */
  after?: React.ReactNode;

  /**
   * Варианты расположения кнопки действия
   * По умолчанию на десктопах, или при наличии элементов `after` или `subtitle`
   * имеет значение `vertical`, в остальных случаях `horizontal`
   */
  layout?: 'vertical' | 'horizontal';

  /**
   * Может быть следующими компонентами:
   *  - цветная иконка 24x24 или 28x28 пикселя
   *  - `<Avatar size={32} />`
   *  - `<Image size={40} />`
   */
  before?: React.ReactNode;

  /**
   * Задает стиль снекбара
   */
  mode?: 'default' | 'dark';

  /**
   * Дополнительная строка текста под `children`.
   * Не может использоваться одновременно с `action`
   */
  subtitle?: React.ReactNode;
}

export interface SnackbarBasicProps extends HTMLAttributesWithRootRef<HTMLDivElement>, BasicProps {}

export function Basic({
  layout: layoutProps,
  action,
  after,
  before,
  mode,
  subtitle,
  children,
  ...restProps
}: SnackbarBasicProps): React.ReactNode {
  const { sizeY = 'none' } = useAdaptivity();
  const layout = after || subtitle ? 'vertical' : 'none';

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.body,
        stylesLayout[layoutProps || layout],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        mode === 'dark' && styles.modeDark,
      )}
    >
      {before && <div className={styles.before}>{before}</div>}

      <div className={styles.content}>
        <Paragraph className={styles.contentText}>{children}</Paragraph>
        {subtitle && !action && <Subhead className={styles.contentSubtitle}>{subtitle}</Subhead>}

        {action && !subtitle && <div className={styles.action}>{action}</div>}
      </div>

      {after && <div className={styles.after}>{after}</div>}
    </RootComponent>
  );
}
