import { FunctionComponent, HTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  value?: number;
}

const Progress: FunctionComponent<ProgressProps> = (props: ProgressProps) => {
  const { value, getRootRef, ...restProps } = props;
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={getClassName('Progress', platform)}
    >
      <div vkuiClass="Progress__bg" />
      <div vkuiClass="Progress__in" style={{ width: `${value}%` }} />
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
