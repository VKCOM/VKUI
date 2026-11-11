import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{d as a,t as o}from"./lib-B_SeZ_qx.js";import{Tr as s,n as c}from"./dist-BnR0TT6p.js";import{n as l,t as u}from"./Button-DVL_e09u.js";import{n as d,t as f}from"./ModalOutsideButton-B5r2MJ03.js";import{n as p,t as m}from"./Spacing-QVUiA1Ss.js";import{n as h,t as g}from"./ModalCard-C8-fZAVs.js";import{n as _,t as v}from"./ButtonGroup-Ce-0gpiE.js";import{n as y,t as b}from"./Avatar-BvmUFwsa.js";import{n as x,t as S}from"./Image-CPzV-cTI.js";import{n as C,t as w}from"./UsersStack-BZyPP2VT.js";import{n as T,t as E}from"./Textarea-C-pdVZOQ.js";import{i as D,n as O,t as k}from"./constants-BWBR8eWE.js";import{n as A,t as j}from"./createStoryParameters-D_aKMzVl.js";import{n as M,t as N}from"./createFieldWithPresets-DMl7p1Tx.js";import{n as P,o as F}from"./mock-gn_3WRVn.js";var I=n({CardWithAvatar:()=>V,CardWithComplexContent:()=>W,CardWithMultipleButtons:()=>U,CardWithTextArea:()=>H,Playground:()=>B,__namedExportsOrder:()=>G,default:()=>z}),L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{L=e(r(),1),c(),o(),D(),F(),M(),A(),y(),l(),_(),x(),d(),p(),T(),C(),h(),R=i(),z={title:`Modals/ModalCard`,component:g,parameters:j(`ModalCard`,k,O,{background:`linear-gradient(blue, pink)`}),argTypes:{icon:N({iconSizes:[`56`],additionalPresets:{Image:(0,R.jsx)(S,{borderRadius:`l`,src:P(`app_zagadki`,200),size:72}),Avatar:(0,R.jsx)(b,{src:P(`chat_basketball`,200),size:72})},requiredIcons:[`Icon56MoneyTransferOutline`,`Icon56NotificationOutline`]})},tags:[`Модальные окна`]},B=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},B.args={id:`modal-card`,icon:`Icon56MoneyTransferOutline`,title:`Отправляйте деньги друзьям, используя банковскую карту`,description:`Номер карты получателя не нужен — он сам решит, куда зачислить средства.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Попробовать`})},V=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},V.args={id:`modal-card`,open:!0,icon:`Image`,title:`Добавить игру «Загадки детства» в меню?`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Добавить в меню`})},H=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},H.args={id:`modal-card`,open:!0,title:`Расскажите о себе`,description:`Игра появится под списком разделов на экране меню и будет всегда под рукой.`,actions:(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Сохранить`}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m,{size:`m`}),(0,R.jsx)(E,{defaultValue:`В Грузии`})]})},U=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},U.args={id:`modal-card`,open:!0,icon:`Icon56NotificationOutline`,title:`Приложение запрашивает разрешение на отправку Вам уведомлений`,actions:(0,R.jsxs)(v,{stretched:!0,children:[(0,R.jsx)(u,{size:`l`,mode:`secondary`,stretched:!0,onClick:a,children:`Запретить`},`deny`),(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Разрешить`},`allow`)]})},W=e=>{let[t,n]=L.useState(!0);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,R.jsx)(g,{...e,open:t,onClose:()=>n(!1)})]})},W.args={id:`modal-card`,open:!0,icon:`Avatar`,title:`Баскетбол на выходных`,titleComponent:`h2`,description:`Приглашение в беседу`,descriptionComponent:`span`,actions:(0,R.jsxs)(L.Fragment,{children:[(0,R.jsx)(m,{size:8}),(0,R.jsxs)(v,{gap:`s`,mode:`vertical`,stretched:!0,children:[(0,R.jsx)(u,{size:`l`,mode:`primary`,stretched:!0,onClick:a,children:`Присоединиться`},`join`),(0,R.jsx)(u,{size:`l`,mode:`secondary`,stretched:!0,onClick:a,children:`Скопировать приглашение`},`copy`)]})]}),outsideButtons:(0,R.jsx)(f,{"aria-label":`More`,onClick:a,children:(0,R.jsx)(s,{})}),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m,{size:20}),(0,R.jsxs)(w,{photos:[P(`user_mm`),P(`user_ilyagrshn`),P(`user_lihachyov`),P(`user_wayshev`),P(`user_arthurstam`),P(`user_xyz`)],size:`l`,visibleCount:3,avatarsPosition:`block-start`,children:[`Алексей, Илья, Михаил`,(0,R.jsx)(`br`,{}),`и ещё 3 человека`]})]})},G=[`Playground`,`CardWithAvatar`,`CardWithTextArea`,`CardWithMultipleButtons`,`CardWithComplexContent`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(props: ModalCardProps) => {
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