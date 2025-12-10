import { Icon20ArticleOutline, Icon20PlaceOutline, Icon20WorkOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { Avatar } from '../Avatar/Avatar';
import { Link } from '../Link/Link';
import { MiniInfoCell, type MiniInfoCellProps } from './MiniInfoCell';

const longChildrenValue = withLabel(
  'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.',
  'Long children',
);

export const MiniInfoCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      componentStateHeight={{
        android: 100,
        ios: 100,
        vkcom: 60,
      }}
      propSets={[
        {
          before: [<Icon20PlaceOutline key="icon" />],
          mode: ['accent', undefined],
          children: ['Санкт-Петербург, Россия'],
        },
        {
          before: [<Icon20WorkOutline key="icon" />],
          children: [
            <Link key="link" href="https://vk.com/team">
              vk.com/team
            </Link>,
          ],
          chevron: [true],
        },
        {
          before: [<Icon20ArticleOutline key="icon" />],
          textWrap: ['nowrap', 'short', 'full'],
          children: [longChildrenValue],
          $componentStateHeight: {
            android: 175,
            ios: 175,
          },
        },
        {
          before: [<Icon20WorkOutline key="icon" />],
          after: [<Avatar size={24} key="after"></Avatar>],
          children: ['Место работы: Команда ВКонтакте'],
        },
        {
          before: [<Icon20WorkOutline key="icon" />],
          mode: ['add'],
          onClick: [noop],
          children: ['Укажите место учёбы или работы'],
        },
        {
          before: [<Icon20WorkOutline key="icon" />],
          mode: ['more'],
          onClick: [noop],
          children: ['Подробная информация'],
        },
        {
          before: [<Icon20WorkOutline key="icon" />],
          mode: ['more'],
          textWrap: ['short'],
          children: ['Подробная информация'],
          chevron: [true],
        },
        {
          children: ['Ячейка без иконки'],
        },
      ]}
    >
      {(props: MiniInfoCellProps) => <MiniInfoCell {...props} />}
    </ComponentPlayground>
  );
};
