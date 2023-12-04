import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Removable } from './Removable';

describe('Removable', () => {
  baselineComponent(Removable);

  it('[iOS] does not propagate toggle button click', async () => {
    const onClick = jest.fn();
    const eventListener = jest.fn();

    window.addEventListener('click', eventListener);

    render(
      <ConfigProvider platform="ios">
        <Removable
          onClick={onClick}
          toggleButtonTestId="toggleButtonTestId"
          removeButtonTestId="removeButtonTestId"
        >
          <div data-testid="content">Контент для удаления</div>
        </Removable>
      </ConfigProvider>,
    );

    await userEvent.click(screen.getByTestId('toggleButtonTestId'));
    expect(eventListener).not.toHaveBeenCalled();

    await userEvent.click(screen.getByTestId('content'));
    expect(eventListener).toHaveBeenCalled();
  });

  it('[iOS] render prop isRemoving is true when toggle button is clicked ', async () => {
    render(
      <ConfigProvider platform="ios">
        <Removable toggleButtonTestId="toggleButtonTestId" removeButtonTestId="removeButtonTestId">
          {({ isRemoving }) => (
            <div data-testid="content">Контент для удаления {isRemoving && 'сдвинут'}</div>
          )}
        </Removable>
      </ConfigProvider>,
    );

    const removeActionButton = screen.getAllByRole('button')[1];
    if (!removeActionButton) {
      throw new Error('Cannot find actionable remove button');
    }
    // set width of the removeButton which is used in the Removable state to
    // move content.
    Object.defineProperty(removeActionButton, 'offsetWidth', { value: 12 });

    expect(screen.queryByText(/сдвинут/)).toBeFalsy();

    await userEvent.click(screen.getByTestId('toggleButtonTestId'));

    await screen.findByText(/сдвинут/);

    await userEvent.click(screen.getByTestId('content'));
    expect(screen.queryByText(/сдвинут/)).toBeFalsy();
  });
});
