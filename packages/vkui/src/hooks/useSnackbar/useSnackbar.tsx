'use client';

import { useEffect } from 'react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { heightPlus, widthPlus } from '../../lib/adaptivity/breakpoints';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect.ts';
import { useMediaQuery } from '../useMediaQuery';
import { SnackbarsContainer } from './SnackbarsContainer';
import {
  type SnackbarApi,
  type SnackbarData,
  type SnackbarPlacement,
  type SnackbarsMap,
  type UseSnackbarParameters,
  type UseSnackbarResult,
} from './types';
/* eslint-disable jsdoc/require-jsdoc */

const DESKTOP_MEDIA_QUERY = `${widthPlus(BREAKPOINTS.SMALL_TABLET)} and (pointer: fine), ${widthPlus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MEDIUM_HEIGHT)}`;

const resolveMobilePlacement = (
  placement: SnackbarPlacement,
): Extract<SnackbarPlacement, 'top' | 'bottom'> => {
  if (placement.startsWith('top')) {
    return 'top';
  }
  return 'bottom';
};

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

const useSnackbarConfig = (params: UseSnackbarParameters = {}) => {
  const {
    maxSnackbarsCount: maxSnackbarsCountProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'queue',
    verticalOffsetTop: verticalOffsetTopProp,
    verticalOffsetBottom: verticalOffsetBottomProp,
  } = params;

  const [maxSnackbarsCount, setMaxSnackbarsCount] = React.useState(maxSnackbarsCountProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [verticalOffsetTop, setVerticalOffsetTop] = React.useState(verticalOffsetTopProp);
  const [verticalOffsetBottom, setVerticalOffsetBottom] = React.useState(verticalOffsetBottomProp);

  useIsomorphicLayoutEffect(
    () => setMaxSnackbarsCount(maxSnackbarsCountProp),
    [maxSnackbarsCountProp],
  );
  useIsomorphicLayoutEffect(() => setQueueStrategy(queueStrategyProp), [queueStrategyProp]);
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetTop(verticalOffsetTopProp),
    [verticalOffsetTopProp],
  );
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetBottom(verticalOffsetBottomProp),
    [verticalOffsetBottomProp],
  );

  return {
    maxSnackbarsCount: [maxSnackbarsCount, setMaxSnackbarsCount] as const,
    queueStrategy: [queueStrategy, setQueueStrategy] as const,
    verticalOffsetTop: [verticalOffsetTop, setVerticalOffsetTop] as const,
    verticalOffsetBottom: [verticalOffsetBottom, setVerticalOffsetBottom] as const,
  };
};

