import { act, createRef, Fragment, useRef, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  fakeTimersForScope,
  userEvent,
  waitCSSKeyframesAnimation,
  waitForFloatingPosition,
  withFakeTimers,
} from '../../testing/utils';
import { ActionSheet, type ActionSheetProps } from '../ActionSheet/ActionSheet';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { Panel } from '../Panel/Panel';
import { View } from '../View/View';
import { FocusTrap, FocusTrapInternal, type FocusTrapProps } from './FocusTrap';

const _children = ['first', 'middle', 'last'].map((item) => (
  <ActionSheetItem key={item} data-testid={item}>
    {item} Item
  </ActionSheetItem>
));

const ActionSheetTest = ({
  children = _children,
  onClosed: onClosedProp,
  ...props
}: Partial<ActionSheetProps> & Partial<FocusTrapProps>) => {
  const toggleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClosed: ActionSheetProps['onClosed'] = (options) => {
    if (onClosedProp) {
      onClosedProp(options);
    }
    setVisible(false);
  };

  return (
    <AppRoot>
      <AdaptivityProvider hasPointer viewWidth={ViewWidth.MOBILE}>
        <View activePanel="panel">
          <Panel id="panel">
            <CellButton
              data-testid="toggle"
              getRootRef={toggleRef}
              onClick={() => setVisible(true)}
            >
              Toggle ActionSheet
            </CellButton>
          </Panel>
        </View>
        {visible ? (
          <ActionSheet data-testid="sheet" toggleRef={toggleRef} onClosed={handleClosed} {...props}>
            {children}
          </ActionSheet>
        ) : null}
      </AdaptivityProvider>
    </AppRoot>
  );
};

const mockElementFocus = (element: HTMLElement | null, focusFn: VoidFunction) => {
  if (element) {
    vi.spyOn(element, 'focus').mockImplementation(focusFn);
  }
};

