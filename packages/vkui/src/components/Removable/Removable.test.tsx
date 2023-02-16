import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Removable } from './Removable';

describe('Removable', () => {
  baselineComponent(Removable);

  it('[iOS] does not propagate toggle button click', () => {
    const onClick = jest.fn();
    const eventListener = jest.fn();

    window.addEventListener('click', eventListener);

    render(
      <ConfigProvider platform={Platform.IOS}>
        <Removable onClick={onClick}>
          <div data-testid="content">Контент для удаления</div>
        </Removable>
      </ConfigProvider>,
    );

    userEvent.click(screen.getByLabelText('Удалить'));
    expect(eventListener).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('content'));
    expect(eventListener).toHaveBeenCalled();
  });
});
