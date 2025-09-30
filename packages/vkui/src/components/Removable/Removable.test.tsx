import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Removable } from './Removable';
import styles from './Removable.module.css';

describe('Removable', () => {
  baselineComponent(Removable);

  it('[iOS] does not propagate toggle button click', async () => {
    vi.useFakeTimers();
    const onClick = vi.fn();
    const eventListener = vi.fn();

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
    vi.useRealTimers();
  });

  it('[iOS] render prop isRemoving is true when toggle button is clicked ', async () => {
    vi.useFakeTimers();
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
    vi.useRealTimers();
  });

  it('should not render remove button when indent mode', () => {
    const { container } = render(
      <Removable indent removeButtonTestId="removeButtonTestId">
        <div>Контент для удаления</div>
      </Removable>,
    );
    expect(screen.queryByTestId('removeButtonTestId')).toBeNull();
    expect(container.getElementsByClassName(styles.indentation)).toHaveLength(1);
  });

  it('[IOS] should not render remove button when indent mode', () => {
    const { container } = render(
      <ConfigProvider platform="ios">
        <Removable
          indent
          removeButtonTestId="removeButtonTestId"
          toggleButtonTestId="toggleButtonTestId"
        >
          <div>Контент для удаления</div>
        </Removable>
      </ConfigProvider>,
    );
    expect(screen.queryByTestId('removeButtonTestId')).toBeNull();
    expect(screen.queryByTestId('toggleButtonTestId')).toBeNull();
    expect(container.getElementsByClassName(styles.indentation)).toHaveLength(1);
  });
});
