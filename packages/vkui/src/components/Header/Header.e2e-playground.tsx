import * as React from 'react';
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
      ]}
    >
      {({ children, ...restProps }: HeaderProps) => (
        <Header {...restProps}>{!!children ? children : 'Плейлисты'}</Header>
      )}
    </ComponentPlayground>
  );
};
