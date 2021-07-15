import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../hoc/withAdaptivity';
import { baselineComponent } from '../../testing/utils';
import ActionSheet from './ActionSheet';
import ActionSheetItem from '../ActionSheetItem/ActionSheetItem';
import userEvent from '@testing-library/user-event';
import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider';

describe('ActionSheet', () => {
  describe('desktop', () => {
    const toggle = document.createElement('div');
    const adaptivity = { viewWidth: ViewWidth.DESKTOP, hasMouse: true };
    baselineComponent((p) => <ActionSheet {...p} toggleRef={toggle} />, { adaptivity });

    // force desktop mode because no transition event in jsdom
    it('calls onChange when autoclose=true', () => {
      const onChange = jest.fn();
      const { unmount } = render((
        <AdaptivityProvider {...adaptivity}>
          <ActionSheet toggleRef={toggle} onClose={() => unmount()}>
            <ActionSheetItem selectable autoclose onChange={onChange} data-testid="item" />
          </ActionSheet>
        </AdaptivityProvider>
      ));
      userEvent.click(screen.getByTestId('item'));
      expect(onChange).toBeCalled();
    });
  });
  describe('mobile', () =>
    baselineComponent(ActionSheet, { adaptivity: { viewWidth: ViewWidth.MOBILE, hasMouse: false } }));
});
