import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { Image } from '../../Image/Image';
import {
  type FloatElementIndentation,
  type FloatElementPlacement,
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
    '2xs': styles['FloatElement--inlineIndent-2xs'],
    'xs': styles['FloatElement--inlineIndent-xs'],
    's': styles['FloatElement--inlineIndent-s'],
    'm': styles['FloatElement--inlineIndent-m'],
    'l': styles['FloatElement--inlineIndent-l'],
    'xl': styles['FloatElement--inlineIndent-xl'],
    '2xl': styles['FloatElement--inlineIndent-2xl'],
    '3xl': styles['FloatElement--inlineIndent-3xl'],
    '4xl': styles['FloatElement--inlineIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(horizontalIndentationFixtures)(
    'should have horizontal indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBaseFloatElement data-testid="component" position="top" inlineIndent={indent} />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  const verticalIndentationFixtures = Object.entries({
    '2xs': styles['FloatElement--blockIndent-2xs'],
    'xs': styles['FloatElement--blockIndent-xs'],
    's': styles['FloatElement--blockIndent-s'],
    'm': styles['FloatElement--blockIndent-m'],
    'l': styles['FloatElement--blockIndent-l'],
    'xl': styles['FloatElement--blockIndent-xl'],
    '2xl': styles['FloatElement--blockIndent-2xl'],
    '3xl': styles['FloatElement--blockIndent-3xl'],
    '4xl': styles['FloatElement--blockIndent-4xl'],
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(verticalIndentationFixtures)(
    'should have vertical indentation className %j',
    ({ indent, className }) => {
      render(<ImageBaseFloatElement data-testid="component" position="top" blockIndent={indent} />);
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  it('check number indentation', () => {
    render(
      <ImageBaseFloatElement
        data-testid="component"
        position="top"
        blockIndent={10}
        inlineIndent={15}
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
        blockIndent="5%"
        inlineIndent="10%"
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
