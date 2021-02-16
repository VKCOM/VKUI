import { FunctionComponent, ImgHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface AvatarProps extends ImgHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
  /**
   * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
   */
  size?: number;
  src?: string;
  mode?: 'default' | 'image' | 'app';
  shadow?: boolean;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  src,
  size,
  shadow,
  mode,
  className,
  children,
  getRootRef,
  ...restProps
}: AvatarProps) => {
  const Component = src ? 'img' : 'div';
  const platform = usePlatform();
  let borderRadius;

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;
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
  }

  return (
    <div
      className={classNames(getClassName('Avatar', platform), className, `Avatar--type-${mode}`, `Avatar--sz-${size}`)}
      ref={getRootRef}
    >
      <div className="Avatar__in" style={{ width: size, height: size, borderRadius }}>
        <Component
          {...restProps}
          className="Avatar__img"
          src={src}
        />
        {shadow && <span className="Avatar__shadow" />}
        {children && <div className="Avatar__children">{children}</div>}
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default',
  shadow: true,
};

export default Avatar;
