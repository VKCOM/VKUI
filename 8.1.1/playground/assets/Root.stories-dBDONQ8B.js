import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{c as i,l as a,n as o,t as s}from"./View-VcM79w8r.js";import{n as c,t as l}from"./PanelHeader-BqxNg2Wv.js";import{r as u,t as d}from"./VKUIDecorators-BYQp_QSp.js";import{n as f,t as p}from"./Root-BlqEzsVl.js";import{n as m,t as h}from"./Group-iqbU7m06.js";import{n as g,t as _}from"./CellButton-DrOFE0--.js";import{i as v,n as y,t as b}from"./constants-Dj6vOzIh.js";import{n as x,t as S}from"./createStoryParameters-pz1UrWMe.js";var C,w,T,E,D;t((()=>{C=e(n(),1),d(),v(),x(),g(),m(),a(),c(),o(),f(),w=r(),T={title:`Navigation/Root`,component:p,parameters:S(`Root`,b,y),decorators:[u],tags:[`Навигация`]},E={render:function(){let[e,t]=C.useState(`view1`);return(0,w.jsxs)(p,{activeView:e,children:[(0,w.jsx)(s,{activePanel:`panel1.1`,id:`view1`,children:(0,w.jsxs)(i,{id:`panel1.1`,children:[(0,w.jsx)(l,{children:`View 1`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view2`),children:`Open View 2`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})}),(0,w.jsx)(s,{activePanel:`panel2.1`,id:`view2`,children:(0,w.jsxs)(i,{id:`panel2.1`,children:[(0,w.jsx)(l,{children:`View 2`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view1`),children:`Back to View 1`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
  }
}`,...E.parameters?.docs?.source}}},D=[`Example`]}))();export{E as Example,D as __namedExportsOrder,T as default};