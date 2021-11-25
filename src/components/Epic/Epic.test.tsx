import { noop } from '../../lib/utils';
import { baselineComponent } from '../../testing/utils';
import { Epic } from './Epic';

describe('Epic', () => {
  beforeAll(() => {
    jest.spyOn(window, 'scrollTo').mockImplementation(noop);
  });
  afterAll(() => {
    (window.scrollTo as any).mockRestore();
  });
  baselineComponent(Epic);
});
