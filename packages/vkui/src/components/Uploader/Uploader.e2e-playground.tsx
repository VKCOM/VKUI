import * as React from 'react';
import { Icon56CameraOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Placeholder } from '../Placeholder/Placeholder';
import { Uploader, type UploaderProps } from './Uploader';

export const UploaderPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props} propSets={[{}]}>
    {(props: UploaderProps) => (
      <Uploader {...props} style={{ margin: 16 }}>
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
    )}
  </ComponentPlayground>
);
