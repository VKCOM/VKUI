import React, { Children, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasFormLabels, HasFormStatus } from '../../types';

export interface FormLayoutGroupProps extends
  HTMLAttributes<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels {
  mode?: 'vertical' | 'horizontal';
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = ({
  children,
  top,
  bottom,
  className,
  status,
  mode = 'vertical',
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();

  return (
    <div className={classNames(getClassName('FormLayoutGroup', platform), `FormLayoutGroup--${mode}`, className)} {...restProps}>
      {mode === 'vertical' ? children :
        Children.toArray(children).map((field: ReactElement, index: number) => {
          if (field) {
            const { status, top, bottom } = field.props;

            return (
              <div
                className={classNames('FormLayoutGroup__cell', { [`FormLayout__row--s-${status}`]: !!status })}
                key={field.key || `row-${index}`}
              >
                {top && <div className="FormLayout__row-top">{top}</div>}
                {field}
                {bottom && <div className="FormLayout__row-bottom">{bottom}</div>}
              </div>
            );
          } else {
            return null;
          }
        })
      }
    </div>
  );
};

export default FormLayoutGroup;
