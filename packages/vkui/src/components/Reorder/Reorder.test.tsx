import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import type { SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import {
  ADOPTED_TOUCH_EVENTS_HANDLERS,
  baselineComponent,
  MOUSE_EVENTS_HANDLERS,
  withFakeTimers,
} from '../../testing/utils.tsx';
import { Reorder } from './Reorder.tsx';

const setupItem = (element: HTMLElement, index: number) => {
  let transform = '';
  vi.spyOn(element.style, 'setProperty').mockImplementation(
    (property: string, value: string | null) => {
      if (property === 'transform') {
        transform = value || '';
      }
    },
  );
  vi.spyOn(element.style, 'removeProperty').mockImplementation((property: string) => {
    if (property === 'transform') {
      transform = '';
    }
    return '';
  });

  const itemHeight = 50;
  let rect: DOMRect = DOMRect.fromRect({
    y: itemHeight * index,
    height: itemHeight,
  });
  vi.spyOn(element, 'getBoundingClientRect').mockImplementation(() => rect);

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

const defaultRenderItemContent = (index: number) => (
  <>
    <Reorder.Trigger data-testid={`dragger-${index}`}>
      <Reorder.TriggerIcon>Переместить пункт {index + 1}</Reorder.TriggerIcon>
    </Reorder.Trigger>
    <div>Пункт {index + 1}</div>
  </>
);

const setupWithoutSubcomponents = ({ itemsCount = 3 }: { itemsCount?: number }) => {
  let list;
  let swappedItems: SwappedItemRange | null = null;

  const onDragFinish = (swappedItemRange: SwappedItemRange) => {
    swappedItems = swappedItemRange;
  };
  const itemToMockedData: Record<string, ReturnType<typeof setupItem>> = {};

  const component = render(
    <Reorder
      data-testid="root"
      getRootRef={(element) => {
        if (!element) {
          return;
        }
        list = element;
      }}
      onReorder={onDragFinish}
      items={new Array(itemsCount).fill(0).map((_, index) => index)}
      renderItem={(item, index, dragger) => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            ref={(element) => {
              if (!element) {
                return;
              }
              const parent = element.parentElement!;
              const draggerElement = element.firstElementChild!;
              draggerElement.setAttribute('data-testid', `dragger-${index}`);
              itemToMockedData[`item-${index}`] = setupItem(parent, index);
            }}
          >
            {dragger}
            <div key={item}>Пункт {index + 1}</div>
          </div>
        );
      }}
    />,
  );

  return {
    component,
    get list() {
      return list!;
    },
    get swappedItems() {
      return swappedItems;
    },
    getItemSetup: (id: string) => {
      return itemToMockedData[id];
    },
  };
};

const setup = ({
  itemsCount = 3,
  renderItemContent = defaultRenderItemContent,
}: {
  itemsCount?: number;
  renderItemContent?: (index: number) => React.ReactNode;
}) => {
  let list;
  let swappedItems: SwappedItemRange | null = null;

  const onDragFinish = (swappedItemRange: SwappedItemRange) => {
    swappedItems = swappedItemRange;
  };
  const itemToMockedData: Record<string, ReturnType<typeof setupItem>> = {};

  const component = render(
    <Reorder.Root
      data-testid="root"
      getRootRef={(element) => {
        if (!element) {
          return;
        }
        list = element;
      }}
      onReorder={onDragFinish}
    >
      {new Array(itemsCount).fill(0).map((_, index) => {
        return (
          <Reorder.Item
            key={index}
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            getRootRef={(element) => {
              if (!element) {
                return;
              }
              itemToMockedData[`item-${index}`] = setupItem(element, index);
            }}
            data-testid={`item-${index}`}
          >
            {renderItemContent(index)}
          </Reorder.Item>
        );
      })}
    </Reorder.Root>,
  );

  return {
    component,
    get list() {
      return list!;
    },
    get swappedItems() {
      return swappedItems;
    },
    getItemSetup: (id: string) => {
      return itemToMockedData[id];
    },
  };
};

