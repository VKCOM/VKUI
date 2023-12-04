```jsx
const infoStyle = { color: 'var(--vkui--color_text_subhead)' };

const AccordionVKID = () => {
  const data = [
    {
      id: 1,
      title: 'Как сменить номер телефона?',
      detail:
        'Зайдите в раздел Безопасность и вход. Укажите новый номер телефона и подтвердите его.',
    },
    {
      id: 2,
      title: 'Как изменить пароль?',
      detail:
        'Для входа во многие сервисы экосистемы VK используется один пароль. Если вы беспокоитесь по поводу безопасности, этот пароль можно изменить.',
    },
    {
      id: 3,
      title: 'Как усилить защиту аккаунта?',
      detail:
        'Используйте сложный пароль и регулярно меняйте его. Обновить пароль можно в разделе Пароль.',
    },
  ];

  const [openId, setOpenId] = React.useState(2);

  return data.map(({ id, title, detail }) => (
    <Accordion
      key={id}
      expanded={openId === id}
      onChange={(e) => (e ? setOpenId(id) : setOpenId(null))}
    >
      <Accordion.Summary>{title}</Accordion.Summary>
      <Accordion.Content>
        <Div style={infoStyle}>{detail}</Div>
      </Accordion.Content>
    </Accordion>
  ));
};

const AccordionCombo = () => {
  const data = [
    {
      id: 1,
      title: 'Как оформить подписку?',
      detail:
        'Зарегистрируйтесь на сайте vkcombo.ru и привяжите карту. Когда оплатите подписку VK Combo, в личном кабинете станут доступны все скидки и бонусы.',
    },
    {
      id: 2,
      title: 'Что такое VK Combo?',
      detail:
        'VK Combo — это подписка, которая позволяет слушать VK Музыку без рекламы, а также смотреть кино онлайн и  получать скидки на товары и услуги партнёров: образование, игры в облаке и многое другое.',
    },
    {
      id: 3,
      title: 'Остались вопросы?',
      detail:
        'Чтобы задать вопрос, заполните форму обратной связи в личном кабинете VK Combo или напишите нам на почту combo@vk.com.',
    },
  ];

  return data.map(({ id, title, detail }) => (
    <Accordion key={id}>
      <Accordion.Summary ExpandIcon={Icon24AddOutline} CollapseIcon={Icon24MinusOutline}>
        {title}
      </Accordion.Summary>
      <Accordion.Content>
        <Div style={infoStyle}>{detail}</Div>
      </Accordion.Content>
    </Accordion>
  ));
};

<View activePanel="div">
  <Panel id="div">
    <PanelHeader>Accordion</PanelHeader>
    <Group>
      <AccordionVKID />
    </Group>
    <Group>
      <AccordionCombo />
    </Group>
    <Group>
      <Accordion open>
        <Accordion.Summary iconPosition="before">Новый дизайн профиля</Accordion.Summary>
        <Accordion.Content>
          <Div style={infoStyle}>
            Внешний вид профиля ВКонтакте действительно обновился. К прежнему варианту вернуться уже
            не получится. В центре внимания нового дизайна — личность человека и его увлечения.
            Новый формат профиля особенно удобен для авторов контента и станет для них цифровой
            визиткой.
          </Div>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Summary iconPosition="before">Что такое VK Pay?</Accordion.Summary>
        <Accordion.Content>
          <Div style={infoStyle}>
            VK Pay — это онлайн-сервис для оплаты товаров и услуг. Храните все банковские карты под
            рукой, покупайте в онлайн-магазинах, получайте персональные скидки и спецпредложения,
            оплачивайте ежедневные услуги и переводите деньги друзьям.
          </Div>
        </Accordion.Content>
      </Accordion>
    </Group>
  </Panel>
</View>;
```
