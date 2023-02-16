import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { PopoutWrapper } from './PopoutWrapper';

describe('PopoutWrapper', () => {
  baselineComponent(PopoutWrapper);

  describe('prevents touchmove', () => {
    it('while mounted', () => {
      render(<PopoutWrapper />);
      const e = new TouchEvent('touchmove');
      const preventDefault = jest.spyOn(e, 'preventDefault');
      fireEvent(window, e);
      expect(preventDefault).toBeCalled();
    });
    it('clears after unmount', () => {
      const h = render(<PopoutWrapper />);
      h.unmount();
      const e = new TouchEvent('touchmove');
      const preventDefault = jest.spyOn(e, 'preventDefault');
      fireEvent(window, e);
      expect(preventDefault).not.toBeCalled();
    });
  });

  describe('gets opened', () => {
    const isOpened = () => !!document.querySelector('.vkuiPopoutWrapper--opened');
    beforeEach(() => jest.useFakeTimers('modern'));
    afterEach(() => jest.useRealTimers());
    it('immediately if no mask', () => {
      render(<PopoutWrapper hasMask={false} />);
      expect(isOpened()).toBe(true);
    });
    it('after animation if mask', () => {
      render(<PopoutWrapper hasMask />);
      expect(isOpened()).toBe(false);
      act(() => {
        jest.runAllTimers();
      });
      expect(isOpened()).toBe(true);
    });
  });
});
