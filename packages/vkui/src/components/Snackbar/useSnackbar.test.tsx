import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import { type SnackbarApi, useSnackbar } from './useSnackbar';

const TestComponent: React.FC<{ apiRef: React.RefObject<SnackbarApi | null> }> = ({ apiRef }) => {
  const [snackbarApi, snackbar] = useSnackbar();

  React.useImperativeHandle(apiRef, () => snackbarApi);

  return <div>{snackbar}</div>;
};

describe('useSnackbar', () => {
  const apiRef: React.RefObject<SnackbarApi | null> = {
    current: null,
  };

  afterEach(() => {
    apiRef.current = null;
  });

  it('should open a snackbar when the button is clicked', async () => {
    render(<TestComponent apiRef={apiRef} />);

    await act(() => apiRef.current?.open({ children: 'Test Snackbar' }));

    expect(screen.getByText('Test Snackbar')).toBeInTheDocument();
  });

  it('try to open two snackbars in same placement', async () => {
    render(<TestComponent apiRef={apiRef} />);

    await act(() => apiRef.current?.open({ children: 'Test Snackbar 1' }));
    await act(() => apiRef.current?.open({ children: 'Test Snackbar 2' }));

    expect(screen.queryByText('Test Snackbar 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Snackbar 2')).toBeInTheDocument();
  });

  it('should open multiple snackbars in different placements', async () => {
    render(<TestComponent apiRef={apiRef} />);

    await act(async () =>
      apiRef.current?.open({ children: 'Test Snackbar 1', placement: 'top-start' }),
    );
    await act(async () =>
      apiRef.current?.open({ children: 'Test Snackbar 2', placement: 'bottom-end' }),
    );

    expect(screen.getByText('Test Snackbar 1')).toBeInTheDocument();
    expect(screen.getByText('Test Snackbar 2')).toBeInTheDocument();
  });
});
