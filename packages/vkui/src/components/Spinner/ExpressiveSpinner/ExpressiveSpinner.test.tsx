import { describe } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { ExpressiveSpinner } from './ExpressiveSpinner';

describe('Spinner', () => {
  baselineComponent((props) => <ExpressiveSpinner disableAnimation {...props} />);
});
