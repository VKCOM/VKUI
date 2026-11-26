import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{C as i,D as a,at as o,n as s}from"./dist-ffVrjb4g.js";import{f as c,n as l,p as u,t as d}from"./View-C3co4ox4.js";import{n as f,t as p}from"./PanelHeader-CkV9nDr2.js";import{At as m,Mt as h}from"./iframe-kY6v1YfM.js";import{i as g,n as _,t as v}from"./constants-BWBR8eWE.js";import{n as y,t as b}from"./createStoryParameters-D_aKMzVl.js";import{n as x,t as S}from"./Group-BYaqcOTu.js";import{n as C,t as w}from"./Spinner-B23uxuTb.js";import{n as T,t as E}from"./Avatar-D5eC2z7e.js";import{n as D,t as O}from"./Cell-BcnlaGy0.js";import{n as k,t as A}from"./PanelHeaderBack-DVzCy1F2.js";import{n as j,t as M}from"./Search-Dq9WJNIf.js";var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n(),1),s(),m(),g(),y(),T(),D(),x(),f(),k(),j(),C(),l(),u(),P=r(),F={title:`Navigation/Panel`,component:c,parameters:b(`Panel`,v,_),decorators:[h],tags:[`Навигация`]},I=()=>{let[e,t]=N.useState(`panel1`);return(0,P.jsxs)(d,{activePanel:e,children:[(0,P.jsxs)(c,{id:`panel1`,children:[(0,P.jsx)(p,{children:`More`}),(0,P.jsxs)(S,{children:[(0,P.jsx)(O,{chevron:`auto`,before:(0,P.jsx)(a,{}),onClick:()=>t(`panel2`),children:`Friends`}),(0,P.jsx)(O,{chevron:`auto`,before:(0,P.jsx)(i,{}),onClick:()=>t(`panel2`),children:`Communities`}),(0,P.jsx)(O,{chevron:`auto`,before:(0,P.jsx)(o,{}),onClick:()=>t(`panel2`),children:`Music`})]})]}),(0,P.jsxs)(c,{id:`panel2`,children:[(0,P.jsx)(p,{delimiter:`spacing`,before:(0,P.jsx)(A,{onClick:()=>t(`panel1`)}),children:`Communities`}),(0,P.jsxs)(S,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(O,{subtitle:`Humor`,before:(0,P.jsx)(E,{}),onClick:()=>t(`panel3`),children:`Swipe Right`}),(0,P.jsx)(O,{subtitle:`Cultural Center`,before:(0,P.jsx)(E,{}),onClick:()=>t(`panel3`),children:`Out Cinema`}),(0,P.jsx)(O,{subtitle:`Movies`,before:(0,P.jsx)(E,{}),onClick:()=>t(`panel3`),children:`#ARTPOKAZ`})]})]}),(0,P.jsxs)(c,{id:`panel3`,centered:!0,children:[(0,P.jsx)(p,{before:(0,P.jsx)(A,{onClick:()=>t(`panel2`)}),children:`Out Cinema`}),(0,P.jsx)(w,{}),(0,P.jsx)(`div`,{style:{marginTop:10},children:`Centered Content`})]})]})},L=[`Playground`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Playground,L as __namedExportsOrder,F as default};