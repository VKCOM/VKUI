import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon16Clear, Icon28AddOutline, Icon28DeleteOutline } from '@vkontakte/icons';
import { DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { FormLayoutGroup } from '../FormLayoutGroup/FormLayoutGroup';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton';
import { Input } from '../Input/Input';
import { Text } from '../Typography/Text/Text';
import { Popover, type PopoverOnShownChange, type PopoverProps } from './Popover';

const story: Meta<PopoverProps> = {
  title: 'Poppers/Popover',
  component: Popover,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<PopoverProps>;

export const Playground: Story = {
  render: (args) => (
    <Popover
      trigger="hover"
      placement="bottom"
      role="tooltip"
      aria-describedby="tooltip-1"
      content={
        <Div>
          <Text>Привет</Text>
        </Div>
      }
      {...args}
    >
      <Button id="tooltip-1" mode="outline">
        Наведи на меня
      </Button>
    </Popover>
  ),
};

export const Example: Story = {
  render: function Render() {
    const PopoverWithTriggerHover = () => {
      return (
        <Popover
          trigger="hover"
          placement="bottom"
          role="tooltip"
          aria-describedby="tooltip-1"
          content={
            <Div>
              <Text>Привет</Text>
            </Div>
          }
        >
          <Button id="tooltip-1" mode="outline">
            Наведи на меня
          </Button>
        </Popover>
      );
    };

    const PopoverWithTriggerClick = () => {
      return (
        <Popover
          noStyling
          trigger="click"
          id="menupopup"
          role="menu"
          aria-labelledby="menubutton"
          content={({ onClose }) => (
            <Group>
              <CellButton role="menuitem" before={<Icon28AddOutline />} onClick={onClose}>
                Добавить
              </CellButton>
              <CellButton
                role="menuitem"
                before={<Icon28DeleteOutline />}
                mode="danger"
                onClick={onClose}
              >
                Удалить
              </CellButton>
            </Group>
          )}
        >
          <Button id="menubutton" aria-controls="menupopup" aria-haspopup="true" mode="outline">
            Нажми на меня
          </Button>
        </Popover>
      );
    };

    const PopoverWithTriggerFocus = () => {
      return (
        <Popover
          trigger="focus"
          role="dialog"
          aria-describedby="dialog-2"
          content={({ onClose }) => (
            <FormLayoutGroup>
              <FormItem top="Имя">
                <Input />
              </FormItem>
              <FormItem top="Фамилия">
                <Input />
              </FormItem>
              <FormItem top="Соглашение">
                <Checkbox name="agreement">Согласен</Checkbox>
              </FormItem>
              <FormItem>
                <Button onClick={onClose}>Отправить</Button>
              </FormItem>
            </FormLayoutGroup>
          )}
        >
          <Button id="dialog-2" mode="outline">
            Сфокусируйся на меня через Tab (или клик)
          </Button>
        </Popover>
      );
    };

    const PopoverWithAllTriggers = () => {
      return (
        <Popover
          trigger={['click', 'hover', 'focus']}
          placement="right"
          role="tooltip"
          aria-describedby="tooltip-3"
          content={
            <Div>
              <Avatar src={getAvatarUrl('app_promokot')} alt="Cat" />
            </Div>
          }
        >
          <Button id="tooltip-3" mode="outline">
            Нажми или наведи или сфокусируйся на меня
          </Button>
        </Popover>
      );
    };

    const PopoverWithTriggerManual = () => {
      const [shown, setShown] = React.useState(false);

      const handleShownChange: PopoverOnShownChange = React.useCallback((value, reason) => {
        if (!value) {
          switch (reason) {
            case 'callback':
            case 'escape-key':
            case 'click-outside':
              setShown(false);
              break;
            default:
              break;
          }
        }
      }, []);

      return (
        <Popover
          trigger="manual"
          shown={shown}
          role="dialog"
          aria-describedby="dialog-3"
          content={({ onClose }) => (
            <div style={{ display: 'flex', position: 'relative', width: 180, height: 100 }}>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <IconButton aria-label="Close dialog" onClick={onClose}>
                  <Icon16Clear />
                </IconButton>
              </div>
              <div style={{ margin: 'auto', textAlign: 'center' }}>
                The cake
                <br />
                is
                <br />a lie
              </div>
            </div>
          )}
          onShownChange={handleShownChange}
        >
          <Button id="dialog-3" onClick={() => setShown((prev) => !prev)}>
            Я переключаю состояние через useState
          </Button>
        </Popover>
      );
    };

    return (
      <div
        style={{
          display: 'flex',
          padding: 16,
          gap: 16,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <PopoverWithTriggerHover />
        <PopoverWithTriggerClick />
        <PopoverWithTriggerFocus />
        <PopoverWithAllTriggers />
        <PopoverWithTriggerManual />
      </div>
    );
  },
};
