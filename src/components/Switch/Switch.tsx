import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';

export interface SwitchProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement> { }

const Switch: FunctionComponent<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();

  const { sizeY } = useAdaptivity();

  return (
    <label className={classNames(
      getClassName('Switch', platform),
      className,
      `Switch--sizeY-${sizeY}`)} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" className="Switch__self" ref={getRef} />
      <span className="Switch__pseudo" />
    </label>
  );
};

export default Switch;
