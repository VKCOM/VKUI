'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { heightPlus, widthPlus } from '../../lib/adaptivity/breakpoints';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useMediaQuery } from '../useMediaQuery';
import { SnackbarsContainer } from './SnackbarsContainer';
import {
  type CommonOnOpenPayload,
  type SnackbarApi,
  type SnackbarItem,
  type SnackbarPlacement,
  type SnackbarsMap,
  type UseSnackbar,
} from './types';

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

const useSnackbarConfig = (params: UseSnackbar.Parameters = {}) => {
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

export const useSnackbar = (params: UseSnackbar.Parameters = {}): UseSnackbar.Return => {
  const {
    maxSnackbarsCount: [maxSnackbarsCount, setMaxSnackbarsCount],
    queueStrategy: [queueStrategy, setQueueStrategy],
    verticalOffsetTop: [verticalOffsetTop, setVerticalOffsetTop],
    verticalOffsetBottom: [verticalOffsetBottom, setVerticalOffsetBottom],
  } = useSnackbarConfig(params);

  const [data, setData] = React.useState<{
    snackbars: SnackbarItem[];
    snackbarsToClose: Set<string>;
  }>({
    snackbars: [],
    snackbarsToClose: new Set<string>(),
  });
  const snackbarsMapRef = React.useRef<SnackbarsMap>({});
  const showedSnackbars = React.useRef<Set<string>>(new Set());

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

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

  const onUpdateSnackbar: SnackbarApi.Api['update'] = React.useCallback((id, config) => {
    setData((oldData) => ({
      ...oldData,
      snackbars: oldData.snackbars.map((snackbar) =>
        snackbar.id === id
          ? { ...snackbar, snackbarProps: { ...snackbar.snackbarProps, ...config } }
          : snackbar,
      ),
    }));
  }, []);

  const onCloseSnackbar: SnackbarApi.Api['close'] = React.useCallback(
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

  const onOpenSnackbarImpl: (item: CommonOnOpenPayload) => SnackbarApi.OpenSnackbarReturn =
    React.useCallback(
      (item) => {
        const placement: SnackbarPlacement = item.snackbarProps?.placement || 'bottom-start';
        const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

        const placementSnackbars = snackbarsMapRef.current[resolvedPlacement] || [];

        const withOverflow =
          queueStrategy === 'shift' && placementSnackbars.length >= maxSnackbarsCount;

        let resolvePromise: () => void;
        const promise = new Promise<void>((resolve) => {
          resolvePromise = resolve;
        });

        const id = item.id || uuidv4();
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
                ...item,
                id,
                snackbarProps: {
                  ...item.snackbarProps,
                  id,
                  placement: resolvedPlacement,
                  onClose: () => {
                    resolvePromise();
                    item.snackbarProps?.onClose?.();
                  },
                },
              },
            ],
          };
        });
        return {
          id,
          close: () => onCloseSnackbar(id),
          update: (newProps) => onUpdateSnackbar(id, newProps),
          onClose: <R,>(resolve?: () => R) => {
            return promise.then(resolve);
          },
        };
      },
      [isDesktop, maxSnackbarsCount, onCloseSnackbar, onUpdateSnackbar, queueStrategy],
    );

  const onCloseAllSnackbars: SnackbarApi.Api['closeAll'] = React.useCallback(() => {
    setData((oldData) => ({
      snackbars: oldData.snackbars.filter(({ id }) => showedSnackbars.current.has(id)),
      snackbarsToClose: new Set(showedSnackbars.current),
    }));
  }, []);

  const onOpenSnackbar: SnackbarApi.Api['open'] = React.useCallback(
    (config) => {
      return onOpenSnackbarImpl({
        type: 'simple',
        id: config.id,
        snackbarProps: config,
      });
    },
    [onOpenSnackbarImpl],
  );

  const onOpenCustomSnackbar: SnackbarApi.Api['openCustom'] = React.useCallback(
    (config) => {
      if ('component' in config) {
        const result = onOpenSnackbarImpl({
          type: 'custom',
          id: config.id,
          component: config.component,
          snackbarProps: config.baseProps,
          additionalProps: config.additionalProps,
          close: () => result.close(),
          update: (newProps) => result.update(newProps),
        });
        return result;
      } else {
        const result = onOpenSnackbarImpl({
          type: 'custom',
          component: config,
          close: () => result.close(),
          update: (newProps) => result.update(newProps),
        });
        return result;
      }
    },
    [onOpenSnackbarImpl],
  );

  const api = React.useMemo<SnackbarApi.Api>(() => {
    return {
      open: onOpenSnackbar,
      openCustom: onOpenCustomSnackbar,
      update: onUpdateSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
      setMaxSnackbarsCount,
      setQueueStrategy,
      setVerticalOffsetTop,
      setVerticalOffsetBottom,
    };
  }, [
    onCloseAllSnackbars,
    onCloseSnackbar,
    onOpenCustomSnackbar,
    onOpenSnackbar,
    onUpdateSnackbar,
    setMaxSnackbarsCount,
    setQueueStrategy,
    setVerticalOffsetBottom,
    setVerticalOffsetTop,
  ]);

  const onSnackbarOpen = React.useCallback((id: string) => {
    showedSnackbars.current.add(id);
  }, []);

  const snackbarsMap: SnackbarsMap = React.useMemo(() => {
    const map: SnackbarsMap = {};
    data.snackbars.forEach((snackbar) => {
      const placement = snackbar.snackbarProps.placement;
      const placementSnackbars = map[placement] || [];

      const notCloseSnackbars = placementSnackbars.filter(
        (snackbar) => !data.snackbarsToClose.has(snackbar.id),
      );

      if (notCloseSnackbars.length < maxSnackbarsCount) {
        placementSnackbars.push({
          ...snackbar,
          snackbarProps: {
            ...snackbar.snackbarProps,
            open: data.snackbarsToClose.has(snackbar.id) ? false : undefined,
          },
        });
      }
      map[placement] = placementSnackbars;
    });
    snackbarsMapRef.current = map;
    return map;
  }, [data.snackbars, data.snackbarsToClose, maxSnackbarsCount]);

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
            onSnackbarOpen={onSnackbarOpen}
            verticalOffsetTop={verticalOffsetTop}
            verticalOffsetBottom={verticalOffsetBottom}
          />
        ))}
      </>
    );
  }, [onSnackbarOpen, removeSnackbar, snackbarsMap, verticalOffsetBottom, verticalOffsetTop]);

  return [api, holder];
};
