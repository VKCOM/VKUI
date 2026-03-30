import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ct as n,J as r,St as i,a,i as o,n as s,o as c,ps as l,q as u,yo as d}from"./iframe-DYsbkMbM.js";import{n as f,t as p}from"./Root-DAs0LPgc.js";import{n as m,t as h}from"./Group-IwBqagW_.js";import{n as g,t as _}from"./CellButton-Fe7ilDjJ.js";import{i as v,n as y,t as b}from"./constants-CXYaXe_q.js";import{n as x,t as S}from"./createStoryParameters-CbXzS3a6.js";var C,w,T,E,D;t((()=>{C=e(l(),1),s(),v(),x(),g(),m(),n(),r(),c(),f(),w=d(),T={title:`Navigation/Root`,component:p,parameters:S(`Root`,b,y),decorators:[o],tags:[`Навигация`]},E={render:function(){let[e,t]=C.useState(`view1`);return(0,w.jsxs)(p,{activeView:e,children:[(0,w.jsx)(a,{activePanel:`panel1.1`,id:`view1`,children:(0,w.jsxs)(i,{id:`panel1.1`,children:[(0,w.jsx)(u,{children:`View 1`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view2`),children:`Open View 2`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})}),(0,w.jsx)(a,{activePanel:`panel2.1`,id:`view2`,children:(0,w.jsxs)(i,{id:`panel2.1`,children:[(0,w.jsx)(u,{children:`View 2`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(`div`,{style:{height:200}}),(0,w.jsx)(_,{onClick:()=>t(`view1`),children:`Back to View 1`}),(0,w.jsx)(`div`,{style:{height:600}})]})]})})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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