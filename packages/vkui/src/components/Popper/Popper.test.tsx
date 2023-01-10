import * as React from 'react';
import { render } from '@testing-library/react';
import { usePopper } from 'react-popper';
import { Popper } from './Popper';

jest.mock('react-popper');

const usePopperReturnMock = {
  styles: {},
  state: { popper: {} },
  attributes: { popper: {} },
};

describe('Popper', () => {
  afterAll(jest.resetAllMocks);

  describe('Modifiers', () => {
    beforeEach(jest.clearAllMocks);

    it('Pass sameWidth modifier set sameWidth: true', () => {
      let popperOptions: any = null;

      (usePopper as jest.Mock).mockImplementation((_referenceElement, _popperElement, options) => {
        popperOptions = options;

        return usePopperReturnMock;
      });

      render(
        <Popper sameWidth targetRef={React.createRef()}>
          <div>test</div>
        </Popper>,
      );

      expect(popperOptions?.modifiers).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: 'sameWidth' })]),
      );
    });
    it('Pass arrow modifier set arrow: true', () => {
      let popperOptions: any = null;

      (usePopper as jest.Mock).mockImplementation((_referenceElement, _popperElement, options) => {
        popperOptions = options;

        return usePopperReturnMock;
      });

      render(
        <Popper arrow targetRef={React.createRef()}>
          <div>test</div>
        </Popper>,
      );

      expect(popperOptions?.modifiers).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: 'arrow' })]),
      );
    });
  });
});
