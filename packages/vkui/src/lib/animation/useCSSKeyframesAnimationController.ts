import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

export type UseCSSAnimationControllerCallback = {
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
};

export type AnimationState = 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited';

export type AnimationHandlers = { onAnimationStart: () => void; onAnimationEnd: () => void };

export const useCSSKeyframesAnimationController = (
  stateProp: 'enter' | 'exit',
  {
    onEnter: onEnterProp = noop,
    onEntering: onEnteringProp = noop,
    onEntered: onEnteredProp = noop,
    onExit: onExitProp = noop,
    onExiting: onExitingProp = noop,
    onExited: onExitedProp = noop,
  }: UseCSSAnimationControllerCallback = {},
  disableInitAnimation = false,
): [AnimationState, AnimationHandlers] => {
  const isFirstInitRef = React.useRef(disableInitAnimation);
  const [state, setState] = React.useState<AnimationState>(stateProp);
  const [willBeEnter, setWillBeEnter] = React.useState(stateProp === 'enter');
  const [willBeExit, setWillBeExit] = React.useState(stateProp === 'exit');

  const onEnter = useStableCallback(onEnterProp);
  const onEntering = useStableCallback(onEnteringProp);
  const onEntered = useStableCallback(onEnteredProp);
  const onExit = useStableCallback(onExitProp);
  const onExiting = useStableCallback(onExitingProp);
  const onExited = useStableCallback(onExitedProp);

  const entered = React.useCallback(() => {
    setState('entered');
    setWillBeEnter(false);
    onEntered();
  }, [onEntered]);

  const exited = React.useCallback(() => {
    setState('exited');
    setWillBeExit(false);
    onExited();
  }, [onExited]);

  const onAnimationStart = () => {
    if (state === 'enter' && willBeEnter) {
      setState('entering');
      onEntering();
    } else if (state === 'exit' && willBeExit) {
      setState('exiting');
      onExiting();
    }
  };

  const onAnimationEnd = () => {
    if (state === 'entering' && willBeEnter) {
      entered();
    } else if (state === 'exiting' && willBeExit) {
      exited();
    }
  };

  useIsomorphicLayoutEffect(
    function updateState() {
      switch (stateProp) {
        case 'enter':
          if (isFirstInitRef.current && state === 'enter') {
            entered();
            break;
          }

          if (willBeEnter || state === 'entering' || state === 'entered') {
            break;
          }

          setState('enter');
          setWillBeEnter(true);
          onEnter();
          break;
        case 'exit':
          if (isFirstInitRef.current && state === 'exit') {
            exited();
            break;
          }

          if (willBeExit || state === 'exiting' || state === 'exited') {
            break;
          }

          setState('exit');
          setWillBeExit(true);
          onExit();
          break;
      }

      isFirstInitRef.current = false;
    },
    [state, stateProp, willBeEnter, willBeExit, entered, exited, onEnter, onExit],
  );

  return [state, { onAnimationStart, onAnimationEnd }];
};
