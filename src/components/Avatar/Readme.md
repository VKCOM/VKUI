Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
import {
  Icon20GiftCircleFillRed,
  Icon12Circle,
  Icon12OnlineMobile,
  Icon20GameCircleFillBlue,
  Icon16StarCircleFillBlue,
  Icon28AddOutline,
} from "@vkontakte/icons";

<View activePanel="avatar">
  <Panel id="avatar">
    <PanelHeader>Avatar</PanelHeader>
    <Group>
      <Header mode="secondary">Дефолтный размер</Header>
      <SimpleCell
        description="VKontakte"
        before={<Avatar src={getAvatarUrl("user_arthurstam")} />}
      >
        Артур Стамбульцян
      </SimpleCell>
    </Group>
    <Group>
      <Header mode="secondary">RichCell</Header>
      <RichCell
        disabled
        before={<Avatar size={72} src={getAvatarUrl("user_ilyagrshn")} />}
        caption="Команда ВКонтакте, Санкт-Петербург"
        bottom={
          <UsersStack
            photos={[
              getAvatarUrl("user_ox"),
              getAvatarUrl("user_vitalyavolyn"),
              getAvatarUrl("user_eee"),
            ]}
          >
            73 общих друга
          </UsersStack>
        }
        actions={
          <React.Fragment>
            <Button>Добавить</Button>
            <Button mode="secondary">Скрыть</Button>
          </React.Fragment>
        }
      >
        Илья Гришин
      </RichCell>
    </Group>
    <Group>
      <Header mode="secondary">Placeholder</Header>
      <SimpleCell
        before={
          <Avatar
            style={{ background: "var(--accent)" }}
            size={28}
            shadow={false}
          >
            <Icon16Add fill="var(--white)" />
          </Avatar>
        }
        description="Только от друзей друзей"
      >
        Заявки в друзья
      </SimpleCell>
      <SimpleCell
        before={
          <Avatar
            style={{ background: "var(--destructive)" }}
            size={28}
            shadow={false}
          >
            <Icon16Like fill="var(--white)" />
          </Avatar>
        }
        description="Только важные"
      >
        Отметки «Мне нравится»
      </SimpleCell>
    </Group>
    <Group description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
      <Header mode="secondary">Дефолтный тип</Header>
      <SimpleCell before={<Avatar src={getAvatarUrl("user_evg")} />}>
        Евгений Авсиевич
      </SimpleCell>
      <SimpleCell before={<Avatar src={getAvatarUrl("user_id34")} />}>
        Татьяна Плуталова
      </SimpleCell>
      <SimpleCell before={<Avatar src={getAvatarUrl("user_illarionov")} />}>
        Олег Илларианов
      </SimpleCell>
    </Group>
    <Group description="Значок аватарки. Используется для юзеров, групп.">
      <Header mode="secondary">Значок</Header>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={24}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={28}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={32}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={36}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={40}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={44}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={48}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed />}
          size={56}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed />}
          size={64}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={72}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={80}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={88}
        />
        <Avatar
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={96}
        />
      </div>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={24} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={28} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={32} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={36} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={40} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={44} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={48} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={56} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={64} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={72} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={80} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={88} />
        <Avatar src={getAvatarUrl("user_id34")} badge="online" size={96} />
      </div>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={24}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={28}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={32}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={36}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={40}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={44}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={48}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={56}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={64}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={72}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={80}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={88}
        />
        <Avatar
          src={getAvatarUrl("user_illarionov")}
          badge="online-mobile"
          size={96}
        />
      </div>
    </Group>
    <Group>
      <Header mode="secondary">
        Overlay, поведение по умолчанию: если hasMouse показывается при
        наведении, если нет показывается всегда
      </Header>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={16}
              height={16}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={24}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={18}
              height={18}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={28}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={32}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={36}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={40}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={44}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={48}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed />}
          size={56}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed />}
          size={64}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={72}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={80}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={88}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={32}
              height={32}
              style={{ color: "#3F8AE0" }}
            />
          }
          src={getAvatarUrl("user_evg")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={96}
        />
      </div>
      <Header mode="secondary">Overlay, показывается всегда</Header>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={16}
              height={16}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={24}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={18}
              height={18}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={28}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={32}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={36}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={40}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={44}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#3F8AE0" }}
            />
          }
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={48}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed />}
          size={56}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed />}
          size={64}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={72}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={80}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={88}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={32}
              height={32}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="always"
          src={getAvatarUrl("user_id34")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={96}
        />
      </div>
      <Header mode="secondary">Overlay, показывается при наведении</Header>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={16}
              height={16}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={24}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={18}
              height={18}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={28}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={12} height={12} />}
          size={32}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={36}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={20}
              height={20}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={40}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={44}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={24}
              height={24}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={16} height={16} />}
          size={48}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed />}
          size={56}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed />}
          size={64}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={72}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={80}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={28}
              height={28}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={88}
        />
        <Avatar
          overlayIcon={
            <Icon28AddOutline
              width={32}
              height={32}
              style={{ color: "#FFF" }}
            />
          }
          overlayMode="dark"
          overlayAction="hover"
          src={getAvatarUrl("user_illarionov")}
          badge={<Icon20GiftCircleFillRed width={24} height={24} />}
          size={96}
        />
      </div>
    </Group>
    <Group description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
      <Header mode="secondary">Приложения</Header>
      <SimpleCell
        before={<Avatar mode="app" src={getAvatarUrl("app_shorm_online")} />}
        description="Ролевая"
      >
        Шторм онлайн
      </SimpleCell>
      <SimpleCell
        before={<Avatar mode="app" src={getAvatarUrl("app_shashki")} />}
        description="Настольная"
        multiline={false}
      >
        Шашки - 3 вида: шашки, уголки, поддавки
      </SimpleCell>
      <SimpleCell
        before={<Avatar mode="app" src={getAvatarUrl("app_vega_mix")} />}
        description="Головоломка"
      >
        Вега Микс на даче
      </SimpleCell>
    </Group>
    <Group description="Используется для остальных случаев. Например, для музыки и плейлистов.">
      <Header mode="secondary">Обложки</Header>
      <SimpleCell
        before={
          <Avatar mode="image" src={getAvatarUrl("audio_arctic_monkeys")} />
        }
        description="Arctic Monkeys"
        after={<Icon24MoreHorizontal fill="var(--accent)" />}
      >
        I Wanna Be Yours
      </SimpleCell>
      <SimpleCell
        before={<Avatar mode="image" src={getAvatarUrl("audio_leto_zveri")} />}
        description="Лето (звери)"
        after={<Icon24MoreHorizontal fill="var(--accent)" />}
      >
        6 утра
      </SimpleCell>
      <SimpleCell
        before={
          <Avatar mode="image" src={getAvatarUrl("audio_depeche_mode")} />
        }
        description="Depeche Mode"
        after={<Icon24MoreHorizontal fill="var(--accent)" />}
      >
        Enjoy the Silence
      </SimpleCell>
    </Group>
  </Panel>
</View>;
```
