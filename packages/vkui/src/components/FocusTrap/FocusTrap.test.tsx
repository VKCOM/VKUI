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
import { ActionSheet, ActionSheetProps } from '../ActionSheet/ActionSheet';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { Panel } from '../Panel/Panel';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View } from '../View/View';
import { FocusTrap, FocusTrapProps } from './FocusTrap';

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
  const [actionSheet, toggleActionSheet] = useState<any>(null);

  const handleClose = () => {
    if (onCloseProp) {
      onCloseProp();
    }
    toggleActionSheet(null);
  };

  return (
    <AppRoot>
      <AdaptivityProvider hasPointer viewWidth={ViewWidth.MOBILE}>
        <SplitLayout popout={actionSheet}>
          <SplitCol>
            <View activePanel="panel">
              <Panel id="panel">
                <CellButton
                  data-testid="toggle"
                  getRootRef={toggleRef}
                  onClick={() =>
                    toggleActionSheet(
                      <ActionSheet
                        data-testid="sheet"
                        toggleRef={toggleRef}
                        onClose={handleClose}
                        {...props}
                      >
                        {children}
                      </ActionSheet>,
                    )
                  }
                >
                  Toggle ActionSheet
                </CellButton>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AdaptivityProvider>
    </AppRoot>
  );
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

  it('always calls passed onClose on ESCAPE press', async () => {
    const onClose = jest.fn();
    render(<ActionSheetTest onClose={onClose} />);
    await mountActionSheetViaClick();
    await unmountActionSheet();
    await waitFor(() => expect(screen.getByTestId('toggle')).toHaveFocus());
    expect(onClose).toHaveBeenCalledTimes(1);
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
  });
});
