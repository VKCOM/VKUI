import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import type { TypographyProps } from '../Typography/Typography';
import { ContentBadgeContext } from './ContentBadgeContext';
import { ContentBadgeSlotIcon } from './ContentBadgeSlotIcon';
import type { ContentBadgeModeType, ContentBadgeSizeType } from './types';
import styles from './ContentBadge.module.css';

const appearanceClassNames = {
  'accent': {
    primary: styles['ContentBadge--primary-accent'],
    secondary: styles['ContentBadge--secondary-accent'],
    outline: styles['ContentBadge--outline-accent'],
  },
  'neutral': {
    primary: styles['ContentBadge--primary-neutral'],
    secondary: styles['ContentBadge--secondary-neutral'],
    outline: styles['ContentBadge--outline-neutral'],
  },
  'accent-green': {
    primary: styles['ContentBadge--primary-accent-green'],
    secondary: styles['ContentBadge--secondary-accent-green'],
    outline: styles['ContentBadge--outline-accent-green'],
  },
  'accent-red': {
    primary: styles['ContentBadge--primary-accent-red'],
    secondary: styles['ContentBadge--secondary-accent-red'],
    outline: styles['ContentBadge--outline-accent-red'],
  },
  'overlay': {
    primary: styles['ContentBadge--primary-overlay'],
    secondary: styles['ContentBadge--secondary-overlay'],
    outline: styles['ContentBadge--outline-overlay'],
  },
};

const sizeClassNames = {
  s: styles['ContentBadge--size-s'],
  m: styles['ContentBadge--size-m'],
  l: styles['ContentBadge--size-l'],
};

export interface ContentBadgeProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<TypographyProps, 'weight'> {
  /**
   * Вид отображения.
   */
  mode?: ContentBadgeModeType;
  /**
   * Цвет оформления.
   */
  appearance?: 'accent' | 'neutral' | 'accent-green' | 'accent-red' | 'overlay';
  /**
   * Включает приближение значения закругления к форме круга.
   *
   * > Note: игнорируется при size="s"
   */
  capsule?: boolean;
  /**
   * Определяет отступы и размер текста.
   *
   * Соответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:
   *
   * - size="s" – ⚠️ не поддерживает иконки;
   * - size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;
   * - size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`;
   */
  size?: ContentBadgeSizeType;
}

/**
 * Компонент, который позволяет добавить текстовые или иконочные бейджи. Как правило, используются
 * поверх других элементов или рядом с ними.
 *
 * Используйте `ContentBadge.SlotIcon` для размещения иконок внутри `ContentBadge`.
 *
 * @since 6.1.0
 * @see https://vkcom.github.io/VKUI/#/ContentBadge
 *
 * TODO [>=7]: переименовать в Badge
 */
export const ContentBadge: React.FC<ContentBadgeProps> & {
  SlotIcon: typeof ContentBadgeSlotIcon;
} = ({
  appearance = 'accent',
  mode = 'primary',
  capsule,
  size = 'm',
  weight = '2',
  className,
  children,
  ...restProps
}: ContentBadgeProps) => {
  const TypographyComponent = size === 'l' ? Footnote : Caption;

  return (
    <TypographyComponent
      {...restProps}
      weight={weight}
      normalize
      className={classNames(
        className,
        styles.ContentBadge,
        size !== 's' && capsule && styles['ContentBadge--capsule'],
        mode === 'outline' && styles['ContentBadge--mode-outline'],
        appearanceClassNames[appearance][mode],
        sizeClassNames[size],
      )}
    >
      <ContentBadgeContext.Provider
        value={{ isSingleChild: React.Children.count(children) === 1, size }}
      >
        {children}
      </ContentBadgeContext.Provider>
    </TypographyComponent>
  );
};

ContentBadge.displayName = 'ContentBadge';

ContentBadge.SlotIcon = ContentBadgeSlotIcon;
ContentBadge.SlotIcon.displayName = 'ContentBadge.SlotIcon';
