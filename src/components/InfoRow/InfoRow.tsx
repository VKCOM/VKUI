import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import Subhead from '../Typography/Subhead/Subhead';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ header, className, children, ...restProps }: InfoRowProps) => {
  const platform = usePlatform();
  const baseClassName = getClassName('InfoRow', platform);

  return (
    <div {...restProps} className={classNames(baseClassName, className)}>
      {header && <Subhead className="InfoRow__header" weight="regular">{header}</Subhead>}
      {children}
    </div>
  );
};

export default InfoRow;
