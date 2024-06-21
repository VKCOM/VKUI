import * as React from 'react';
import { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitForFloatingPosition,
} from '../../testing/utils';
import { ActionSheet, ActionSheetProps } from '../ActionSheet/ActionSheet';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
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
  const toggleRef = React.useRef(null);
  const [actionSheet, toggleActionSheet] = React.useState<any>(null);

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
    act(jest.runAllTimers);
  };

  const unmountActionSheet = async () => {
    await userEvent.keyboard('{Escape}');
    await waitForFloatingPosition();
    act(jest.runAllTimers);
  };

  it('renders with no focusable elements', async () => {
    render(
      <ActionSheetTest>
        <React.Fragment>NOPE</React.Fragment>
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
      act(jest.runAllTimers);
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
      const result = render(<ActionSheetTest />);
      await mountViaKeyboard();

      // forward to middle
      await userEvent.tab();
      expect(result.getByTestId('middle')).toHaveFocus();

      // remove last
      await waitFor(() => result.getByTestId('last').remove());

      // check focus in middle yet
      expect(result.getByTestId('middle')).toHaveFocus();

      // forward to first
      await userEvent.tab();
      expect(result.getByTestId('first')).toHaveFocus();
    });

    it('manages navigation inside trap on TAB with remove middle child when focus on middle', async () => {
      const result = render(<ActionSheetTest />);
      await mountViaKeyboard();

      // forward to middle
      await userEvent.tab();
      expect(result.getByTestId('middle')).toHaveFocus();

      // remove middle
      await waitFor(() => result.getByTestId('middle').remove())

      // reset focus to first
      expect(result.getByTestId('first')).toHaveFocus();

      // forward to last
      await userEvent.tab();
      expect(result.getByTestId('last')).toHaveFocus();
    });
  });
});
