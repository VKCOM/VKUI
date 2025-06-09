'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { type SnackbarPlacement } from '../../components/Snackbar/types';
import { SnackbarAnimatedWrapper } from './SnackbarAnimatedWrapper';
import { type SnackbarData } from './types';
import styles from './SnackbarsContainer.module.css';
/* eslint-disable jsdoc/require-jsdoc */

interface SnackbarsContainerProps {
  snackbars: SnackbarData[];
  placement: SnackbarPlacement;
  onSnackbarShow: (id: string) => void;
  onSnackbarContainerClosed: (id: string) => void;
}

const placementClassNames = {
  'top-start': styles.placementTopStart,
  'top-end': styles.placementTopEnd,
  'top': styles.placementTop,
  'bottom-start': styles.placementBottomStart,
  'bottom-end': styles.placementBottomEnd,
  'bottom': styles.placementBottom,
};

type SnackbarsContainerContextData = {
  isInsideSnackbarContainer: boolean;
  onSnackbarClosed: (id: string) => void;
  onSnackbarShow: (id: string) => void;
};

export const SnackbarsContainerContext = React.createContext<SnackbarsContainerContextData>({
  isInsideSnackbarContainer: false,
  onSnackbarClosed: noop,
  onSnackbarShow: noop,
});

export const SnackbarsContainer: React.FC<SnackbarsContainerProps> = ({
  snackbars,
  placement,
  onSnackbarShow,
  onSnackbarContainerClosed: onSnackbarContainerClosedProp,
}) => {
  const [snackbarsWrappersToClose, setSnackbarsWrappersToClose] = React.useState<Set<string>>(
    new Set(),
  );
  const onSnackbarClosed = React.useCallback((id: string) => {
    setSnackbarsWrappersToClose((oldState) => new Set([...oldState, id]));
  }, []);

  const onSnackbarContainerClosed = React.useCallback(
    (id: string) => {
      setSnackbarsWrappersToClose((oldState) => {
        oldState.delete(id);
        return new Set(oldState);
      });
      onSnackbarContainerClosedProp(id);
    },
    [onSnackbarContainerClosedProp],
  );

  const contextValue: SnackbarsContainerContextData = React.useMemo(
    () => ({
      isInsideSnackbarContainer: true,
      onSnackbarClosed,
      onSnackbarShow,
    }),
    [onSnackbarClosed, onSnackbarShow],
  );

  if (!snackbars.length) {
    return null;
  }

  return (
    <SnackbarsContainerContext.Provider value={contextValue}>
      <div className={classNames(styles.host, placementClassNames[placement])}>
        {snackbars.map((snackbarData) => (
          <SnackbarAnimatedWrapper
            key={snackbarData.id}
            snackbarData={snackbarData}
            onClosed={onSnackbarContainerClosed}
            close={snackbarsWrappersToClose.has(snackbarData.id)}
          />
        ))}
      </div>
    </SnackbarsContainerContext.Provider>
  );
};
