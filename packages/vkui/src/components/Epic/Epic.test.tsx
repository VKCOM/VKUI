import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Epic } from './Epic';

describe('Epic', () => {
  beforeAll(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(noop);
  });
  afterAll(() => {
    (window.scrollTo as any).mockRestore();
  });
  baselineComponent(Epic);
});
