import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,p as o,r as s}from"./dist-BrTYZxJF.js";import{f as c,n as l,p as u,t as d}from"./View-CAtYcsFm.js";import{n as f,t as p}from"./Separator-CemYn9f-.js";import{i as m,n as h,r as g,t as _}from"./SplitLayout-w1k6nb1R.js";import{n as v,t as y}from"./Button-DT035ZIy.js";import{n as b,t as x}from"./Group-Bp-h8t_O.js";import{n as S,t as C}from"./Placeholder-DKdoE8bM.js";import{i as w,n as T,t as E}from"./constants-DBkyy3CT.js";import{n as D,t as O}from"./createStoryParameters-DBkK1CfQ.js";var k=n({Playground:()=>P,__namedExportsOrder:()=>F,default:()=>N}),A,j,M,N,P,F;function I(){return(I=t((()=>{A=e(r(),1),a(),w(),D(),v(),b(),u(),S(),f(),h(),l(),m(),j=i(),M=[`panel 1`,`panel 2`],N={title:`Layout/SplitLayout/SplitCol`,component:g,parameters:O(`SplitCol`,E,T,{liveCodeEditor:{scope:{panels:M}}}),tags:[`Раскладка`]},P=e=>{let[t,n]=A.useState(M[0]);return(0,j.jsx)(_,{center:!0,children:(0,j.jsx)(g,{...e,children:(0,j.jsxs)(d,{activePanel:t,children:[(0,j.jsx)(c,{id:M[0],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{icon:(0,j.jsx)(s,{}),title:`Уведомления от сообществ`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(M[1]),children:`Подключить сообщества`}),children:`Подключите сообщества, от которых Вы хотите получать уведомления`}),(0,j.jsx)(p,{}),(0,j.jsx)(C,{icon:(0,j.jsx)(o,{}),children:`Введите адрес страницы в поле поиска`})]})}),(0,j.jsx)(c,{id:M[1],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{children:`Доступ запрещён`}),(0,j.jsx)(p,{}),(0,j.jsx)(C,{title:`Находите друзей`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(M[0]),children:`Найти друзей`}),children:`Здесь будут отображаться люди, которых вы добавите в друзья`})]})})]})})})},P.args={width:`100%`,maxWidth:560},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: SplitColProps) => {
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
}`,...P.parameters?.docs?.source}}},F=[`Playground`]})))()}export{k as n,I as r,P as t};