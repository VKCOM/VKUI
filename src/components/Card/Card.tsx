import { FunctionComponent, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface CardProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  mode?: 'tint' | 'shadow' | 'outline';
}

const Card: FunctionComponent<CardProps> = ({ mode, children, className, getRootRef, ...restProps }: CardProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(className, getClassName('Card', platform), `Card--md-${mode}`)}
    >
      <div className="Card__in">
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  mode: 'tint',
};

export default Card;
