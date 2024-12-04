import { baselineComponent } from '../../testing/utils';
import { ModalPageFooter } from './ModalPageFooter';

describe(ModalPageFooter, () => {
  baselineComponent((props) => <ModalPageFooter {...props}>Footer</ModalPageFooter>);
});
