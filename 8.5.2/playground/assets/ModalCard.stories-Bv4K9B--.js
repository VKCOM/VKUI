import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{d as a,t as o}from"./lib-C8oG2MKp.js";import{Dr as s,n as c}from"./dist-ffVrjb4g.js";import{i as l,n as u,t as d}from"./constants-BWBR8eWE.js";import{n as f,t as p}from"./createStoryParameters-D_aKMzVl.js";import{n as m,t as h}from"./Button-UIWLqw4_.js";import{n as g,t as _}from"./createFieldWithPresets-Cqp-m3Wk.js";import{n as v,t as y}from"./ModalOutsideButton-orQYX0dN.js";import{n as b,o as x}from"./mock-gn_3WRVn.js";import{n as S,t as C}from"./Avatar-D5eC2z7e.js";import{n as w,t as T}from"./ButtonGroup-BLQqI9iP.js";import{n as E,t as D}from"./Image-CsTyn_Gb.js";import{n as O,t as k}from"./Spacing-BlSlU3-S.js";import{n as A,t as j}from"./Textarea-Cmc1mv3h.js";import{n as M,t as N}from"./UsersStack-BaOwjAe0.js";import{n as P,t as F}from"./ModalCard-dR-MJYww.js";var I=n({CardWithAvatar:()=>V,CardWithComplexContent:()=>W,CardWithMultipleButtons:()=>U,CardWithTextArea:()=>H,Playground:()=>B,__namedExportsOrder:()=>G,default:()=>z}),L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{L=e(r(),1),c(),o(),l(),x(),g(),f(),S(),m(),w(),E(),v(),O(),A(),M(),P(),R=i(),z={title:`Modals/ModalCard`,component:F,parameters:p(`ModalCard`,d,u,{background:`linear-gradient(blue, pink)`}),argTypes:{icon:_({iconSizes:[`56`],additionalPresets:{Image:(0,R.jsx)(D,{borderRadius:`l`,src:b(`app_zagadki`,200),size:72}),Avatar:(0,R.jsx)(C,{src:b(`chat_basketball`,200),size:72})},requiredIcons:[`Icon56MoneyTransferOutline`,`Icon56NotificationOutline`]})},tags:[`Модальные окна`]},B=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(F,{...e,open:t,onClose:()=>n(!1)})]})},B.args={id:`modal-card`,icon:`Icon56MoneyTransferOutline`,title:`Отправляйте деньги друзьям, используя банковскую карту`,description:`Номер карты получателя не нужен — он сам решит, куда зачислить средства.`,actions:(0,R.jsx)(h,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Попробовать`})},V=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(F,{...e,open:t,onClose:()=>n(!1)})]})},V.args={id:`modal-card`,open:!0,icon:`Image`,title:`Добавить игру «Загадки детства» в меню?`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(h,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Добавить в меню`})},H=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(F,{...e,open:t,onClose:()=>n(!1)})]})},H.args={id:`modal-card`,open:!0,title:`Расскажите о себе`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(h,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Сохранить`}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{size:`m`}),(0,R.jsx)(j,{defaultValue:`В Грузии`})]})},U=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(F,{...e,open:t,onClose:()=>n(!1)})]})},U.args={id:`modal-card`,open:!0,icon:`Icon56NotificationOutline`,title:`Приложение запрашивает разрешение на отправку Вам уведомлений`,actions:(0,R.jsxs)(T,{stretched:!0,children:[(0,R.jsx)(h,{size:`l`,mode:`secondary`,stretched:!0,onClick:a,children:`Запретить`},`deny`),(0,R.jsx)(h,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Разрешить`},`allow`)]})},W=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(F,{...e,open:t,onClose:()=>n(!1)})]})},W.args={id:`modal-card`,open:!0,icon:`Avatar`,title:`Баскетбол на выходных`,titleComponent:`h2`,description:`Приглашение в беседу`,descriptionComponent:`span`,actions:(0,R.jsxs)(L.Fragment,{children:[(0,R.jsx)(k,{size:8}),(0,R.jsxs)(T,{gap:`s`,mode:`vertical`,stretched:!0,children:[(0,R.jsx)(h,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Присоединиться`},`join`),(0,R.jsx)(h,{size:`l`,mode:`secondary`,stretched:!0,onClick:a,children:`Скопировать приглашение`},`copy`)]})]}),outsideButtons:(0,R.jsx)(y,{"aria-label":`More`,onClick:a,children:(0,R.jsx)(s,{})}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{size:20}),(0,R.jsxs)(N,{photos:[b(`user_mm`),b(`user_ilyagrshn`),b(`user_lihachyov`),b(`user_wayshev`),b(`user_arthurstam`),b(`user_xyz`)],size:`l`,visibleCount:3,avatarsPosition:`block-start`,children:[`Алексей, Илья, Михаил`,(0,R.jsx)(`br`,{}),`и ещё 3 человека`]})]})},G=[`Playground`,`CardWithAvatar`,`CardWithTextArea`,`CardWithMultipleButtons`,`CardWithComplexContent`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
  const [open, setOpen] = React.useState(true);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalCard {...props} open={open} onClose={() => setOpen(false)} />
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
  const [open, setOpen] = React.useState(true);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalCard {...props} open={open} onClose={() => setOpen(false)} />
    </>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
  const [open, setOpen] = React.useState(true);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalCard {...props} open={open} onClose={() => setOpen(false)} />
    </>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
  const [open, setOpen] = React.useState(true);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalCard {...props} open={open} onClose={() => setOpen(false)} />
    </>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
  const [open, setOpen] = React.useState(true);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalCard {...props} open={open} onClose={() => setOpen(false)} />
    </>;
}`,...W.parameters?.docs?.source}}}})))()}export{I as n,K as r,W as t};