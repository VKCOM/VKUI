import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Headline from '../Typography/Headline/Headline';
import Caption from '../Typography/Caption/Caption';
import { hasReactNode } from '../../lib/utils';
import './FormStatus.css';

export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'default' | 'error';
  header?: React.ReactNode;
}

export const FormStatus: React.FunctionComponent<FormStatusProps> = ({
  mode,
  header,
  children,
  dangerouslySetInnerHTML,
  ...restProps
}: FormStatusProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('FormStatus', platform), `FormStatus--${mode}`)}
    >
      {hasReactNode(header) && <Headline weight="medium" vkuiClass="FormStatus__header">{header}</Headline>}
      {dangerouslySetInnerHTML &&
        <Caption level="1" weight="regular" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      }
      {hasReactNode(children) && !dangerouslySetInnerHTML && <Caption level="1" weight="regular">{children}</Caption>}
    </div>
  );
};
