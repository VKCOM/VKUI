import React from 'react';
import { Meta } from '@storybook/react';
import { ModalPage, ModalPageProps } from './ModalPage';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { Icon24Dismiss, Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { Platform } from '../../lib/platform';
import { Group } from '../Group/Group';
import { CellButton } from '../CellButton/CellButton';
import { Placeholder } from '../Placeholder/Placeholder';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { PanelHeaderSubmit } from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { FormItem } from '../FormItem/FormItem';
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { Radio } from '../Radio/Radio';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { Gradient } from '../Gradient/Gradient';
import { Avatar } from '../Avatar/Avatar';
import { Title } from '../Typography/Title/Title';
import { getRandomUser, getRandomUsers } from '../../testing/mock';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Modals/ModalPage',
  component: ModalPage,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('ModalPage'),
    ...DisableCartesianParam,
  },
} as Meta<ModalPageProps>;

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_FULLSCREEN = 'fullscreen';
const MODAL_PAGE_DYNAMIC = 'dynamic';
const randomUser = getRandomUser();
const users = getRandomUsers(25);

const AndroidCloseButton = ({ className }: { className?: string }) => {
  const { onClose } = React.useContext(ModalRootContext);

  return <PanelHeaderClose className={className} onClick={onClose} />;
};

const IosCloseButton = ({ className }: { className?: string }) => {
  const { onClose } = React.useContext(ModalRootContext);

  return (
    <PanelHeaderButton onClick={onClose} className={className}>
      <Icon24Dismiss />
    </PanelHeaderButton>
  );
};

export const DynamicModalPage = () => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();
  const [expanded, setExpanded] = React.useState(false);
  const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <ModalWrapper modalId={MODAL_PAGE_DYNAMIC}>
      <ModalPage
        id={MODAL_PAGE_DYNAMIC}
        dynamicContentHeight
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === Platform.ANDROID && (
                <AndroidCloseButton className={sizeX.compact.className} />
              )
            }
            after={
              sizeX.compact &&
              platform === Platform.IOS && <IosCloseButton className={sizeX.compact.className} />
            }
          >
            Dynamic modal
          </ModalPageHeader>
        }
      >
        <Group>
          <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
          {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
        </Group>
      </ModalPage>
    </ModalWrapper>
  );
};

export const FullscreenModalPage = () => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <ModalWrapper modalId={MODAL_PAGE_FULLSCREEN}>
      <ModalPage
        id={MODAL_PAGE_FULLSCREEN}
        settlingHeight={100}
        hideCloseButton={platform === Platform.IOS}
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === Platform.ANDROID && (
                <AndroidCloseButton className={sizeX.compact.className} />
              )
            }
            after={platform === Platform.IOS && <IosCloseButton />}
          >
            @{randomUser.screen_name}
          </ModalPageHeader>
        }
      >
        <Gradient
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}
        >
          <Avatar size={96} src={randomUser.photo_100} />
          <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
            {randomUser.first_name + ' ' + randomUser.last_name}
          </Title>
        </Gradient>
        <Group
          header={
            <Header mode="secondary" indicator="25">
              Друзья
            </Header>
          }
        >
          {users.map((user) => {
            return (
              <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPage>
    </ModalWrapper>
  );
};

export const ModalPageWithFilters = () => {
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <ModalWrapper modalId={MODAL_PAGE_FILTERS}>
      <ModalPage
        id={MODAL_PAGE_FILTERS}
        header={
          <ModalPageHeader
            before={sizeX.compact && <AndroidCloseButton className={sizeX.compact.className} />}
            after={<PanelHeaderSubmit />}
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <Group>
          <FormItem top="Страна">
            <SelectMimicry placeholder="Выбрать страну" />
          </FormItem>
          <FormItem top="Город">
            <SelectMimicry placeholder="Выбрать город" disabled />
          </FormItem>

          <FormItem top="Пол">
            <Radio name="sex" value={0} defaultChecked>
              Любой
            </Radio>
            <Radio name="sex" value={1}>
              Мужской
            </Radio>
            <Radio name="sex" value={2}>
              Женский
            </Radio>
          </FormItem>

          <FormItem top="Школа">
            <SelectMimicry placeholder="Выбрать школу" disabled />
          </FormItem>
          <FormItem top="Университет">
            <SelectMimicry placeholder="Выбрать университет" disabled />
          </FormItem>

          <FormItem top="Дополнительно">
            <Checkbox>С фотографией</Checkbox>
            <Checkbox>Сейчас на сайте</Checkbox>
          </FormItem>

          <FormItem top="Работа">
            <Input placeholder="Место работы" />
          </FormItem>
          <FormItem>
            <Input placeholder="Должность" />
          </FormItem>

          <FormItem top="Дата рождения">
            <DatePicker
              min={{ day: 1, month: 1, year: 1901 }}
              max={{ day: 1, month: 1, year: 2006 }}
              dayPlaceholder="Д"
              monthPlaceholder="ММ"
              yearPlaceholder="ГГ"
            />
          </FormItem>
        </Group>
      </ModalPage>
    </ModalWrapper>
  );
};
