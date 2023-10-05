import * as React from 'react';
import { Icon12Add, Icon12Tag, Icon16Add, Icon24Camera } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Counter } from '../Counter/Counter';
import { Button, type ButtonProps } from './Button';

export const ButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['primary', 'secondary', 'tertiary', 'outline', 'link'],
          disabled: [undefined, true],
        },
        {
          size: ['s', 'm', 'l'],
          stretched: [undefined, true],
          href: [undefined, '#'],
          $adaptivity: 'y',
        },
        {
          mode: ['primary'],
          before: [<Icon16Add key="icon-16" />],
          $adaptivity: 'y',
        },
        {
          mode: ['outline'],
          before: [<Icon16Add key="icon-16" />],
        },
        {
          mode: ['primary'],
          before: [undefined, <Icon24Camera key="icon-24" />],
          after: [<Counter key="counter">16</Counter>],
          size: ['l'],
          $adaptivity: 'y',
        },
        {
          mode: ['outline'],
          before: [undefined, <Icon24Camera key="icon-24" />],
          after: [<Counter key="counter">16</Counter>],
          size: ['l'],
        },
        {
          mode: ['primary', 'secondary'],
          before: [<Icon24Camera key="icon-24" />],
          after: [<Counter key="counter">16</Counter>],
          size: ['s', 'm', 'l'],
          disableSpinnerAnimation: [true],
          loading: [true],
        },
        {
          mode: ['primary', 'secondary', 'tertiary', 'outline', 'link'],
          appearance: ['accent', 'positive', 'negative', 'neutral', 'overlay', 'accent-invariable'],
        },
        {
          mode: ['primary'],
          appearance: ['accent'],
          size: ['s', 'm', 'l'],
          $adaptivity: 'y',
        },
        {
          size: ['s', 'm', 'l'],
          stretched: [true],
          align: ['left', 'center', 'right'],
        },
        {
          size: ['s', 'm', 'l'],
          rounded: [true],
        },
      ]}
    >
      {(props: ButtonProps) => <Button {...props}>Кнопка</Button>}
    </ComponentPlayground>
  );
};

export const ButtonWithCounterPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['primary', 'secondary', 'tertiary', 'outline', 'link'],
          appearance: ['accent', 'positive', 'negative', 'neutral', 'overlay', 'accent-invariable'],
          size: ['l'],
          after: [<Counter key="counter">16</Counter>],
        },
      ]}
    >
      {(props: ButtonProps) => {
        const ButtonElement = <Button {...props}>Кнопка</Button>;
        if (props.appearance === 'overlay') {
          return (
            <div style={{ backgroundColor: 'var(--vkui--color_background_contrast_inverse)' }}>
              {ButtonElement}
            </div>
          );
        }
        return ButtonElement;
      }}
    </ComponentPlayground>
  );
};

export const ButtonWithPaddingsPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', 'm', 'l'],
          stretched: [true, false],
          before: [<Icon12Add key="before" />],
        },
        {
          size: ['s', 'm', 'l'],
          stretched: [true, false],
          after: [<Icon12Tag key="after" />],
        },
      ]}
    >
      {(props: ButtonProps) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {(['primary', 'secondary', 'tertiary', 'outline', 'link'] as const).map((mode) => (
            <Button key={mode} {...props} mode={mode} />
          ))}
        </div>
      )}
    </ComponentPlayground>
  );
};
