import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import { hasReactNode, isPrimitiveReactNode } from '../../lib/utils';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  mode?: 'primary' | 'secondary';
  subtitle?: ReactNode;
  aside?: ReactNode;
  indicator?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({
  className,
  mode,
  children,
  subtitle,
  indicator,
  aside,
  getRootRef,
  ...restProps
}: HeaderProps) => {
  const platform = usePlatform();
  const baseClassNames = getClassName('Header', platform);

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(baseClassNames, className, `Header--mode-${mode}`, {
        'Header--pi': isPrimitiveReactNode(indicator),
      })}
    >
      <div className="Header__in">
        <div className="Header__content">
          {children}
          {hasReactNode(subtitle) && <div className="Header__subtitle">{subtitle}</div>}
        </div>
        {hasReactNode(indicator) && <div className="Header__indicator">{indicator}</div>}
        {hasReactNode(aside) && <div className="Header__aside">{aside}</div>}
      </div>
    </div>
  );
};

Header.defaultProps = {
  mode: 'primary',
};

export default Header;
