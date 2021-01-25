import React, { FunctionComponent, ReactNode } from 'react';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { isPrimitiveReactNode } from '../../lib/utils';
import { IOS, VKCOM } from '../../lib/platform';
import Text from '../Typography/Text/Text';
import Title from '../Typography/Title/Title';

export interface PanelHeaderButtonProps extends Omit<TappableProps, 'label'> {
  primary?: boolean;
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

  const textWeight = platform === VKCOM ? 'regular' : 'medium';
  const titleWeight = primary ? 'semibold' : 'regular';

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
      {isPrimitive
        ? platform !== IOS
          ? <Text Component="span" weight={textWeight}>{children}</Text>
          : <Title Component="span" level="3" weight={titleWeight}>{children}</Title>
        : children
      }
      {isPrimitiveLabel
        ? platform !== IOS
          ? <Text Component="span" weight={textWeight}>{label}</Text>
          : <Title Component="span" level="3" weight={titleWeight}>{label}</Title>
        : label
      }
    </Tappable>
  );
};

PanelHeaderButton.defaultProps = {
  primary: false,
};

export default PanelHeaderButton;
