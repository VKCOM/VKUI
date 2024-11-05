import {
  Icon12Fire,
  Icon12Tag,
  Icon16LockOutline,
  Icon16UnlockOutline,
  Icon28UserCircleFillBlue,
} from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Counter } from '../Counter/Counter';
import { Link } from '../Link/Link';
import { Header, type HeaderProps } from './Header';

export const HeaderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', 'm', 'l', 'xl'],
          children: ['Кто может оставлять записи на моей странице'],
          multiline: [undefined, true],
        },
        {
          size: ['m'],
          after: [<Link key="link">Показать все</Link>],
        },
        {
          size: ['s', 'm', 'l', 'xl'],
          subtitle: ['SOHN — Conrad'],
        },
        {
          size: ['m'],
          indicator: [
            12,
            <Counter key="counter" size="s" mode="prominent">
              3
            </Counter>,
          ],
        },
        {
          size: ['m'],
          subtitle: ['SOHN — Conrad'],
          after: [<Link key="link">Показать все</Link>],
          indicator: [12],
        },
        {
          size: ['m'],
          indicator: [
            12,
            <Counter key="counter" size="s" mode="prominent">
              3
            </Counter>,
          ],
        },
        {
          size: ['m'],
          children: ['Кто может оставлять записи на моей странице'],
          before: [<Icon28UserCircleFillBlue key="user" />],
        },
        {
          size: ['m'],
          children: ['Кто может оставлять записи на моей странице'],
          beforeTitle: [<Icon16LockOutline key="beforeTitle" />],
        },
        {
          size: ['m'],
          children: ['Кто может оставлять записи на моей странице'],
          afterTitle: [<Icon16UnlockOutline key="afterTitle" />],
          multiline: [undefined, true],
        },
        {
          size: ['m'],
          children: ['Кто может оставлять записи на моей странице'],
          subtitle: ['SOHN — Conrad'],
          beforeSubtitle: [<Icon12Tag key="beforeSubtitle" />],
        },
        {
          size: ['m'],
          children: ['Кто может оставлять записи на моей странице'],
          subtitle: ['SOHN — Conrad'],
          afterSubtitle: [<Icon12Fire key="afterSubtitle" />],
          multiline: [undefined, true],
        },
        {
          size: ['s', 'm', 'l', 'xl'],
          children: ['Кто может оставлять записи на моей странице'],
          before: [<Icon28UserCircleFillBlue key="user" />],
          beforeTitle: [<Icon16LockOutline key="beforeTitle" />],
          afterTitle: [<Icon16UnlockOutline key="afterTitle" />],
          beforeSubtitle: [<Icon12Tag key="beforeSubtitle" />],
          afterSubtitle: [<Icon12Fire key="afterSubtitle" />],
          subtitle: ['SOHN — Conrad'],
          multiline: [undefined, true],
        },
      ]}
    >
      {({ children, ...restProps }: HeaderProps) => (
        <Header {...restProps}>{!!children ? children : 'Плейлисты'}</Header>
      )}
    </ComponentPlayground>
  );
};
