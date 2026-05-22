import { svgPathToString } from '../../svg/path/path';
import * as shapes from './shapes';

it('shapes.shapeWithRotate', () => {
  expect(svgPathToString(shapes.shapeWithRotate(shapes.ovalParams, 38))).toBe(
    'M27.1300,27.1300C20.1700,34.0900,10.8880,36.0940,6.3970,31.6030C1.9060,27.1120,3.9100,17.8300,10.8700,10.8700C17.8300,3.9100,27.1120,1.9060,31.6030,6.3970C36.0940,10.8880,34.0900,20.1700,27.1300,27.1300Z',
  );
});
