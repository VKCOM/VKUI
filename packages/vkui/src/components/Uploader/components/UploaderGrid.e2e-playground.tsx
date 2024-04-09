import * as React from 'react';
import { Icon56CameraOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Placeholder } from '../../Placeholder/Placeholder';
import { Uploader } from '../Uploader';
import { UploaderGridProps } from './UploaderGrid';

const Item = () => (
  <Uploader>
    <Placeholder.Container>
      <Placeholder.Icon>
        <Icon56CameraOutline />
      </Placeholder.Icon>
      <Placeholder.Header>Быстрая отправка</Placeholder.Header>
      <Placeholder.Text>
        Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
      </Placeholder.Text>
    </Placeholder.Container>
  </Uploader>
);

export const UploaderGridPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        direction: ['column'],
        section: [2],
      },
      {
        direction: ['row'],
        section: [2, 3, 4],
      },
    ]}
  >
    {({ section, ...props }: UploaderGridProps & { section: number }) => (
      <Uploader.Grid {...props}>
        {Array(section)
          .fill(null)
          .map((_, index) => (
            <Item key={index} />
          ))}
      </Uploader.Grid>
    )}
  </ComponentPlayground>
);
