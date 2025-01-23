import { Icon24UserAddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichCell, type RichCellProps } from './RichCell';

const longOverTitle = withLabel('Subhead subhead subhead subhead', 'Long overTitle');
const longChildren = withLabel('Children children children children', 'Long children');
const longSubtitle = withLabel('Subtitle subtitle subtitle subtitle', 'Long subtitle');
const longExtraSubtitle = withLabel('Extra subtitle Extra subtitle', 'Long extraSubtitle');

const TextAfter = () => <div style={{ minWidth: 100, textAlign: 'right' }}>After</div>;

export const RichCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [<Avatar size={72} key="72" />],
          overTitle: [longOverTitle],
          children: [longChildren],
          subtitle: [longSubtitle],
          extraSubtitle: [longExtraSubtitle],
          after: [<TextAfter key="after" />],
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
          overTitle: [longOverTitle],
          children: [longChildren],
          subtitle: [longSubtitle],
          extraSubtitle: [longExtraSubtitle],
          after: [<TextAfter key="after" />],
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
          children: [longChildren],
          subtitle: [longSubtitle],
          extraSubtitle: [longExtraSubtitle],
          after: [<Button key="After">Подписаться</Button>],
          afterAlign: ['start', 'center'],
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
          after: [withLabel('Very very very very very very very long after', 'Very long after')],
          beforeAlign: ['center', 'end'],
          contentAlign: ['center', 'end'],
        },
      ]}
    >
      {(props: RichCellProps) => <RichCell {...props} />}
    </ComponentPlayground>
  );
};
