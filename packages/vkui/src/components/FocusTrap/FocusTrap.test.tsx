import { act, Fragment, useRef, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitCSSKeyframesAnimation,
  waitForFloatingPosition,
} from '../../testing/utils';
import { ActionSheet, type ActionSheetProps } from '../ActionSheet/ActionSheet';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { Panel } from '../Panel/Panel';
import { View } from '../View/View';
import { FocusTrap, type FocusTrapProps } from './FocusTrap';

const _children = ['first', 'middle', 'last'].map((item) => (
  <ActionSheetItem key={item} data-testid={item}>
    {item} Item
  </ActionSheetItem>
));

const ActionSheetTest = ({
  children = _children,
  onClose: onCloseProp,
  ...props
}: Partial<ActionSheetProps> & Partial<FocusTrapProps>) => {
  const toggleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    if (onCloseProp) {
      onCloseProp();
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
          <ActionSheet data-testid="sheet" toggleRef={toggleRef} onClose={handleClose} {...props}>
            {children}
          </ActionSheet>
        ) : null}
      </AdaptivityProvider>
    </AppRoot>
  );
};

const mockElementFocus = (element: HTMLElement | null, focusFn: VoidFunction) => {
  if (element) {
    jest.spyOn(element, 'focus').mockImplementation(focusFn);
  }
};

describe(FocusTrap, () => {
  fakeTimers();
  baselineComponent(FocusTrap);

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

  it('renders with no focusable elements', async () => {
    render(
      <ActionSheetTest>
        <Fragment>NOPE</Fragment>
      </ActionSheetTest>,
    );
    await mountActionSheetViaClick();

    expect(screen.getByTestId('sheet')).toBeInTheDocument();
  });

  it('focuses first element by default', async () => {
    render(<ActionSheetTest />);
    await mountActionSheetViaClick();

    expect(screen.getByTestId('first')).toHaveFocus();
  });

  it('no focus when autoFocus=false', async () => {
    render(<ActionSheetTest autoFocus={false} />);
    await mountActionSheetViaClick();

    expect(screen.getByTestId('toggle')).toHaveFocus();
  });

  it('preserve focus when autoFocus=false with dynamic content', async () => {
    const Template = (props: { childIds: string[] }) => {
      return (
        <>
          <FocusTrap autoFocus={false}>
            <div>
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

  it('always calls passed onClose on ESCAPE press', async () => {
    const onClose = jest.fn();
    render(<ActionSheetTest onClose={onClose} />);
    await mountActionSheetViaClick();
    await unmountActionSheet();
    await waitFor(() => expect(screen.getByTestId('toggle')).toHaveFocus());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('captures Esc by default and calls onClose', async () => {
    jest.useFakeTimers();
    const onCloseStub = jest.fn();
    render(
      <FocusTrap onClose={onCloseStub}>
        <input onKeyDown={(event) => event.stopPropagation()} defaultValue="Test input" />
      </FocusTrap>,
    );

    await userEvent.tab();
    await userEvent.keyboard(`{Escape}`);

    // event.stopPropagation of input does nothing, onClose of FocusTrap is triggered on Esc
    expect(onCloseStub).toHaveBeenCalledTimes(1);
  });

  it('allows to stop Escape keyboard event propagation from inner element with captureEscapeKeyboardEvent flag set to false', async () => {
    jest.useFakeTimers();
    const onCloseStub = jest.fn();
    render(
      <FocusTrap onClose={onCloseStub} captureEscapeKeyboardEvent={false}>
        <input
          data-testid="input"
          onKeyDown={(event) => event.stopPropagation()}
          defaultValue="Test button"
        />
      </FocusTrap>,
    );

    await userEvent.tab();
    await userEvent.keyboard(`{Escape}`);

    // event.stopPropagation of input doesn't trigger onClose of FocusTrap on Esc
    expect(onCloseStub).toHaveBeenCalledTimes(0);
  });

  describe('focus restoration', () => {
    it('restores focus by default', async () => {
      const onClose = jest.fn();
      render(<ActionSheetTest onClose={onClose} />);
      await mountActionSheetViaClick();
      await unmountActionSheet();
      await waitFor(() => expect(screen.getByTestId('toggle')).toHaveFocus());
    });

    it('does not restore focus if restoreFocus={false}', async () => {
      const onClose = jest.fn();
      render(<ActionSheetTest restoreFocus={false} onClose={onClose} />);
      await mountActionSheetViaClick();
      await unmountActionSheet();
      expect(screen.getByTestId('toggle')).not.toHaveFocus();
    });
  });

  describe('specific keyboard navigation', () => {
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
        return (
          <FocusTrap>
            <div>
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
        return (
          <FocusTrap>
            <div>
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
      const result = render(
        <>
          <FocusTrap disabled={true}>
            <Button data-testid="button-in-trap">Кнопка в FocusTrap</Button>
          </FocusTrap>
          <Button data-testid="button-out-trap">Кнопка не в FocusTrap</Button>
        </>,
      );

      await act(async () => {
        result.getByTestId('button-in-trap')?.focus();
      });

      await userEvent.tab();

      expect(result.getByTestId('button-out-trap')).toHaveFocus();
    });

    it('should restore focus when mount become true', async () => {
      const Fixture = () => {
        const [showTrap, setShowTrap] = useState(false);
        const [disabled, setDisabled] = useState(false);
        return (
          <>
            {showTrap && (
              <FocusTrap disabled={disabled} mount={!disabled} restoreFocus={true}>
                <Button data-testid="button-in-trap">Кнопка в FocusTrap</Button>
                <Button data-testid="button-set-disabled" onClick={() => setDisabled(true)}>
                  Кнопка не в FocusTrap
                </Button>
              </FocusTrap>
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
      const rootFocus = jest.fn();
      const buttonFocus = jest.fn();

      render(
        <>
          <FocusTrap
            autoFocus="root"
            getRootRef={(element) => mockElementFocus(element, rootFocus)}
          >
            <Button
              data-testid="button-in-trap"
              getRootRef={(element) => mockElementFocus(element, buttonFocus)}
            >
              Кнопка в FocusTrap
            </Button>
          </FocusTrap>
        </>,
      );
      await waitFor(() => {
        expect(rootFocus).toHaveBeenCalledTimes(1);
        expect(buttonFocus).toHaveBeenCalledTimes(0);
      });
    });
    it('should autofocus to container when dont have another active elements', async () => {
      const rootFocus = jest.fn();
      render(
        <>
          <FocusTrap autoFocus getRootRef={(element) => mockElementFocus(element, rootFocus)}>
            <div />
          </FocusTrap>
        </>,
      );
      await waitFor(() => {
        expect(rootFocus).toHaveBeenCalledTimes(1);
      });
    });
  });
});
