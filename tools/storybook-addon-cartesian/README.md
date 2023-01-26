# storybook-addon-cartesian

Плагин позволяет сгенерировать декартово произведение на основе некоторых пропов компонента (типа boolean, array и т.п.).
Для применения плагина необходимо добавить его в список аддонов сторибука в `.storybook/main.js`, а также добавить
декоратор `withCartesian` для стори, в которой хотелось бы иметь возможность генерировать несколько состояний.

**Пример:**

```tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Component, ComponentProps } from './Component.path';

export default {
  title: 'Blocks/Placeholder',
  component: Component,
  decorators: [withCartesian],
} as Meta<Component>;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
```
