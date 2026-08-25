import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{C as i,D as a,at as o,n as s}from"./dist-BrTYZxJF.js";import{f as c,n as l,p as u,t as d}from"./View-CAtYcsFm.js";import{n as f,t as p}from"./PanelHeader-CBJJ63b-.js";import{At as m,Mt as h}from"./iframe-33ykgUxE.js";import{n as g,t as _}from"./Spinner-8CGtcXLY.js";import{n as v,t as y}from"./Group-Bp-h8t_O.js";import{n as b,t as x}from"./Cell-CJkDvTSg.js";import{n as S,t as C}from"./Avatar-DoiR7xFu.js";import{n as w,t as T}from"./Search-Cx7LYxox.js";import{n as E,t as D}from"./PanelHeaderBack-Rqc2UBNz.js";import{i as O,n as k,t as A}from"./constants-DBkyy3CT.js";import{n as j,t as M}from"./createStoryParameters-DBkK1CfQ.js";var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n(),1),s(),m(),O(),j(),S(),b(),v(),f(),E(),w(),g(),l(),u(),P=r(),F={title:`Navigation/Panel`,component:c,parameters:M(`Panel`,A,k),decorators:[h],tags:[`Навигация`]},I=()=>{let[e,t]=N.useState(`panel1`);return(0,P.jsxs)(d,{activePanel:e,children:[(0,P.jsxs)(c,{id:`panel1`,children:[(0,P.jsx)(p,{children:`More`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(a,{}),onClick:()=>t(`panel2`),children:`Friends`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(i,{}),onClick:()=>t(`panel2`),children:`Communities`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(o,{}),onClick:()=>t(`panel2`),children:`Music`})]})]}),(0,P.jsxs)(c,{id:`panel2`,children:[(0,P.jsx)(p,{delimiter:`spacing`,before:(0,P.jsx)(D,{onClick:()=>t(`panel1`)}),children:`Communities`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(T,{}),(0,P.jsx)(x,{subtitle:`Humor`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Swipe Right`}),(0,P.jsx)(x,{subtitle:`Cultural Center`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Out Cinema`}),(0,P.jsx)(x,{subtitle:`Movies`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`#ARTPOKAZ`})]})]}),(0,P.jsxs)(c,{id:`panel3`,centered:!0,children:[(0,P.jsx)(p,{before:(0,P.jsx)(D,{onClick:()=>t(`panel2`)}),children:`Out Cinema`}),(0,P.jsx)(_,{}),(0,P.jsx)(`div`,{style:{marginTop:10},children:`Centered Content`})]})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [activePanel, setActivePanel] = React.useState('panel1');
  return <View activePanel={activePanel}>
      <Panel id="panel1">
        <PanelHeader>More</PanelHeader>
        <Group>
          <Cell chevron="auto" before={<Icon28UserOutline />} onClick={() => setActivePanel('panel2')}>
            Friends
          </Cell>
          <Cell chevron="auto" before={<Icon28UsersOutline />} onClick={() => setActivePanel('panel2')}>
            Communities
          </Cell>
          <Cell chevron="auto" before={<Icon28MusicOutline />} onClick={() => setActivePanel('panel2')}>
            Music
          </Cell>
        </Group>
      </Panel>
      <Panel id="panel2">
        <PanelHeader delimiter="spacing" before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}>
          Communities
        </PanelHeader>
        <Group>
          <Search />
          <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
            Swipe Right
          </Cell>
          <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
            Out Cinema
          </Cell>
          <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
            #ARTPOKAZ
          </Cell>
        </Group>
      </Panel>
      <Panel id="panel3" centered>
        <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
          Out Cinema
        </PanelHeader>
        <Spinner />
        <div style={{
        marginTop: 10
      }}>
          Centered Content
        </div>
      </Panel>
    </View>;
}`,...I.parameters?.docs?.source}}},L=[`Playground`]})))()}R();export{I as Playground,L as __namedExportsOrder,F as default};