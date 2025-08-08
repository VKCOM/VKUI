import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import { type SnackbarApi } from '../../hooks/useSnackbar/types';
import { waitCSSKeyframesAnimation } from '../../testing/utils';
import { SnackbarsController, useSnackbarApi } from './SnackbarContext';

const TestComponent: React.FC<{ apiRef: React.RefObject<SnackbarApi | null> }> = ({ apiRef }) => {
  const snackbarApi = useSnackbarApi();

  React.useImperativeHandle(apiRef, () => snackbarApi);

  return <div>{snackbarApi ? 'Snackbar API available' : 'No API'}</div>;
};

describe('SnackbarContext', () => {
  const apiRef: React.RefObject<SnackbarApi | null> = {
    current: null,
  };

  afterEach(() => {
    apiRef.current = null;
  });

  it('should provide Snackbar API to children', () => {
    render(
      <SnackbarsController>
        <TestComponent apiRef={apiRef} />
      </SnackbarsController>,
    );

    expect(screen.getByText('Snackbar API available')).toBeInTheDocument();
  });

  it('should open a snackbar when using the API', async () => {
    render(
      <SnackbarsController>
        <TestComponent apiRef={apiRef} />
      </SnackbarsController>,
    );

    await act(() => apiRef.current?.open({ children: 'Test Snackbar from Context' }));

    expect(screen.getByText('Test Snackbar from Context')).toBeInTheDocument();
  });

  it('should close a snackbar when using the API', async () => {
    render(
      <SnackbarsController>
        <TestComponent apiRef={apiRef} />
      </SnackbarsController>,
    );
    let snackbarId: string | null = null;

    act(() => {
      snackbarId = apiRef.current?.open({ children: 'Test Snackbar to close' }) || null;
    });
    expect(screen.getByText('Test Snackbar to close')).toBeInTheDocument();

    act(() => apiRef.current?.close(snackbarId!));
    await waitCSSKeyframesAnimation(screen.getByRole('alert'), { runOnlyPendingTimers: true });

    expect(screen.queryByText('Test Snackbar to close')).not.toBeInTheDocument();
  });
});
