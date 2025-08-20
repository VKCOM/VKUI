'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Flex } from '../../components/Flex/Flex';
import { type SnackbarPlacement } from '../../components/Snackbar/types';
import { type CSSCustomProperties } from '../../types.ts';
import { SnackbarAnimatedWrapper } from './SnackbarAnimatedWrapper';
import {
  SnackbarsContainerContext,
  type SnackbarsContainerContextData,
} from './SnackbarsContainerContext';
import {
  type SnackbarData,
  type SnackbarsVerticalOffset,
  type UseSnackbarParameters,
} from './types';
import styles from './SnackbarsContainer.module.css';
/* eslint-disable jsdoc/require-jsdoc */

interface SnackbarsContainerProps
  extends Pick<UseSnackbarParameters, 'verticalOffsetTop' | 'verticalOffsetBottom'> {
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

const resolveOffset = (offset: SnackbarsVerticalOffset | undefined): string => {
  if (typeof offset === 'undefined') {
    return '';
  }
  return typeof offset === 'number' ? `${offset}px` : offset;
};

export const SnackbarsContainer: React.FC<SnackbarsContainerProps> = ({
  snackbars,
  placement,
  onSnackbarShow,
  onSnackbarContainerClosed: onSnackbarContainerClosedProp,
  verticalOffsetTop,
  verticalOffsetBottom,
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

  const containerStyles: CSSCustomProperties = {
    '--vkui_internal--snackbars_container_offset_top': resolveOffset(verticalOffsetTop),
    '--vkui_internal--snackbars_container_offset_bottom': resolveOffset(verticalOffsetBottom),
  };

  return (
    <SnackbarsContainerContext.Provider value={contextValue}>
      <Flex
        className={classNames(styles.host, placementClassNames[placement])}
        style={containerStyles}
      >
        {snackbars.map((snackbarData) => (
          <SnackbarAnimatedWrapper
            key={snackbarData.id}
            snackbarData={snackbarData}
            onClosed={onSnackbarContainerClosed}
            close={snackbarsWrappersToClose.has(snackbarData.id)}
            placement={placement.startsWith('top') ? 'top' : 'bottom'}
          />
        ))}
      </Flex>
    </SnackbarsContainerContext.Provider>
  );
};
