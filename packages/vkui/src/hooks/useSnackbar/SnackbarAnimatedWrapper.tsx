'use client';

import { useEffect, useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Snackbar } from '../../components/Snackbar/Snackbar';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { usePlatform } from '../usePlatform';
import { type SnackbarData } from './types';
import styles from './SnackbarAnimatedWrapper.module.css';

const animationStateClassNames = {
  enter: styles.stateEnter,
  entering: styles.stateEnter,
  entered: styles.stateEnter,
  exit: styles.stateExit,
  exiting: styles.stateExit,
  exited: undefined,
};

export const SnackbarAnimatedWrapper: React.FC<{
  snackbarData: SnackbarData;
  close: boolean;
  onClosed: (id: string) => void;
}> = ({ snackbarData, close = false, onClosed }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const platform = usePlatform();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    close ? 'exit' : 'enter',
    {
      onExited: () => onClosed(snackbarData.id),
    },
  );

  useEffect(() => {
    if (ref.current && animationState === 'entered') {
      ref.current?.style.setProperty(
        '--vkui_internal--SnackbarAnimatedWrapper_height',
        `${ref.current.offsetHeight}px`,
      );
    }
  }, [animationState]);

  if (animationState === 'exited') {
    return null;
  }

  return (
    <div
      ref={ref}
      className={classNames(
        styles.host,
        animationStateClassNames[animationState],
        platform === 'ios' && styles.ios,
      )}
      {...animationHandlers}
    >
      <Snackbar key={snackbarData.id} {...snackbarData} />
    </div>
  );
};
