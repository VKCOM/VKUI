'use client';

import * as React from 'react';
import { classNames, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { hasAccessibleName } from '../../lib/accessibility';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './PanelHeaderButton.module.css';

const platformClassNames = {
  ios: styles.ios,
  android: styles.android,
  vkcom: styles.vkcom,
};

export interface PanelHeaderButtonProps extends Omit<TappableOmitProps, 'label'> {
  /**
   * Флаг для обозначения первичной кнопки
   * Влияет на стилизацию кнопки.
   */
  primary?: boolean;
  /**
   * Текст или содержимое кнопки.
   */
  label?: React.ReactNode; // TODO [>=8]: добавить св-во indicator, чтобы разграничить кейсы.
}

interface ButtonTypographyProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Флаг для обозначения первичной кнопки
   * Наследуется от PanelHeaderButtonProps['primary'].
   */
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
 * @see https://vkui.io/components/panel-header#panel-header-button
 */
export const PanelHeaderButton = ({
  children,
  primary = false,
  label,
  ...restProps
}: PanelHeaderButtonProps): React.ReactNode => {
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
      hoverMode = styles.hover;
      activeMode = styles.active;
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
  const elements = [label, children].filter((item) => !!item);

  const onlyPrimitive = elements.length === 1 && isPrimitiveReactNode(elements[0]);

  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      hoverMode={hoverMode}
      activeEffectDelay={200}
      activeMode={activeMode}
      {...restProps}
      baseClassName={classNames(
        styles.host,
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        onlyPrimitive && styles.primitive,
        !isPrimitive && !isPrimitiveLabel && styles.notPrimitive,
      )}
    >
      {isPrimitive ? <ButtonTypography primary={primary}>{children}</ButtonTypography> : children}
      {isPrimitiveLabel ? (
        <ButtonTypography primary={primary} className={styles.label}>
          {label}
        </ButtonTypography>
      ) : (
        label
      )}
    </Tappable>
  );
};
