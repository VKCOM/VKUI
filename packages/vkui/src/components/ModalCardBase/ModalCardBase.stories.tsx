import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { ModalCardBase, type ModalCardBaseProps } from './ModalCardBase';

const story: Meta<ModalCardBaseProps> = {
  title: 'Blocks/ModalCardBase',
  component: ModalCardBase,
  parameters: createStoryParameters('ModalCardBase', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    icon: createFieldWithPresets({
      iconSizes: ['56'],
      requiredIcons: ['Icon56MoneyTransferOutline'],
      sizeIconsCount: 10,
      additionalPresets: {
        Avatar: <Avatar size={72} src={getAvatarUrl()} />,
      },
    }),
    actions: createFieldWithPresets({
      additionalPresets: {
        PrimaryButton: (
          <Button size="l" mode="primary" stretched>
            Попробовать
          </Button>
        ),
        SecondaryButton: (
          <Button size="l" mode="secondary" stretched>
            Отмена
          </Button>
        ),
        ButtonsGroupHorizontal: (
          <ButtonGroup gap="s" mode="horizontal" stretched>
            <Button size="l" mode="primary" stretched>
              Попробовать
            </Button>
            <Button size="l" mode="secondary" stretched>
              Отмена
            </Button>
          </ButtonGroup>
        ),
        ButtonsGroupVertical: (
          <ButtonGroup gap="m" mode="vertical" stretched>
            <Button size="l" mode="primary" stretched>
              Попробовать
            </Button>
            <Button size="l" mode="secondary" stretched>
              Отмена
            </Button>
          </ButtonGroup>
        ),
      },
    }),
  },
};

export default story;

type Story = StoryObj<ModalCardBaseProps>;

export const Playground: Story = {
  args: {
    style: { width: 450, marginBottom: 20 },
    title: 'Отправляйте деньги друзьям, используя банковскую карту',
    titleComponent: 'h2',
    description: 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.',
    descriptionComponent: 'span',
    actions: 'PrimaryButton',
    icon: 'Icon56MoneyTransferOutline',
  },
};
