import { RootComponent } from '../../../components/RootComponent/RootComponent';
import { type HasRootRef } from '../../../types';
import { svgPathToString } from '../../svg/path/path';
import * as shapes from './shapes';

export interface ShapeProps extends React.ComponentProps<'svg'>, HasRootRef<SVGElement> {
  size?: number;
  params: shapes.ShapeParameters;
}

export function Shape({ size = 24, params, ...props }: ShapeProps) {
  return (
    <RootComponent Component="svg" width={size} height={size} {...props}>
      <path d={svgPathToString(shapes.shape(params, size))} fill="currentColor" />
    </RootComponent>
  );
}
