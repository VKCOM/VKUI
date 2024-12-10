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

  it('check visibility on image hover', async () => {
    render(
      <>
        <Image size={96} src="test" alt="Приложение шторм онлайн" data-testid="image">
          <ImageBaseFloatElement
            data-testid="component"
            visibility="on-hover"
            placement="top-start"
          />
        </Image>
      </>,
    );

    expect(screen.getByTestId('component')).toHaveClass(styles.hidden);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles.hidden);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseout', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).toHaveClass(styles.hidden);
  });

  const placementFixtures = Object.entries({
    'top-start': styles.placementTopStart,
    'top': styles.placementTop,
    'top-end': styles.placementTopEnd,
    'bottom-start': styles.placementBottomStart,
    'bottom': styles.placementBottom,
    'bottom-end': styles.placementBottomEnd,
    'middle-start': styles.placementMiddleStart,
    'middle': styles.placementMiddle,
    'middle-end': styles.placementMiddleEnd,
  }).map(([placement, className]) => ({
    placement: placement as FloatElementPlacement,
    className,
  }));

  it.each(placementFixtures)('should have placement className %j', ({ placement, className }) => {
    render(<ImageBaseFloatElement data-testid="component" placement={placement} />);
    expect(screen.getByTestId('component')).toHaveClass(className);
  });

  const horizontalIndentationFixtures = Object.entries({
    '2xs': styles.inlineIndent2xs,
    'xs': styles.inlineIndentXs,
    's': styles.inlineIndentS,
    'm': styles.inlineIndentM,
    'l': styles.inlineIndentL,
    'xl': styles.inlineIndentXl,
    '2xl': styles.inlineIndent2xl,
    '3xl': styles.inlineIndent3xl,
    '4xl': styles.inlineIndent4xl,
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(horizontalIndentationFixtures)(
    'should have horizontal indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBaseFloatElement data-testid="component" placement="top" inlineIndent={indent} />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  const verticalIndentationFixtures = Object.entries({
    '2xs': styles.blockIndent2xs,
    'xs': styles.blockIndentXs,
    's': styles.blockIndentS,
    'm': styles.blockIndentM,
    'l': styles.blockIndentL,
    'xl': styles.blockIndentXl,
    '2xl': styles.blockIndent2xl,
    '3xl': styles.blockIndent3xl,
    '4xl': styles.blockIndent4xl,
  }).map(([indent, className]) => ({
    indent: indent as Exclude<FloatElementIndentation, string | number>,
    className,
  }));

  it.each(verticalIndentationFixtures)(
    'should have vertical indentation className %j',
    ({ indent, className }) => {
      render(
        <ImageBaseFloatElement data-testid="component" placement="top" blockIndent={indent} />,
      );
      expect(screen.getByTestId('component')).toHaveClass(className);
    },
  );

  it('check number indentation', () => {
    render(
      <ImageBaseFloatElement
        data-testid="component"
        placement="top"
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
        placement="top"
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
