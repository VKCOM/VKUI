import { FunctionComponent, InputHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './Switch.css';

export interface SwitchProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement>,
  AdaptivityProps { }

const Switch: FunctionComponent<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  sizeY,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();

  return (
    <label vkuiClass={classNames(
      getClassName('Switch', platform),
      `Switch--sizeY-${sizeY}`)} className={className} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" vkuiClass="Switch__self" ref={getRef} />
      <span vkuiClass="Switch__pseudo" />
    </label>
  );
};

export default withAdaptivity(Switch, { sizeY: true });
