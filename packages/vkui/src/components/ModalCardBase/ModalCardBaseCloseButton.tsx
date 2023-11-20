import * as React from 'react';
import { Icon20Cancel, Icon24Dismiss } from '@vkontakte/icons';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { Tappable } from '../Tappable/Tappable';
import styles from './ModalCardBase.module.css';

interface ModalCardBaseCloseButtonProps {
  onClose?: VoidFunction;
  dismissLabel?: string;
  testId?: string;
  mode?: 'inside' | 'outside';
}

export function ModalCardBaseCloseButton({
  dismissLabel,
  testId,
  mode,
  onClose,
}: ModalCardBaseCloseButtonProps) {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  if (isDesktop && mode === 'outside') {
    return <ModalDismissButton aria-label={dismissLabel} data-testid={testId} onClick={onClose} />;
  }

  if (mode === 'inside' || (platform === Platform.IOS && !isDesktop)) {
    return (
      <Tappable
        aria-label={dismissLabel}
        className={styles['ModalCardBase__dismiss']}
        onClick={onClose}
        hoverMode="opacity"
        activeMode="opacity"
        data-testid={testId}
      >
        {platform === Platform.IOS ? <Icon24Dismiss /> : <Icon20Cancel />}
      </Tappable>
    );
  }

  return null;
}
