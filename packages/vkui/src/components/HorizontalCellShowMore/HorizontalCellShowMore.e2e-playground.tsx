import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { HorizontalCellShowMore, type HorizontalCellShowMoreProps } from './HorizontalCellShowMore';

export const HorizontalCellShowMorePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['Показать все'],
          height: [124, 96],
          size: ['l'],
        },
        {
          children: ['Show more'],
          height: [124, 96],
          size: ['l'],
        },
      ]}
    >
      {(props: HorizontalCellShowMoreProps) => (
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <AlbumItems height={props.height} />
            <HorizontalCellShowMore {...props} />
          </div>
        </HorizontalScroll>
      )}
    </ComponentPlayground>
  );
};

const albumItems = [
  {
    id: 1,
    title: 'Команда <3',
    size: 4,
  },
  {
    id: 3,
    title: 'Медиагалерея ВКонтакте',
    size: 64,
  },
];

function AlbumItems({ height = 124 }: { height?: number }) {
  return (
    <>
      {albumItems.map(({ id, title, size }) => (
        <HorizontalCell key={id} size="l" header={title} subtitle={`${size} фотографии`}>
          <Avatar size={height} />
        </HorizontalCell>
      ))}
    </>
  );
}

const smallCells = new Array(3).fill(0).map((_, i) => (
  <HorizontalCell key={i} header={`item ${i + 1}`}>
    <Avatar size={56} />
  </HorizontalCell>
));
export const HorizontalCellShowMoreMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s'],
        },
      ]}
    >
      {(props: HorizontalCellShowMoreProps) => (
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>{smallCells}</div>
          <HorizontalCellShowMore {...props} compensateLastCellIndent />
        </HorizontalScroll>
      )}
    </ComponentPlayground>
  );
};
