import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { isPrimitiveReactNode } from '../../lib/utils';
import { VKCOM } from '../../lib/platform';
import Text from '../Typography/Text/Text';

export interface PanelHeaderButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean;
  href?: string;
  target?: string;
  label?: ReactNode;
}

const PanelHeaderButton: FunctionComponent<PanelHeaderButtonProps> = ({
  className,
  children,
  primary,
  label,
  ...restProps
}: PanelHeaderButtonProps) => {
  const isPrimitive = isPrimitiveReactNode(children);
  const isPrimitiveLabel = isPrimitiveReactNode(label);
  const Component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  const childrenComponent = isPrimitive && platform === VKCOM ? <Text weight="regular">{children}</Text> : children;
  const labelComponent = isPrimitiveLabel && platform === VKCOM ? <Text weight="regular">{label}</Text> : label;

  return (
    <Tappable
      {...restProps}
      Component={Component}
      activeEffectDelay={200}
      className={classNames(
        getClassName('PanelHeaderButton', platform),
        className,
        {
          'PanelHeaderButton--primary': primary,
          'PanelHeaderButton--primitive': isPrimitive,
          'PanelHeaderButton--notPrimitive': !isPrimitive && !isPrimitiveLabel,
        },
      )}
    >
      {childrenComponent}
      {labelComponent}
    </Tappable>
  );
};

PanelHeaderButton.defaultProps = {
  primary: false,
};

export default PanelHeaderButton;
