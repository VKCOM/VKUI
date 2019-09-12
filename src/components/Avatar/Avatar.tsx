import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasRootRef } from '../../types/props';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren, HasRootRef<HTMLDivElement> {
  size?: 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24,
  src?: string,
  type?: 'default' | 'image' | 'app'
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  src,
  size,
  type,
  style,
  className,
  children,
  getRootRef,
  ...restProps
}: AvatarProps) => {
  const Component = src ? 'img' : 'div';
  const platform = usePlatform();
  let borderRadius;

  switch (type) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = 4;
      break;
    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return (
    <div
      className={classNames(getClassName('Avatar', platform), className, `Avatar--type-${type}`)}
      ref={getRootRef}
    >
      <div className="Avatar__in">
        <Component
          {...restProps}
          className="Avatar__img"
          src={src}
          style={{ ...style, width: size, height: size, borderRadius }}
        />
        {children && <div className="Avatar__children" style={{ width: size, height: size, borderRadius }}>{children}</div>}
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  size: 48,
  type: 'default'
};

export default Avatar;

