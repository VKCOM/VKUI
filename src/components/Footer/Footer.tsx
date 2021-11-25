import * as React from 'react';
import Caption from '../Typography/Caption/Caption';
import './Footer.css';

type FooterProps = React.AllHTMLAttributes<HTMLElement>;

export const Footer: React.FC<FooterProps> = ({
  children,
  ...restProps
}: FooterProps) => {
  return (
    <Caption Component="footer" {...restProps} level="1" weight="regular" vkuiClass="Footer">
      {children}
    </Caption>
  );
};
