import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{p as i,t as a}from"./lib-DJkKow_A.js";import{$ as o,Ft as s,lt as c,n as l,pt as u,qt as d,xt as f}from"./dist-Ddx9HyIL.js";import{Mt as p,Nt as m,jt as h}from"./iframe-CgMGh-8q.js";import{n as g,t as _}from"./Header-CQj031La.js";import{n as v,t as y}from"./Group-LwNPJiLD.js";import{n as b,t as x}from"./SimpleCell-BnYS7eov.js";import{n as S,t as C}from"./CellButton-pJogIorg.js";import{i as w,n as T,t as E}from"./constants-cjed6ZWB.js";import{n as D,t as O}from"./createStoryParameters-CMHckkzt.js";import{n as k,r as A}from"./CellButton.stories-Df8XrWqA.js";var j=e({Example:()=>F,Playground:()=>P,__namedExportsOrder:()=>I,default:()=>N}),M,N,P,F,I,L=t((()=>{l(),a(),h(),w(),D(),S(),A(),g(),b(),v(),M=n(r(),1),N={title:`Layout/Group`,component:y,parameters:O(`Group`,E,T),tags:[`Раскладка`]},P=e=>(0,M.jsx)(y,{...e}),P.args={header:(0,M.jsx)(_,{children:`Header`}),description:`Description`,children:(0,M.jsx)(C,{...k.args,before:(0,M.jsx)(d,{})})},F=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(y,{children:[(0,M.jsxs)(y,{mode:`plain`,children:[(0,M.jsx)(x,{indicator:`+7 ••• •• •• 96`,before:(0,M.jsx)(o,{}),children:`Номер телефона`}),(0,M.jsx)(x,{indicator:`g•••@gmail.com`,before:(0,M.jsx)(c,{}),children:`Email`})]}),(0,M.jsxs)(y,{mode:`plain`,children:[(0,M.jsx)(x,{indicator:`Обновлён 3 года назад`,before:(0,M.jsx)(u,{}),children:`Пароль`}),(0,M.jsx)(x,{indicator:`Вкл.`,before:(0,M.jsx)(s,{}),children:`Подтверждение входа`}),(0,M.jsx)(x,{indicator:`2`,before:(0,M.jsx)(f,{}),children:`Привязанные устройства`})]})]}),(0,M.jsxs)(y,{header:(0,M.jsx)(_,{children:`Адреса`}),description:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти\xA0адреса видны только Вам.`,children:[(0,M.jsx)(C,{onClick:i,children:`Добавить домашний адрес`}),(0,M.jsx)(C,{onClick:i,children:`Добавить рабочий адрес`})]}),(0,M.jsxs)(y.Container,{children:[(0,M.jsx)(y.Header,{children:(0,M.jsx)(_,{children:`Подкомпонентный подход: Адреса`})}),(0,M.jsx)(C,{onClick:i,children:`Добавить домашний адрес`}),(0,M.jsx)(C,{onClick:i,children:`Добавить рабочий адрес`}),(0,M.jsx)(y.Description,{children:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам.`})]}),(0,M.jsxs)(y,{children:[(0,M.jsx)(_,{children:`Контент игнорирует боковые отступы Group`}),(0,M.jsxs)(y.ExpandedContent,{children:[(0,M.jsx)(C,{onClick:i,children:`Добавить домашний адрес`}),(0,M.jsx)(C,{onClick:i,children:`Добавить рабочий адрес`})]})]})]}),F.decorators=[p,m],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(props: GroupProps) => <Group {...props} />`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => <>
    <Group>
      <Group mode="plain">
        <SimpleCell indicator="+7 ••• •• •• 96" before={<Icon28PhoneOutline />}>
          Номер телефона
        </SimpleCell>
        <SimpleCell indicator="g•••@gmail.com" before={<Icon28MailOutline />}>
          Email
        </SimpleCell>
      </Group>
      <Group mode="plain">
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
  </>`,...F.parameters?.docs?.source}}},I=[`Playground`,`Example`]}));export{P as n,L as r,j as t};