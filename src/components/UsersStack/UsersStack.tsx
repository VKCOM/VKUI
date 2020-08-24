import React, { FC, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { createMasks } from './masks';
import { useBrowserInfo } from '../../hooks/useBrowserInfo';
import { IOS } from '../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export interface UsersStackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Массив ссылок на фотографии
   */
  photos?: string[];
  /**
   * Размер аватарок
   */
  size?: 's' | 'm';
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
  const { platform, platformVersion } = useBrowserInfo();
  const { className, photos, visibleCount, size, layout, children, ...restProps } = props;

  useIsomorphicLayoutEffect(() => {
    createMasks();
  }, []);

  const othersCount = Math.max(0, photos.length - visibleCount);
  const canShowOthers = othersCount > 0 && size === 'm';

  const photosShown = photos.slice(0, visibleCount);

  let canUseClipPath = true;
  if (platform === IOS) {
    canUseClipPath = platformVersion && platformVersion.major >= 12;
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
        {photosShown.map((photo, i) => {
          return (
            <div
              key={i}
              className="UsersStack__photo"
              style={{ backgroundImage: `url(${photo})` }}
            />
          );
        })}

        {canShowOthers &&
        <div className={classNames('UsersStack__photo', 'UsersStack__photo--others')}>
          {`+${othersCount}`}
        </div>}
      </div>
      {children &&
      <div className="UsersStack__text">
        {children}
      </div>
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
