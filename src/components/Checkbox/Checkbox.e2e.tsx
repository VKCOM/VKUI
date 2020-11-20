import { screenshot } from '../../../e2e';

describe('Checkbox', () => {
  test('should render', async () => {
    console.log('executing test');
    expect(true).toBe(true);
    const screen = await screenshot(({ Checkbox, React }) => <Checkbox>label</Checkbox>);
    expect(screen).toMatchImageSnapshot();
  });
});
