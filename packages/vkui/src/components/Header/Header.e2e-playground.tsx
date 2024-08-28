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
          mode: ['primary', 'secondary', 'tertiary'],
          children: ['Кто может оставлять записи на моей странице'],
          multiline: [undefined, true],
        },
        {
          mode: ['primary'],
          aside: [<Link key="link">Показать все</Link>],
        },
        {
          mode: ['primary', 'secondary'],
          subtitle: ['SOHN — Conrad'],
        },
        {
          mode: ['primary'],
          indicator: [
            12,
            <Counter key="counter" size="s" mode="prominent">
              3
            </Counter>,
          ],
        },
        {
          mode: ['primary'],
          subtitle: ['SOHN — Conrad'],
          aside: [<Link key="link">Показать все</Link>],
          indicator: [12],
        },
        {
          mode: ['secondary', 'tertiary'],
          indicator: [
            12,
            <Counter key="counter" size="s" mode="prominent">
              3
            </Counter>,
          ],
        },
        {
          mode: ['primary'],
          size: ['regular', 'large'],
        },
        {
          mode: ['primary'],
          children: ['Кто может оставлять записи на моей странице'],
          before: [<Icon28UserCircleFillBlue key="user" />],
        },
        {
          mode: ['primary'],
          children: ['Кто может оставлять записи на моей странице'],
          beforeTitle: [<Icon16LockOutline key="beforeTitle" />],
        },
        {
          mode: ['primary'],
          children: ['Кто может оставлять записи на моей странице'],
          afterTitle: [<Icon16UnlockOutline key="afterTitle" />],
          multiline: [undefined, true],
        },
        {
          mode: ['primary'],
          children: ['Кто может оставлять записи на моей странице'],
          subtitle: ['SOHN — Conrad'],
          beforeSubtitle: [<Icon12Tag key="beforeSubtitle" />],
        },
        {
          mode: ['primary'],
          children: ['Кто может оставлять записи на моей странице'],
          subtitle: ['SOHN — Conrad'],
          afterSubtitle: [<Icon12Fire key="afterSubtitle" />],
          multiline: [undefined, true],
        },
        {
          mode: ['primary', 'secondary', 'tertiary'],
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
