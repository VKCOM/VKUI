import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { Image } from '../../Image/Image';
import {
  ImageBasePositionedComponent,
  PositionedComponentPlacement,
} from './ImageBasePositionedComponent';
import styles from './ImageBasePositionedComponent.module.css';

describe(ImageBasePositionedComponent, () => {
  baselineComponent(ImageBasePositionedComponent);

  it('check component position', () => {
    render(
      <ImageBasePositionedComponent
        data-testid="component"
        position={{
          insetBlockStart: '10px',
          insetBlockEnd: '10px',
          insetInlineEnd: '20px',
          insetInlineStart: '20px',
        }}
      />,
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['PositionedComponent--hidden']);

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_inset_block_start'),
    ).toBe('10px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_inset_block_end'),
    ).toBe('10px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_inset_inline_start'),
    ).toBe('20px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_inset_inline_end'),
    ).toBe('20px');
  });

  it('check visibility on image hover', async () => {
    render(
      <>
        <Image size={96} src="test" alt="Приложение шторм онлайн" data-testid="image">
          <ImageBasePositionedComponent
            data-testid="component"
            visibility="on-image-hover"
            position={{
              insetBlockStart: '10px',
              insetBlockEnd: '10px',
              insetInlineEnd: '20px',
              insetInlineStart: '20px',
            }}
          />
        </Image>
      </>,
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseout', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['PositionedComponent--hidden']);
  });

  const placementFixtures = Object.entries({
    'top-start': styles['PositionedComponent--position-topStart'],
    'top': styles['PositionedComponent--position-top'],
    'top-end': styles['PositionedComponent--position-topEnd'],
    'bottom-start': styles['PositionedComponent--position-bottomStart'],
    'bottom': styles['PositionedComponent--position-bottom'],
    'bottom-end': styles['PositionedComponent--position-bottomEnd'],
    'middle-start': styles['PositionedComponent--position-middleStart'],
    'middle': styles['PositionedComponent--position-middle'],
    'middle-end': styles['PositionedComponent--position-middleEnd'],
  }).map(([placement, className]) => ({
    placement: placement as PositionedComponentPlacement,
    className,
  }));

  it.each(placementFixtures)('should have placement className %j', ({ placement, className }) => {
    render(<ImageBasePositionedComponent data-testid="component" position={placement} />);
    expect(screen.getByTestId('component')).toHaveClass(className);
  });
});
