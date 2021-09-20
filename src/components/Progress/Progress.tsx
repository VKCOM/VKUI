import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import './Progress.css';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  value?: number;
}

const Progress: React.FC<ProgressProps> = ({ value, getRootRef, ...restProps }: ProgressProps) => {
  const platform = usePlatform();

  return (
    <div
      aria-valuenow={value}
      {...restProps}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      ref={getRootRef}
      vkuiClass={getClassName('Progress', platform)}
    >
      <div vkuiClass="Progress__bg" aria-hidden="true" />
      <div vkuiClass="Progress__in" style={{ width: `${value}%` }} aria-hidden="true" />
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
