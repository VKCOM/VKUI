import { FC, ImgHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';

export interface AvatarProps extends ImgHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLImageElement> {
  /**
   * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
   */
  size?: number;
  mode?: 'default' | 'image' | 'app';
  shadow?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  getRef,
  size,
  shadow,
  mode,
  className,
  children,
  getRootRef,
  style,
  alt,
  'aria-label': ariaLabel,
  ...restProps
}: AvatarProps) => {
  const platform = usePlatform();

  let borderRadius: string | number = '50%';

  switch (mode) {
    case 'image':
      size < 64 && (borderRadius = 4);
      size >= 64 && size < 96 && (borderRadius = 6);
      size >= 96 && (borderRadius = 8);
      break;
    case 'app':
      size <= 40 && (borderRadius = 8);
      size > 40 && size < 56 && (borderRadius = 10);
      size >= 56 && size < 64 && (borderRadius = 12);
      size >= 64 && size < 84 && (borderRadius = 16);
      size >= 84 && (borderRadius = 18);
      break;
    default:
      break;
  }

  const hasSrc = restProps.src || restProps.srcSet;

  return (
    <div
      vkuiClass={classNames(getClassName('Avatar', platform), `Avatar--type-${mode}`, `Avatar--sz-${size}`, {
        'Avatar--shadow': shadow,
      })}
      className={className}
      ref={getRootRef}
      role={hasSrc ? 'img' : 'presentation'}
      aria-label={alt || ariaLabel}
      style={{ ...style, width: size, height: size, borderRadius }}
    >
      {hasSrc &&
        <img
          {...restProps}
          ref={getRef}
          vkuiClass="Avatar__img"
          alt=""
        />
      }
      {children && <div vkuiClass="Avatar__children">{children}</div>}
    </div>
  );
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default',
  shadow: true,
};

export default Avatar;
