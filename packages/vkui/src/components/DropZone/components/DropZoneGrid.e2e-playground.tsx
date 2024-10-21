import { Icon56CameraOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Placeholder } from '../../Placeholder/Placeholder';
import { DropZone } from '../DropZone';
import type { DropZoneGridProps } from './DropZoneGrid';

const Item = () => (
  <DropZone>
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
);

export const DropZoneGridPlayground = (props: ComponentPlaygroundProps) => (
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
    {({ section, ...props }: DropZoneGridProps & { section: number }) => (
      <DropZone.Grid {...props}>
        {Array(section)
          .fill(null)
          .map((_, index) => (
            <Item key={index} />
          ))}
      </DropZone.Grid>
    )}
  </ComponentPlayground>
);
