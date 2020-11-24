import React, { ElementType, FC, LabelHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface FormItemProps extends LabelHTMLAttributes<HTMLElement> {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid';
  Component?: ElementType;
}

export const FormItem: FC<FormItemProps> = withAdaptivity(({ className, children, top, bottom, status, Component, sizeY, ...restProps }: FormItemProps & AdaptivityProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('FormItem', platform), `FormItem--${status}`, `FormItem--sizeY-${sizeY}`, className)}
    >
      {hasReactNode(top) && <Subhead weight="regular" className="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Caption level="1" weight="regular" className="FormItem__bottom">{bottom}</Caption>}
    </Component>
  );
}, {
  sizeY: true,
});

FormItem.defaultProps = {
  status: 'default',
  Component: 'label',
};
