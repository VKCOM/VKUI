import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { Image } from '../../Image/Image';
import {
  ImageBasePositionedComponent,
  PositionedComponentIndentation,
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

  it('check visibility on image hover without use Image', async () => {
    const containerRef: React.RefObject<HTMLDivElement> = {
      current: null,
    };
    render(
      <>
        <div ref={containerRef}>
          <ImageBasePositionedComponent
            data-testid="component"
            visibility="on-image-hover"
            containerRef={containerRef}
            position="top"
          />
        </div>
      </>,
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      containerRef.current!,
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      containerRef.current!,
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

  const horizontalIndentationFixtures = Object.entries({
    '2xs': styles['PositionedComponent--horizontalIndent-2xs'],
    'xs': styles['PositionedComponent--horizontalIndent-xs'],
    's': styles['PositionedComponent--horizontalIndent-s'],
    'm': styles['PositionedComponent--horizontalIndent-m'],
    'l': styles['PositionedComponent--horizontalIndent-l'],
    'xl': styles['PositionedComponent--horizontalIndent-xl'],
    '2xl': styles['PositionedComponent--horizontalIndent-2xl'],
    '3xl': styles['PositionedComponent--horizontalIndent-3xl'],
    '4xl': styles['PositionedComponent--horizontalIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<PositionedComponentIndentation, string | number>,
    className,
  }));

  it.each(horizontalIndentationFixtures)(
    'should have horizontal indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBasePositionedComponent
          data-testid="component"
          position="top"
          horizontalIndent={indent}
        />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  const verticalIndentationFixtures = Object.entries({
    '2xs': styles['PositionedComponent--verticalIndent-2xs'],
    'xs': styles['PositionedComponent--verticalIndent-xs'],
    's': styles['PositionedComponent--verticalIndent-s'],
    'm': styles['PositionedComponent--verticalIndent-m'],
    'l': styles['PositionedComponent--verticalIndent-l'],
    'xl': styles['PositionedComponent--verticalIndent-xl'],
    '2xl': styles['PositionedComponent--verticalIndent-2xl'],
    '3xl': styles['PositionedComponent--verticalIndent-3xl'],
    '4xl': styles['PositionedComponent--verticalIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<PositionedComponentIndentation, string | number>,
    className,
  }));

  it.each(verticalIndentationFixtures)(
    'should have vertical indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBasePositionedComponent
          data-testid="component"
          position="top"
          verticalIndent={indent}
        />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  it('check number indentation', () => {
    render(
      <ImageBasePositionedComponent
        data-testid="component"
        position="top"
        verticalIndent={10}
        horizontalIndent={15}
      />,
    );
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_horizontal_indent'),
    ).toBe('15px');

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_vertical_indent'),
    ).toBe('10px');
  });

  it('check string indentation', () => {
    render(
      <ImageBasePositionedComponent
        data-testid="component"
        position="top"
        verticalIndent="5%"
        horizontalIndent="10%"
      />,
    );
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_horizontal_indent'),
    ).toBe('10%');

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--PositionedComponent_vertical_indent'),
    ).toBe('5%');
  });
});
