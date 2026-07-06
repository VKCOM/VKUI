import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{n as a,p as o,r as s}from"./dist-Ddx9HyIL.js";import{Dn as c,En as l,Ft as u,In as d,Ln as f,Mn as p,Nn as m,Pt as h,bn as g,xn as _}from"./iframe-CgMGh-8q.js";import{n as v,t as y}from"./Button-B19ReAM4.js";import{n as b,t as x}from"./Group-LwNPJiLD.js";import{n as S,t as C}from"./Placeholder-B3WCn6mG.js";import{i as w,n as T,t as E}from"./constants-cjed6ZWB.js";import{n as D,t as O}from"./createStoryParameters-CMHckkzt.js";var k=e({Playground:()=>P,__namedExportsOrder:()=>F,default:()=>N}),A,j,M,N,P,F,I=t((()=>{A=n(r(),1),a(),w(),D(),v(),b(),f(),S(),m(),_(),u(),c(),j=n(i(),1),M=[`panel 1`,`panel 2`],N={title:`Layout/SplitLayout/SplitCol`,component:l,parameters:O(`SplitCol`,E,T,{liveCodeEditor:{scope:{panels:M}}}),tags:[`Раскладка`]},P=e=>{let[t,n]=A.useState(M[0]);return(0,j.jsx)(g,{center:!0,children:(0,j.jsx)(l,{...e,children:(0,j.jsxs)(h,{activePanel:t,children:[(0,j.jsx)(d,{id:M[0],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{icon:(0,j.jsx)(s,{}),title:`Уведомления от сообществ`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(M[1]),children:`Подключить сообщества`}),children:`Подключите сообщества, от которых Вы хотите получать уведомления`}),(0,j.jsx)(p,{}),(0,j.jsx)(C,{icon:(0,j.jsx)(o,{}),children:`Введите адрес страницы в поле поиска`})]})}),(0,j.jsx)(d,{id:M[1],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{children:`Доступ запрещён`}),(0,j.jsx)(p,{}),(0,j.jsx)(C,{title:`Находите друзей`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(M[0]),children:`Найти друзей`}),children:`Здесь будут отображаться люди, которых вы добавите в друзья`})]})})]})})})},P.args={width:`100%`,maxWidth:560},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: SplitColProps) => {
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
}`,...P.parameters?.docs?.source}}},F=[`Playground`]}));export{k as n,I as r,P as t};