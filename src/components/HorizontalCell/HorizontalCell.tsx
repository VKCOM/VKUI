import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import Subhead from '../Typography/Subhead/Subhead';
import Avatar from '../Avatar/Avatar';
import { HasRef, HasRootRef } from '../../types';

export interface HorizontalCellProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  header?: ReactNode;
  subtitle?: ReactNode;
}

export const HorizontalCell: FC<HorizontalCellProps> = (props) => {
  const platform = usePlatform();
  const { className, header, subtitle, size, style, children, getRootRef, getRef, ...restProps } = props;
  return (
    <div className={classNames(getClassName('HorizontalCell', platform), `HorizontalCell--${size}`, className)} ref={getRootRef} style={style}>
      <Tappable getRootRef={getRef} {...restProps}>
        {hasReactNode(children) && <div className="HorizontalCell__image">{children}</div>}
        <div className="HorizontalCell__content">
          {hasReactNode(header) &&
            size === 's' ? <Caption weight="regular" level="2" className="HorizontalCell__title">{header}</Caption> :
            <Subhead weight="regular" className="HorizontalCell__title">{header}</Subhead>}
          {hasReactNode(subtitle) && <Caption weight="regular" level="1" className="HorizontalCell__subtitle">{subtitle}</Caption>}
        </div>
      </Tappable>
    </div>
  );
};

HorizontalCell.defaultProps = {
  size: 's',
  children: <Avatar size={56} />,
};
