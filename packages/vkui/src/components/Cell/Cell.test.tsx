import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { List } from '../List/List';
import { ListContext } from '../List/ListContext';
import { Cell } from './Cell';

const label = 'Перенести ячейку';
const dragger = () => screen.getByLabelText(label);

describe('Cell', () => {
  baselineComponent((props) => <Cell {...props}>Cell</Cell>);

  describe('Controls dragging', () => {
    it('on mouse up/down', () => {
      const toggleDrag = jest.fn();
      render(
        <ListContext.Provider value={{ toggleDrag }}>
          <Cell draggable draggerLabel={label} />
        </ListContext.Provider>,
      );

      fireEvent.mouseDown(dragger());
      expect(toggleDrag).toHaveBeenLastCalledWith(true);

      fireEvent.mouseUp(dragger());
      expect(toggleDrag).toHaveBeenLastCalledWith(false);
    });

    it('stops drag on unmount', () => {
      const toggleDrag = jest.fn();
      const { rerender } = render(
        <ListContext.Provider value={{ toggleDrag }}>
          <Cell draggable draggerLabel={label} />
        </ListContext.Provider>,
      );

      fireEvent.mouseDown(dragger());
      rerender(<ListContext.Provider value={{ toggleDrag }} />);
      expect(toggleDrag).toHaveBeenLastCalledWith(false);
    });

    it('does not reorder dragged item on click', () => {
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

      userEvent.click(
        screen.getByTestId('list-xyz').querySelector(`[aria-label="${label}"]`) as Element,
      );

      expect(updatedList).toEqual(initialList);
    });
  });
});