const dragItem = ({
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

  act(vi.runOnlyPendingTimers);

  breakPoints.forEach((breakPoint, index) => {
    mouseMove(dragger, {
      clientY: breakPoint,
    });
    act(vi.runOnlyPendingTimers);
    afterMove[index]?.();
  });
  act(vi.runOnlyPendingTimers);
  afterDragging && afterDragging();

  mouseUp(dragger);
};

describe('Reorder', () => {
  baselineComponent((props) => <Reorder items={[]} renderItem={() => <div />} {...props} />);

  describe.each<{ handlers: Array<typeof fireEvent.mouseDown> }>([
    { handlers: MOUSE_EVENTS_HANDLERS },
    { handlers: ADOPTED_TOUCH_EVENTS_HANDLERS },
  ])(
    'check dnd is working',
    ({ handlers: mouseEvents }: { handlers: Array<typeof fireEvent.mouseDown> }) => {
      it(
        'dnd working',
        withFakeTimers(() => {
          const setupData = setup({});
          const { getItemSetup } = setupData;

          dragItem({
            testId: 'dragger-0',
            breakPoints: [5, 140, 140, 124],
            afterDragging: () => {
              const item1Data = getItemSetup('item-1');
              expect(item1Data.transform).toBe('');
              const item2Data = getItemSetup('item-2');
              expect(item2Data.transform).toBe('translateY(50px)');
            },
            afterMove: {
              0: () => {
                const item1Data = getItemSetup('item-1');
                expect(item1Data.transform).toBe('translateY(50px)');
                const item2Data = getItemSetup('item-2');
                expect(item2Data.transform).toBe('translateY(50px)');
              },
            },
            mouseEvents,
          });

          expect(setupData.swappedItems).toEqual({ from: 0, to: 1 });

          dragItem({
            testId: 'dragger-2',
            breakPoints: [140, 140, 75, 140, 75],
            afterDragging: () => {
              const item1Data = getItemSetup('item-0');
              expect(item1Data.transform).toBe('');
              const item2Data = getItemSetup('item-1');
              expect(item2Data.transform).toBe('translateY(50px)');
            },
            afterMove: {
              0: () => {
                const item1Data = getItemSetup('item-0');
                expect(item1Data.transform).toBe('');
                const item2Data = getItemSetup('item-1');
                expect(item2Data.transform).toBe('');
              },
            },
            mouseEvents,
          });

          expect(setupData.swappedItems).toEqual({ from: 2, to: 1 });
        }),
      );

      it(
        'use list element like a trigger',
        withFakeTimers(() => {
          const setupData = setup({
            renderItemContent: (index) => (
              <Reorder.Trigger data-testid={`dragger-${index}`}>
                <div>Пункт {index + 1}</div>
              </Reorder.Trigger>
            ),
          });
          const { getItemSetup } = setupData;

          dragItem({
            testId: 'dragger-0',
            breakPoints: [5, 140, 140, 124],
            afterDragging: () => {
              const item1Data = getItemSetup('item-1');
              expect(item1Data.transform).toBe('');
              const item2Data = getItemSetup('item-2');
              expect(item2Data.transform).toBe('translateY(50px)');
            },
            afterMove: {
              0: () => {
                const item1Data = getItemSetup('item-1');
                expect(item1Data.transform).toBe('translateY(50px)');
                const item2Data = getItemSetup('item-2');
                expect(item2Data.transform).toBe('translateY(50px)');
              },
            },
            mouseEvents,
          });

          expect(setupData.swappedItems).toEqual({ from: 0, to: 1 });

          dragItem({
            testId: 'dragger-2',
            breakPoints: [140, 140, 75, 140, 75],
            afterDragging: () => {
              const item1Data = getItemSetup('item-0');
              expect(item1Data.transform).toBe('');
              const item2Data = getItemSetup('item-1');
              expect(item2Data.transform).toBe('translateY(50px)');
            },
            afterMove: {
              0: () => {
                const item1Data = getItemSetup('item-0');
                expect(item1Data.transform).toBe('');
                const item2Data = getItemSetup('item-1');
                expect(item2Data.transform).toBe('');
              },
            },
            mouseEvents,
          });

          expect(setupData.swappedItems).toEqual({ from: 2, to: 1 });
        }),
      );
    },
  );

  it(
    'dnd without subcomponents working',
    withFakeTimers(() => {
      const setupData = setupWithoutSubcomponents({});
      const { getItemSetup } = setupData;

      dragItem({
        testId: 'dragger-0',
        breakPoints: [5, 140, 140, 124],
        afterDragging: () => {
          const item1Data = getItemSetup('item-1');
          expect(item1Data.transform).toBe('');
          const item2Data = getItemSetup('item-2');
          expect(item2Data.transform).toBe('translateY(50px)');
        },
        afterMove: {
          0: () => {
            const item1Data = getItemSetup('item-1');
            expect(item1Data.transform).toBe('translateY(50px)');
            const item2Data = getItemSetup('item-2');
            expect(item2Data.transform).toBe('translateY(50px)');
          },
        },
      });

      expect(setupData.swappedItems).toEqual({ from: 0, to: 1 });

      dragItem({
        testId: 'dragger-2',
        breakPoints: [140, 140, 75, 140, 75],
        afterDragging: () => {
          const item1Data = getItemSetup('item-0');
          expect(item1Data.transform).toBe('');
          const item2Data = getItemSetup('item-1');
          expect(item2Data.transform).toBe('translateY(50px)');
        },
        afterMove: {
          0: () => {
            const item1Data = getItemSetup('item-0');
            expect(item1Data.transform).toBe('');
            const item2Data = getItemSetup('item-1');
            expect(item2Data.transform).toBe('');
          },
        },
      });

      expect(setupData.swappedItems).toEqual({ from: 2, to: 1 });
    }),
  );
});
