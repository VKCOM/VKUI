import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ModalPage } from './ModalPage';

describe('ModalPage', () => {
  baselineComponent((props) => <ModalPage nav="id" {...props} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });

  test('testid for modal page content', () => {
    const { rerender } = render(<ModalPage nav="id" />);

    expect(screen.queryByTestId('modal-page-id')).not.toBeTruthy();
    expect(screen.queryByTestId('modal-content-id')).not.toBeTruthy();

    rerender(
      <ModalPage nav="id" data-testid="modal-page-id" modalContentTestId="modal-content-id" />,
    );

    expect(screen.queryByTestId('modal-page-id')).toBeTruthy();
    expect(screen.queryByTestId('modal-content-id')).toBeTruthy();
  });
});