export const useSnackbar = (params: UseSnackbarParameters = {}): UseSnackbarResult => {
  const {
    maxSnackbarsCount: [maxSnackbarsCount, setMaxSnackbarsCount],
    queueStrategy: [queueStrategy, setQueueStrategy],
    verticalOffsetTop: [verticalOffsetTop, setVerticalOffsetTop],
    verticalOffsetBottom: [verticalOffsetBottom, setVerticalOffsetBottom],
  } = useSnackbarConfig(params);

  const [data, setData] = React.useState<{
    snackbars: SnackbarData[];
    snackbarsToClose: Set<string>;
  }>({
    snackbars: [],
    snackbarsToClose: new Set<string>(),
  });
  const snackbarsRef = React.useRef<SnackbarData[]>([]);
  const snackbarsMapRef = React.useRef<SnackbarsMap>({});
  const showedSnackbars = React.useRef<Set<string>>(new Set());

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  useEffect(() => {
    snackbarsRef.current = data.snackbars;
  }, [data.snackbars]);

  const removeSnackbar = React.useCallback((id: string) => {
    setData((data) => ({
      snackbars: data.snackbars.filter((snackbar) => snackbar.id !== id),
      snackbarsToClose: (() => {
        data.snackbarsToClose.delete(id);
        return new Set(data.snackbarsToClose);
      })(),
    }));
    showedSnackbars.current.delete(id);
  }, []);

  const onOpenSnackbar: SnackbarApi['open'] = React.useCallback(
    (config) => {
      const placement: SnackbarPlacement = config.placement || 'bottom-start';
      const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

      const placementSnackbars = snackbarsMapRef.current[resolvedPlacement] || [];

      const withOverflow =
        queueStrategy === 'shift' && placementSnackbars.length >= maxSnackbarsCount;

      const id = config.id || uuidv4();
      setData((oldData) => {
        let snackbarsToClose = oldData.snackbarsToClose;

        if (withOverflow) {
          const snackbarToClose = placementSnackbars.find(
            (snackbar) => !snackbarsToClose.has(snackbar.id),
          );
          snackbarToClose && snackbarsToClose.add(snackbarToClose.id);
        }

        return {
          snackbarsToClose,
          snackbars: [
            ...oldData.snackbars,
            {
              ...config,
              id,
              placement: resolvedPlacement,
              onClose: () => {
                config.onClose?.();
              },
            },
          ],
        };
      });
      return id;
    },
    [isDesktop, maxSnackbarsCount, queueStrategy],
  );

  const onUpdateSnackbar: SnackbarApi['update'] = React.useCallback((id, config) => {
    setData((oldData) => ({
      ...oldData,
      snackbars: oldData.snackbars.map((snackbar) =>
        snackbar.id === id ? { ...snackbar, ...config } : snackbar,
      ),
    }));
  }, []);

  const onCloseSnackbar: SnackbarApi['close'] = React.useCallback(
    (id) => {
      if (showedSnackbars.current.has(id)) {
        setData((oldData) => {
          oldData.snackbarsToClose.add(id);
          return {
            ...oldData,
            snackbarsToClose: new Set(oldData.snackbarsToClose),
          };
        });
      } else {
        removeSnackbar(id);
      }
    },
    [removeSnackbar],
  );

  const onCloseAllSnackbars: SnackbarApi['closeAll'] = React.useCallback(() => {
    setData((oldData) => ({
      snackbars: oldData.snackbars.filter(({ id }) => showedSnackbars.current.has(id)),
      snackbarsToClose: new Set(showedSnackbars.current),
    }));
  }, []);

  const api = React.useMemo<SnackbarApi>(() => {
    return {
      open: onOpenSnackbar,
      update: onUpdateSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
      getSnackbars: () => snackbarsRef.current,
      setMaxSnackbarsCount,
      setQueueStrategy,
      setVerticalOffsetTop,
      setVerticalOffsetBottom,
    };
  }, [
    onCloseAllSnackbars,
    onCloseSnackbar,
    onOpenSnackbar,
    onUpdateSnackbar,
    setMaxSnackbarsCount,
    setQueueStrategy,
    setVerticalOffsetBottom,
    setVerticalOffsetTop,
  ]);

  const onSnackbarShow = React.useCallback((id: string) => {
    showedSnackbars.current.add(id);
  }, []);

  const snackbarsMap: SnackbarsMap = React.useMemo(() => {
    const map: SnackbarsMap = {};
    data.snackbars.forEach((snackbar) => {
      const placement = snackbar.placement;
      const placementSnackbars = map[placement] || [];
      if (
        placementSnackbars.length <
        (queueStrategy === 'shift' ? maxSnackbarsCount + 1 : maxSnackbarsCount)
      ) {
        placementSnackbars.push({
          ...snackbar,
          open: data.snackbarsToClose.has(snackbar.id) ? false : undefined,
        });
      }
      map[placement] = placementSnackbars;
    });
    snackbarsMapRef.current = map;
    return map;
  }, [data.snackbars, data.snackbarsToClose, maxSnackbarsCount, queueStrategy]);

  const holder = React.useMemo(() => {
    if (!Object.keys(snackbarsMap).length) {
      return null;
    }
    return (
      <>
        {Object.entries(snackbarsMap).map(([placement, snackbars]) => (
          <SnackbarsContainer
            key={placement}
            snackbars={snackbars}
            placement={placement as SnackbarPlacement}
            onSnackbarContainerClosed={removeSnackbar}
            onSnackbarShow={onSnackbarShow}
            verticalOffsetTop={verticalOffsetTop}
            verticalOffsetBottom={verticalOffsetBottom}
          />
        ))}
      </>
    );
  }, [onSnackbarShow, removeSnackbar, snackbarsMap, verticalOffsetBottom, verticalOffsetTop]);

  return [api, holder];
};
