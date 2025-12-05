import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { type SnackbarApi } from '../../hooks/useSnackbar';
import { SnackbarsManagerProvider, useSnackbarApi } from './SnackbarsManagerProvider';

const TestComponent: React.FC<{ apiRef: React.RefObject<SnackbarApi.Api | null> }> = ({
  apiRef,
}) => {
  const snackbarApi = useSnackbarApi();

  React.useImperativeHandle(apiRef, () => snackbarApi);

  return <div>{snackbarApi ? 'Snackbar API available' : 'No API'}</div>;
};

describe('SnackbarContext', () => {
  const apiRef: React.RefObject<SnackbarApi.Api | null> = {
    current: null,
  };

  afterEach(() => {
    apiRef.current = null;
  });

  it('should provide Snackbar API to children', () => {
    render(
      <SnackbarsManagerProvider>
        <TestComponent apiRef={apiRef} />
      </SnackbarsManagerProvider>,
    );

    expect(screen.getByText('Snackbar API available')).toBeInTheDocument();
  });
});
