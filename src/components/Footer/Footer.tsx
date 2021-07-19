import { FC } from 'react';
import Caption, { CaptionProps } from '../Typography/Caption/Caption';

const Footer: FC<CaptionProps> = ({ children, ...restProps }: CaptionProps) => {
  return (
    <Caption Component="footer" {...restProps} level="1" weight="regular" vkuiClass="Footer">
      {children}
    </Caption>
  );
};

export default Footer;
