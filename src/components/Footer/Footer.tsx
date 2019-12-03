import React, { FunctionComponent } from 'react';
import classNames from '../../lib/classNames';
import Div, { DivProps } from '../Div/Div';

const Footer: FunctionComponent<DivProps> = ({ className, children, ...restProps }: DivProps) => {
  return <Div {...restProps} className={classNames('Footer', className)}>{children}</Div>;
};

export default Footer;
