import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { WriteBar, WriteBarProps } from './WriteBar';

describe('WriteBar', () => {
  baselineComponent((props: WriteBarProps) => (
    <>
      <VisuallyHidden id="writebar" Component="label">
        WriteBar
      </VisuallyHidden>
      <WriteBar aria-labelledby="writebar" {...props} />
    </>
  ));
});
