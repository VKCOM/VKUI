import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{f as i,n as a,p as o,t as s}from"./View-C3co4ox4.js";import{n as c,t as l}from"./PanelHeader-CkV9nDr2.js";import{At as u,Mt as d}from"./iframe-kY6v1YfM.js";import{i as f,n as p,t as m}from"./constants-BWBR8eWE.js";import{n as h,t as g}from"./createStoryParameters-D_aKMzVl.js";import{n as _,t as v}from"./Group-BYaqcOTu.js";import{n as y,t as b}from"./CellButton-BiLy7l3x.js";import{n as x,t as S}from"./Root-c4mpDWda.js";var C,w,T,E,D;function O(){return(O=t((()=>{C=e(n(),1),u(),f(),h(),y(),_(),o(),c(),a(),x(),w=r(),T={title:`Navigation/Root`,component:S,parameters:g(`Root`,m,p),decorators:[d],tags:[`Навигация`]},E=()=>{let[e,t]=C.useState(`view1`);return(0,w.jsxs)(S,{activeView:e,children:[(0,w.jsx)(s,{activePanel:`panel1.1`,id:`view1`,children:(0,w.jsxs)(i,{id:`panel1.1`,children:[(0,w.jsx)(l,{children:`View 1`}),(0,w.jsxs)(v,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(b,{onClick:()=>t(`view2`),children:`Open View 2`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})}),(0,w.jsx)(s,{activePanel:`panel2.1`,id:`view2`,children:(0,w.jsxs)(i,{id:`panel2.1`,children:[(0,w.jsx)(l,{children:`View 2`}),(0,w.jsxs)(v,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(b,{onClick:()=>t(`view1`),children:`Back to View 1`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})})]})},D=[`Example`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as Example,D as __namedExportsOrder,T as default};