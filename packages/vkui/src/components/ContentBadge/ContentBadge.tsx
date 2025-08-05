'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Tappable } from '../Tappable/Tappable';
import { captionClassNames } from '../Typography/Caption/Caption';
import { footnoteClassNames } from '../Typography/Footnote/Footnote';
import { type TypographyProps, weightClassNames } from '../Typography/Typography';
import { ContentBadgeContext } from './ContentBadgeContext';
import { ContentBadgeIconSlot } from './ContentBadgeIconSlot';
import type { ContentBadgeModeType, ContentBadgeSizeType } from './types';
import styles from './ContentBadge.module.css';

const appearanceClassNames = {
  'accent': {
    primary: styles.primaryAccent,
    secondary: styles.secondaryAccent,
    outline: styles.outlineAccent,
  },
  'neutral': {
    primary: styles.primaryNeutral,
    secondary: styles.secondaryNeutral,
    outline: styles.outlineNeutral,
  },
  'accent-green': {
    primary: styles.primaryAccentGreen,
    secondary: styles.secondaryAccentGreen,
    outline: styles.outlineAccentGreen,
  },
  'accent-red': {
    primary: styles.primaryAccentRed,
    secondary: styles.secondaryAccentRed,
    outline: styles.outlineAccentRed,
  },
  'overlay': {
    primary: styles.primaryOverlay,
    secondary: styles.secondaryOverlay,
    outline: styles.outlineOverlay,
  },
};

const sizeClassNames = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
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
   * > Note: игнорируется при size="s".
   */
  capsule?: boolean;
  /**
   * Определяет отступы и размер текста.
   *
   * Соответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:
   *
   * - size="s" – ⚠️ не поддерживает иконки;
   * - size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;
   * - size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.
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
 * @see https://vkui.io/components/content-badge
 */
export const ContentBadge: React.FC<ContentBadgeProps> & {
  IconSlot: typeof ContentBadgeIconSlot;
  /**
   * @deprecated Since 7.3.4. Используйте `IconSlot`.
   */
  SlotIcon: typeof ContentBadgeIconSlot;
} = ({
  appearance = 'accent',
  mode = 'primary',
  capsule,
  size = 'm',
  weight = '2',
  children,
  ...restProps
}: ContentBadgeProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const typographyClassNames = size === 'l' ? footnoteClassNames(sizeY) : captionClassNames(sizeY);

  return (
    <Tappable
      baseClassName={classNames(
        styles.host,
        size !== 's' && capsule && styles.capsule,
        mode === 'outline' && styles.modeOutline,
        appearanceClassNames[appearance][mode],
        sizeClassNames[size],
        typographyClassNames,
        weightClassNames(weight),
      )}
      DefaultComponent="span"
      hoverMode="opacity"
      activeMode="opacity"
      {...restProps}
    >
      <ContentBadgeContext.Provider
        value={{ isSingleChild: React.Children.count(children) === 1, size }}
      >
        {children}
      </ContentBadgeContext.Provider>
    </Tappable>
  );
};

ContentBadge.IconSlot = ContentBadgeIconSlot;
ContentBadge.SlotIcon = ContentBadgeIconSlot;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(ContentBadge.IconSlot, 'ContentBadge.IconSlot');
  defineComponentDisplayNames(ContentBadge.SlotIcon, 'ContentBadge.SlotIcon');
}
