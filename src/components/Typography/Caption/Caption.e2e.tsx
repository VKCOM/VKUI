import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import Caption, { CaptionProps } from './Caption';

describe('Caption', () => {
  describeScreenshotFuzz((props: CaptionProps) => <Caption {...props} style={{ marginBottom: 16 }}>Caption lvl{props.level} {props.caps && 'CAPS'} {props.weight}</Caption>, [{
    level: ['1', '2'],
    weight: ['regular', 'medium'],
  }, {
    level: ['1', '2'],
    weight: ['semibold'],
    caps: [undefined, true],
  }, {
    level: ['3', '4'],
    weight: ['regular'],
  }, {
    level: ['3'],
    weight: ['semibold'],
    caps: [true],
  }, {
    level: ['4'],
    weight: ['bold'],
    caps: [true],
  }]);
});
