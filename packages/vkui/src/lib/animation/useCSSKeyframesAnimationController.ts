import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

export type UseCSSAnimationControllerCallback = {
  onEnter?: VoidFunction;
  onEntering?: VoidFunction;
  onEntered?: VoidFunction;
  onExit?: VoidFunction;
  onExiting?: VoidFunction;
  onExited?: VoidFunction;
};

export type AnimationState = 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited';

export type AnimationHandlers = { onAnimationStart: VoidFunction; onAnimationEnd: VoidFunction };

export const useCSSKeyframesAnimationController = (
  stateProp: 'enter' | 'exit',
  {
    onEnter: onEnterProp,
    onEntering,
    onEntered,
    onExit: onExitProp,
    onExiting,
    onExited,
  }: UseCSSAnimationControllerCallback = {},
  disableInitAnimation = false,
): [AnimationState, AnimationHandlers] => {
  const [state, setState] = React.useState<AnimationState>(() =>
    disableInitAnimation ? (stateProp === 'enter' ? 'entered' : 'exited') : stateProp,
  );

  const prevStateRef = React.useRef<'enter' | 'exit' | undefined>(undefined);
  React.useEffect(() => {
    prevStateRef.current = stateProp;
  });

  const onAnimationStart = () => {
    if (state === 'enter') {
      setState('entering');
      if (onEntering) {
        onEntering();
      }
    } else if (state === 'exit') {
      setState('exiting');
      if (onExiting) {
        onExiting();
      }
    }
  };

  const onAnimationEnd = () => {
    if (state === 'entering') {
      setState('entered');
      if (onEntered) {
        onEntered();
      }
    } else if (state === 'exiting') {
      setState('exited');
      if (onExited) {
        onExited();
      }
    }
  };

  const onEnter = useStableCallback(onEnterProp || noop);
  const onExit = useStableCallback(onExitProp || noop);

  useIsomorphicLayoutEffect(
    function updateState() {
      const prevState = prevStateRef.current;

      if (prevState === stateProp) {
        return;
      }
      switch (stateProp) {
        case 'enter':
          if (state === 'entering' || state === 'entered') {
            break;
          }

          setState('enter');
          onEnter();
          break;
        case 'exit':
          if (state === 'exiting' || state === 'exited') {
            break;
          }

          setState('exit');
          onExit();
          break;
      }
    },
    [state, stateProp, onEnter, onExit],
  );

  return [state, { onAnimationStart, onAnimationEnd }];
};
