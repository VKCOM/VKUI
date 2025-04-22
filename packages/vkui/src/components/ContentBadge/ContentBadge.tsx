import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import type { TypographyProps } from '../Typography/Typography';
import { ContentBadgeContext } from './ContentBadgeContext';
import { ContentBadgeSlotIcon } from './ContentBadgeSlotIcon';
import type { ContentBadgeModeType, ContentBadgeSizeType } from './types';
import styles from './ContentBadge.module.css';

const modeClassNames = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  outline: styles.modeOutline,
};

const appearanceClassNames = {
  accent: {
    primary: styles.primaryAccent,
    secondary: styles.secondaryAccent,
    outline: styles.outlineAccent,
  },
  neutral: {
    primary: styles.primaryNeutral,
    secondary: styles.secondaryNeutral,
    outline: styles.outlineNeutral,
  },
  overlay: {
    primary: styles.primaryOverlay,
    secondary: styles.secondaryOverlay,
    outline: styles.outlineOverlay,
  },
};

function resolveAppearanceClassName(
  appearance: ContentBadgeProps['appearance'] = 'accent',
  mode: ContentBadgeModeType,
) {
  if (!appearanceClassNames.hasOwnProperty(appearance)) {
    return styles.customAppearance;
  }

  return appearanceClassNames[appearance][mode];
}

const appearanceStyleColor = {
  'accent-red': 'var(--vkui--color_accent_red)',
  'accent-green': 'var(--vkui--color_accent_green)',
};

function resolveAppearanceStyleColor(appearance: ContentBadgeProps['appearance'] = 'accent') {
  if (appearanceStyleColor.hasOwnProperty(appearance)) {
    return appearanceStyleColor[appearance];
  }

  if (appearance.startsWith('var(--')) {
    return appearance;
  }

  return undefined;
}

function resolveAppearanceStyle(
  appearance: ContentBadgeProps['appearance'],
): (React.CSSProperties & CSSCustomProperties) | undefined {
  const color = resolveAppearanceStyleColor(appearance);
  if (!color) {
    return undefined;
  }

  return { '--vkui_internal--ContentBadge_color': color };
}

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
  appearance?:
    | 'accent'
    | 'neutral'
    | 'accent-green'
    | 'accent-red'
    | 'overlay'
    | `var(--${string})`;
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
 * @see https://vkcom.github.io/VKUI/#/ContentBadge
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
  style,
  children,
  ...restProps
}: ContentBadgeProps) => {
  const TypographyComponent = size === 'l' ? Footnote : Caption;

  return (
    <TypographyComponent
      {...restProps}
      weight={weight}
      normalize
      style={mergeStyle(style, resolveAppearanceStyle(appearance))}
      className={classNames(
        className,
        styles.host,
        size !== 's' && capsule && styles.capsule,
        modeClassNames[mode],
        resolveAppearanceClassName(appearance, mode),
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

ContentBadge.SlotIcon = ContentBadgeSlotIcon;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(ContentBadge.SlotIcon, 'ContentBadge.SlotIcon');
}
