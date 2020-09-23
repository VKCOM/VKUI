import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import getClassname from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { HasFormStatus } from '../../types';

export interface FormItemProps extends HTMLAttributes<HTMLLabelElement>, HasFormStatus {
  top?: ReactNode;
  bottom?: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ className, children, top, bottom, status, ...restProps }) => {
  const platform = usePlatform();

  return (
    <label
      {...restProps}
      className={classNames(getClassname('FormItem', platform), `FormItem--${status}`, className)}
    >
      {hasReactNode(top) && <Subhead weight="regular" className="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Caption level="1" weight="regular" className="FormItem__bottom">{bottom}</Caption>}
    </label>
  );
};

export default FormItem;
