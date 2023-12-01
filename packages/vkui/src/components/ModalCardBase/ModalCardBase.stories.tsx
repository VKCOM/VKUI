import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { ModalCardBase, ModalCardBaseProps } from './ModalCardBase';

const story: Meta<ModalCardBaseProps> = {
  title: 'Blocks/ModalCardBase',
  component: ModalCardBase,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalCardBaseProps>;

export const Playground: Story = {
  args: {
    style: { width: 450, marginBottom: 20 },
    header: 'Отправляйте деньги друзьям, используя банковскую карту',
    headerComponent: 'h2',
    subheader: 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.',
    subheaderComponent: 'span',
    actions: (
      <Button size="l" mode="primary" stretched>
        Попробовать
      </Button>
    ),
    icon: <Icon56MoneyTransferOutline />,
  },
};
