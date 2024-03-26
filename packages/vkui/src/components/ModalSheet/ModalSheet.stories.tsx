import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24Dismiss } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUser } from '../../testing/mock';
import { Accordion } from '../Accordion/Accordion';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { DatePicker } from '../DatePicker/DatePicker';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Gradient } from '../Gradient/Gradient';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { Radio } from '../Radio/Radio';
import { Select } from '../Select/Select';
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Title } from '../Typography/Title/Title';
import { ModalSheet, ModalSheetProps } from './ModalSheet';

const story: Meta<ModalSheetProps> = {
  title: 'Modals/ModalSheet',
  component: ModalSheet,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

type Story = StoryObj<ModalSheetProps>;

const ModalFirst = (props: ModalSheetProps) => (
  <ModalSheet {...props}>
    <ModalSheet.Header>
      <ModalPageHeader>Фильтры</ModalPageHeader>
    </ModalSheet.Header>

    <ModalSheet.Content>
      <FormItem top="Город">
        <Select
          options={['Архангельск', 'Новосибирск', 'Санкт-Петербург'].map((value) => ({
            label: value,
            value,
          }))}
          placeholder="Выбрать город"
        />
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
    </ModalSheet.Content>

    <ModalSheet.Footer>
      <Div>
        <Button size="m" stretched onClick={noop}>
          Применить
        </Button>
      </Div>
    </ModalSheet.Footer>
  </ModalSheet>
);

const ModalFull = (props: ModalSheetProps) => {
  const [close, setClose] = React.useState(false);
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();

  const closeModal = () => {
    setClose(true);
  };

  const [randomUser] = React.useState(() => getRandomUser());
  const [users] = React.useState(() =>
    'k'
      .repeat(25)
      .split('')
      .map(() => {
        return getRandomUser();
      }),
  );

  return (
    <ModalSheet settlingHeight={100} close={close} {...props}>
      <ModalSheet.Header>
        <ModalPageHeader
          before={
            sizeX.compact &&
            platform === 'android' && (
              <PanelHeaderClose className={sizeX.compact.className} onClick={closeModal} />
            )
          }
          after={
            sizeX.compact &&
            platform === 'ios' && (
              <PanelHeaderButton className={sizeX.compact.className} onClick={closeModal}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        >
          @{randomUser.screen_name}
        </ModalPageHeader>
      </ModalSheet.Header>

      <ModalSheet.Content>
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
      </ModalSheet.Content>
    </ModalSheet>
  );
};

const ModalDynamic = (props: ModalSheetProps) => {
  const infoStyle = { color: 'var(--vkui--color_text_subhead)' };
  return (
    <ModalSheet {...props}>
      <ModalSheet.Header>
        <ModalPageHeader>Динамическая модалка</ModalPageHeader>
      </ModalSheet.Header>

      <ModalSheet.Content>
        <Accordion>
          <Accordion.Summary iconPosition="before">Новый дизайн профиля</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              Внешний вид профиля ВКонтакте действительно обновился. К прежнему варианту вернуться
              уже не получится. В центре внимания нового дизайна — личность человека и его
              увлечения. Новый формат профиля особенно удобен для авторов контента и станет для них
              цифровой визиткой.
            </Div>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Summary iconPosition="before">Что такое VK Pay?</Accordion.Summary>
          <Accordion.Content>
            <Div style={infoStyle}>
              VK Pay — это онлайн-сервис для оплаты товаров и услуг. Храните все банковские карты
              под рукой, покупайте в онлайн-магазинах, получайте персональные скидки и
              спецпредложения, оплачивайте ежедневные услуги и переводите деньги друзьям.
            </Div>
          </Accordion.Content>
        </Accordion>
      </ModalSheet.Content>
    </ModalSheet>
  );
};

const modals: Record<
  string,
  {
    component: React.ElementType;
    name: string;
  }
> = {
  first: {
    component: ModalFirst,
    name: 'Открыть модальную страницу',
  },
  full: {
    component: ModalFull,
    name: 'Открыть полноэкранную модальную страницу',
  },
  dynamic: {
    component: ModalDynamic,
    name: 'Открыть модальную страницу с динамической высотой',
  },
};

export const Example: Story = {
  render: function Render() {
    const [modal, openModal] = React.useState<string | undefined>(undefined);

    const closeModal = () => openModal(undefined);

    const modalInfo = modal ? modals[modal] : undefined;
    const Modal = modalInfo ? modalInfo.component : undefined;

    const list = Object.entries(modals).map(([key, { name }]) => (
      <CellButton key={key} multiline onClick={() => openModal(key)}>
        {name}
      </CellButton>
    ));

    return (
      <Panel>
        <PanelHeader>ModalSheet</PanelHeader>
        <Group>
          <FormItem>
            <Input />
          </FormItem>
          {list}
        </Group>

        {Modal && <Modal onClosed={closeModal} />}
      </Panel>
    );
  },
};
