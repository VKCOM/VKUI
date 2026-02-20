import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { DirectionProvider } from '../DirectionProvider/DirectionProvider';
import { ScrollArrow } from './ScrollArrow';
import styles from './ScrollArrow.module.css';

describe(ScrollArrow, () => {
  baselineComponent((props) => <ScrollArrow direction="left" {...props} />);

  it('should have HTML style attribute for offsetY prop', () => {
    const offsetY = 10;
    const { container } = render(<ScrollArrow direction="left" offsetY={offsetY} onClick={noop} />);
    const elIcon = container.querySelector(`.${styles.icon}`);
    expect(elIcon).toHaveStyle({ top: `${offsetY}px` });
  });

  it('should have type="button" by default', () => {
    render(<ScrollArrow direction="left" onClick={noop} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  describe('offsetX prop', () => {
    it('should apply left style for direction="left" in LTR', () => {
      const offsetX = 15;
      const { container } = render(
        <ScrollArrow direction="left" offsetX={offsetX} onClick={noop} />,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ left: `${offsetX}px` });
    });

    it('should apply right style for direction="right" in LTR', () => {
      const offsetX = 20;
      const { container } = render(
        <ScrollArrow direction="right" offsetX={offsetX} onClick={noop} />,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ right: `${offsetX}px` });
    });

    it('should apply right style for direction="left" in RTL', () => {
      const offsetX = 15;
      const { container } = render(
        <DirectionProvider value="rtl">
          <ScrollArrow direction="left" offsetX={offsetX} onClick={noop} />
        </DirectionProvider>,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ right: `${offsetX}px` });
    });

    it('should apply left style for direction="right" in RTL', () => {
      const offsetX = 20;
      const { container } = render(
        <DirectionProvider value="rtl">
          <ScrollArrow direction="right" offsetX={offsetX} onClick={noop} />
        </DirectionProvider>,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ left: `${offsetX}px` });
    });

    it('should apply both offsetX and offsetY', () => {
      const offsetX = 10;
      const offsetY = 5;
      const { container } = render(
        <ScrollArrow direction="left" offsetX={offsetX} offsetY={offsetY} onClick={noop} />,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ left: `${offsetX}px`, top: `${offsetY}px` });
    });

    it('should support string values for offsetX', () => {
      const offsetX = '10px';
      const { container } = render(
        <ScrollArrow direction="left" offsetX={offsetX} onClick={noop} />,
      );
      const elIcon = container.querySelector(`.${styles.icon}`);
      expect(elIcon).toHaveStyle({ left: offsetX });
    });
  });
});
