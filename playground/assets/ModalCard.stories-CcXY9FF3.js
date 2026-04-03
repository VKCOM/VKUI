import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{On as r,co as i,no as a,pi as o,ps as s,yo as c}from"./iframe-DYi3TMGx.js";import{n as l,t as u}from"./Button-YAibZjS6.js";import{n as d,t as f}from"./ModalOutsideButton-D6BDOqCw.js";import{n as p,t as m}from"./Spacing-BwV5WZTe.js";import{n as h,t as g}from"./ModalCard-CxwoCw2M.js";import{n as _,t as v}from"./ButtonGroup-D4MXQMGK.js";import{n as y,t as b}from"./Avatar-BmBkrJji.js";import{n as x,t as S}from"./Image-B4DJL569.js";import{n as C,t as w}from"./UsersStack-BV-kmCFq.js";import{n as T,t as E}from"./Textarea-X4EKI2BZ.js";import{i as D,n as O,t as k}from"./constants-DdtDghDm.js";import{n as A,t as j}from"./createStoryParameters-cWWuDqBQ.js";import{r as M}from"./getFormFieldIconsPresets-BgIOvu4r.js";import{t as N}from"./presets-bFIDTl1z.js";import{n as P,o as F}from"./mock-B_w95Aq1.js";var I=n({CardWithAvatar:()=>H,CardWithComplexContent:()=>G,CardWithMultipleButtons:()=>W,CardWithTextArea:()=>U,Playground:()=>V,__namedExportsOrder:()=>K,default:()=>B}),L,R,z,B,V,H,U,W,G,K,q=t((()=>{L=e(s(),1),r(),a(),D(),F(),N(),A(),y(),l(),_(),x(),d(),p(),T(),C(),h(),R=c(),{useArgs:z}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:`Modals/ModalCard`,component:g,parameters:j(`ModalCard`,k,O,{background:`linear-gradient(blue, pink)`}),argTypes:{icon:M({iconSizes:[`56`],additionalPresets:{Image:(0,R.jsx)(S,{borderRadius:`l`,src:P(`app_zagadki`,200),size:72}),Avatar:(0,R.jsx)(b,{src:P(`chat_basketball`,200),size:72})},requiredIcons:[`Icon56MoneyTransferOutline`,`Icon56NotificationOutline`]})},render:function(e){let[,t]=z();return(0,R.jsx)(g,{...e,onClose:()=>t({open:!1})})},decorators:function(e){let[,t]=z();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>t({open:!0}),children:`Открыть`}),(0,R.jsx)(e,{})]})},tags:[`Модальные окна`]},V={args:{id:`modal-card`,open:!0,icon:`Icon56MoneyTransferOutline`,title:`Отправляйте деньги друзьям, используя банковскую карту`,description:`Номер карты получателя не нужен — он сам решит, куда зачислить средства.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Попробовать`})}},H={args:{id:`modal-card`,open:!0,icon:`Image`,title:`Добавить игру «Загадки детства» в меню?`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Добавить в меню`})}},U={args:{id:`modal-card`,open:!0,title:`Расскажите о себе`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Сохранить`}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m,{size:`m`}),(0,R.jsx)(E,{defaultValue:`В Грузии`})]})}},W={args:{id:`modal-card`,open:!0,icon:`Icon56NotificationOutline`,title:`Приложение запрашивает разрешение на отправку Вам уведомлений`,actions:(0,R.jsxs)(v,{stretched:!0,children:[(0,R.jsx)(u,{size:`l`,mode:`secondary`,stretched:!0,onClick:i,children:`Запретить`},`deny`),(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Разрешить`},`allow`)]})}},G={args:{id:`modal-card`,open:!0,icon:`Avatar`,title:`Баскетбол на выходных`,titleComponent:`h2`,description:`Приглашение в беседу`,descriptionComponent:`span`,actions:(0,R.jsxs)(L.Fragment,{children:[(0,R.jsx)(m,{size:8}),(0,R.jsxs)(v,{gap:`s`,mode:`vertical`,stretched:!0,children:[(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:i,children:`Присоединиться`},`join`),(0,R.jsx)(u,{size:`l`,mode:`secondary`,stretched:!0,onClick:i,children:`Скопировать приглашение`},`copy`)]})]}),outsideButtons:(0,R.jsx)(f,{"aria-label":`More`,onClick:i,children:(0,R.jsx)(o,{})}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m,{size:20}),(0,R.jsxs)(w,{photos:[P(`user_mm`),P(`user_ilyagrshn`),P(`user_lihachyov`),P(`user_wayshev`),P(`user_arthurstam`),P(`user_xyz`)],size:`l`,visibleCount:3,avatarsPosition:`block-start`,children:[`Алексей, Илья, Михаил`,(0,R.jsx)(`br`,{}),`и ещё 3 человека`]})]})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`Playground`,`CardWithAvatar`,`CardWithTextArea`,`CardWithMultipleButtons`,`CardWithComplexContent`]}));export{I as n,q as r,G as t};