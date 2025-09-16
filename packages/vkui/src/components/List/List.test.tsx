import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import type { SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import {
  ADOPTED_TOUCH_EVENTS_HANDLERS,
  baselineComponent,
  fakeTimers,
  MOUSE_EVENTS_HANDLERS,
} from '../../testing/utils';
import { Cell } from '../Cell/Cell';
import { List } from './List';

let isScrollRunning = false;
jest.mock('../../hooks/useDraggableWithDomApi/autoScroll', () => {
  const originalModule = jest.requireActual('../../hooks/useDraggableWithDomApi/autoScroll');
  return {
    ...originalModule,
    createAutoScrollController: () => {
      return {
        tryAutoScroll: (fn: VoidFunction) => fn(),
        stop: noop,
        get isRunning() {
          return isScrollRunning;
        },
      };
    },
  };
});

jest.mock('../../lib/dom', () => {
  const originalModule = jest.requireActual('../../lib/dom');
  return {
    ...originalModule,
    getNearestOverflowAncestor: () => {
      return screen.getByTestId('list');
    },
  };
});

const setupCell = (element: HTMLDivElement, index: number) => {
  let transform = '';
  jest.spyOn(element.style, 'setProperty').mockImplementation((property, value) => {
    if (property === 'transform') {
      transform = value || '';
    }
  });
  jest.spyOn(element.style, 'removeProperty').mockImplementation((property) => {
    if (property === 'transform') {
      transform = '';
    }
    return '';
  });

  const cellHeight = 50;
  let rect: DOMRect = DOMRect.fromRect({
    y: cellHeight * index,
    height: cellHeight,
  });
  jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => rect);

  return {
    get transform() {
      return transform;
    },
    get rect() {
      return rect;
    },
    set rect(newRect: DOMRect) {
      rect = newRect;
    },
  };
};

const setupList = (element: HTMLDivElement) => {
  let listScrollTop = 0;
  jest.spyOn(element, 'scrollTop', 'get').mockImplementation(() => listScrollTop);
  jest
    .spyOn(element, 'scrollTop', 'set')
    .mockImplementation((newScrollTop) => (listScrollTop = newScrollTop));
  return {
    get listScrollTop() {
      return listScrollTop;
    },
    set listScrollTop(newScrollTop) {
      listScrollTop = newScrollTop;
    },
  };
};

const setup = ({ cellsCount = 3 }: { cellsCount?: number }) => {
  let listSetup: ReturnType<typeof setupList>;
  let list;
  let swappedItems: SwappedItemRange | null = null;

  const onDragFinish = (swappedItemRange: SwappedItemRange) => {
    swappedItems = swappedItemRange;
  };
  const cellToMockedData: Record<string, ReturnType<typeof setupCell>> = {};

  const component = render(
    <List
      data-testid="list"
      getRootRef={(element) => {
        if (!element) {
          return;
        }
        list = element;
        listSetup = setupList(element);
      }}
    >
      {new Array(cellsCount).fill(0).map((_, index) => {
        return (
          <Cell
            getRootRef={(element) => {
              if (!element) {
                return;
              }
              cellToMockedData[`cell-${index}`] = setupCell(element, index);
            }}
            key={index}
            draggable
            data-testid={`cell-${index}`}
            draggerTestId={`dragger-${index}`}
            onDragFinish={onDragFinish}
          >
            {index} Item
          </Cell>
        );
      })}
    </List>,
  );

  return {
    component,
    get list() {
      return list!;
    },
    get swappedItems() {
      return swappedItems;
    },
    get listScrollTop() {
      return listSetup!.listScrollTop;
    },
    set listScrollTop(newScrollTop) {
      listSetup!.listScrollTop = newScrollTop;
    },
    getCellSetup: (id: string) => {
      return cellToMockedData[id];
    },
  };
};

const dragCell = ({
  testId,
  breakPoints,
  afterDragging,
  afterMove = {},
  mouseEvents = [fireEvent.mouseDown, fireEvent.mouseMove, fireEvent.mouseUp],
}: {
  testId: string;
  breakPoints: number[];
  afterMove?: Record<number, VoidFunction>;
  afterDragging?: VoidFunction;
  mouseEvents?: Array<typeof fireEvent.mouseDown>;
}) => {
  const [mouseDown, mouseMove, mouseUp] = mouseEvents;
  const dragger = screen.getByTestId(testId);
  mouseDown(dragger);

  act(jest.runOnlyPendingTimers);

  breakPoints.forEach((breakPoint, index) => {
    mouseMove(dragger, {
      clientY: breakPoint,
    });
    act(jest.runOnlyPendingTimers);
    afterMove[index]?.();
  });
  act(jest.runOnlyPendingTimers);
  afterDragging && afterDragging();

  mouseUp(dragger);
};

describe('List', () => {
  baselineComponent(List);
  fakeTimers();

  it('should have style gap', async () => {
    render(
      <List data-testid="list" gap={20}>
        <Cell key="1" style={{ height: 50 }}>
          First Item
        </Cell>
        <Cell key="2" style={{ height: 50 }}>
          Second Item
        </Cell>
      </List>,
    );
    expect(screen.getByTestId('list').style.gridGap).toBe('20px');
  });

  it.each([{ handlers: MOUSE_EVENTS_HANDLERS }, { handlers: ADOPTED_TOUCH_EVENTS_HANDLERS }])(
    'check dnd is working',
    ({ handlers: mouseEvents }) => {
      const setupData = setup({});
      const { getCellSetup } = setupData;

      dragCell({
        testId: 'dragger-0',
        breakPoints: [5, 140, 140, 124],
        afterDragging: () => {
          const cell1Data = getCellSetup('cell-1');
          expect(cell1Data.transform).toBe('');
          const cell2Data = getCellSetup('cell-2');
          expect(cell2Data.transform).toBe('translateY(50px)');
        },
        afterMove: {
          0: () => {
            const cell1Data = getCellSetup('cell-1');
            expect(cell1Data.transform).toBe('translateY(50px)');
            const cell2Data = getCellSetup('cell-2');
            expect(cell2Data.transform).toBe('translateY(50px)');
          },
        },
        mouseEvents,
      });

      expect(setupData.swappedItems).toEqual({ from: 0, to: 1 });

      dragCell({
        testId: 'dragger-2',
        breakPoints: [140, 140, 75, 140, 75],
        afterDragging: () => {
          const cell1Data = getCellSetup('cell-0');
          expect(cell1Data.transform).toBe('');
          const cell2Data = getCellSetup('cell-1');
          expect(cell2Data.transform).toBe('translateY(50px)');
        },
        afterMove: {
          0: () => {
            const cell1Data = getCellSetup('cell-0');
            expect(cell1Data.transform).toBe('');
            const cell2Data = getCellSetup('cell-1');
            expect(cell2Data.transform).toBe('');
          },
        },
        mouseEvents,
      });

      expect(setupData.swappedItems).toEqual({ from: 2, to: 1 });
    },
  );

  it('check dnd with scroll working', () => {
    const setupData = setup({});

    isScrollRunning = false;
    setupData.listScrollTop = 50;

    dragCell({
      testId: 'dragger-0',
      breakPoints: [5, 70, 90],
      afterMove: {
        1: () => {
          jest.runAllTimers();
          isScrollRunning = true;
          setupData.listScrollTop = 30;
          fireEvent.scroll(setupData.list);
        },
      },
    });

    expect(setupData.swappedItems).toEqual({ from: 0, to: 1 });
  });
});
