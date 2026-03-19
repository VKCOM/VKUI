import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{t as r}from"./jsx-runtime-CRMqfscQ.js";import{c as i,n as a,r as o}from"./dist-BOHPH9lW.js";import{c as s,l as c,n as l,t as u}from"./View-CliGqafS.js";import{n as d,t as f}from"./Separator-BuqJ50uK.js";import{i as p,n as m,r as h,t as g}from"./SplitLayout-CiV-a6rz.js";import{n as _,t as v}from"./Button-B52Pa8EG.js";import{n as y,t as b}from"./Group-DLQ4QDyF.js";import{n as x,t as S}from"./Placeholder-BI6EG9Dt.js";import{i as C,n as w,t as T}from"./constants-BYo4AJCv.js";import{n as E,t as D}from"./createStoryParameters-Dbf8epgV.js";var O,k,A,j,M,N,P=t((()=>{O=e(n(),1),a(),C(),E(),_(),y(),c(),x(),d(),m(),l(),p(),k=r(),A={title:`Layout/SplitLayout/SplitCol`,component:h,parameters:D(`SplitCol`,T,w),tags:[`Раскладка`]},j=[`panel 1`,`panel 2`],M={args:{width:`100%`,maxWidth:560},render:function(e){let[t,n]=O.useState(j[0]);return(0,k.jsx)(g,{center:!0,children:(0,k.jsx)(h,{...e,children:(0,k.jsxs)(u,{activePanel:t,children:[(0,k.jsx)(s,{id:j[0],children:(0,k.jsxs)(b,{children:[(0,k.jsx)(S,{icon:(0,k.jsx)(o,{}),title:`Уведомления от сообществ`,action:(0,k.jsx)(v,{size:`m`,onClick:()=>n(j[1]),children:`Подключить сообщества`}),children:`Подключите сообщества, от которых Вы хотите получать уведомления`}),(0,k.jsx)(f,{}),(0,k.jsx)(S,{icon:(0,k.jsx)(i,{}),children:`Введите адрес страницы в поле поиска`})]})}),(0,k.jsx)(s,{id:j[1],children:(0,k.jsxs)(b,{children:[(0,k.jsx)(S,{children:`Доступ запрещён`}),(0,k.jsx)(f,{}),(0,k.jsx)(S,{title:`Находите друзей`,action:(0,k.jsx)(v,{size:`m`,onClick:()=>n(j[0]),children:`Найти друзей`}),children:`Здесь будут отображаться люди, которых вы добавите в друзья`})]})})]})})})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%',
    maxWidth: 560
  },
  render: function Render(args) {
    const [panel, setPanel] = React.useState(panels[0]);
    return <SplitLayout center>
        <SplitCol {...args}>
          <View activePanel={panel}>
            <Panel id={panels[0]}>
              <Group>
                <Placeholder icon={<Icon56UsersOutline />} title="Уведомления от сообществ" action={<Button size="m" onClick={() => setPanel(panels[1])}>
                      Подключить сообщества
                    </Button>}>
                  Подключите сообщества, от которых Вы хотите получать уведомления
                </Placeholder>
                <Separator />
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
            <Panel id={panels[1]}>
              <Group>
                <Placeholder>Доступ запрещён</Placeholder>
                <Separator />
                <Placeholder title="Находите друзей" action={<Button size="m" onClick={() => setPanel(panels[0])}>
                      Найти друзей
                    </Button>}>
                  Здесь будут отображаться люди, которых вы добавите в друзья
                </Placeholder>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Playground`]}));export{A as i,N as n,P as r,M as t};