describe(FocusTrap, () => {
  const mountActionSheetViaClick = async () => {
    await userEvent.click(screen.getByTestId('toggle')); // mount ActionSheet
    await waitForFloatingPosition();
    await waitCSSKeyframesAnimation(screen.getByTestId('sheet'), { runOnlyPendingTimers: true });
  };

  const unmountActionSheet = async () => {
    await userEvent.keyboard('{Escape}');
    await waitForFloatingPosition();
    await waitCSSKeyframesAnimation(screen.getByTestId('sheet'), { runOnlyPendingTimers: true });
  };

  it(
    'renders with no focusable elements',
    withFakeTimers(async () => {
      render(
        <ActionSheetTest>
          <Fragment>NOPE</Fragment>
        </ActionSheetTest>,
      );
      await mountActionSheetViaClick();

      expect(screen.getByTestId('sheet')).toBeInTheDocument();
    }),
  );

  it(
    'focuses first element by default',
    withFakeTimers(async () => {
      render(<ActionSheetTest />);
      await mountActionSheetViaClick();

      expect(screen.getByTestId('first')).toHaveFocus();
    }),
  );

  it(
    'no focus when autoFocus=false',
    withFakeTimers(async () => {
      render(<ActionSheetTest autoFocus={false} />);
      await mountActionSheetViaClick();

      expect(screen.getByTestId('toggle')).toHaveFocus();
    }),
  );

  it('preserve focus when autoFocus=false with dynamic content', async () => {
    const Template = (props: { childIds: string[] }) => {
      const ref = useRef<HTMLDivElement | null>(null);
      return (
        <>
          <FocusTrap autoFocus={false} rootRef={ref}>
            <div ref={ref} tabIndex={-1}>
              {props.childIds.map((childId) => (
                <Button key={childId} data-testid={childId}>
                  Кнопка {childId}
                </Button>
              ))}
            </div>
          </FocusTrap>
          <input type="text" data-testid="element-to-focus" />
        </>
      );
    };

    const result = render(<Template childIds={['first', 'middle', 'last']} />);
    const input = result.getByTestId('element-to-focus');

    input.focus();
    expect(input).toHaveFocus();

    await act(async () => {
      result.rerender(<Template childIds={['first', 'last']} />);
    });

    expect(input).toHaveFocus();
  });

  it(
    'always calls passed onClose on ESCAPE press',
    withFakeTimers(async () => {
      const onClosed = vi.fn();
      render(<ActionSheetTest onClosed={onClosed} />);
      await mountActionSheetViaClick();
      await unmountActionSheet();
      await waitFor(() => expect(screen.getByTestId('toggle')).toHaveFocus());
      expect(onClosed).toHaveBeenCalledTimes(1);
    }),
  );

  describe('focus restoration', () => {
    fakeTimersForScope();
    it('restores focus by default', async () => {
      const onClosed = vi.fn();
      render(<ActionSheetTest onClosed={onClosed} />);
      await mountActionSheetViaClick();
      await unmountActionSheet();
      await waitFor(() => expect(screen.getByTestId('toggle')).toHaveFocus());
    });

    it('does not restore focus if restoreFocus={false}', async () => {
      const onClosed = vi.fn();
      render(<ActionSheetTest restoreFocus={false} onClosed={onClosed} />);
      await mountActionSheetViaClick();
      await unmountActionSheet();
      expect(screen.getByTestId('toggle')).not.toHaveFocus();
    });
  });

  describe('specific keyboard navigation', () => {
    fakeTimersForScope();
    const mountViaKeyboard = async () => {
      await userEvent.tab(); // focus toggle via keyboard
      await userEvent.keyboard('{enter}'); // mount ActionSheet via keyboard
      await waitForFloatingPosition();
      await waitCSSKeyframesAnimation(screen.getByTestId('sheet'), { runOnlyPendingTimers: true });
    };

    it('focuses first element on keyboard navigation', async () => {
      render(<ActionSheetTest />);
      await mountViaKeyboard();

      expect(screen.getByTestId('first')).toHaveFocus();
    });

    it('manages navigation inside trap on TAB', async () => {
      render(<ActionSheetTest />);
      await mountViaKeyboard();

      // backwards
      await userEvent.tab({ shift: true });
      expect(screen.getByTestId('last')).toHaveFocus();

      // backwards
      await userEvent.tab({ shift: true });
      expect(screen.getByTestId('middle')).toHaveFocus();

      // forward
      await userEvent.tab();
      expect(screen.getByTestId('last')).toHaveFocus();

      // forward
      await userEvent.tab();
      expect(screen.getByTestId('first')).toHaveFocus();
    });

    it('manages navigation inside trap on TAB with remove last child when navigate', async () => {
      const Template = (props: { childIds: string[] }) => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <FocusTrap rootRef={ref}>
            <div ref={ref} tabIndex={-1}>
              {props.childIds.map((childId) => (
                <Button key={childId} data-testid={childId}>
                  Кнопка {childId}
                </Button>
              ))}
            </div>
          </FocusTrap>
        );
      };

      const result = render(<Template childIds={['first', 'middle', 'last']} />);

      // forward to middle
      await userEvent.tab();
      expect(result.getByTestId('middle')).toHaveFocus();

      // remove last
      await act(async () => {
        result.rerender(<Template childIds={['first', 'middle']} />);
      });

      // check focus in middle yet
      expect(result.getByTestId('middle')).toHaveFocus();

      // forward to first
      await userEvent.tab();
      expect(result.getByTestId('first')).toHaveFocus();
    });

    it('manages navigation inside trap on TAB with remove middle child when focus on middle', async () => {
      const Template = (props: { childIds: string[] }) => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <FocusTrap rootRef={ref}>
            <div ref={ref} tabIndex={-1}>
              {props.childIds.map((childId) => (
                <Button key={childId} data-testid={childId}>
                  Кнопка {childId}
                </Button>
              ))}
            </div>
          </FocusTrap>
        );
      };

      const result = render(<Template childIds={['first', 'middle', 'last']} />);

      // forward to middle
      await userEvent.tab();
      expect(result.getByTestId('middle')).toHaveFocus();

      // remove middle
      await act(async () => {
        result.rerender(<Template childIds={['first', 'last']} />);
      });

      // reset focus to first
      expect(result.getByTestId('first')).toHaveFocus();

      // forward to last
      await userEvent.tab();
      expect(result.getByTestId('last')).toHaveFocus();
    });

    it('disabled FocusTrap navigation', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <>
            <FocusTrap disabled={true} rootRef={ref}>
              <div ref={ref} tabIndex={-1}>
                <Button data-testid="button-in-trap">Кнопка в FocusTrap</Button>
              </div>
            </FocusTrap>
            <Button data-testid="button-out-trap">Кнопка не в FocusTrap</Button>
          </>
        );
      };

      const result = render(<Fixture />);

      await act(async () => {
        result.getByTestId('button-in-trap')?.focus();
      });

      await userEvent.tab();

      expect(result.getByTestId('button-out-trap')).toHaveFocus();
    });

    it('should restore focus when disabled become false', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        const [showTrap, setShowTrap] = useState(false);
        const [disabled, setDisabled] = useState(false);
        return (
          <>
            {showTrap && (
              <FocusTrapInternal
                disabled={disabled}
                mount={!disabled}
                restoreFocus={true}
                rootRef={ref}
              >
                <div ref={ref} tabIndex={-1}>
                  <Button data-testid="button-in-trap">Кнопка в FocusTrap</Button>
                  <Button data-testid="button-set-disabled" onClick={() => setDisabled(true)}>
                    Кнопка не в FocusTrap
                  </Button>
                </div>
              </FocusTrapInternal>
            )}
            <Button data-testid="button-show-trap" onClick={() => setShowTrap(true)}>
              Кнопка не в FocusTrap
            </Button>
          </>
        );
      };

      const result = render(<Fixture />);

      await act(async () => {
        const showButton = result.getByTestId('button-show-trap');
        showButton?.focus();
        showButton?.click();
      });

      await userEvent.tab();

      expect(result.getByTestId('button-set-disabled')).toHaveFocus();

      await act(async () => {
        result.getByTestId('button-set-disabled').click();
      });

      await waitFor(() => expect(result.getByTestId('button-show-trap')).toHaveFocus());
    });

    it('check autoFocus to root', async () => {
      const ref = createRef<HTMLDivElement | null>();
      const rootFocus = vi.fn();
      const buttonFocus = vi.fn();

      render(
        <>
          <FocusTrap autoFocus="root" rootRef={ref}>
            <div
              ref={(element) => {
                mockElementFocus(element, rootFocus);
                ref.current = element;
              }}
              tabIndex={-1}
            >
              <Button
                data-testid="button-in-trap"
                getRootRef={(element) => mockElementFocus(element, buttonFocus)}
              >
                Кнопка в FocusTrap
              </Button>
            </div>
          </FocusTrap>
        </>,
      );
      await waitFor(() => {
        expect(rootFocus).toHaveBeenCalledTimes(1);
        expect(buttonFocus).toHaveBeenCalledTimes(0);
      });
    });
    it('should autofocus to container when dont have another active elements', async () => {
      const ref = createRef<HTMLDivElement | null>();
      const rootFocus = vi.fn();
      render(
        <>
          <FocusTrap rootRef={ref} autoFocus>
            <div
              ref={(element) => {
                mockElementFocus(element, rootFocus);
                ref.current = element;
              }}
              tabIndex={-1}
            >
              <div></div>
            </div>
          </FocusTrap>
        </>,
      );
      await waitFor(() => {
        expect(rootFocus).toHaveBeenCalledTimes(1);
      });
    });

    it('should focus first element when focus comes from outside via Tab', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <>
            <Button data-testid="button-outside">Кнопка вне FocusTrap</Button>
            <FocusTrap rootRef={ref} autoFocus={false}>
              <div ref={ref} tabIndex={-1}>
                <Button data-testid="first">Первая кнопка</Button>
                <Button data-testid="middle">Средняя кнопка</Button>
                <Button data-testid="last">Последняя кнопка</Button>
              </div>
            </FocusTrap>
          </>
        );
      };

      const result = render(<Fixture />);

      // Фокус на элементе вне FocusTrap
      await act(async () => {
        result.getByTestId('button-outside')?.focus();
      });
      expect(result.getByTestId('button-outside')).toHaveFocus();

      // Нажимаем Tab - фокус попадает на beforeGuard и должен перенестись на первый элемент
      await userEvent.tab();
      expect(result.getByTestId('first')).toHaveFocus();
      expect(result.getByTestId('last')).not.toHaveFocus();
    });

    it('should focus first element when focus comes from outside via Tab (relatedTarget is null)', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <>
            <input type="text" data-testid="input-outside" />
            <FocusTrap rootRef={ref} autoFocus={false}>
              <div ref={ref} tabIndex={-1}>
                <Button data-testid="first">Первая кнопка</Button>
                <Button data-testid="last">Последняя кнопка</Button>
              </div>
            </FocusTrap>
          </>
        );
      };

      const result = render(<Fixture />);

      // Фокус на элементе вне FocusTrap
      await act(async () => {
        result.getByTestId('input-outside')?.focus();
      });
      expect(result.getByTestId('input-outside')).toHaveFocus();

      // Нажимаем Tab - фокус попадает на beforeGuard и должен перенестись на первый элемент
      await userEvent.tab();
      expect(result.getByTestId('first')).toHaveFocus();
    });

    it('should focus last element when cycling from first element via Shift+Tab', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <FocusTrap rootRef={ref}>
            <div ref={ref} tabIndex={-1}>
              <Button data-testid="first">Первая кнопка</Button>
              <Button data-testid="middle">Средняя кнопка</Button>
              <Button data-testid="last">Последняя кнопка</Button>
            </div>
          </FocusTrap>
        );
      };

      const result = render(<Fixture />);

      // Фокус на первом элементе внутри FocusTrap
      await act(async () => {
        result.getByTestId('first')?.focus();
      });
      expect(result.getByTestId('first')).toHaveFocus();

      // Нажимаем Shift+Tab - фокус должен попасть на последний элемент (циклическая навигация)
      await userEvent.tab({ shift: true });
      expect(result.getByTestId('last')).toHaveFocus();
    });

    it('should focus first element when cycling from last element via Tab', async () => {
      const Fixture = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        return (
          <FocusTrap rootRef={ref}>
            <div ref={ref} tabIndex={-1}>
              <Button data-testid="first">Первая кнопка</Button>
              <Button data-testid="middle">Средняя кнопка</Button>
              <Button data-testid="last">Последняя кнопка</Button>
            </div>
          </FocusTrap>
        );
      };

      const result = render(<Fixture />);

      // Фокус на последнем элементе внутри FocusTrap
      await act(async () => {
        result.getByTestId('last')?.focus();
      });
      expect(result.getByTestId('last')).toHaveFocus();

      // Нажимаем Tab - фокус должен попасть на первый элемент (циклическая навигация)
      await userEvent.tab();
      expect(result.getByTestId('first')).toHaveFocus();
    });
  });
});
