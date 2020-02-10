import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';

export type CardScrollProps = HTMLAttributes<HTMLDivElement>;

const CardScroll: FunctionComponent<CardScrollProps> = ({ children, className, style }: CardScrollProps) => {
  const platform = usePlatform();

  return (
    <div style={style} className={classNames(className, getClassname('CardScroll', platform))}>
      <HorizontalScroll>
        {children}
      </HorizontalScroll>
    </div>
  );
};

export default CardScroll;
