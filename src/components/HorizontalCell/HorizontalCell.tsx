import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Tappable from '../Tappable/Tappable';
import Subhead from '../Typography/Subhead/Subhead';
import Avatar from '../Avatar/Avatar';

export interface HorizontalCellProps extends HTMLAttributes<HTMLDivElement>{
  size?: 'small' | 'medium' | 'large';
  image?: ReactNode;
  title?: string;
  subtitle?: string;
  secondSubtitle?: string;
}

const HorizontalCell: FC<HorizontalCellProps> = (props) => {
  const platform = usePlatform();
  const { className, image, title, subtitle, secondSubtitle, size, style, ...restProps } = props;
  return (
    <Tappable className={classNames(getClassName('HorizontalCell', platform), `HorizontalCell--sz-${size}`, className)} style={style} {...restProps}>
      {hasReactNode(image) && <div className="HorizontalCell__image">{image}</div>}
      <div className="HorizontalCell__content">
        {hasReactNode(title) &&
          size === 'small' ?
            <Caption weight='regular' level='2' className="HorizontalCell__title">{title}</Caption> :
            <Subhead weight='regular' className="HorizontalCell__title">{title}</Subhead>
        }
        {hasReactNode(subtitle) && <Caption weight='regular' level='1' className="HorizontalCell__subtitle">{subtitle}</Caption>}
        {hasReactNode(secondSubtitle) && <Caption weight='regular' level='1' className="HorizontalCell__subtitle">{secondSubtitle}</Caption>}
      </div>
    </Tappable>
  );
}

HorizontalCell.defaultProps = {
  size: 'small',
  image: <Avatar size={56}/>,
  title: 'Title'
}

export default HorizontalCell;
