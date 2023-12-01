import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ModalCard } from './ModalCard';

describe('ModalCard', () => {
  baselineComponent((p) => <ModalCard nav="id" {...p} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });

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

  test('can specify tags for header and subheader', () => {
    const { rerender } = render(
      <ModalCard header="Баскетбол на выходных" subheader="Приглашение в беседу" />,
    );

    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('span');

    rerender(
      <ModalCard
        header="Баскетбол на выходных"
        headerComponent="h2"
        subheader="Приглашение в беседу"
        subheaderComponent="h3"
      />,
    );

    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('h3');
  });
});
