import { baselineComponent } from '../../testing/utils';
import { ModalPageContent } from './ModalPageContent';

describe(ModalPageContent, () => {
  baselineComponent((props) => <ModalPageContent {...props}>Content</ModalPageContent>);
});
