import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{h as i,j as a,n as o,p as s}from"./dist-JE-Gteso.js";import{c,l,n as u,t as d}from"./View-VcM79w8r.js";import{n as f,t as p}from"./PanelHeader-BqxNg2Wv.js";import{r as m,t as h}from"./VKUIDecorators-BYQp_QSp.js";import{n as g,t as _}from"./Spinner-DIJCTf--.js";import{n as v,t as y}from"./Group-iqbU7m06.js";import{n as b,t as x}from"./Cell-Cn2Fvi3a.js";import{n as S,t as C}from"./Avatar-DDrJjOMS.js";import{n as w,t as T}from"./Search-CoNYU7c0.js";import{n as E,t as D}from"./PanelHeaderBack-Bsrc_h4O.js";import{i as O,n as k,t as A}from"./constants-Dj6vOzIh.js";import{n as j,t as M}from"./createStoryParameters-pz1UrWMe.js";var N,P,F,I,L;t((()=>{N=e(n(),1),o(),h(),O(),j(),S(),b(),v(),f(),E(),w(),g(),u(),l(),P=r(),F={title:`Navigation/Panel`,component:c,parameters:M(`Panel`,A,k),decorators:[m],tags:[`Навигация`]},I={render:function(){let[e,t]=N.useState(`panel1`);return(0,P.jsxs)(d,{activePanel:e,children:[(0,P.jsxs)(c,{id:`panel1`,children:[(0,P.jsx)(p,{children:`More`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(i,{}),onClick:()=>t(`panel2`),children:`Friends`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(s,{}),onClick:()=>t(`panel2`),children:`Communities`}),(0,P.jsx)(x,{chevron:`auto`,before:(0,P.jsx)(a,{}),onClick:()=>t(`panel2`),children:`Music`})]})]}),(0,P.jsxs)(c,{id:`panel2`,children:[(0,P.jsx)(p,{delimiter:`spacing`,before:(0,P.jsx)(D,{onClick:()=>t(`panel1`)}),children:`Communities`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(T,{}),(0,P.jsx)(x,{subtitle:`Humor`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Swipe Right`}),(0,P.jsx)(x,{subtitle:`Cultural Center`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`Out Cinema`}),(0,P.jsx)(x,{subtitle:`Movies`,before:(0,P.jsx)(C,{}),onClick:()=>t(`panel3`),children:`#ARTPOKAZ`})]})]}),(0,P.jsxs)(c,{id:`panel3`,centered:!0,children:[(0,P.jsx)(p,{before:(0,P.jsx)(D,{onClick:()=>t(`panel2`)}),children:`Out Cinema`}),(0,P.jsx)(_,{}),(0,P.jsx)(`div`,{style:{marginTop:10},children:`Centered Content`})]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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