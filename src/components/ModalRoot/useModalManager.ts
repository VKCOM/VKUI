import * as React from 'react';
import { ModalsState, ModalsStateEntry, ModalType } from './types';
import { warnOnce } from '../../lib/warnOnce';
import { getNavId } from '../../lib/getNavId';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { noop } from '../../lib/utils';

interface ModalTransitionState {
  activeModal?: string;
  enteringModal?: string;
  exitingModal?: string;

  history?: string[];
  isBack?: boolean;
}

export interface ModalTransitionProps extends ModalTransitionState {
  onEnter: (id: string) => void;
  onExit: (id: string) => void;
  modalsState: ModalsState;
}

function getModals(children: React.ReactChildren) {
  return React.Children.toArray(children) as React.ReactElement[];
}

const warn = warnOnce('ModalRoot');

function modalTransitionReducer(
  state: ModalTransitionState,
  action: { type: 'setActive' | 'entered' | 'exited' | 'inited'; id: string },
): ModalTransitionState {
  if (action.type === 'setActive' && action.id !== state.activeModal) {
    const nextModal = action.id;
    // preserve exiting modal if switching mid-transition
    const prevModal = state.exitingModal || state.activeModal;
    let history = [...state.history];
    const isBack = history.includes(nextModal);

    if (nextModal === null) {
      history = [];
    } else if (isBack) {
      history = history.splice(0, history.indexOf(nextModal) + 1);
    } else {
      history.push(nextModal);
    }

    return {
      activeModal: nextModal,
      // not entering yet
      exitingModal: prevModal,
      history,
      isBack,
    };
  }
  if (action.type === 'entered' && action.id === state.enteringModal) {
    return { ...state, enteringModal: null };
  }
  if (action.type === 'exited' && action.id === state.exitingModal) {
    return { ...state, exitingModal: null };
  }
  if (action.type === 'inited' && action.id === state.activeModal) {
    return { ...state, enteringModal: action.id };
  }
  return state;
}

export function useModalManager(
  activeModal: string,
  children: React.ReactChildren,
  initModal: (state: ModalsStateEntry) => void = noop,
): ModalTransitionProps {
  const [transitionState, dispatchTransition] = React.useReducer(modalTransitionReducer, {
    activeModal,
    exitingModal: null,
    history: activeModal ? [activeModal] : [],
    isBack: false,
  });
  const modalsState = React.useRef(getModals(children).reduce<ModalsState>((acc, Modal) => {
    const modalProps = Modal.props;
    const state: ModalsStateEntry = {
      id: getNavId(modalProps, warn),
      onClose: Modal.props.onClose,
      dynamicContentHeight: !!modalProps.dynamicContentHeight,
    };

    // ModalPage props
    if (typeof modalProps.settlingHeight === 'number') {
      state.settlingHeight = modalProps.settlingHeight;
    }

    acc[state.id] = state;
    return acc;
  }, {})).current;

  // transition phase 1: map state to props, render activeModal for init
  useIsomorphicLayoutEffect(() => {
    if (process.env.NODE_ENV === 'development' && activeModal && !modalsState[activeModal]) {
      return warn(`Can't transition - modal ${activeModal} not found`);
    }
    dispatchTransition({ type: 'setActive', id: activeModal });
  }, [activeModal]);

  useIsomorphicLayoutEffect(() => {
    if (transitionState.activeModal) {
      // transition phase 2: read activeModal data & set enteringModal
      initModal(modalsState[transitionState.activeModal]);
      dispatchTransition({ type: 'inited', id: transitionState.activeModal });
    }
  }, [transitionState.activeModal]);

  const { enteringModal, exitingModal } = transitionState;
  const canEnter = enteringModal && (!exitingModal || modalsState[enteringModal]?.type === ModalType.PAGE);

  return {
    onEnter: (id: string) => dispatchTransition({ type: 'entered', id }),
    onExit: (id: string) => dispatchTransition({ type: 'exited', id }),
    ...transitionState,
    enteringModal: canEnter ? transitionState.enteringModal : null,
    modalsState,
  };
}
