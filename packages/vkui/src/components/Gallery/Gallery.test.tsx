import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Gallery } from './Gallery';

describe('Gallery', () => {
  baselineComponent(Gallery);
  describe('handles slide count', () => {
    it('prevents slideIndex outside slide count', () => {
      let index;
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(1);
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={-9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('handles dynamic slide count', () => {
      let index;
      const setIndex = (v: number) => (index = v);
      const { rerender } = render(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
          <div />
        </Gallery>,
      );
      rerender(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('keeps slideIndex when 0 slides', () => {
      const setIndex = jest.fn();
      render(<Gallery onChange={setIndex} slideIndex={10} />);
      expect(setIndex).not.toBeCalled();
    });
  });
});
