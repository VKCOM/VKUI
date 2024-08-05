import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import { baselineComponent } from '../../testing/utils';
import { Cell } from '../Cell/Cell';
import { List } from './List';
import draggerStyles from '../Cell/CellDragger/CellDragger.module.css';

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
const mockTimers = () => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((fn) => {
    fn(1);
    return 1;
  });

  jest.spyOn(window, 'setTimeout').mockImplementation((fn) => {
    fn();
    return 1 as unknown as NodeJS.Timeout;
  });
};

const mockCellData = (element: HTMLDivElement, index: number) => {
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

const getCellDraggerById = (testId: string) => {
  const cellToDrag = screen.getByTestId(testId);
  return cellToDrag.querySelector<HTMLElement>(`.${draggerStyles['CellDragger']}`)!;
};

const dragCell = (
  testId: string,
  breakPoints: number[],
  afterFirstMove: VoidFunction = noop,
  afterDragging: VoidFunction = noop,
) => {
  const dragger = getCellDraggerById(testId);
  fireEvent.mouseDown(dragger);

  breakPoints.forEach((breakPoint, index) => {
    fireEvent.mouseMove(dragger, {
      clientY: breakPoint,
      shiftY: breakPoint,
    });
    if (index === 0) {
      afterFirstMove();
    }
  });
  afterDragging();

  fireEvent.mouseUp(dragger);
};

describe('List', () => {
  baselineComponent(List);

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

  it('check dnd is working', async () => {
    const cellsCount = 3;
    mockTimers();

    let swappedItems: SwappedItemRange | null = null;

    const onDragFinish = (swappedItemRange: SwappedItemRange) => {
      swappedItems = swappedItemRange;
    };
    const cellToMockedData: Record<string, ReturnType<typeof mockCellData>> = {};

    render(
      <List data-testid="list">
        {new Array(cellsCount).fill(0).map((_, index) => {
          return (
            <Cell
              getRootRef={(element) => {
                if (!element) {
                  return;
                }
                cellToMockedData[`cell-${index}`] = mockCellData(element, index);
              }}
              key={index}
              draggable
              data-testid={`cell-${index}`}
              onDragFinish={onDragFinish}
            >
              {index} Item
            </Cell>
          );
        })}
      </List>,
    );

    dragCell(
      'cell-0',
      [5, 140, 140, 124],
      () => {
        const cell1Data = cellToMockedData['cell-1'];
        expect(cell1Data.transform).toBe('translateY(50px)');
        const cell2Data = cellToMockedData['cell-2'];
        expect(cell2Data.transform).toBe('translateY(50px)');
      },
      () => {
        const cell1Data = cellToMockedData['cell-1'];
        expect(cell1Data.transform).toBe('');
        const cell2Data = cellToMockedData['cell-2'];
        expect(cell2Data.transform).toBe('translateY(50px)');
      },
    );

    expect(swappedItems).toEqual({ from: 0, to: 1 });

    dragCell(
      'cell-2',
      [140, 140, 75, 140, 75],
      () => {
        const cell1Data = cellToMockedData['cell-0'];
        expect(cell1Data.transform).toBe('');
        const cell2Data = cellToMockedData['cell-1'];
        expect(cell2Data.transform).toBe('');
      },
      () => {
        const cell1Data = cellToMockedData['cell-0'];
        expect(cell1Data.transform).toBe('');
        const cell2Data = cellToMockedData['cell-1'];
        expect(cell2Data.transform).toBe('translateY(50px)');
      },
    );

    expect(swappedItems).toEqual({ from: 2, to: 1 });
  });

  it('check dnd with scroll working', () => {
    const cellsCount = 3;
    mockTimers();

    let swappedItems: SwappedItemRange | null = null;

    const onDragFinish = (swappedItemRange: SwappedItemRange) => {
      swappedItems = swappedItemRange;
    };
    const cellToMockedData: Record<string, ReturnType<typeof mockCellData>> = {};

    render(
      <List data-testid="list">
        {new Array(cellsCount).fill(0).map((_, index) => {
          return (
            <Cell
              getRootRef={(element) => {
                if (!element) {
                  return;
                }
                cellToMockedData[`cell-${index}`] = mockCellData(element, index);
              }}
              key={index}
              draggable
              data-testid={`cell-${index}`}
              onDragFinish={onDragFinish}
            >
              {index} Item
            </Cell>
          );
        })}
      </List>,
    );

    const list = screen.getByTestId('list');

    isScrollRunning = true;
    dragCell('cell-0', [5, 140], noop, () => {
      fireEvent.scroll(list);
    });

    expect(swappedItems).toEqual({ from: 0, to: 2 });
  });
});
