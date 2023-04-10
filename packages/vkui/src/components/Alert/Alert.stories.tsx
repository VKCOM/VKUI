import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { Alert, AlertProps } from './Alert';

const story: Meta<AlertProps> = {
  title: 'Popouts/Alert',
  component: Alert,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

export const Playground: StoryObj<AlertProps> = {
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    const popout = visible ? <Alert {...args} onClose={() => setVisible(false)} /> : null;

    return (
      <SplitLayout style={{ justifyContent: 'center' }} popout={popout}>
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Placeholder stretched>
            <Button onClick={() => setVisible(true)}>Открыть</Button>
          </Placeholder>
        </SplitCol>
      </SplitLayout>
    );
  },
  args: {
    actions: [
      {
        title: 'Отмена',
        autoClose: true,
        mode: 'cancel',
      },
      {
        title: 'Удалить',
        autoClose: true,
        mode: 'destructive',
      },
    ],
    actionsLayout: 'horizontal',
    header: 'Удаление документа',
    text: 'Вы уверены, что хотите удалить этот документ?',
  },
};
