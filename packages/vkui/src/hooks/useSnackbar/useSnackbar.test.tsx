import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import { waitCSSKeyframesAnimation } from '../../testing/utils';
import { type SnackbarApi } from './types';
import { useSnackbar } from './useSnackbar';

const TestComponent: React.FC<{ apiRef: React.RefObject<SnackbarApi | null> }> = ({ apiRef }) => {
  const [snackbarApi, snackbar] = useSnackbar();

  React.useImperativeHandle(apiRef, () => snackbarApi);

  return <div>{snackbar}</div>;
};

describe('useSnackbar', () => {
  const apiRef: React.RefObject<SnackbarApi | null> = {
    current: null,
  };
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    apiRef.current = null;
  });

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

  it('should open multiple snackbars in different placements', async () => {
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
  });

  it('should close a snackbar when using the API', async () => {
    render(<TestComponent apiRef={apiRef} />);

    let snackbarId: string | null = null;

    act(() => {
      snackbarId = apiRef.current?.open({ children: 'Test Snackbar to close' }) || null;
    });
    expect(screen.queryByText('Test Snackbar to close')).toBeInTheDocument();

    act(() => apiRef.current?.close(snackbarId!));

    await waitCSSKeyframesAnimation(screen.getByRole('alert'), { runOnlyPendingTimers: true });
    expect(screen.queryByText('Test Snackbar to close')).not.toBeInTheDocument();
  });

  it('should close snackbar automatically after duration', async () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
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
  });
});
