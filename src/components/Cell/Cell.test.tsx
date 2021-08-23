import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Cell } from './Cell';
import { ListContext } from '../List/ListContext';
import List from '../List/List';

describe('Cell', () => {
  baselineComponent(Cell);

  describe('Controls dragging', () => {
    it('on mouse up/down', () => {
      const toggleDrag = jest.fn();
      render(<ListContext.Provider value={{ toggleDrag }}><Cell draggable /></ListContext.Provider>);
      fireEvent.mouseDown(document.querySelector('.Cell__dragger'));
      expect(toggleDrag).toHaveBeenLastCalledWith(true);
      fireEvent.mouseUp(document.querySelector('.Cell__dragger'));
      expect(toggleDrag).toHaveBeenLastCalledWith(false);
    });

    it('stops drag on unmount', () => {
      const toggleDrag = jest.fn();
      const { rerender } = render(<ListContext.Provider value={{ toggleDrag }}><Cell draggable /></ListContext.Provider>);
      fireEvent.mouseDown(document.querySelector('.Cell__dragger'));
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
            >
              {item}
            </Cell>
          ))}
        </List>,
      );

      userEvent.click(screen.getByTestId('list-xyz').querySelector('.CellDragger'));

      expect(updatedList).toEqual(initialList);
    });
  });
});
