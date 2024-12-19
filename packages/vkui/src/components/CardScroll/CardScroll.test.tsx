import { type CSSProperties } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent, mockRtlDirection } from '../../testing/utils';
import { CardScroll } from './CardScroll';
import styles from './CardScroll.module.css';
import horizontalScrollStyles from '../HorizontalScroll/HorizontalScroll.module.css';

const setupHorizontalScrollData = (element: HTMLElement, startScrollLeft = 0) => {
  let scrollLeft = startScrollLeft;
  jest.spyOn(element, 'scrollLeft', 'get').mockImplementation(() => scrollLeft);
  jest.spyOn(element, 'scrollLeft', 'set').mockImplementation((newValue) => {
    scrollLeft = newValue;
  });

  jest.spyOn(element, 'scrollWidth', 'get').mockImplementation(() => 2486);

  jest.spyOn(element, 'offsetWidth', 'get').mockImplementation(() => 1009);

  jest.spyOn(element.firstElementChild!, 'scrollWidth', 'get').mockImplementation(() => 2486);

  return {
    get scrollLeft() {
      return scrollLeft;
    },
  };
};

const mockCardScrollData = (
  container: HTMLElement,
  cardsCount: number,
  defaultScrollLeft = 50,
  isRtl = false,
) => {
  const startOffsetLeft = 12;
  const containerWidth = 1009;
  new Array(cardsCount).fill(0).forEach((_, index) => {
    const width = 400;
    const gap = 8;
    const card = screen.getByTestId(`card-${index}`);

    const offsetLeft = startOffsetLeft + index * (width + gap);
    const offset = isRtl ? containerWidth - offsetLeft - width : offsetLeft;

    jest.spyOn(card, 'offsetLeft', 'get').mockImplementation(() => offset);
    jest.spyOn(card, 'offsetWidth', 'get').mockImplementation(() => width);
  });

  jest.spyOn(window, 'getComputedStyle').mockImplementation(() => {
    const styles: CSSProperties = {
      marginInlineEnd: '8px',
    };
    return styles as CSSStyleDeclaration;
  });

  const cardScrollContainer = container.getElementsByClassName(styles.in)[0] as HTMLDivElement;
  jest.spyOn(cardScrollContainer, 'offsetWidth', 'get').mockImplementation(() => containerWidth);

  const gap = container.getElementsByClassName(styles.gap)[0] as HTMLDivElement;
  jest.spyOn(gap, 'offsetWidth', 'get').mockImplementation(() => startOffsetLeft);

  const horizontalScroll = container.getElementsByClassName(
    horizontalScrollStyles.in,
  )[0] as HTMLDivElement;
  return {
    horizontalScrollData: setupHorizontalScrollData(
      horizontalScroll,
      defaultScrollLeft * (isRtl ? -1 : 1),
    ),
    horizontalScroll,
  };
};

type PrepareDataParams = {
  defaultScrollLeft?: number;
  cardsCount?: number;
  isRtl?: boolean;
};

const setup = ({ defaultScrollLeft = 50, cardsCount = 6, isRtl = false }: PrepareDataParams) => {
  const { container } = render(
    <CardScroll size="s" prevButtonTestId="ScrollArrowLeft" nextButtonTestId="ScrollArrowRight">
      {new Array(cardsCount).fill(0).map((_, index) => (
        <div key={index} data-testid={`card-${index}`}></div>
      ))}
    </CardScroll>,
  );

  const { horizontalScrollData, horizontalScroll } = mockCardScrollData(
    container,
    cardsCount,
    defaultScrollLeft,
    isRtl,
  );

  fireEvent.mouseEnter(horizontalScroll);

  return {
    horizontalScrollData,
  };
};

describe('CardScroll', () => {
  baselineComponent(CardScroll, {
    a11y: false,
  });

  it('check scroll by click arrow left', async () => {
    const { horizontalScrollData } = setup({
      defaultScrollLeft: 1470,
    });

    const arrowLeft = screen.getByTestId('ScrollArrowLeft');

    fireEvent.click(arrowLeft);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(639);
    });

    fireEvent.click(arrowLeft);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(0);
    });

    fireEvent.click(arrowLeft);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(0);
    });
  });

  it('check scroll by click arrow right', async () => {
    const { horizontalScrollData } = setup({});

    const arrowRight = screen.getByTestId('ScrollArrowRight');

    fireEvent.click(arrowRight);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(816);
    });

    fireEvent.click(arrowRight);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(1477);
    });

    fireEvent.click(arrowRight);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(1477);
    });
  });

  it('check scroll by click both arrows', async () => {
    const { horizontalScrollData } = setup({});

    const arrowRight = screen.getByTestId('ScrollArrowRight');
    const arrowLeft = screen.getByTestId('ScrollArrowLeft');

    fireEvent.click(arrowRight);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(816);
    });

    fireEvent.click(arrowLeft);
    await waitFor(() => {
      expect(horizontalScrollData.scrollLeft).toBe(0);
    });
  });

  describe('check rtl working', () => {
    mockRtlDirection();

    it('check scroll by click arrow prev', async () => {
      const { horizontalScrollData } = setup({
        defaultScrollLeft: 1470,
        isRtl: true,
      });

      const arrowPrev = screen.getByTestId('ScrollArrowLeft');

      fireEvent.click(arrowPrev);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-639);
      });

      fireEvent.click(arrowPrev);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(0);
      });

      fireEvent.click(arrowPrev);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(0);
      });
    });

    it('check scroll by click arrow right', async () => {
      const { horizontalScrollData } = setup({
        isRtl: true,
      });

      const arrowRight = screen.getByTestId('ScrollArrowRight');

      fireEvent.click(arrowRight);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-816);
      });

      fireEvent.click(arrowRight);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-1477);
      });

      fireEvent.click(arrowRight);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-1477);
      });
    });
  });
});
