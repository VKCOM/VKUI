import * as React from 'react';
import { Icon20Cancel, Icon24Dismiss } from '@vkontakte/icons';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ModalCardBase.module.css';

interface ModalCardBaseCloseButtonProps extends Omit<TappableProps, 'mode' | 'onClose'> {
  onClose?: VoidFunction;
  testId?: string;
  mode?: 'inside' | 'outside';
}

export function ModalCardBaseCloseButton({
  children = 'Закрыть',
  testId,
  mode,
  onClose,
}: ModalCardBaseCloseButtonProps) {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  if (isDesktop && mode === 'outside') {
    return (
      <ModalDismissButton data-testid={testId} onClick={onClose}>
        {children}
      </ModalDismissButton>
    );
  }

  if (mode === 'inside' || (platform === 'ios' && !isDesktop)) {
    return (
      <Tappable
        className={styles['ModalCardBase__dismiss']}
        onClick={onClose}
        hoverMode="opacity"
        activeMode="opacity"
        data-testid={testId}
      >
        <VisuallyHidden>{children}</VisuallyHidden>
        {platform === 'ios' ? <Icon24Dismiss /> : <Icon20Cancel />}
      </Tappable>
    );
  }

  return null;
}
