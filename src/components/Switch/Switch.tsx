import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types/props';

export interface SwitchProps extends
  HTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement> {}

const Switch: FunctionComponent<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();

  return (
    <label className={classNames(getClassName('Switch', platform), className)} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" className="Switch__self" ref={getRef} />
      <span className="Switch__pseudo" />
    </label>
  );
};

export default Switch;
