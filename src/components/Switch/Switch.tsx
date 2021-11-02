import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import './Switch.css';

export interface SwitchProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement> {};

export const Switch: React.FC<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const inputRef = useExternRef(getRef);

  return (
    <label vkuiClass={classNames(getClassName('Switch', platform), `Switch--sizeY-${sizeY}`)} className={className} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" vkuiClass="Switch__self" ref={inputRef} />
      <span vkuiClass="Switch__pseudo" />
    </label>
  );
};
