import{n as e,r as t}from"./chunk-BneVvdWh.js";import{On as n,ar as r,co as i,dr as a,er as o,i as s,n as c,no as l,r as u,sr as d,vr as f,wr as p,yo as m}from"./iframe-DYsbkMbM.js";import{n as h,t as g}from"./Header-DSVCmIcx.js";import{n as _,t as v}from"./Group-IwBqagW_.js";import{n as y,t as b}from"./SimpleCell-BGK4M8ng.js";import{n as x,t as S}from"./CellButton-Fe7ilDjJ.js";import{i as C,n as w,t as T}from"./constants-CXYaXe_q.js";import{n as E,t as D}from"./createStoryParameters-CbXzS3a6.js";import{n as O,r as k}from"./CellButton.stories-QTNS_lQg.js";var A=t({Example:()=>P,Playground:()=>N,__namedExportsOrder:()=>F,default:()=>M}),j,M,N,P,F,I=e((()=>{n(),l(),c(),C(),E(),x(),k(),h(),y(),_(),j=m(),M={title:`Layout/Group`,component:v,parameters:D(`Group`,T,w),tags:[`Раскладка`]},N={args:{header:(0,j.jsx)(g,{children:`Header`}),description:`Description`,children:(0,j.jsx)(S,{...O.args,before:(0,j.jsx)(p,{})})}},P={...N,decorators:[()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(v,{children:[(0,j.jsxs)(v,{mode:`plain`,children:[(0,j.jsx)(b,{indicator:`+7 ••• •• •• 96`,before:(0,j.jsx)(o,{}),children:`Номер телефона`}),(0,j.jsx)(b,{indicator:`g•••@gmail.com`,before:(0,j.jsx)(r,{}),children:`Email`})]}),(0,j.jsxs)(v,{mode:`plain`,children:[(0,j.jsx)(b,{indicator:`Обновлён 3 года назад`,before:(0,j.jsx)(d,{}),children:`Пароль`}),(0,j.jsx)(b,{indicator:`Вкл.`,before:(0,j.jsx)(f,{}),children:`Подтверждение входа`}),(0,j.jsx)(b,{indicator:`2`,before:(0,j.jsx)(a,{}),children:`Привязанные устройства`})]})]}),(0,j.jsxs)(v,{header:(0,j.jsx)(g,{children:`Адреса`}),description:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти\xA0адреса видны только Вам.`,children:[(0,j.jsx)(S,{onClick:i,children:`Добавить домашний адрес`}),(0,j.jsx)(S,{onClick:i,children:`Добавить рабочий адрес`})]}),(0,j.jsxs)(v.Container,{children:[(0,j.jsx)(v.Header,{children:(0,j.jsx)(g,{children:`Подкомпонентный подход: Адреса`})}),(0,j.jsx)(S,{onClick:i,children:`Добавить домашний адрес`}),(0,j.jsx)(S,{onClick:i,children:`Добавить рабочий адрес`}),(0,j.jsx)(v.Description,{children:`Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам.`})]}),(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{children:`Контент игнорирует боковые отступы Group`}),(0,j.jsxs)(v.ExpandedContent,{children:[(0,j.jsx)(S,{onClick:i,children:`Добавить домашний адрес`}),(0,j.jsx)(S,{onClick:i,children:`Добавить рабочий адрес`})]})]})]}),u,s]},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header>Header</Header>,
    description: 'Description',
    children: <CellButton {...BasicCellButton.args} before={<Icon28AddOutline />} />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [() => <>
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
            Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах
            ВКонтакте. Эти адреса видны только Вам.
          </Group.Description>
        </Group.Container>
        <Group>
          <Header>Контент игнорирует боковые отступы Group</Header>
          <Group.ExpandedContent>
            <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
            <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
          </Group.ExpandedContent>
        </Group>
      </>, withSinglePanel, withVKUILayout]
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Example`]}));export{N as n,I as r,A as t};