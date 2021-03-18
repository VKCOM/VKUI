import ChipsSelect from './ChipsSelect';
import { screenshot, mount } from '../../testing/e2e';
import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider';
import AppRoot from '../AppRoot/AppRoot';

describe('ChipsSelect', () => {
  const options = new Array(20).fill(0).map((_, i) => ({ value: i, label: `Option #${i}` }));
  it('Scrolls to item via arrows', async () => {
    await mount((
      <AppRoot embedded>
        <AdaptivityProvider>
          <ChipsSelect id="chips" options={options} />
        </AdaptivityProvider>
      </AppRoot>
    ));
    await page.focus('#chips');
    for (let i = 0; i < 7; i++) {
      await page.keyboard.press('ArrowDown');
    }
    expect(await screenshot(null, { selector: '.ChipsSelect, .ChipsSelect__options' })).toMatchImageSnapshot();
  });
});
