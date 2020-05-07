import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasChildren, HasDangerHTML } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface FormStatusProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasDangerHTML {
  mode?: 'default' | 'error';
  header?: ReactNode;
}

const FormStatus: FunctionComponent<FormStatusProps> = ({
  mode,
  header,
  children,
  className,
  dangerouslySetInnerHTML,
  ...restProps
}: FormStatusProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(getClassName('FormStatus', platform), `FormStatus--${mode}`, className)}
    >
      {header && <div className="FormStatus__header">{header}</div>}
      {dangerouslySetInnerHTML &&
        <div className="FormStatus__content" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      }
      {children && !dangerouslySetInnerHTML && <div className="FormStatus__content">{children}</div>}
    </div>
  );
};

export default FormStatus;
