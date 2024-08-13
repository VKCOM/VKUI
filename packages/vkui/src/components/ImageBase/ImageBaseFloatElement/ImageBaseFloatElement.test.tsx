import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { Image } from '../../Image/Image';
import {
  FloatElementIndentation,
  FloatElementPlacement,
  ImageBaseFloatElement,
} from './ImageBaseFloatElement';
import styles from './ImageBaseFloatElement.module.css';

describe(ImageBaseFloatElement, () => {
  baselineComponent(ImageBaseFloatElement);

  it('check component position', () => {
    render(
      <ImageBaseFloatElement
        data-testid="component"
        position={{
          insetBlockStart: '10px',
          insetBlockEnd: '10px',
          insetInlineEnd: '20px',
          insetInlineStart: '20px',
        }}
      />,
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['FloatElement--hidden']);

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_inset_block_start'),
    ).toBe('10px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_inset_block_end'),
    ).toBe('10px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_inset_inline_start'),
    ).toBe('20px');
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_inset_inline_end'),
    ).toBe('20px');
  });

  it('check visibility on image hover', async () => {
    render(
      <>
        <Image size={96} src="test" alt="Приложение шторм онлайн" data-testid="image">
          <ImageBaseFloatElement
            data-testid="component"
            visibility="on-hover"
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

    expect(screen.getByTestId('component')).toHaveClass(styles['FloatElement--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['FloatElement--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseout', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['FloatElement--hidden']);
  });

  const placementFixtures = Object.entries({
    'top-start': styles['FloatElement--position-topStart'],
    'top': styles['FloatElement--position-top'],
    'top-end': styles['FloatElement--position-topEnd'],
    'bottom-start': styles['FloatElement--position-bottomStart'],
    'bottom': styles['FloatElement--position-bottom'],
    'bottom-end': styles['FloatElement--position-bottomEnd'],
    'middle-start': styles['FloatElement--position-middleStart'],
    'middle': styles['FloatElement--position-middle'],
    'middle-end': styles['FloatElement--position-middleEnd'],
  }).map(([placement, className]) => ({
    placement: placement as FloatElementPlacement,
    className,
  }));

  it.each(placementFixtures)('should have placement className %j', ({ placement, className }) => {
    render(<ImageBaseFloatElement data-testid="component" position={placement} />);
    expect(screen.getByTestId('component')).toHaveClass(className);
  });

  const horizontalIndentationFixtures = Object.entries({
    '2xs': styles['FloatElement--horizontalIndent-2xs'],
    'xs': styles['FloatElement--horizontalIndent-xs'],
    's': styles['FloatElement--horizontalIndent-s'],
    'm': styles['FloatElement--horizontalIndent-m'],
    'l': styles['FloatElement--horizontalIndent-l'],
    'xl': styles['FloatElement--horizontalIndent-xl'],
    '2xl': styles['FloatElement--horizontalIndent-2xl'],
    '3xl': styles['FloatElement--horizontalIndent-3xl'],
    '4xl': styles['FloatElement--horizontalIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(horizontalIndentationFixtures)(
    'should have horizontal indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBaseFloatElement data-testid="component" position="top" horizontalIndent={indent} />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  const verticalIndentationFixtures = Object.entries({
    '2xs': styles['FloatElement--verticalIndent-2xs'],
    'xs': styles['FloatElement--verticalIndent-xs'],
    's': styles['FloatElement--verticalIndent-s'],
    'm': styles['FloatElement--verticalIndent-m'],
    'l': styles['FloatElement--verticalIndent-l'],
    'xl': styles['FloatElement--verticalIndent-xl'],
    '2xl': styles['FloatElement--verticalIndent-2xl'],
    '3xl': styles['FloatElement--verticalIndent-3xl'],
    '4xl': styles['FloatElement--verticalIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(verticalIndentationFixtures)(
    'should have vertical indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBaseFloatElement data-testid="component" position="top" verticalIndent={indent} />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  it('check number indentation', () => {
    render(
      <ImageBaseFloatElement
        data-testid="component"
        position="top"
        verticalIndent={10}
        horizontalIndent={15}
      />,
    );
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_horizontal_indent'),
    ).toBe('15px');

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_vertical_indent'),
    ).toBe('10px');
  });

  it('check string indentation', () => {
    render(
      <ImageBaseFloatElement
        data-testid="component"
        position="top"
        verticalIndent="5%"
        horizontalIndent="10%"
      />,
    );
    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_horizontal_indent'),
    ).toBe('10%');

    expect(
      screen
        .getByTestId('component')
        .style.getPropertyValue('--vkui_internal--FloatElement_vertical_indent'),
    ).toBe('5%');
  });
});
