import { Icon56CameraOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Placeholder } from '../Placeholder/Placeholder';
import { DropZone, type DropZoneProps } from './DropZone';

export const DropZonePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props} propSets={[{}]}>
    {(props: DropZoneProps) => (
      <DropZone {...props} style={{ margin: 16 }}>
        <Placeholder.Container>
          <Placeholder.Icon>
            <Icon56CameraOutline />
          </Placeholder.Icon>
          <Placeholder.Title>Быстрая отправка</Placeholder.Title>
          <Placeholder.Description>
            Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
          </Placeholder.Description>
        </Placeholder.Container>
      </DropZone>
    )}
  </ComponentPlayground>
);
