'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Flex } from '../../../components/Flex/Flex';
import { type SnackbarPlacement } from '../../../components/Snackbar/types';
import { type CSSCustomProperties } from '../../../types';
import { type SnackbarApi, type SnackbarItem, type UseSnackbar } from '../types';
import { SnackbarAnimatedWrapper } from './SnackbarAnimatedWrapper';
import {
  SnackbarsContainerContext,
  type SnackbarsContainerContextData,
} from './SnackbarsContainerContext';
import styles from './SnackbarsContainer.module.css';
/* eslint-disable jsdoc/require-jsdoc */

interface SnackbarsContainerProps
  extends Pick<UseSnackbar.Parameters, 'verticalOffsetYStart' | 'verticalOffsetYEnd'> {
  snackbars: SnackbarItem[];
  placement: SnackbarPlacement;
  onSnackbarOpen: (id: string) => void;
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

const resolveOffset = (offset: SnackbarApi.VerticalOffset | undefined): string => {
  if (typeof offset === 'undefined') {
    return '';
  }
  return typeof offset === 'number' ? `${offset}px` : offset;
};

export const SnackbarsContainer: React.FC<SnackbarsContainerProps> = ({
  snackbars,
  placement,
  onSnackbarOpen,
  onSnackbarContainerClosed: onSnackbarContainerClosedProp,
  verticalOffsetYStart,
  verticalOffsetYEnd,
}) => {
  const [snackbarsWrappersToClose, setSnackbarsWrappersToClose] = React.useState<Set<string>>(
    new Set(),
  );
  const onClosed = React.useCallback((id: string) => {
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
      isInsideContainer: true,
      onClosed,
      onOpen: onSnackbarOpen,
    }),
    [onClosed, onSnackbarOpen],
  );

  const containerStyles: CSSCustomProperties = {
    '--vkui_internal--snackbars_container_offset_y_start': resolveOffset(verticalOffsetYStart),
    '--vkui_internal--snackbars_container_offset_y_end': resolveOffset(verticalOffsetYEnd),
  };

  return (
    <SnackbarsContainerContext.Provider value={contextValue}>
      <Flex
        className={classNames(styles.host, placementClassNames[placement])}
        style={containerStyles}
      >
        {snackbars.map((snackbar) => (
          <SnackbarAnimatedWrapper
            key={snackbar.id}
            snackbarItem={snackbar}
            onClosed={onSnackbarContainerClosed}
            close={snackbarsWrappersToClose.has(snackbar.id)}
            placement={placement.startsWith('top') ? 'top' : 'bottom'}
          />
        ))}
      </Flex>
    </SnackbarsContainerContext.Provider>
  );
};
