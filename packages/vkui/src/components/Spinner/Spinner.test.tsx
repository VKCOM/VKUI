import { render } from '@testing-library/react';
import { REDUCE_MOTION_MEDIA_QUERY } from '../../lib/animation';
import { baselineComponent, matchMediaMock } from '../../testing/utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  baselineComponent(Spinner);

  describe.each(['reduce', 'not reduce'])('animation', (prefer) => {
    const reduced = prefer === 'reduce';
    beforeAll(() => {
      matchMediaMock(reduced ? REDUCE_MOTION_MEDIA_QUERY : undefined);
    });
    afterAll(() => {
      matchMediaMock(!reduced ? undefined : REDUCE_MOTION_MEDIA_QUERY);
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
