import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type PartialFields } from '../../types';
import { Snackbar, type SnackbarProps } from './Snackbar';
import { type SnackbarPlacement } from './types';

type SnackbarConfig = PartialFields<SnackbarProps, 'onClose'>;

export interface SnackbarApi {
  open: (config: SnackbarConfig) => string;
  close: (id: string) => void;
  closeAll: () => void;
}

type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

type SnackbarData = { props: SnackbarProps; id: string };

type SnackbarsMap = Record<string, SnackbarData>;

const SnackbarHolder: React.FC<{
  snackbars: SnackbarData[];
}> = ({ snackbars }) => {
  return (
    <>
      {snackbars.map((snackbarData) => (
        <Snackbar key={snackbarData.id} {...snackbarData.props} />
      ))}
    </>
  );
};

export const useSnackbar = (): UseSnackbarResult => {
  const [snackbars, setSnackbars] = React.useState<SnackbarsMap>({});
  const [snackbarsToClose, setSnackbarsToClose] = React.useState(new Set<string>());
  const snackbarsRef = React.useRef<SnackbarsMap>({});

  const removeSnackbar = (id: string) => {
    setSnackbars((oldSnackbars) => {
      const newSnackbars: SnackbarsMap = {};
      Object.entries(oldSnackbars).forEach(([placement, data]) => {
        if (data && data.id !== id) {
          newSnackbars[placement] = data;
        }
      });
      snackbarsRef.current = newSnackbars;
      return newSnackbars;
    });
    setSnackbarsToClose((oldSnackbars) => {
      oldSnackbars.delete(id);
      return new Set(oldSnackbars);
    });
  };

  const onOpenSnackbar: SnackbarApi['open'] = React.useCallback((config) => {
    const placement: SnackbarPlacement = config.placement || 'bottom-start';
    const id = uuidv4();
    setSnackbars((oldSnackbars) => {
      const newSnackbars = {
        ...oldSnackbars,
        [placement]: {
          id,
          props: {
            ...config,
            placement,
            onClose: () => {
              removeSnackbar(id);
              config.onClose?.();
            },
          },
        },
      };
      snackbarsRef.current = newSnackbars;
      return newSnackbars;
    });
    return id;
  }, []);

  const onCloseSnackbar = React.useCallback((id: string) => {
    setSnackbarsToClose((oldSnackbars) => {
      oldSnackbars.add(id);
      return new Set(oldSnackbars);
    });
  }, []);

  const onCloseAllSnackbars = React.useCallback(() => {
    const snackbarsIds = Object.values(snackbarsRef.current).map(({ id }) => id);
    if (snackbarsIds.length) {
      setSnackbarsToClose(new Set(snackbarsIds));
    }
  }, []);

  const api = React.useMemo<SnackbarApi>(() => {
    return {
      open: onOpenSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
    };
  }, [onCloseAllSnackbars, onCloseSnackbar, onOpenSnackbar]);

  const snackbarsList = React.useMemo<SnackbarData[]>(
    () =>
      Object.values(snackbars).map((snackbar) => ({
        id: snackbar.id,
        props: {
          ...snackbar.props,
          open: snackbarsToClose.has(snackbar.id) ? false : undefined,
        },
      })),
    [snackbars, snackbarsToClose],
  );

  return [
    api,
    snackbarsList.length ? (
      <SnackbarHolder key="snackbar-holder" snackbars={snackbarsList} />
    ) : null,
  ];
};
