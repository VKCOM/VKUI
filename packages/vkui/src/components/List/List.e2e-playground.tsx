import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { List, type ListProps } from './List';

export const ListPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          gap: [0, 20],
        },
      ]}
    >
      {(props: ListProps) => (
        <div style={{ padding: 20 }}>
          <List {...props}>
            <Cell before={<Avatar />} draggable mode="removable">
              Lorem
            </Cell>
            <Cell before={<Avatar />} draggable mode="removable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Cell>
          </List>
        </div>
      )}
    </ComponentPlayground>
  );
};
