import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import OnlineIconCircle from './OnlineIconCircle';
import OnlineIconMobile from './OnlineIconMobile';
import './Avatar.css';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLImageElement> {
  /**
   * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
   */
  size?: number;
  mode?: 'default' | 'image' | 'app';
  shadow?: boolean;
  badge?: React.ReactNode;
  online?: boolean;
  /**
   * Тип значка online: 'default' - кружок, 'mobile' - телефон
   */
  onlineType?: 'default' | 'mobile';
}

const Avatar: React.FC<AvatarProps> = ({
  alt,
  crossOrigin,
  decoding,
  height,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  width,
  getRef,
  size,
  shadow,
  mode,
  className,
  children,
  getRootRef,
  style,
  'aria-label': ariaLabel,
  badge,
  online,
  onlineType,
  ...restProps
}: AvatarProps) => {
  const platform = usePlatform();
  const [failedImage, setFailedImage] = React.useState(false);

  const onImageError = () => {
    setFailedImage(true);
  };

  const onImageLoad = () => {
    setFailedImage(false);
  };

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

  const hasSrc = src || srcSet;

  const OnlineIconComponent =
    onlineType === 'default' ? OnlineIconCircle : OnlineIconMobile;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('Avatar', platform), `Avatar--type-${mode}`, `Avatar--sz-${size}`, {
        'Avatar--shadow': shadow,
        'Avatar--failed': failedImage,
      })}
      className={className}
      ref={getRootRef}
      role={hasSrc ? 'img' : 'presentation'}
      aria-label={alt || ariaLabel}
      style={{ ...style, width: size, height: size, borderRadius }}
    >
      {hasSrc &&
        <img
          crossOrigin={crossOrigin}
          decoding={decoding}
          height={height}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          width={width}
          ref={getRef}
          onError={onImageError}
          onLoad={onImageLoad}
          vkuiClass="Avatar__img"
          alt=""
        />
      }
      {children && <div vkuiClass="Avatar__children">{children}</div>}
      {badge ? (
        <div
          vkuiClass={classNames('Avatar__badge', {
            'Avatar__badge--large': size >= 96,
          })}
        >
          {badge}
        </div>
      ) :
        mode === 'default' &&
        online && (
          <OnlineIconComponent
            vkuiClass={classNames('Avatar__online', {
              'Avatar__online--large': size >= 72,
            })}
          />
        )
      }
    </div>
  );
};

export const AVATAR_DEFAULT_SIZE = 48;
export const AVATAR_DEFAULT_SHADOW = true;

Avatar.defaultProps = {
  size: AVATAR_DEFAULT_SIZE,
  mode: 'default',
  shadow: AVATAR_DEFAULT_SHADOW,
  onlineType: 'default',
  online: false,
};

export default Avatar;
