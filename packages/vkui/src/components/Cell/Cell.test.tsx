import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { List } from '../List/List';
import { Cell } from './Cell';

const label = 'Перенести ячейку';

describe('Cell', () => {
  baselineComponent((props) => <Cell {...props}>Cell</Cell>);

  describe('Controls dragging', () => {
    it('does not reorder dragged item on click', async () => {
      const initialList = ['eugpoloz', 'arthurstam', 'xyz'];
      let updatedList = [...initialList];

      render(
        <List>
          {updatedList.map((item) => (
            <Cell
              key={item}
              data-testid={'list-' + item}
              draggable
              onDragFinish={({ from, to }) => {
                let list = [...updatedList];
                list.splice(from, 1);
                list.splice(to, 0, updatedList[from]);
                updatedList = [...list];
              }}
              draggerLabel={label}
            >
              {item}
            </Cell>
          ))}
        </List>,
      );

      await userEvent.click(
        screen.getByTestId('list-xyz').querySelector(`[aria-label="${label}"]`) as Element,
      );

      expect(updatedList).toEqual(initialList);
    });
  });

  describe("mode='removable'", () => {
    test('handles click', () => {
      const removeStub = jest.fn();
      const clickStub = jest.fn();

      const { rerender } = render(
        <Cell
          mode="removable"
          onRemove={removeStub}
          onClick={clickStub}
          removeButtonTestId="removeButtonTestId"
        >
          Саша Колобов
        </Cell>,
      );

      expect(screen.getByRole('button', { name: /Саша Колобов/ })).not.toHaveAttribute(
        'aria-disabled',
        'true',
      );

      fireEvent.click(screen.getByTestId('removeButtonTestId'));
      expect(removeStub).toHaveBeenCalledTimes(1);
      expect(clickStub).not.toHaveBeenCalled();

      removeStub.mockClear();
      clickStub.mockClear();
      fireEvent.click(screen.getByText('Саша Колобов'));

      expect(removeStub).toHaveBeenCalledTimes(0);
      expect(clickStub).toHaveBeenCalledTimes(1);

      // cell should be div in removable state without onClick handler
      rerender(
        <Cell data-testid="test" mode="removable" onRemove={removeStub}>
          Саша Колобов
        </Cell>,
      );
      const el = screen.getByTestId('test');

      expect(el.tagName.toLowerCase()).toBe('div');
      expect(el.role).toBeUndefined();
      expect(el.getAttribute('disabled')).toBeNull();
      expect(el.getAttribute('aria-disabled')).toBeNull();
    });

    test('[iOS] handles click and ignores onClick in removing state', async () => {
      const removeStub = jest.fn();
      const clickStub = jest.fn();

      render(
        <ConfigProvider platform="ios">
          <Cell
            mode="removable"
            onRemove={removeStub}
            onClick={clickStub}
            toggleButtonTestId="toggleButtonTestId"
          >
            Саша Колобов
          </Cell>
        </ConfigProvider>,
      );

      // specify offset to move Cell content on remove toggle click
      // required by Removable in iOS mode to detect removing state
      const removeActionButton = screen.getAllByRole('button')[2];
      if (!removeActionButton) {
        throw new Error('Cannot find actionable remove button');
      }
      Object.defineProperty(removeActionButton, 'offsetWidth', { value: 12 });

      // transition to removing state
      fireEvent.click(screen.getByTestId('toggleButtonTestId'));
      expect(removeStub).not.toHaveBeenCalled();
      expect(clickStub).not.toHaveBeenCalled();

      // click at content resets removing state
      // and doesn't allow to handle onClick
      fireEvent.click(screen.getByText('Саша Колобов'));

      expect(removeStub).not.toHaveBeenCalled();
      expect(clickStub).not.toHaveBeenCalled();

      // click at content is handled
      fireEvent.click(screen.getByText('Саша Колобов'));
      expect(removeStub).toHaveBeenCalledTimes(0);
      expect(clickStub).toHaveBeenCalledTimes(1);
    });
  });
});
