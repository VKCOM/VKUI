'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { hasAccessibleName } from '../../lib/accessibility';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import stylesIconButtonGlobal from './IconButton.global.module.css';
import styles from './IconButton.module.css';
import stylesAlertGlobal from '../Alert/Alert.global.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
} as const;

export interface IconButtonProps extends TappableOmitProps {
  /**
   * Текст кнопки-иконки. Делает ее доступной для ассистивных технологий.
   */
  label?: string | undefined;
}

const warn = warnOnce('IconButton');

/**
 * @see https://vkui.io/components/icon-button
 */
export const IconButton = ({ label, children, ...restProps }: IconButtonProps): React.ReactNode => {
  const platform = usePlatform();
  const { density = 'none' } = useAdaptivity();

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
      activeEffectDelay={200}
      activeMode="background"
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesAlertGlobal.alertIconButtonHost,
        stylesIconButtonGlobal.iconButtonHost,
        density !== 'regular' && densityClassNames[density],
        density === 'compact' && stylesIconButtonGlobal.iconButtonDensityCompact,
        density === 'none' && stylesIconButtonGlobal.iconButtonDensityNone,
        platform === 'ios' && styles.ios,
        platform === 'ios' && stylesIconButtonGlobal.iconButtonIos,
      )}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </Tappable>
  );
};
