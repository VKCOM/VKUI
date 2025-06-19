import * as React from 'react';
import { chunkArray } from '@vkontakte/vkjs';
import { type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Shape } from './Shape';
import * as shapes from './shapes';

export const ShapePlayground = ({}: ComponentPlaygroundProps) => {
  // TODO [@vkontakte/vkjs@>=2.1.0]: удалить as https://github.com/VKCOM/vkjs/pull/695/files
  const chunkShapes = chunkArray(shapes.shapeList as unknown as shapes.ShapeParameters[], 5);

  return (
    <table style={{ textAlign: 'center' }}>
      <tbody>
        {chunkShapes.map((row, index) => (
          <React.Fragment key={index}>
            <tr>
              {row.map((shapeParams, i) => (
                <td key={i} style={{ width: 100, height: 100 }}>
                  <Shape size={50} params={shapeParams} />
                </td>
              ))}
            </tr>
            <tr>
              {row.map((shapeParams, i) => (
                <th key={i}>{shapes.shapeNameMap.get(shapeParams)}</th>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
