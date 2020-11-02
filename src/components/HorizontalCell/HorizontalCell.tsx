import React, { FC, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import Subhead from '../Typography/Subhead/Subhead';
import Avatar from '../Avatar/Avatar';

export interface HorizontalCellProps extends HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  title?: string;
  subtitle?: string;
  secondSubtitle?: string;
}

const HorizontalCell: FC<HorizontalCellProps> = (props) => {
  const platform = usePlatform();
  const { className, title, subtitle, secondSubtitle, size, style, children, ...restProps } = props;
  return (
    <div className={classNames(getClassName('HorizontalCell', platform), `HorizontalCell--${size}`, className)} style={style}>
      <Tappable {...restProps}>
        {hasReactNode(children) && <div className="HorizontalCell__image">{children}</div>}
        <div className="HorizontalCell__content">
          {hasReactNode(title) &&
            size === 's' ? <Caption weight="regular" level="2" className="HorizontalCell__title">{title}</Caption> :
            <Subhead weight="regular" className="HorizontalCell__title">{title}</Subhead>}
          {hasReactNode(subtitle) && <Caption weight="regular" level="1" className="HorizontalCell__subtitle">{subtitle}</Caption>}
          {hasReactNode(secondSubtitle) && <Caption weight="regular" level="1" className="HorizontalCell__subtitle">{secondSubtitle}</Caption>}
        </div>
      </Tappable>
    </div>
  );
};

HorizontalCell.defaultProps = {
  size: 's',
  children: <Avatar size={56} />,
  title: 'Title',
};

export default HorizontalCell;
