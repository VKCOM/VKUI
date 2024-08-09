import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { usePrevious } from '../../hooks/usePrevious';
import { usePlacementChangeCallback } from '../../lib/floating';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { CustomSelectDropdown, CustomSelectDropdownProps } from './CustomSelectDropdown';
import styles from './CustomSelectDropdown.module.css';

jest.mock(
  '../../lib/floating/usePlacementChangeCallback',
  () =>
    ({
      usePlacementChangeCallback: (initialPlacement, _, onPlacementChange) => {
        const prevPlacement = usePrevious(initialPlacement);
        useIsomorphicLayoutEffect(() => {
          if (prevPlacement !== initialPlacement) {
            prevPlacement !== undefined &&
              initialPlacement !== 'auto' &&
              initialPlacement !== 'auto-end' &&
              initialPlacement !== 'auto-start' &&
              onPlacementChange &&
              onPlacementChange(initialPlacement);
          }
        }, [initialPlacement, onPlacementChange]);
      },
    }) satisfies { usePlacementChangeCallback: typeof usePlacementChangeCallback },
);

describe('CustomSelectDropdown', () => {
  it('Displays only spinner if fetching: true', () => {
    render(
      <CustomSelectDropdown targetRef={React.createRef()} scrollBoxRef={React.createRef()} fetching>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(document.querySelector('.vkuiCustomSelectDropdown__fetching')).not.toBeNull();
  });

  it('Displays children if fetching: false', () => {
    render(
      <CustomSelectDropdown targetRef={React.createRef()} scrollBoxRef={React.createRef()}>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(screen.getByTestId('test-content')).not.toBeNull();
  });

  it('should call onPlacementChange callback when placement is changed', async () => {
    const onPlacementChange = jest.fn();

    const props: CustomSelectDropdownProps = {
      targetRef: React.createRef(),
      ['data-testid']: 'dropdown',
      placement: 'top',
      onPlacementChange,
    };

    const { rerender } = render(<CustomSelectDropdown {...props} />);
    expect(screen.getByTestId('dropdown')).toHaveClass(styles['CustomSelectDropdown--top']);

    rerender(<CustomSelectDropdown {...props} placement="bottom" />);
    expect(screen.getByTestId('dropdown')).toHaveClass(styles['CustomSelectDropdown--bottom']);

    expect(onPlacementChange).toBeCalledTimes(1);
  });

  it('should have className when noMaxHeight = true', () => {
    render(
      <CustomSelectDropdown
        targetRef={React.createRef()}
        data-testid="dropdown"
        noMaxHeight={true}
      />,
    );
    expect(styles['CustomSelectDropdown__in--withMaxHeight']).toBeTruthy();
    expect(screen.getByTestId('dropdown').firstElementChild).not.toHaveClass(
      styles['CustomSelectDropdown__in--withMaxHeight'],
    );
  });
});
