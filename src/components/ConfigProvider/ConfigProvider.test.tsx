import { baselineComponent } from '../../testing/utils';
import ConfigProvider from './ConfigProvider';

describe('ConfigProvider', () => {
  baselineComponent<any>(ConfigProvider, { forward: false });
});
