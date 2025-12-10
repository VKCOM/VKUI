import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { DirectionProvider } from '../DirectionProvider/DirectionProvider';
import { CardScroll } from './CardScroll';
import styles from './CardScroll.module.css';
import horizontalScrollStyles from '../HorizontalScroll/HorizontalScroll.module.css';

const setupHorizontalScrollData = (element: HTMLElement, startScrollLeft = 0) => {
  let scrollLeft = startScrollLeft;
  vi.spyOn(element, 'scrollLeft', 'get').mockImplementation(() => scrollLeft);
  vi.spyOn(element, 'scrollLeft', 'set').mockImplementation((newValue) => {
    scrollLeft = newValue;
  });

  vi.spyOn(element, 'scrollWidth', 'get').mockImplementation(() => 2486);

  vi.spyOn(element, 'offsetWidth', 'get').mockImplementation(() => 1009);

  vi.spyOn(element.firstElementChild!, 'scrollWidth', 'get').mockImplementation(() => 2486);

  return {
    get scrollLeft() {
      return scrollLeft;
    },
  };
};

const mockCardScrollData = (cardsCount: number, defaultScrollLeft = 50, isRtl = false) => {
  const startOffsetLeft = 12;
  const containerWidth = 1009;

  const originalGetComputedStyle = window.getComputedStyle;

  const getComputedStyleInstance = vi.spyOn(window, 'getComputedStyle').mockImplementation((e) => {
    return {
      ...originalGetComputedStyle(e),
      marginInlineEnd: '8px',
      getPropertyValue: (property: string) => {
        if (property === '--vkui_internal--CardScroll_horizontal_padding') {
          return '12px';
        }
        return '';
      },
    };
  });

  const mockCard = (card: HTMLElement, index: number) => {
    const width = 400;
    const gap = 8;

    const offsetLeft = startOffsetLeft + index * (width + gap);
    const offset = isRtl ? containerWidth - offsetLeft - width : offsetLeft;

    vi.spyOn(card, 'offsetLeft', 'get').mockImplementation(() => offset);
    vi.spyOn(card, 'offsetWidth', 'get').mockImplementation(() => width);
  };

  const { container } = render(
    <DirectionProvider value={isRtl ? 'rtl' : 'ltr'}>
      <CardScroll size="s" prevButtonTestId="ScrollArrowLeft" nextButtonTestId="ScrollArrowRight">
        {Array.from({ length: cardsCount }).map((_, index) => (
          <div
            key={index}
            data-testid={`card-${index}`}
            ref={(element) => {
              if (element) {
                mockCard(element, index);
              }
            }}
          ></div>
        ))}
      </CardScroll>
    </DirectionProvider>,
  );

  const cardScrollContainer = container.getElementsByClassName(styles.in)[0] as HTMLDivElement;
  vi.spyOn(cardScrollContainer, 'offsetWidth', 'get').mockImplementation(() => containerWidth);

  const horizontalScroll = container.getElementsByClassName(
    horizontalScrollStyles.in,
  )[0] as HTMLDivElement;
  return {
    horizontalScrollData: setupHorizontalScrollData(
      horizontalScroll,
      defaultScrollLeft * (isRtl ? -1 : 1),
    ),
    horizontalScroll,
    mocksRestore: () => {
      [getComputedStyleInstance].forEach((mock) => mock.mockRestore());
    },
  };
};

type PrepareDataParams = {
  defaultScrollLeft?: number;
  cardsCount?: number;
  isRtl?: boolean;
};

const setup = ({ defaultScrollLeft = 50, cardsCount = 6, isRtl = false }: PrepareDataParams) => {
  const { horizontalScrollData, horizontalScroll, mocksRestore } = mockCardScrollData(
    cardsCount,
    defaultScrollLeft,
    isRtl,
  );

  fireEvent.mouseEnter(horizontalScroll);

  return {
    horizontalScrollData,
    mocksRestore,
  };
};

describe('CardScroll', () => {
  baselineComponent(CardScroll);

  it('check scroll by click arrow left', async () => {
    const { horizontalScrollData, mocksRestore } = setup({
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
    mocksRestore();
  });

  it('check scroll by click arrow right', async () => {
    const { horizontalScrollData, mocksRestore } = setup({});

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
    mocksRestore();
  });

  it('check scroll by click both arrows', async () => {
    const { horizontalScrollData, mocksRestore } = setup({});

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
    mocksRestore();
  });

  describe('check rtl working', () => {
    it('check scroll by click arrow prev', async () => {
      const { horizontalScrollData, mocksRestore } = setup({
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

      mocksRestore();
    });

    it('check scroll by click arrow next', async () => {
      const { horizontalScrollData, mocksRestore } = setup({
        isRtl: true,
      });

      const arrowNext = screen.getByTestId('ScrollArrowRight');

      fireEvent.click(arrowNext);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-816);
      });

      fireEvent.click(arrowNext);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-1477);
      });

      fireEvent.click(arrowNext);
      await waitFor(() => {
        expect(horizontalScrollData.scrollLeft).toBe(-1477);
      });

      mocksRestore();
    });
  });
});
