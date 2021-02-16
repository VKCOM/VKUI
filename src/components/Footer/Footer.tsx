import { FunctionComponent } from 'react';
import { classNames } from '../../lib/classNames';
import { DivProps } from '../Div/Div';
import Caption from '../Typography/Caption/Caption';

const Footer: FunctionComponent<DivProps> = ({ className, children, ...restProps }: DivProps) => {
  return (
    <Caption {...restProps} level="1" weight="regular" className={classNames('Footer', className)}>
      {children}
    </Caption>
  );
};

export default Footer;
