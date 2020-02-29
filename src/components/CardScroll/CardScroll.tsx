import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';

export type CardScrollProps = HTMLAttributes<HTMLDivElement>;

const CardScroll: FunctionComponent<CardScrollProps> = ({ children, className, style, ...restProps }: CardScrollProps) => {
  const platform = usePlatform();

  return (
    <div {...restProps} style={style} className={classNames(className, getClassname('CardScroll', platform))}>
      <HorizontalScroll>
        <div className="CardScroll__in">
          {children}
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default CardScroll;
