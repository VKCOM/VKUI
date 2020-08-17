import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasAlign, HasFormLabels, HasFormStatus, HasRef, HasRootRef } from '../../types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import usePlatform from '../../hooks/usePlatform';

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels,
  HasAlign,
  AdaptivityProps {}

const Input: FunctionComponent<InputProps> = ({
  align,
  status,
  getRef,
  className,
  getRootRef,
  top,
  bottom,
  sizeY,
  ...restProps
}: InputProps) => {
  const platform = usePlatform();
  return (
    <FormField
      className={classNames(getClassName('Input', platform), className, { [`Input--${align}`]: !!align }, `Input--sizeY-${sizeY}`)}
      status={status}
      getRootRef={getRootRef}
    >
      <input {...restProps} className="Input__el" ref={getRef} />
    </FormField>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default withAdaptivity(Input, {
  sizeY: true,
});
