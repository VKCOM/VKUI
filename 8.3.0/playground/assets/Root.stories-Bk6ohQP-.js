import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Ft as i,In as a,Ln as o,Nt as s,On as c,Pt as l,jt as u,kn as d}from"./iframe-Cn6jcl_x.js";import{n as f,t as p}from"./Root-DhM18J4r.js";import{n as m,t as h}from"./Group-LwNPJiLD.js";import{n as g,t as _}from"./CellButton-BG1bO8HB.js";import{i as v,n as y,t as b}from"./constants-cjed6ZWB.js";import{n as x,t as S}from"./createStoryParameters-CMHckkzt.js";var C,w,T,E,D;e((()=>{C=t(n(),1),u(),v(),x(),g(),m(),o(),d(),i(),f(),w=t(r(),1),T={title:`Navigation/Root`,component:p,parameters:S(`Root`,b,y),decorators:[s],tags:[`Навигация`]},E=()=>{let[e,t]=C.useState(`view1`);return(0,w.jsxs)(p,{activeView:e,children:[(0,w.jsx)(l,{activePanel:`panel1.1`,id:`view1`,children:(0,w.jsxs)(a,{id:`panel1.1`,children:[(0,w.jsx)(c,{children:`View 1`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view2`),children:`Open View 2`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})}),(0,w.jsx)(l,{activePanel:`panel2.1`,id:`view2`,children:(0,w.jsxs)(a,{id:`panel2.1`,children:[(0,w.jsx)(c,{children:`View 2`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view1`),children:`Back to View 1`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [activeView, setActiveView] = React.useState('view1');
  return <Root activeView={activeView}>
      <View activePanel="panel1.1" id="view1">
        <Panel id="panel1.1">
          <PanelHeader>View 1</PanelHeader>
          <Group>
            <div style={{
            height: 200
          }} />
            <CellButton onClick={() => setActiveView('view2')}>Open View 2</CellButton>
            <div style={{
            height: 600
          }} />
          </Group>
        </Panel>
      </View>
      <View activePanel="panel2.1" id="view2">
        <Panel id="panel2.1">
          <PanelHeader>View 2</PanelHeader>
          <Group>
            <div style={{
            height: 200
          }} />
            <CellButton onClick={() => setActiveView('view1')}>Back to View 1</CellButton>
            <div style={{
            height: 600
          }} />
          </Group>
        </Panel>
      </View>
    </Root>;
}`,...E.parameters?.docs?.source}}},D=[`Example`]}))();export{E as Example,D as __namedExportsOrder,T as default};