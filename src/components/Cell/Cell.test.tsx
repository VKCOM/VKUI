import { fireEvent, render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Cell } from './Cell';
import { ListContext } from '../List/ListContext';

describe('Cell', () => {
  baselineComponent(Cell);
  describe('Controls dragging', () => {
    it('On mouse up/down', () => {
      const toggleDrag = jest.fn();
      render(<ListContext.Provider value={{ toggleDrag }}><Cell draggable /></ListContext.Provider>);
      fireEvent.mouseDown(document.querySelector('.Cell__dragger'));
      expect(toggleDrag).toHaveBeenLastCalledWith(true);
      fireEvent.mouseUp(document.querySelector('.Cell__dragger'));
      expect(toggleDrag).toHaveBeenLastCalledWith(false);
    });
    it('Stops drag on unmount', () => {
      const toggleDrag = jest.fn();
      const { rerender } = render(<ListContext.Provider value={{ toggleDrag }}><Cell draggable /></ListContext.Provider>);
      fireEvent.mouseDown(document.querySelector('.Cell__dragger'));
      rerender(<ListContext.Provider value={{ toggleDrag }} />);
      expect(toggleDrag).toHaveBeenLastCalledWith(false);
    });
  });
});
