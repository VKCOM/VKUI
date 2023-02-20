import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story<ModalCardBaseProps> = (args) => <ModalCardBase {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 450, marginBottom: 20 },
  header: 'Отправляйте деньги друзьям, используя банковскую карту',
  subheader: 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.',
  actions: (
    <Button size="l" mode="primary" stretched>
      Попробовать
    </Button>
  ),
  icon: <Icon56MoneyTransferOutline key="icon" />,
};
