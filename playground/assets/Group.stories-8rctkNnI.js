import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{d as r,t as i}from"./lib-C8oG2MKp.js";import{$ as a,Ft as o,lt as s,n as c,pt as l,qt as u,xt as d}from"./dist-ffVrjb4g.js";import{At as f,Mt as p,jt as m}from"./iframe-kY6v1YfM.js";import{i as h,n as g,t as _}from"./constants-BWBR8eWE.js";import{n as v,t as y}from"./createStoryParameters-D_aKMzVl.js";import{n as b,t as x}from"./Group-BYaqcOTu.js";import{n as S,t as C}from"./SimpleCell-DpxF12b-.js";import{n as w,t as T}from"./CellButton-BiLy7l3x.js";import{n as E,r as D}from"./CellButton.stories-Dh6TLGJA.js";import{n as O,t as k}from"./Header-D_4bQeTM.js";var A=t({Example:()=>P,Playground:()=>N,__namedExportsOrder:()=>F,default:()=>M}),j,M,N,P,F;function I(){return(I=e((()=>{c(),i(),f(),h(),v(),w(),D(),O(),S(),b(),j=n(),M={title:`Layout/Group`,component:x,parameters:y(`Group`,_,g),tags:[`Раскладка`]},N=e=>(0,j.jsx)(x,{...e}),N.args={header:(0,j.jsx)(k,{children:`Header`}),description:`Description`,children:(0,j.jsx)(T,{...E.args,before:(0,j.jsx)(u,{})})},P=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(x,{children:[(0,j.jsxs)(x,{layoutMode:`plain`,children:[(0,j.jsx)(C,{indicator:`+7 ••• •• •• 96`,before:(0,j.jsx)(a,{}),children:`Номер телефона`}),(0,j.jsx)(C,{indicator:`g•••@gmail.com`,before:(0,j.jsx)(s,{}),children:`Email`})]}),(0,j.jsxs)(x,{layoutMode:`plain`,children:[(0,j.jsx)(C,{indicator:`Обновлён 3 года назад`,before:(0,j.jsx)(l,{}),children:`Пароль`}),(0,j.jsx)(C,{indicator:`Вкл.`,before:(0,j.jsx)(o,{}),children:`Подтверждение входа`}),(0,j.jsx)(C,{indicator:`2`,before:(0,j.jsx)(d,{}),children:`Привязанные устройства`})]})]}),(0,j.jsxs)(x,{header:(0,j.jsx)(k,{children:`Адреса`}),description:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти\xA0адреса видны только Вам.`,children:[(0,j.jsx)(T,{onClick:r,children:`Добавить домашний адрес`}),(0,j.jsx)(T,{onClick:r,children:`Добавить рабочий адрес`})]}),(0,j.jsxs)(x.Container,{children:[(0,j.jsx)(x.Header,{children:(0,j.jsx)(k,{children:`Подкомпонентный подход: Адреса`})}),(0,j.jsx)(T,{onClick:r,children:`Добавить домашний адрес`}),(0,j.jsx)(T,{onClick:r,children:`Добавить рабочий адрес`}),(0,j.jsx)(x.Description,{children:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам.`})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(k,{children:`Контент игнорирует боковые отступы Group`}),(0,j.jsxs)(x.ExpandedContent,{children:[(0,j.jsx)(T,{onClick:r,children:`Добавить домашний адрес`}),(0,j.jsx)(T,{onClick:r,children:`Добавить рабочий адрес`})]})]})]}),P.decorators=[m,p],F=[`Playground`,`Example`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(props: GroupProps) => <Group {...props} />`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <>
    <Group>
      <Group layoutMode="plain">
        <SimpleCell indicator="+7 ••• •• •• 96" before={<Icon28PhoneOutline />}>
          Номер телефона
        </SimpleCell>
        <SimpleCell indicator="g•••@gmail.com" before={<Icon28MailOutline />}>
          Email
        </SimpleCell>
      </Group>
      <Group layoutMode="plain">
        <SimpleCell indicator="Обновлён 3 года назад" before={<Icon28KeyOutline />}>
          Пароль
        </SimpleCell>
        <SimpleCell indicator="Вкл." before={<Icon28CheckShieldDeviceOutline />}>
          Подтверждение входа
        </SimpleCell>
        <SimpleCell indicator="2" before={<Icon28DevicesOutline />}>
          Привязанные устройства
        </SimpleCell>
      </Group>
    </Group>
    <Group header={<Header>Адреса</Header>} description="Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти\xA0адреса видны только Вам.">
      <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
      <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
    </Group>
    <Group.Container>
      <Group.Header>
        <Header>Подкомпонентный подход: Адреса</Header>
      </Group.Header>
      <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
      <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
      <Group.Description>
        Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте.
        Эти адреса видны только Вам.
      </Group.Description>
    </Group.Container>
    <Group>
      <Header>Контент игнорирует боковые отступы Group</Header>
      <Group.ExpandedContent>
        <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
        <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
      </Group.ExpandedContent>
    </Group>
  </>`,...P.parameters?.docs?.source}}}})))()}export{N as n,I as r,A as t};