import { useRef, useState } from 'react';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Placement, useFloating } from '../../lib/floating';
import { Button } from '../Button/Button';
import { CustomSelectDropdown } from './CustomSelectDropdown';
import styles from './CustomSelectDropdown.module.css';

jest.mock('../../lib/floating', () => {
  const originalModule = jest.requireActual('../../lib/floating');
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

    expect(screen.getByTestId('dropdown')).toHaveClass(styles['CustomSelectDropdown--bottom']);

    fireEvent.click(screen.getByTestId('change-placement'));

    expect(screen.getByTestId('dropdown')).toHaveClass(styles['CustomSelectDropdown--top']);

    expect(onPlacementChange).toBeCalledTimes(1);
  });

  it('should not have className when noMaxHeight = true', () => {
    const props = {
      'targetRef': React.createRef<HTMLDivElement>(),
      'data-testid': 'dropdown',
    };
    const { rerender } = render(<CustomSelectDropdown {...props} noMaxHeight />);
    expect(screen.getByTestId('dropdown').firstElementChild).not.toHaveClass(
      styles['CustomSelectDropdown__in--withMaxHeight'],
    );

    rerender(<CustomSelectDropdown {...props} noMaxHeight={false} />);
    expect(screen.getByTestId('dropdown').firstElementChild).toHaveClass(
      styles['CustomSelectDropdown__in--withMaxHeight'],
    );
  });
});
