import { AllHTMLAttributes, FC } from 'react';
import Caption from '../Typography/Caption/Caption';

type FooterProps = AllHTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = ({ children, ...restProps }: FooterProps) => {
  return (
    <Caption Component="footer" {...restProps} level="1" weight="regular" vkuiClass="Footer">
      {children}
    </Caption>
  );
};

export default Footer;
