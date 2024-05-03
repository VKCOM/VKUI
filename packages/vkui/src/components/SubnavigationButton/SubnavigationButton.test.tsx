import { baselineComponent } from '../../testing/utils';
import { SubnavigationButton } from './SubnavigationButton';

describe('SubnavigationButton', () => {
  baselineComponent((props) => (
    <SubnavigationButton {...props}>Subnavigation Button</SubnavigationButton>
  ));
});
