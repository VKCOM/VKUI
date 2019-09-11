import React, { FunctionComponent } from 'react';
import classNames from '../../lib/classNames';
import Div, { DivProps } from '../Div/Div';

export interface FooterProps extends DivProps {}

const Footer: FunctionComponent<FooterProps> = ({ className, children, ...restProps }: FooterProps) => (
  <Div {...restProps} className={classNames('Footer', className)}>{children}</Div>
);

export default Footer;
