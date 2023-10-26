import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ModalCard } from './ModalCard';

describe('ModalCard', () => {
  baselineComponent((p) => <ModalCard nav="id" {...p} />);

  test('testid for modal card content', () => {
    const { rerender } = render(<ModalCard nav="id" />);

    expect(screen.queryByTestId('modal-page-id')).not.toBeTruthy();
    expect(screen.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    rerender(
      <ModalCard
        nav="id"
        data-testid="modal-page-id"
        modalDismissButtonTestId="modal-dismiss-button"
      />,
    );

    expect(screen.queryByTestId('modal-page-id')).toBeTruthy();
    expect(screen.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    rerender(
      <ConfigProvider platform="vkcom">
        <ModalCard nav="id" modalDismissButtonTestId="modal-dismiss-button" />
      </ConfigProvider>,
    );

    expect(screen.queryByTestId('modal-dismiss-button')).toBeTruthy();
  });
});
