import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon16HelpOutline, Icon28UserAddOutline } from '@vkontakte/icons';
import { DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Checkbox } from '../Checkbox/Checkbox';
import { Link } from '../Link/Link';
import { RichCell } from '../RichCell/RichCell';
import { TextTooltip } from '../TextTooltip/TextTooltip';
import { Subhead } from '../Typography/Subhead/Subhead';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichTooltip, RichTooltipProps } from './RichTooltip';

const story: Meta<RichTooltipProps> = {
  title: 'Poppers/RichTooltip',
  component: RichTooltip,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<RichTooltipProps>;

export const Example: Story = {
  render: () => (
    <>
      <Checkbox style={{ userSelect: 'none' }}>
        Специальные возможности
        <RichTooltip
          style={{ maxWidth: 320 }}
          content={
            <Subhead style={{ padding: '8px 12px', color: 'var(--vkui--color_text_primary)' }}>
              Если включить эту настройку, элементы управления на сайте будут определены и озвучены
              синтезатором речи.
              <br />
              <br />
              Настройка повышает доступность сайта и подходит для пользователей с ограниченными
              возможностями.
            </Subhead>
          }
        >
          <Icon16HelpOutline
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              position: 'relative',
              top: -1,
              color: 'var(--vkui--color_icon_secondary)',
              marginLeft: 5,
            }}
          />
        </RichTooltip>
      </Checkbox>

      <RichTooltip
        style={{ maxWidth: 320 }}
        content={
          <RichCell
            disabled
            after={
              <RichCell.Icon aria-hidden>
                <TextTooltip text="Добавить">
                  <Icon28UserAddOutline />
                </TextTooltip>
              </RichCell.Icon>
            }
            before={<Avatar size={48} src={getAvatarUrl('user_ilyagrshn')} />}
            caption="Команда ВКонтакте, Санкт-Петербург"
            bottom={
              <UsersStack
                photos={[
                  getAvatarUrl('user_ox'),
                  getAvatarUrl('user_vitalyavolyn'),
                  getAvatarUrl('user_eee'),
                ]}
              >
                73 общих друга
              </UsersStack>
            }
            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button>Добавить</Button>
                <Button mode="secondary">Скрыть</Button>
              </ButtonGroup>
            }
          >
            Илья Гришин
          </RichCell>
        }
      >
        <Link style={{ display: 'inline-block', margin: 20, userSelect: 'none' }}>Илья Гришин</Link>
      </RichTooltip>
    </>
  ),
};
