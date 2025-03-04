import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Snackbar, type SnackbarProps } from './Snackbar';
import { type SnackbarPlacement } from './types';

type SnackbarConfig = Omit<SnackbarProps, 'onClose'> & Partial<Pick<SnackbarProps, 'onClose'>>;

export interface SnackbarApi {
  open: (config: SnackbarConfig) => string;
  close: (id: string) => void;
  closeAll: () => void;
}

type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

type SnackbarData = { props: SnackbarProps; id: string };

type SnackbarsMap = Record<string, SnackbarData | null>;

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

  const api = React.useMemo<SnackbarApi>(() => {
    const removeSnackbar = (id: string) => {
      setSnackbars((oldSnackbars) => {
        const newSnackbars: SnackbarsMap = {};
        Object.entries(oldSnackbars).forEach(([placement, data]) => {
          if (data && data.id !== id) {
            newSnackbars[placement] = data;
          }
        });
        return newSnackbars;
      });
    };

    return {
      open: (config) => {
        const placement: SnackbarPlacement = config.placement || 'bottom-start';
        const id = uuidv4();
        setSnackbars((oldSnackbars) => ({
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
        }));
        return id;
      },
      close: removeSnackbar,
      closeAll: () => setSnackbars({}),
    };
  }, []);

  const snackbarsList = Object.values(snackbars).filter(Boolean) as SnackbarData[];

  return [
    api,
    snackbarsList.length ? (
      <SnackbarHolder key="snackbar-holder" snackbars={snackbarsList} />
    ) : null,
  ];
};
