import { type CSSProperties } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
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

const mockCardScrollData = (container: HTMLElement, cardsCount: number, defaultScrollLeft = 50) => {
  const startOffsetLeft = 12;
  new Array(cardsCount).fill(0).forEach((_, index) => {
    const width = 400;
    const gap = 8;
    const card = screen.getByTestId(`card-${index}`);

    jest
      .spyOn(card, 'offsetLeft', 'get')
      .mockImplementation(() => startOffsetLeft + index * (width + gap));
    jest.spyOn(card, 'offsetWidth', 'get').mockImplementation(() => width);
  });

  jest.spyOn(window, 'getComputedStyle').mockImplementation(() => {
    const styles: CSSProperties = {
      marginRight: '8px',
    };
    return styles as CSSStyleDeclaration;
  });

  const cardScrollContainer = container.getElementsByClassName(styles.in)[0] as HTMLDivElement;
  jest.spyOn(cardScrollContainer, 'offsetWidth', 'get').mockImplementation(() => 1009);

  const gap = container.getElementsByClassName(styles.gap)[0] as HTMLDivElement;
  jest.spyOn(gap, 'offsetWidth', 'get').mockImplementation(() => 12);

  const horizontalScroll = container.getElementsByClassName(
    horizontalScrollStyles.in,
  )[0] as HTMLDivElement;
  return {
    horizontalScrollData: setupHorizontalScrollData(horizontalScroll, defaultScrollLeft),
    horizontalScroll,
  };
};

type PrepareDataParams = {
  defaultScrollLeft?: number;
  cardsCount?: number;
};

const setup = ({ defaultScrollLeft = 50, cardsCount = 6 }: PrepareDataParams) => {
  const { container } = render(
    <CardScroll size="s">
      {new Array(cardsCount).fill(0).map((_, index) => (
        <div key={index} data-testid={`card-${index}`}></div>
      ))}
    </CardScroll>,
  );

  const { horizontalScrollData, horizontalScroll } = mockCardScrollData(
    container,
    cardsCount,
    defaultScrollLeft,
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
});
