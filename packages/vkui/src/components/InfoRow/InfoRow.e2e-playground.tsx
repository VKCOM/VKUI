import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { InfoRow, type InfoRowProps } from './InfoRow';

export const InfoRowPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<InfoRowProps>
      {...props}
      propSets={[
        {
          children: ['Команда ВКонтакте', undefined],
          header: ['Место работы', undefined],
        },
      ]}
    >
      {(props) => <InfoRow {...props} />}
    </ComponentPlayground>
  );
};
