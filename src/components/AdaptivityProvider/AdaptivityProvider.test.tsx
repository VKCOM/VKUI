import { baselineComponent } from '../../testing/utils';
import AdaptivityProvider from './AdaptivityProvider';

describe('AdaptivityProvider', () => {
  baselineComponent<any>(AdaptivityProvider, { forward: false });
});
