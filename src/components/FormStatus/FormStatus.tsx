import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Headline from '../Typography/Headline/Headline';
import Caption from '../Typography/Caption/Caption';
import { hasReactNode } from '../../lib/utils';

export interface FormStatusProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'default' | 'error';
  header?: ReactNode;
}

export const FormStatus: FunctionComponent<FormStatusProps> = ({
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
      {hasReactNode(header) && <Headline weight="medium" className="FormStatus__header">{header}</Headline>}
      {dangerouslySetInnerHTML &&
        <Caption level="1" weight="regular" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      }
      {hasReactNode(children) && !dangerouslySetInnerHTML && <Caption level="1" weight="regular">{children}</Caption>}
    </div>
  );
};
