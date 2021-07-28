import { AnchorHTMLAttributes, ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import Subhead from '../Typography/Subhead/Subhead';
import Avatar from '../Avatar/Avatar';
import { HasRef, HasRootRef } from '../../types';

interface CellTypographyProps extends HTMLAttributes<HTMLDivElement> {
  size: HorizontalCellProps['size'];
}

const CellTypography: FC<CellTypographyProps> = ({ size, children, ...restProps }: CellTypographyProps) => {
  return size === 's'
    ? <Caption level="2" weight="regular" {...restProps}>{children}</Caption>
    : <Subhead weight="regular" {...restProps}>{children}</Subhead>;
};

export interface HorizontalCellProps extends
  AnchorHTMLAttributes<HTMLElement>,
  HasRootRef<HTMLDivElement>,
  HasRef<HTMLDivElement> {
  Component?: ElementType;
  size?: 's' | 'm' | 'l';
  header?: ReactNode;
  subtitle?: ReactNode;
  disabled?: boolean;
}

export const HorizontalCell: FC<HorizontalCellProps> = ({
  className,
  header,
  style,
  subtitle,
  size = 's',
  children = <Avatar size={56} />,
  getRootRef,
  getRef,
  ...restProps
}: HorizontalCellProps) => {
  const platform = usePlatform();

  return (
    <div
      vkuiClass={classNames(getClassName('HorizontalCell', platform), `HorizontalCell--${size}`)}
      ref={getRootRef}
      style={style}
      className={className}
    >
      <Tappable
        vkuiClass="HorizontalCell__body"
        getRootRef={getRef}
        {...restProps}
      >
        {hasReactNode(children) && <div vkuiClass="HorizontalCell__image">{children}</div>}
        <div vkuiClass="HorizontalCell__content">
          {hasReactNode(header) && (
            <CellTypography size={size} vkuiClass="HorizontalCell__title">{header}</CellTypography>
          )}
          {hasReactNode(subtitle) && <Caption weight="regular" level="1" vkuiClass="HorizontalCell__subtitle">{subtitle}</Caption>}
        </div>
      </Tappable>
    </div>
  );
};
