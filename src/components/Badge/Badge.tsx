import React, { ReactNode, HTMLAttributes, FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
}

const Badge: FunctionComponent<BadgeProps> = ({
  className,
  icon,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        getClassName('Badge', platform),
        className,
      )}
      {...restProps}>
      {icon}
    </div>
  );
};

Badge.defaultProps = {
  icon: <i className="Badge__default"></i>,
};

export default Badge;
