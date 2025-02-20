'use client';

import { Icon24Dismiss } from '@vkontakte/icons';
import {
  Avatar,
  Gradient,
  Group,
  Header,
  ModalPageHeader,
  PanelHeaderButton,
  PanelHeaderClose,
  Placeholder,
  SimpleCell,
  useAdaptivityConditionalRender,
  usePlatform,
} from '../../../src';
import { ModalPageBase } from '../../../src/components/ModalPage/ModalPageBase';
import { getRandomUser, getRandomUsers } from '../../../src/testing/mock';

const randomUser = getRandomUser();
const users = getRandomUsers(25);

export const ModalPageBasePreview = () => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <div
      style={{
        display: 'flex',
        maxBlockSize: 600,
      }}
    >
      <ModalPageBase
        hideCloseButton={platform === 'ios'}
        isDesktop
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === 'android' && (
                <PanelHeaderClose className={sizeX.compact.className} onClick={close} />
              )
            }
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={close}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
            @{randomUser.screen_name}
          </ModalPageHeader>
        }
      >
        <Gradient mode="tint">
          <Placeholder
            icon={<Avatar size={96} src={randomUser.photo_100} />}
            title={randomUser.first_name + ' ' + randomUser.last_name}
          ></Placeholder>
        </Gradient>
        <Group header={<Header indicator="25">Друзья</Header>}>
          {users.map((user) => {
            return (
              <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPageBase>
    </div>
  );
};
