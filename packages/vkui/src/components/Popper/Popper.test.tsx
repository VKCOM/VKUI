import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { waitForFloatingPosition } from '../../testing/utils';
import { Popper } from './Popper';

let isReferenceHidden = false;
jest.mock('../../lib/floating', function mockFloatingHideMiddleware() {
  const actual = jest.requireActual('../../lib/floating');
  return {
    ...actual,
    hideMiddleware(...args: any) {
      return {
        ...actual.hideMiddleware(...args),
        fn: () => {
          return {
            data: {
              referenceHidden: isReferenceHidden,
            },
          };
        },
      };
    },
  };
});

describe('Popper', () => {
  describe('hideWhenReferenceHidden', () => {
    test('hides when referece is hidden', async () => {
      isReferenceHidden = true;
      const TestComponent = () => {
        const ref = React.useRef<HTMLDivElement>(null);
        return (
          <div>
            <div ref={ref}>Reference element</div>
            <Popper hideWhenReferenceHidden targetRef={ref}>
              The popper content
            </Popper>
          </div>
        );
      };

      render(<TestComponent />);
      await waitForFloatingPosition();

      expect(screen.queryByText('The popper content')).not.toBeVisible();
    });

    test("doesn't hide when referece is not hidden", async () => {
      isReferenceHidden = false;
      const TestComponent = () => {
        const ref = React.useRef<HTMLDivElement>(null);
        return (
          <div>
            <div ref={ref}>Reference element</div>
            <Popper hideWhenReferenceHidden targetRef={ref}>
              The popper content
            </Popper>
          </div>
        );
      };

      render(<TestComponent />);
      await waitForFloatingPosition();

      expect(screen.queryByText('The popper content')).toBeVisible();
    });
  });
});
