import * as React from 'react';
import { classNames, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { hasAccessibleName } from '../../lib/accessibility';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './PanelHeaderButton.module.css';

const platformClassNames = {
  ios: styles['PanelHeaderButton--ios'],
  android: styles['PanelHeaderButton--android'],
  vkcom: styles['PanelHeaderButton--vkcom'],
};

export interface PanelHeaderButtonProps extends Omit<TappableProps, 'label'> {
  primary?: boolean;
  label?: React.ReactNode;
}

interface ButtonTypographyProps extends React.AllHTMLAttributes<HTMLElement> {
  primary?: PanelHeaderButtonProps['primary'];
}

const ButtonTypography = ({ primary, children }: ButtonTypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return (
      <Title Component="span" level="3" weight={primary ? '1' : '3'}>
        {children}
      </Title>
    );
  }

  return <Text weight={platform === 'vkcom' ? undefined : '2'}>{children}</Text>;
};

const warn = warnOnce('PanelHeaderButton');

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderButton = ({
  children,
  primary = false,
  label,
  className,
  ...restProps
}: PanelHeaderButtonProps) => {
  const isPrimitive = isPrimitiveReactNode(children);
  const isPrimitiveLabel = isPrimitiveReactNode(label);
  const platform = usePlatform();

  let hoverMode;
  let activeMode;

  switch (platform) {
    case 'ios':
      hoverMode = 'background';
      activeMode = 'opacity';
      break;
    case 'vkcom':
      hoverMode = styles['PanelHeaderButton--hover'];
      activeMode = styles['PanelHeaderButton--active'];
      break;
    default:
      hoverMode = 'background';
      activeMode = 'background';
  }

  if (process.env.NODE_ENV === 'development') {
    /* istanbul ignore next: проверка в dev mode, тест на hasAccessibleName() есть в lib/accessibility.test.tsx */
    const isAccessible = hasAccessibleName({
      children: [children, label],
      ...restProps,
    });

    if (!isAccessible) {
      warn(COMMON_WARNINGS.a11y[restProps.href ? 'link-name' : 'button-name'], 'error');
    }
  }

  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      hoverMode={hoverMode}
      activeEffectDelay={200}
      activeMode={activeMode}
      className={classNames(
        'vkuiInternalPanelHeaderButton',
        styles['PanelHeaderButton'],
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        isPrimitive && styles['PanelHeaderButton--primitive'],
        !isPrimitive && !isPrimitiveLabel && styles['PanelHeaderButton--notPrimitive'],
        className,
      )}
    >
      {isPrimitive ? <ButtonTypography primary={primary}>{children}</ButtonTypography> : children}
      {isPrimitiveLabel ? (
        <ButtonTypography primary={primary} className={styles['PanelHeaderButton__label']}>
          {label}
        </ButtonTypography>
      ) : (
        label
      )}
    </Tappable>
  );
};
