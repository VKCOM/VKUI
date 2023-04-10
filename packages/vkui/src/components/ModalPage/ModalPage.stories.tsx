import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24Dismiss, Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUser, getRandomUsers } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { CellButton } from '../CellButton/CellButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { DatePicker } from '../DatePicker/DatePicker';
import { FormItem } from '../FormItem/FormItem';
import { Gradient } from '../Gradient/Gradient';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderSubmit } from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { Placeholder } from '../Placeholder/Placeholder';
import { Radio } from '../Radio/Radio';
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Title } from '../Typography/Title/Title';
import { ModalPage, ModalPageProps } from './ModalPage';

const story: Meta<ModalPageProps> = {
  title: 'Modals/ModalPage',
  component: ModalPage,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalPageProps>;

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

export const DynamicModalPage: Story = {
  render: function Render() {
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
  },
};

export const FullscreenModalPage: Story = {
  render: function Render() {
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
  },
};

export const ModalPageWithFilters: Story = {
  render: function Render() {
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
  },
};
