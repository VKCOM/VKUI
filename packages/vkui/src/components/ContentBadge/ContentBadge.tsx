'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getRequiredValueByKey } from '../../helpers/getValueByKey';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { Tappable } from '../Tappable/Tappable';
import { captionClassNames } from '../Typography/Caption/Caption';
import { footnoteClassNames } from '../Typography/Footnote/Footnote';
import { type TypographyProps, weightClassNames } from '../Typography/Typography';
import { ContentBadgeContext } from './ContentBadgeContext';
import { ContentBadgeIconSlot } from './ContentBadgeIconSlot';
import type { ContentBadgeModeType, ContentBadgeSizeType } from './types';
import styles from './ContentBadge.module.css';

type ContentBadgePresetAppearance =
  | 'accent'
  | 'neutral'
  | 'accent-green'
  | 'accent-red'
  | 'overlay';

type ContentBadgeCustomAppearance = `var(--${string})` | `#${string}`;

export type ContentBadgeAppearance = ContentBadgePresetAppearance | ContentBadgeCustomAppearance;

const modeClassNames: Record<ContentBadgeModeType, string> = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  outline: styles.modeOutline,
};

const appearanceClassNames: Record<
  ContentBadgePresetAppearance,
  Record<ContentBadgeModeType, string>
> = {
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

const isPresetAppearance = (
  appearance: ContentBadgeAppearance,
): appearance is ContentBadgePresetAppearance => appearance in appearanceClassNames;

const resolveAppearance = (
  appearance: ContentBadgeAppearance,
  mode: ContentBadgeModeType,
): [CSSCustomProperties | undefined, string | undefined] => {
  if (isPresetAppearance(appearance)) {
    return [undefined, appearanceClassNames[appearance][mode]];
  }

  return [
    getRequiredValueByKey<CSSCustomProperties>(mode, {
      primary: {
        '--vkui_internal_ContentBadge--background': appearance,
        '--vkui_internal_ContentBadge--color': 'var(--vkui--color_text_contrast)',
        '--vkui_internal_ContentBadge--iconColor': 'var(--vkui--color_icon_contrast)',
      },
      secondary: {
        '--vkui_internal_ContentBadge--color': appearance,
        '--vkui_internal_ContentBadge--iconColor': appearance,
        '--vkui_internal_ContentBadge--background': appearance,
        '--vkui_internal_ContentBadge--backgroundOpacity': '0.16',
      },
      outline: {
        '--vkui_internal_ContentBadge--color': appearance,
        '--vkui_internal_ContentBadge--iconColor': appearance,
        '--vkui_internal_ContentBadge--borderColor': appearance,
      },
    }),
    undefined,
  ];
};

export interface ContentBadgeProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<TypographyProps, 'weight'> {
  /**
   * Вид отображения.
   */
  mode?: ContentBadgeModeType | undefined;
  /**
   * Цвет оформления.
   *
   * Помимо предустановленных значений принимает кастомный цвет в формате
   * CSS-переменной (`var(--my-token)`) или HEX (`#RRGGBB`).
   *
   * Применение кастомного цвета по режимам:
   *
   * - `mode="primary"` — фон = кастомный цвет, текст/иконка = `--vkui--color_text_contrast` / `--vkui--color_icon_contrast`;
   * - `mode="secondary"` — фон = кастомный цвет с прозрачностью 16% (отдельным слоем), текст и иконка = кастомный цвет;
   * - `mode="outline"` — бордер, текст и иконка = кастомный цвет.
   */
  appearance?: ContentBadgeAppearance | undefined;
  /**
   * Включает приближение значения закругления к форме круга.
   *
   * > Note: игнорируется при size="s".
   */
  capsule?: boolean | undefined;
  /**
   * Определяет отступы и размер текста.
   *
   * Соответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:
   *
   * - size="s" – ⚠️ не поддерживает иконки;
   * - size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;
   * - size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.
   */
  size?: ContentBadgeSizeType | undefined;
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
  const { density = 'none' } = useAdaptivity();
  const typographyClassNames =
    size === 'l' ? footnoteClassNames(density) : captionClassNames(density);

  const [appearanceStyles, appearanceClassName] = resolveAppearance(appearance, mode);

  return (
    <Tappable
      baseClassName={classNames(
        styles.host,
        size !== 's' && capsule && styles.capsule,
        modeClassNames[mode],
        appearanceClassName,
        sizeClassNames[size],
        typographyClassNames,
        weightClassNames(weight),
      )}
      baseStyle={appearanceStyles}
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
