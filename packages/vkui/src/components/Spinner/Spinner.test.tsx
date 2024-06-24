import { render } from '@testing-library/react';
import { baselineComponent, matchMediaReduceMotionMock } from '../../testing/utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  baselineComponent(Spinner);

  describe.each(['reduce', 'not reduce'])('animation', (prefer) => {
    const reduced = prefer === 'reduce';
    beforeAll(() => {
      matchMediaReduceMotionMock(reduced);
    });
    afterAll(() => {
      matchMediaReduceMotionMock(!reduced);
    });

    it(`should ${prefer} motion`, () => {
      const h = render(<Spinner />);

      const svgEl = h.getByRole('status').querySelector('svg')!;

      if (reduced) {
        expect(svgEl.querySelector('animate')).toBeInTheDocument();
      } else {
        expect(svgEl.querySelector('animateTransform')).toBeInTheDocument();
      }
    });

    it('should disable animation', () => {
      const h = render(<Spinner disableAnimation />);

      const svgEl = h.getByRole('status').querySelector('svg')!;

      expect(svgEl.querySelector('animate')).not.toBeInTheDocument();
      expect(svgEl.querySelector('animateTransform')).not.toBeInTheDocument();
    });
  });
});
