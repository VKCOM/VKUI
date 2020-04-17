import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  value?: number;
}

const Progress: FunctionComponent<ProgressProps> = (props: ProgressProps) => {
  const { value, className, getRootRef, ...restProps } = props;
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('Progress', platform), className)}
    >
      <div className="Progress__bg" />
      <div className="Progress__in" style={{ width: `${value}%` }} />
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
