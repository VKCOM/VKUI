import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent, runAllTimers, waitForFloatingPosition } from '../../testing/utils';
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
  <ActionSheetItem key={item} autoClose data-testid={item}>
    {item} Item
  </ActionSheetItem>
));

const ActionSheetTest = ({
  children = _children,
  onClose,
  ...props
}: Partial<ActionSheetProps> & Partial<FocusTrapProps>) => {
  const toggleRef = React.useRef(null);
  const [actionSheet, toggleActionSheet] = React.useState<any>(null);

  const _onClose = () => {
    toggleActionSheet(null);
    onClose && onClose();
  };

  const _actionSheet = (
    <ActionSheet data-testid="sheet" toggleRef={toggleRef} onClose={_onClose} {...props}>
      {children}
    </ActionSheet>
  );

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
                  onClick={() => toggleActionSheet(_actionSheet)}
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

describe('FocusTrap', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  baselineComponent(FocusTrap, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });

  const mountActionSheetViaClick = async () => {
    userEvent.click(screen.getByTestId('toggle')); // mount ActionSheet
    await waitForFloatingPosition();
    runAllTimers();
  };

  const mountAndUnmountActionSheet = async () => {
    await mountActionSheetViaClick();

    userEvent.keyboard('{esc}');
    runAllTimers();
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

  it('does not focus first element by default', async () => {
    render(<ActionSheetTest />);
    await mountActionSheetViaClick();

    expect(screen.getByTestId('first')).not.toHaveFocus();
  });

  it('always calls passed onClose on ESCAPE press', async () => {
    const onClose = jest.fn();
    render(<ActionSheetTest onClose={onClose} />);
    await mountAndUnmountActionSheet();

    expect(onClose).toBeCalledTimes(1);
  });

  describe('focus restoration', () => {
    it('restores focus by default', async () => {
      render(<ActionSheetTest onClose={() => jest.fn()} />);
      await mountAndUnmountActionSheet();

      expect(screen.getByTestId('toggle')).toHaveFocus();
    });

    it('does not restore focus if restoreFocus={false}', async () => {
      render(<ActionSheetTest restoreFocus={false} onClose={() => jest.fn()} />);
      await mountAndUnmountActionSheet();

      expect(screen.getByTestId('toggle')).not.toHaveFocus();
    });
  });

  describe('specific keyboard navigation', () => {
    const mountViaKeyboard = async () => {
      userEvent.tab(); // focus toggle via keyboard
      userEvent.keyboard('{enter}'); // mount ActionSheet via keyboard
      await waitForFloatingPosition();
      runAllTimers();
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
      userEvent.tab({ shift: true });
      expect(screen.getByTestId('last')).toHaveFocus();

      // backwards
      userEvent.tab({ shift: true });
      expect(screen.getByTestId('middle')).toHaveFocus();

      // forward
      userEvent.tab();
      expect(screen.getByTestId('last')).toHaveFocus();

      // forward
      userEvent.tab();
      expect(screen.getByTestId('first')).toHaveFocus();
    });
  });
});
