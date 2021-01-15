import React, { ReactNode, HTMLAttributes, FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface BadgeProps extends HTMLAttributes<HTMLElement>, AdaptivityProps {
  icon: ReactNode;
}

const Badge: FunctionComponent<BadgeProps> = ({
  className,
  icon,
  sizeY,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        getClassName('Badge', platform),
        `Badge--sizeY-${sizeY}`,
        className,
      )}
      {...restProps}>
      {icon}
    </div>
  );
};

Badge.defaultProps = {
  icon: <span className="Badge__new"></span>,
};

export default withAdaptivity(Badge, { sizeY: true });
