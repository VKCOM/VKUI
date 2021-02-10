import React, { FC, HTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { createMasks } from './masks';
import { useBrowserInfo } from '../../hooks/useBrowserInfo';
import { usePlatform } from '../../hooks/usePlatform';
import { System } from '../../lib/browser';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import Caption from '../Typography/Caption/Caption';

export interface UsersStackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Массив ссылок на фотографии
   */
  photos?: string[];
  /**
   * Размер аватарок
   */
  size?: 'xs' | 's' | 'm';
  /**
   * Вертикальный режим рекомендуется использовать с размером `m`
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * Количество аватарок, которые будут показаны.
   * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
   */
  visibleCount?: number;
}

const UsersStack: FC<UsersStackProps> = (props) => {
  const { system, systemVersion } = useBrowserInfo();
  const platform = usePlatform();
  const { className, photos, visibleCount, size, layout, children, ...restProps } = props;

  useIsomorphicLayoutEffect(() => {
    createMasks();
  }, []);

  const othersCount = Math.max(0, photos.length - visibleCount);
  const canShowOthers = othersCount > 0 && size === 'm';

  const photosShown = photos.slice(0, visibleCount);

  let canUseClipPath = true;
  if (system === System.IOS) {
    canUseClipPath = systemVersion && systemVersion.major >= 12;
  }

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassName('UsersStack', platform),
          className,
          `UsersStack--size-${size}`,
          `UsersStack--l-${layout}`,
          {
            'UsersStack--others': canShowOthers,
            'UsersStack--simple': !canUseClipPath,
          },
        )
      }
    >
      <div className="UsersStack__photos">
        {photosShown.map((photo, i) => (
          <div
            key={i}
            className="UsersStack__photo"
            style={{ backgroundImage: `url(${photo})` }}
          />
        ))}

        {canShowOthers &&
          <Caption weight="medium" level="1" className="UsersStack__photo UsersStack__photo--others">
            <span>+{othersCount}</span>
          </Caption>
        }
      </div>
      {children &&
        <Caption weight="regular" level="1" className="UsersStack__text">
          {children}
        </Caption>
      }
    </div>
  );
};

UsersStack.defaultProps = {
  photos: [],
  size: 's',
  visibleCount: 3,
  layout: 'horizontal',
};

export default React.memo(UsersStack);
