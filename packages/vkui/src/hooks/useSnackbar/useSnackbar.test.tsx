import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../../components/Button/Button';
import { Flex } from '../../components/Flex/Flex';
import { Snackbar } from '../../components/Snackbar/Snackbar';
import { waitCSSKeyframesAnimation, withFakeTimers } from '../../testing/utils';
import {
  type CustomSnackbarProps,
  type OpenSnackbarReturn,
  type SnackbarApi,
  type UseSnackbarParameters,
} from './types';
import { useSnackbar } from './useSnackbar';

const TestComponent: React.FC<
  UseSnackbarParameters & {
    apiRef: React.RefObject<SnackbarApi | null>;
  }
> = ({ apiRef, maxSnackbarsCount, queueStrategy }) => {
  const [snackbarApi, snackbar] = useSnackbar({ maxSnackbarsCount, queueStrategy });

  React.useImperativeHandle(apiRef, () => snackbarApi);

  return <div>{snackbar}</div>;
};

describe('useSnackbar', () => {
  const apiRef: React.RefObject<SnackbarApi | null> = {
    current: null,
  };

  it('should open a snackbar when the button is clicked', async () => {
    render(<TestComponent apiRef={apiRef} />);

    await act(() => apiRef.current?.open({ children: 'Test Snackbar' }));

    expect(screen.queryByText('Test Snackbar')).toBeInTheDocument();
  });

  it('try to open two snackbars in same placement', async () => {
    render(<TestComponent apiRef={apiRef} />);

    await act(() => apiRef.current?.open({ children: 'Test Snackbar 1' }));
    await act(() => apiRef.current?.open({ children: 'Test Snackbar 2' }));

    expect(screen.queryByText('Test Snackbar 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Snackbar 2')).toBeInTheDocument();
  });

  it(
    'should open multiple snackbars in different placements',
    withFakeTimers(async () => {
      render(<TestComponent apiRef={apiRef} />);

      act(() => {
        apiRef.current?.open({ children: 'Test Snackbar 1', placement: 'top-start' });
      });
      act(() => {
        apiRef.current?.open({ children: 'Test Snackbar 2', placement: 'bottom-end' });
      });

      expect(screen.queryByText('Test Snackbar 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Snackbar 2')).toBeInTheDocument();

      act(() => {
        apiRef.current?.closeAll();
      });

      await Promise.all([
        screen
          .getAllByRole('alert')
          .map((alert) => waitCSSKeyframesAnimation(alert, { runOnlyPendingTimers: true })),
      ]);

      expect(screen.queryByText('Test Snackbar 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Test Snackbar 2')).not.toBeInTheDocument();
    }),
  );

  it(
    'should close a snackbar when using the API',
    withFakeTimers(async () => {
      render(<TestComponent apiRef={apiRef} />);

      let snackbarId: string | null = null;

      act(() => {
        const { id } = apiRef.current!.open({
          'children': 'Test Snackbar to close',
          'data-testid': 'snackbar',
        });
        snackbarId = id;
      });
      expect(screen.queryByTestId('snackbar')).toBeInTheDocument();

      act(() => apiRef.current?.close(snackbarId!));

      const snackbar = screen.getByRole('alert');
      const snackbarWrapper = snackbar.parentElement!.parentElement!;
      await waitCSSKeyframesAnimation(snackbar, { runOnlyPendingTimers: true });
      expect(snackbar).not.toBeInTheDocument();
      expect(snackbarWrapper).toBeInTheDocument();

      await waitCSSKeyframesAnimation(snackbarWrapper, { runOnlyPendingTimers: true });
      expect(snackbar).not.toBeInTheDocument();
      expect(snackbarWrapper).not.toBeInTheDocument();
    }),
  );

  it(
    'should close snackbar automatically after duration',
    withFakeTimers(async () => {
      const onClose = vi.fn();
      render(<TestComponent apiRef={apiRef} />);

      await act(() =>
        apiRef.current?.open({
          children: 'Auto Close Snackbar',
          duration: 1000,
          onClose,
        }),
      );

      expect(screen.queryByText('Auto Close Snackbar')).toBeInTheDocument();
      await waitCSSKeyframesAnimation(screen.getByRole('alert'), { runOnlyPendingTimers: true });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Auto Close Snackbar')).not.toBeInTheDocument();
    }),
  );

  it('should update children after show snackbar', async () => {
    render(<TestComponent apiRef={apiRef} />);

    let snackbarId: string | null = null;

    act(() => {
      const { id } = apiRef.current!.open({
        'children': 'Test Snackbar to close',
        'data-testid': 'snackbar',
      });
      snackbarId = id;
    });
    expect(screen.queryByText('Test Snackbar to close')).toBeInTheDocument();

    act(() => {
      apiRef.current?.update(snackbarId!, { children: 'Updated test Snackbar to close' });
    });

    expect(screen.queryByText('Test Snackbar to close')).not.toBeInTheDocument();
    expect(screen.queryByText('Updated test Snackbar to close')).toBeInTheDocument();
  });

  it(
    'check working with return data',
    withFakeTimers(async () => {
      render(<TestComponent apiRef={apiRef} />);

      let snackbarApi: OpenSnackbarReturn | null = null;

      act(() => {
        snackbarApi = apiRef.current!.open({
          'children': 'Test Snackbar to close',
          'data-testid': 'snackbar',
        });
      });
      expect(screen.queryByText('Test Snackbar to close')).toBeInTheDocument();

      act(() => {
        snackbarApi?.update({ children: 'Updated test Snackbar to close' });
      });

      expect(screen.queryByText('Test Snackbar to close')).not.toBeInTheDocument();
      expect(screen.queryByText('Updated test Snackbar to close')).toBeInTheDocument();

      let closePromiseResolved = false;
      void snackbarApi!.onClose().then(() => {
        closePromiseResolved = true;
      });

      React.act(() => snackbarApi!.close());

      await waitCSSKeyframesAnimation(screen.getByRole('alert'), { runOnlyPendingTimers: true });
      expect(closePromiseResolved).toBeTruthy();
    }),
  );

  it('check maxSnackbarsCount with queueStrategy="queue"', async () => {
    render(<TestComponent apiRef={apiRef} maxSnackbarsCount={1} />);

    let snackbar2: string | null = null;
    act(() => {
      apiRef.current?.open({ children: 'Test Snackbar 1', placement: 'top-start' });
    });
    act(() => {
      const { id } = apiRef.current!.open({ children: 'Test Snackbar 2', placement: 'top-start' });
      snackbar2 = id;
    });

    expect(screen.queryByText('Test Snackbar 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Snackbar 2')).not.toBeInTheDocument();

    act(() => {
      apiRef.current?.close(snackbar2!);
    });

    expect(screen.queryByText('Test Snackbar 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Snackbar 2')).not.toBeInTheDocument();
  });

  it(
    'check maxSnackbarsCount with queueStrategy="shift"',
    withFakeTimers(async () => {
      render(<TestComponent apiRef={apiRef} queueStrategy="shift" maxSnackbarsCount={1} />);

      act(() => {
        apiRef.current?.open({
          'children': 'Test Snackbar 1',
          'data-testid': 'snackbar-1',
          'placement': 'top-start',
        });
      });
      act(() => {
        apiRef.current?.open({
          'children': 'Test Snackbar 2',
          'data-testid': 'snackbar-2',
          'placement': 'top-start',
        });
      });

      expect(screen.queryByText('Test Snackbar 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Snackbar 2')).toBeInTheDocument();

      const snackbar = screen.getByTestId('snackbar-1').firstElementChild as HTMLElement;
      const snackbarWrapper = snackbar.parentElement!.parentElement!;

      await waitCSSKeyframesAnimation(snackbar, { runOnlyPendingTimers: true });
      await waitCSSKeyframesAnimation(snackbarWrapper, { runOnlyPendingTimers: true });
    }),
  );

  it(
    'should open custom modal',
    withFakeTimers(async () => {
      const additionalAction = vi.fn();
      render(<TestComponent apiRef={apiRef} />);

      const SnackbarComponent = ({
        additionalAction,
        snackbarProps,
        update,
        close,
      }: CustomSnackbarProps<{ additionalAction: VoidFunction }>) => {
        return (
          <Snackbar data-testid="snackbar" action="Поделиться" {...snackbarProps}>
            Test Snackbar
            <Flex>
              <Button data-testid="update" onClick={() => update({ action: 'Измененный' })}>
                Update
              </Button>
              <Button data-testid="close" onClick={() => close()}>
                Close
              </Button>
              <Button data-testid="action" onClick={() => additionalAction()}>
                Action
              </Button>
            </Flex>
          </Snackbar>
        );
      };

      act(() => {
        apiRef.current?.openCustom({
          component: SnackbarComponent,
          additionalProps: {
            additionalAction,
          },
        });
      });

      expect(screen.queryByText('Test Snackbar')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('action'));
      expect(additionalAction).toHaveBeenCalled();

      expect(screen.queryByText('Поделиться')).toBeInTheDocument();
      act(() => {
        fireEvent.click(screen.getByTestId('update'));
      });
      expect(screen.queryByText('Измененный')).toBeInTheDocument();

      act(() => {
        fireEvent.click(screen.getByTestId('close'));
      });
      const snackbar = screen.getByRole('alert');
      await waitCSSKeyframesAnimation(snackbar, { runOnlyPendingTimers: true });
      expect(snackbar).not.toBeInTheDocument();
    }),
  );

  it('should open custom modal without props', async () => {
    render(<TestComponent apiRef={apiRef} />);

    const SnackbarComponent = ({ snackbarProps }: CustomSnackbarProps) => {
      return (
        <Snackbar data-testid="snackbar" action="Поделиться" {...snackbarProps}>
          Test Snackbar
        </Snackbar>
      );
    };

    act(() => {
      apiRef.current?.openCustom(SnackbarComponent);
    });

    expect(screen.queryByText('Test Snackbar')).toBeInTheDocument();
  });
});
