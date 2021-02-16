import Button, { ButtonProps } from './Button';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Button', () => {
  describeScreenshotFuzz((props: ButtonProps) => <Button {...props}>Кнопка</Button>, [{
    mode: [
      'primary', 'secondary', 'tertiary',
      'outline', 'commerce', 'destructive',
      'overlay_primary', 'overlay_secondary', 'overlay_outline'],
    disabled: [undefined, true],
  }, {
    size: ['s', 'm', 'l'],
    $adaptivity: 'y',
  }]);
});
