'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ImageBaseContext } from '../context';
import type { ImageBaseExpectedIconProps } from '../types';
import { validateBadgeIcon } from '../validators';
import styles from './ImageBaseBadge.module.css';

function DevelopmentCheck({ children }: Pick<ImageBaseBadgeProps, 'children'>) {
  const { size } = React.useContext(ImageBaseContext);

  if (children) {
    validateBadgeIcon(size, { name: 'children', value: children });
  }

  return null;
}

const backgroundStyles = {
  stroke: styles.backgroundStroke,
  shadow: styles.backgroundShadow,
};

export interface ImageBaseBadgeProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Вид подложки под иконку.
   *
   * - `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).
   * - `"shadow"` – добавляет небольшую тень.
   */
  background?: 'stroke' | 'shadow';
  /**
   * Принимает иконку.
   *
   * > 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.
   *
   * > Предпочтительней использовать иконки из `@vkontakte/icons`.
   *
   * > 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же
   * > чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы
   * > использовали иконку.
   */
  children: React.ReactElement<ImageBaseExpectedIconProps>;
}

/**
 * Бейдж в правом нижнем углу компонента.
 *
 * > Не используйте при `size < 24`
 */
export const ImageBaseBadge: React.FC<ImageBaseBadgeProps> = ({
  background = 'shadow',
  ...restProps
}: ImageBaseBadgeProps) => {
  return (
    <>
      <RootComponent
        {...restProps}
        baseClassName={classNames(styles.host, backgroundStyles[background])}
      />
      {process.env.NODE_ENV === 'development' && (
        <DevelopmentCheck>{restProps.children}</DevelopmentCheck>
      )}
    </>
  );
};

ImageBaseBadge.displayName = 'ImageBaseBadge';
Object.defineProperty(ImageBaseBadge, 'name', {
  value: 'ImageBaseBadge',
});
