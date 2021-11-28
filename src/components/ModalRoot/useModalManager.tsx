import * as React from "react";
import { warnOnce } from "../../lib/warnOnce";
import { getNavId } from "../../lib/getNavId";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { isFunction } from "../../lib/utils";
import { noop } from "@vkontakte/vkjs";

type ModalHistoryRecord = {
  id: string;
  translate?: number;
  globalTranslate?: boolean;
};
interface ModalTransitionState {
  activeModal?: string;
  enteringModal?: string;
  exitingModal?: string;

  isLocked?: boolean;
  history?: ModalHistoryRecord[];
  isBack?: boolean;
}

export interface ModalTransitionProps extends ModalTransitionState {
  onEnter: (id: string, lock?: boolean) => void;
  onExit: (id: string) => void;
  captureClose: (override?: (id: string) => void | null) => void;
  saveTranslate: (
    id: string,
    translate: number,
    globalTranslate: boolean
  ) => void;
  closeActiveModal: VoidFunction;
  modals: React.ReactElement[];
}

export const ModalManagerContext = React.createContext<ModalTransitionProps>({
  history: [],
  onEnter: noop,
  onExit: noop,
  captureClose: noop,
  closeActiveModal: noop,
  saveTranslate: noop,
  modals: [],
  isLocked: false,
  isBack: false,
  activeModal: null,
  enteringModal: null,
  exitingModal: null,
});

function getModals(children: React.ReactNode | React.ReactNode[]) {
  return React.Children.toArray(children) as React.ReactElement[];
}

const warn = warnOnce("ModalRoot");

type ModalTransitionAction =
  | { type: "setActive" | "exited"; id: string }
  | { type: "entered"; id: string; lock: boolean }
  | ({ type: "saveTranslate"; id: string } & Required<ModalHistoryRecord>);
export function modalTransitionReducer(
  state: ModalTransitionState,
  action: ModalTransitionAction
): ModalTransitionState {
  if (action.type === "setActive" && action.id !== state.activeModal) {
    const nextModal = action.id;
    // preserve exiting modal if switching mid-transition
    const prevModal = state.exitingModal || state.activeModal;
    let history = [...state.history];
    const backRef = history.find(({ id }) => id === action.id);

    if (nextModal === null) {
      history = [];
    } else if (backRef) {
      history = history.splice(0, history.indexOf(backRef) + 1);
    } else {
      history.push({ id: nextModal });
    }

    return {
      activeModal: nextModal,
      enteringModal: nextModal,
      exitingModal: prevModal,
      history,
      isBack: !!backRef,
      isLocked: false,
    };
  }
  if (
    action.type === "saveTranslate" &&
    state.history.some((e) => e.id === action.id)
  ) {
    const { type, id, ...patch } = action;
    return {
      ...state,
      history: state.history.map((e) =>
        e.id === action.id ? { ...e, ...patch } : e
      ),
    };
  }
  if (action.type === "entered" && action.id === state.enteringModal) {
    return { ...state, enteringModal: null, isLocked: action.lock };
  }
  if (action.type === "exited" && action.id === state.exitingModal) {
    return { ...state, exitingModal: null, isLocked: false };
  }
  return state;
}

/**
 * Реализует переход модалок. При смене activeModal m1 -> m2:
 * 1. activeModal: m1, exitingModal: null, enteringModal: null, триггер перехода
 * 2. activeModal: m2, exitingModal: m1, enteringModal: m2
 * 3/4. exitingModal вызывает onExit, enteringModal - onEnter и становятся null в порядке завершения анимации
 * 5. activeModal: m2, exitingModal: null, enteringModal: null, переход закончен
 *
 * При isLocked = true нельзя начинать анимацию входа следующей модалки.
 */
export function useModalManager(
  activeModal: string,
  children: React.ReactNode | React.ReactNode[],
  onClose: (id: string) => void
): ModalTransitionProps {
  const onCloseOverride = React.useRef<(id: string) => void>();
  const modals = getModals(children);

  const isMissing =
    activeModal && !modals.some((m) => getNavId(m.props, warn) === activeModal);
  const safeActiveModal = isMissing ? null : activeModal;
  const [transitionState, dispatchTransition] = React.useReducer(
    modalTransitionReducer,
    {
      activeModal: safeActiveModal,
      enteringModal: safeActiveModal,
      exitingModal: null,
      history: safeActiveModal ? [{ id: safeActiveModal }] : [],
      isBack: false,
      isLocked: false,
    }
  );

  // Map props to state, render activeModal for init
  useIsomorphicLayoutEffect(() => {
    dispatchTransition({ type: "setActive", id: safeActiveModal });
  }, [safeActiveModal]);

  // Warn on non-existent activeModal
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development" && isMissing) {
      warn(`Can't transition - modal ${activeModal} not found`);
    }
  }, [isMissing]);

  const onEnter = React.useCallback<ModalTransitionProps["onEnter"]>(
    (id, lock) => dispatchTransition({ type: "entered", id, lock }),
    []
  );
  const onExit = React.useCallback<ModalTransitionProps["onExit"]>(
    (id) => dispatchTransition({ type: "exited", id }),
    []
  );
  const saveTranslate = React.useCallback<
    ModalTransitionProps["saveTranslate"]
  >(
    (id, translate, globalTranslate) =>
      dispatchTransition({
        type: "saveTranslate",
        id,
        translate,
        globalTranslate,
      }),
    []
  );

  const captureClose = React.useCallback<ModalTransitionProps["captureClose"]>(
    (cb) => {
      onCloseOverride.current = cb;
    },
    []
  );

  const closeActiveModal = React.useCallback(() => {
    if (safeActiveModal) {
      if (isFunction(onCloseOverride.current)) {
        onCloseOverride.current();
      } else if (isFunction(onClose)) {
        onClose(safeActiveModal);
      } else if (process.env.NODE_ENV === "development") {
        warn("onClose is undefined");
      }
    }
  }, [safeActiveModal, onClose]);

  const visibleModals = modals.filter((m) => {
    const id = getNavId(m.props, warn);
    return (
      id === transitionState.activeModal || id === transitionState.exitingModal
    );
  });

  return {
    ...transitionState,
    onEnter,
    onExit,
    saveTranslate,
    captureClose,
    closeActiveModal,
    modals: visibleModals,
  };
}
