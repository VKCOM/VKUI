import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
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
      {header && <div className="InfoRow__header">{header}</div>}
      {children}
    </div>
  );
};

export default InfoRow;
