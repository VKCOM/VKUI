import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasChildren, HasDangerHTML } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface FormStatusProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasDangerHTML {
  state?: 'default' | 'error',
  title?: string
}

const FormStatus: FunctionComponent<FormStatusProps> = ({
  state,
  title,
  children,
  className,
  dangerouslySetInnerHTML,
  ...restProps
}: FormStatusProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(getClassName('FormStatus', platform), { [`FormStatus--${state}`]: !!state }, className)}
    >
      {title && <div className="FormStatus__title">{title}</div>}
      {dangerouslySetInnerHTML &&
        <div className="FormStatus__content" dangerouslySetInnerHTML={dangerouslySetInnerHTML}/>
      }
      {children && !dangerouslySetInnerHTML && <div className="FormStatus__content">{children}</div>}
    </div>
  );
};

export default FormStatus;
