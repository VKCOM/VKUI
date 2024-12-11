import { Icon24UserAddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichCell, type RichCellProps } from './RichCell';

export const RichCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [<Avatar size={72} key="72" />],
          overTitle: ['Subhead subhead subhead subhead'],
          children: ['Children children children children'],
          subtitle: ['Text text text text text text'],
          extraSubtitle: ['Caption caption caption caption'],
          after: ['After'],
          afterAlign: ['start', 'center', 'end'],
          afterCaption: ['After Caption'],
          bottom: [
            <UsersStack key="stack" photos={['', '', '']}>
              N общих друга
            </UsersStack>,
          ],
          actions: [
            <ButtonGroup key="actions" gap="s" stretched>
              <Button>Primary</Button>
              <Button mode="secondary">Secondary</Button>
            </ButtonGroup>,
          ],
          $adaptivity: 'y',
        },
        {
          before: [<Avatar size={72} key="72" />],
          overTitle: ['Subhead subhead subhead subhead'],
          children: ['Children children children children'],
          subtitle: ['Text text text text text text'],
          extraSubtitle: ['Caption caption caption caption'],
          after: ['After'],
          afterCaption: ['After Caption'],
          bottom: [
            <UsersStack key="stack" photos={['', '', '']}>
              N общих друга
            </UsersStack>,
          ],
          actions: [
            <ButtonGroup key="actions" gap="s" stretched>
              <Button>Primary</Button>
              <Button mode="secondary">Secondary</Button>
            </ButtonGroup>,
          ],
          multiline: [true],
        },
        {
          before: [<Avatar size={48} key="48" />],
          children: ['Михаил Лихачев'],
          overTitle: ['Команда ВКонтакте, Санкт-Петербург'],
          after: [
            <RichCell.Icon key="icon">
              <Icon24UserAddOutline />
            </RichCell.Icon>,
          ],
        },
        {
          before: [<Avatar size={24} key="24" />],
          children: ['Михаил'],
          after: ['Very very very very very very very long after'],
          beforeAlign: ['center', 'end'],
          contentAlign: ['center', 'end'],
        },
      ]}
    >
      {(props: RichCellProps) => <RichCell {...props} />}
    </ComponentPlayground>
  );
};
