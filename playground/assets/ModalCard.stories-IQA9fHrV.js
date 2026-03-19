import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{t as r}from"./jsx-runtime-CRMqfscQ.js";import{s as i,t as a}from"./lib-B1PKsac9.js";import{Vt as o,n as s}from"./dist-BOHPH9lW.js";import{n as c,t as l}from"./Button-B52Pa8EG.js";import{n as u,t as d}from"./ModalOutsideButton-Cmf2BwP8.js";import{n as f,t as p}from"./Spacing-ESR2PibO.js";import{n as m,t as h}from"./ModalCard-qt4N_Ed5.js";import{n as g,t as _}from"./ButtonGroup-REncAp8D.js";import{n as v,t as y}from"./Avatar-jGPB16Pg.js";import{n as b,t as x}from"./Image-oBJzjfhP.js";import{n as S,t as C}from"./UsersStack-zjwa5QDC.js";import{n as w,t as T}from"./Textarea-BnCatBdb.js";import{i as E,n as D,t as O}from"./constants-BYo4AJCv.js";import{n as k,t as A}from"./createStoryParameters-Dbf8epgV.js";import{r as j}from"./getFormFieldIconsPresets-BsevpiG2.js";import{t as M}from"./presets-BvpR_lVL.js";import{n as N,o as P}from"./mock-Da5716d-.js";var F,I,L,R,z,B,V,H,U,W,G=t((()=>{F=e(n(),1),s(),a(),E(),P(),M(),k(),v(),c(),g(),b(),u(),f(),w(),S(),m(),I=r(),{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:`Modals/ModalCard`,component:h,parameters:A(`ModalCard`,O,D,{background:`linear-gradient(blue, pink)`}),argTypes:{icon:j({iconSizes:[`56`],additionalPresets:{Image:(0,I.jsx)(x,{borderRadius:`l`,src:N(`app_zagadki`,200),size:72}),Avatar:(0,I.jsx)(y,{src:N(`chat_basketball`,200),size:72})},requiredIcons:[`Icon56MoneyTransferOutline`,`Icon56NotificationOutline`]})},render:function(e){let[,t]=L();return(0,I.jsx)(h,{...e,onClose:()=>t({open:!1})})},decorators:function(e){let[,t]=L();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(l,{appearance:`overlay`,onClick:()=>t({open:!0}),children:`Открыть`}),(0,I.jsx)(e,{})]})},tags:[`Модальные окна`]},z={args:{id:`modal-card`,open:!0,icon:`Icon56MoneyTransferOutline`,title:`Отправляйте деньги друзьям, используя банковскую карту`,description:`Номер карты получателя не нужен — он сам решит, куда зачислить средства.`,actions:(0,I.jsx)(l,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Попробовать`})}},B={args:{id:`modal-card`,open:!0,icon:`Image`,title:`Добавить игру «Загадки детства» в меню?`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,I.jsx)(l,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Добавить в меню`})}},V={args:{id:`modal-card`,open:!0,title:`Расскажите о себе`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,I.jsx)(l,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Сохранить`}),children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(p,{size:`m`}),(0,I.jsx)(T,{defaultValue:`В Грузии`})]})}},H={args:{id:`modal-card`,open:!0,icon:`Icon56NotificationOutline`,title:`Приложение запрашивает разрешение на отправку Вам уведомлений`,actions:(0,I.jsxs)(_,{stretched:!0,children:[(0,I.jsx)(l,{size:`l`,mode:`secondary`,stretched:!0,onClick:i,children:`Запретить`},`deny`),(0,I.jsx)(l,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Разрешить`},`allow`)]})}},U={args:{id:`modal-card`,open:!0,icon:`Avatar`,title:`Баскетбол на выходных`,titleComponent:`h2`,description:`Приглашение в беседу`,descriptionComponent:`span`,actions:(0,I.jsxs)(F.Fragment,{children:[(0,I.jsx)(p,{size:8}),(0,I.jsxs)(_,{gap:`s`,mode:`vertical`,stretched:!0,children:[(0,I.jsx)(l,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Присоединиться`},`join`),(0,I.jsx)(l,{size:`l`,mode:`secondary`,stretched:!0,onClick:i,children:`Скопировать приглашение`},`copy`)]})]}),outsideButtons:(0,I.jsx)(d,{"aria-label":`More`,onClick:i,children:(0,I.jsx)(o,{})}),children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(p,{size:20}),(0,I.jsxs)(C,{photos:[N(`user_mm`),N(`user_ilyagrshn`),N(`user_lihachyov`),N(`user_wayshev`),N(`user_arthurstam`),N(`user_xyz`)],size:`l`,visibleCount:3,avatarsPosition:`block-start`,children:[`Алексей, Илья, Михаил`,(0,I.jsx)(`br`,{}),`и ещё 3 человека`]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Icon56MoneyTransferOutline',
    title: 'Отправляйте деньги друзьям, используя банковскую карту',
    description: 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.',
    actions: <Button size="l" mode="primary" stretched onClick={noop}>
        Попробовать
      </Button>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Image',
    title: 'Добавить игру «Загадки детства» в меню?',
    description: 'Игра появится под списком разделов на экране меню и будет всегда под рукой.',
    actions: <Button size="l" mode="primary" stretched onClick={noop}>
        Добавить в меню
      </Button>
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-card',
    open: true,
    title: 'Расскажите о себе',
    description: 'Игра появится под списком разделов на экране меню и будет всегда под рукой.',
    actions: <Button size="l" mode="primary" stretched onClick={noop}>
        Сохранить
      </Button>,
    children: <>
        <Spacing size="m" />
        <Textarea defaultValue="В Грузии" />
      </>
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Icon56NotificationOutline',
    title: 'Приложение запрашивает разрешение на отправку Вам уведомлений',
    actions: <ButtonGroup stretched>
        <Button key="deny" size="l" mode="secondary" stretched onClick={noop}>
          Запретить
        </Button>
        <Button key="allow" size="l" mode="primary" stretched onClick={noop}>
          Разрешить
        </Button>
      </ButtonGroup>
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Avatar',
    title: 'Баскетбол на выходных',
    titleComponent: 'h2',
    description: 'Приглашение в беседу',
    descriptionComponent: 'span',
    actions: <React.Fragment>
        <Spacing size={8} />
        <ButtonGroup gap="s" mode="vertical" stretched>
          <Button key="join" size="l" mode="primary" stretched onClick={noop}>
            Присоединиться
          </Button>
          <Button key="copy" size="l" mode="secondary" stretched onClick={noop}>
            Скопировать приглашение
          </Button>
        </ButtonGroup>
      </React.Fragment>,
    outsideButtons: <ModalOutsideButton aria-label="More" onClick={noop}>
        <Icon20More />
      </ModalOutsideButton>,
    children: <>
        <Spacing size={20} />
        <UsersStack photos={[getAvatarUrl('user_mm'), getAvatarUrl('user_ilyagrshn'), getAvatarUrl('user_lihachyov'), getAvatarUrl('user_wayshev'), getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz')]} size="l" visibleCount={3} avatarsPosition="block-start">
          Алексей, Илья, Михаил
          <br />и ещё 3 человека
        </UsersStack>
      </>
  }
}`,...U.parameters?.docs?.source}}},W=[`Playground`,`CardWithAvatar`,`CardWithTextArea`,`CardWithMultipleButtons`,`CardWithComplexContent`]}));export{z as a,R as c,V as i,U as n,W as o,H as r,G as s,B as t};