import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';
import { createMasks } from './masks';

createMasks();

export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren {
  /**
   * Массив ссылок на фотографии
   */
  photos?: string[],
  /**
   * Размер аватарок
   */
  size?: 's' | 'm',
  /**
   * Вертикальный режим. Рекомендуется использовать с размером `m`
   */
  vertical?: boolean,
  /**
   * Количество аватарок, которые будут показаны.
   * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
   */
  count?: number,
}

const UsersStack: React.FunctionComponent<UsersStackProps> = (props: UsersStackProps) => {
  const platform = usePlatform();
  const { className, photos, count, size, vertical, children, ...restProps } = props;

  const othersCount = Math.max(0, photos.length - count);
  const canShowOthers = othersCount > 0 && size === 'm';

  const photosShown = photos.slice(0, count);

  return (
    <div {...restProps} className={classNames(getClassName('UsersStack', platform), className, 'UsersStack--size-' + size, {
      'UsersStack--with-others': canShowOthers,
      'UsersStack--v': vertical
    })}>
      <div className="UsersStack__photos">
        {photosShown.map((photo, i) => (
          <div
            key={i}
            className="UsersStack__photo"
            style={{ backgroundImage: `url(${photo})` }}
          />
        ))}

        {canShowOthers &&
        <div className="UsersStack__photo UsersStack__photo--others">
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
  count: 3
};

export default React.memo(UsersStack);
