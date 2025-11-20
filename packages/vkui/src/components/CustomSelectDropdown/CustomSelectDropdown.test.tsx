import { act, createRef, useRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import type { Placement, useFloating } from '../../lib/floating';
import { withFakeTimers } from '../../testing/utils.tsx';
import { Button } from '../Button/Button';
import { CustomSelectDropdown } from './CustomSelectDropdown';
import styles from './CustomSelectDropdown.module.css';

vi.mock('../../lib/floating', async () => {
  const originalModule = (await vi.importActual('../../lib/floating')) as any;
  return {
    ...originalModule,
    useFloating: (...args: Parameters<typeof useFloating>) => {
      const result = originalModule['useFloating'](args);
      return {
        ...result,
        placement: args[0]?.placement,
      };
    },
  };
});

describe('CustomSelectDropdown', () => {
  it('Displays only spinner if fetching: true', () => {
    render(
      <CustomSelectDropdown targetRef={createRef()} scrollBoxRef={createRef()} fetching>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(document.querySelector(`.${styles.fetching}`)).not.toBeNull();
  });

  it('Displays children if fetching: false', () => {
    render(
      <CustomSelectDropdown targetRef={createRef()} scrollBoxRef={createRef()}>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(screen.getByTestId('test-content')).not.toBeNull();
  });

  it(
    'should call onPlacementChange callback when placement is changed',
    withFakeTimers(async () => {
      const onPlacementChange = vi.fn();

      const Fixture = () => {
        const ref = useRef<HTMLDivElement>(null);
        const [placement, setPlacement] = useState<Placement>('bottom');
        return (
          <>
            <div ref={ref}></div>
            <CustomSelectDropdown
              targetRef={ref}
              placement={placement}
              data-testid="dropdown"
              onPlacementChange={onPlacementChange}
            />
            <Button onClick={() => setPlacement('top')} data-testid="change-placement">
              Change Placement
            </Button>
          </>
        );
      };

      render(<Fixture />);

      expect(screen.getByTestId('dropdown')).toHaveClass(styles.bottom);

      await act(async () => {
        fireEvent.click(screen.getByTestId('change-placement'));
        vi.runOnlyPendingTimers();
      });

      expect(screen.getByTestId('dropdown')).toHaveClass(styles.top);

      expect(onPlacementChange).toHaveBeenCalledTimes(1);
    }),
  );

  it('should not have className when noMaxHeight = true', () => {
    const props = {
      'targetRef': createRef<HTMLDivElement>(),
      'data-testid': 'dropdown',
    };
    const { rerender } = render(<CustomSelectDropdown {...props} noMaxHeight />);
    expect(screen.getByTestId('dropdown').firstElementChild).not.toHaveClass(
      styles.inWithMaxHeight,
    );

    rerender(<CustomSelectDropdown {...props} noMaxHeight={false} />);
    expect(screen.getByTestId('dropdown').firstElementChild).toHaveClass(styles.inWithMaxHeight);
  });
});
