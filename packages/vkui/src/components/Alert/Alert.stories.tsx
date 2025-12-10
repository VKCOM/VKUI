import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';
import { Alert, type AlertProps } from './Alert';

const story: Meta<AlertProps> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: createStoryParameters('Alert', CanvasFullLayout, DisableCartesianParam),
  tags: ['Обратная связь'],
};

export default story;

export const Playground: StoryObj<AlertProps> = {
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);

    return (
      <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClose={() => setVisible(false)} /> : null}
      </React.Fragment>
    );
  },
  args: {
    actions: [
      { title: 'Отмена', mode: 'cancel' },
      { title: 'Удалить', mode: 'destructive' },
    ],
    actionsLayout: 'horizontal',
    dismissLabel: 'Отмена',
    title: 'Удаление документа',
    description: 'Вы уверены, что хотите удалить этот документ?',
  },
};
