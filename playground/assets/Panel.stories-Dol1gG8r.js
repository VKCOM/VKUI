import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ct as n,J as r,On as i,St as a,Vn as o,a as s,i as c,n as l,o as u,ps as d,q as f,rr as p,yo as m,zn as h}from"./iframe-DYsbkMbM.js";import{n as g,t as _}from"./Spinner-1UVIBIAY.js";import{n as v,t as y}from"./Group-IwBqagW_.js";import{n as b,t as x}from"./Cell-1a5TXCxi.js";import{n as S,t as C}from"./Avatar-B74GJaOW.js";import{n as w,t as T}from"./Search-BXmqX1Vu.js";import{n as E,t as D}from"./PanelHeaderBack-C7HEWYy3.js";import{i as O,n as k,t as A}from"./constants-CXYaXe_q.js";import{n as j,t as M}from"./createStoryParameters-CbXzS3a6.js";var N,P,F,I,L;t((()=>{N=e(d(),1),i(),l(),O(),j(),S(),b(),v(),r(),E(),w(),g(),u(),n(),P=m(),F={title:`Navigation/Panel`,component:a,parameters:M(`Panel`,A,k),decorators:[c],tags:[`Навигация`]},I={render:function(){let[e,t]=N.useState(`panel1`);return(0,P.jsxs)(s,{activePanel:e,children:[(0,P.jsxs)(a,{id:`panel1`,children:[(0,P.jsx)(f,{children:`More`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(o,{}),onClick:()=>t(`panel2`),children:`Friends`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(h,{}),onClick:()=>t(`panel2`),children:`Communities`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(p,{}),onClick:()=>t(`panel2`),children:`Music`})]})]}),(0,P.jsxs)(a,{id:`panel2`,children:[(0,P.jsx)(f,{delimiter:`spacing`,before:(0,P.jsx)(D,{onClick:()=>t(`panel1`)}),children:`Communities`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(T,{}),(0,P.jsx)(x,{subtitle:`Humor`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Swipe Right`}),(0,P.jsx)(x,{subtitle:`Cultural Center`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Out Cinema`}),(0,P.jsx)(x,{subtitle:`Movies`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`#ARTPOKAZ`})]})]}),(0,P.jsxs)(a,{id:`panel3`,centered:!0,children:[(0,P.jsx)(f,{before:(0,P.jsx)(D,{onClick:()=>t(`panel2`)}),children:`Out Cinema`}),(0,P.jsx)(_,{}),(0,P.jsx)(`div`,{style:{marginTop:10},children:`Centered Content`})]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
        }}>Centered Content</div>
        </Panel>
      </View>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Playground`]}))();export{I as Playground,L as __namedExportsOrder,F as default};