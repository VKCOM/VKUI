import { type TransitionEvent, type TransitionEventHandler, useEffect, useRef } from 'react';
import { noop } from '@vkontakte/vkjs';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useStateWithPrev } from '../../hooks/useStateWithPrev';

/* istanbul ignore next: особенность рендера в браузере когда меняется className, в Jest не воспроизвести */
const forceReflowForFixNewMountedElement = (node: Element | null) => void node?.scrollTop;

export type UseCSSTransitionState =
  | 'appear'
  | 'appearing'
  | 'appeared'
  | 'enter'
  | 'entering'
  | 'entered'
  | 'exit'
  | 'exiting'
  | 'exited';

export type UseCSSTransitionOptions = {
  enableAppear?: boolean;
  enableEnter?: boolean;
  enableExit?: boolean;
  onEnter?: (appear?: boolean) => void;
  onEntering?: (appear?: boolean) => void;
  onEntered?: (propertyName?: string, appear?: boolean) => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: (propertyName?: string) => void;
};

export type UseCSSTransition<Ref extends Element = Element> = [
  state: UseCSSTransitionState,
  {
    ref: React.RefObject<Ref | null>;
    onTransitionEnd?: TransitionEventHandler;
  },
];

/**
 * Хук основан на компоненте `CSSTransition` из библиотеки `react-transition-group`.
 *
 * @link https://reactcommunity.org/react-transition-group/css-transition
 *
 * @private
 */
export const useCSSTransition = <Ref extends Element = Element>(
  inProp?: boolean,
  {
    enableAppear = false,
    enableEnter = true,
    enableExit = true,
    onEnter: onEnterProp,
    onEntering: onEnteringProp,
    onEntered: onEnteredProp,
    onExit: onExitProp,
    onExiting: onExitingProp,
    onExited: onExitedProp,
  }: UseCSSTransitionOptions = {},
): UseCSSTransition<Ref> => {
  const onEnter = useStableCallback(onEnterProp || noop);
  const onEntering = useStableCallback(onEnteringProp || noop);
  const onEntered = useStableCallback(onEnteredProp || noop);
  const onExit = useStableCallback(onExitProp || noop);
  const onExiting = useStableCallback(onExitingProp || noop);
  const onExited = useStableCallback(onExitedProp || noop);

  const ref = useRef<Ref | null>(null);
  const [[state, prevState], setState] = useStateWithPrev<UseCSSTransitionState>(() => {
    if (!inProp) {
      return 'exited';
    }

    if (enableAppear) {
      onEnter(true);
      return 'appear';
    }

    return 'entered';
  });

  useEffect(
    function updateState() {
      if (inProp) {
        switch (state) {
          case 'appear':
            forceReflowForFixNewMountedElement(ref.current);
            setState('appearing');
            onEntering(true);
            break;
          case 'enter':
            forceReflowForFixNewMountedElement(ref.current);
            setState('entering');
            onEntering();
            break;
          case 'exiting':
            if (enableEnter) {
              setState('entering');
              onEntering();
              break;
            }

            setState('entered');
            onEntered();
            break;
          case 'exited':
            if (enableEnter) {
              setState('enter');
              onEnter();
              break;
            }

            setState('entered');
            onEntered();
            break;
        }
      } else {
        switch (state) {
          case 'exit':
            forceReflowForFixNewMountedElement(ref.current);
            setState('exiting');
            onExiting();
            break;
          case 'appearing':
          case 'entering':
            if (enableExit) {
              setState('exiting');
              onExiting();
              break;
            }

            setState('exited');
            onExited();
            break;
          case 'appeared':
          case 'entered':
            if (enableExit) {
              setState('exit');
              onExit();
              break;
            }

            setState('exited');
            onExited();
            break;
        }
      }
    },
    [
      inProp,

      state,
      prevState,
      setState,

      enableAppear,
      enableEnter,
      onEnter,
      onEntering,
      onEntered,

      enableExit,
      onExit,
      onExiting,
      onExited,
    ],
  );

  const onTransitionEnd = (event: TransitionEvent) => {
    /* istanbul ignore if: на всякий случай предупреждаем всплытие, нет смысла проверять условие */
    if (event.target !== ref.current) {
      return;
    }

    switch (state) {
      case 'appearing':
        setState('appeared');
        onEntered(event.propertyName, true);
        break;
      case 'entering':
        setState('entered');
        onEntered(event.propertyName);
        break;
      case 'exiting':
        setState('exited');
        onExited(event.propertyName);
        break;
    }
  };

  return [
    state,
    {
      ref,
      onTransitionEnd:
        state !== 'appeared' && state !== 'entered' && state !== 'exited'
          ? onTransitionEnd
          : undefined,
    },
  ];
};
