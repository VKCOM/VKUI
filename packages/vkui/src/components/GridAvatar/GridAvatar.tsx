import { classNames } from '@vkontakte/vkjs';
import { warnOnce } from '../../lib/warnOnce';
import { ImageBase, type ImageBaseProps } from '../ImageBase/ImageBase';
import { GridAvatarBadge, type GridAvatarBadgeProps } from './GridAvatarBadge/GridAvatarBadge';
import styles from './GridAvatar.module.css';

export { GridAvatarBadgeProps };

const GRID_AVATAR_DEFAULT_SIZE = 48;

export const MAX_GRID_LENGTH = 4;

export interface GridAvatarProps extends Omit<ImageBaseProps, 'src' | 'fallbackIcon'> {
  /**
   * Массив со ссылками. От 1 до 4 элементов.
   */
  src?: string[];
}

const warn = warnOnce('GridAvatar');

/**
 * @see https://vkcom.github.io/VKUI/#/GridAvatar
 */
export const GridAvatar: React.FC<GridAvatarProps> & { Badge: typeof GridAvatarBadge } = ({
  src = [],
  size = GRID_AVATAR_DEFAULT_SIZE,
  className,
  children,
  ...restProps
}: GridAvatarProps) => {
  if (process.env.NODE_ENV === 'development') {
    if (src.length > MAX_GRID_LENGTH) {
      warn(`Длина массива src (${src.length}) больше максимальной (${MAX_GRID_LENGTH})`, 'error');
    }
  }

  return (
    <ImageBase {...restProps} size={size} className={classNames(styles.host, className)}>
      <div className={styles.in} aria-hidden>
        {src.map((url, index) =>
          index < MAX_GRID_LENGTH ? (
            <div key={index} className={styles.item} style={{ backgroundImage: `url(${url})` }} />
          ) : null,
        )}
      </div>
      {children}
    </ImageBase>
  );
};

GridAvatar.Badge = GridAvatarBadge;
