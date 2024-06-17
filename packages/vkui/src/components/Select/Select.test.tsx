import { baselineComponent } from '../../testing/utils';
import { PlatformProvider } from '../PlatformProvider/PlatformProvider';
import { Select } from './Select';

describe('Select', () => {
  baselineComponent((props) => (
    <PlatformProvider value="vkcom">
      <label htmlFor="select-id">Select an option</label>
      <Select id="select-id" options={[]} {...props} />
    </PlatformProvider>
  ));
});
