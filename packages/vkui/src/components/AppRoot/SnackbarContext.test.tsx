import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { type SnackbarApi } from '../../hooks/useSnackbar';
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
});
