import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import './Switch.css';

export interface SwitchProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement>,
  AdaptivityProps { }

export const Switch: React.FunctionComponent<SwitchProps> = withAdaptivity(({
  style,
  className,
  getRef,
  getRootRef,
  sizeY,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();
  const inputRef = useExternRef(getRef);

  return (
    <label vkuiClass={classNames(getClassName('Switch', platform), `Switch--sizeY-${sizeY}`)} className={className} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" vkuiClass="Switch__self" ref={inputRef} />
      <span vkuiClass="Switch__pseudo" />
    </label>
  );
}, { sizeY: true });
