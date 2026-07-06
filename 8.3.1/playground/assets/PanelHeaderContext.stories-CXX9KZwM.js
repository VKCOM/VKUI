import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{p as i,t as a}from"./lib-DJkKow_A.js";import{C as o,Tn as s,V as c,n as l,pi as u,qt as d}from"./dist-Ddx9HyIL.js";import{Ft as f,In as p,Ln as m,Nt as h,On as g,Pt as _,jt as v,kn as y}from"./iframe-CgMGh-8q.js";import{n as b,t as x}from"./PanelHeaderButton-gRwMi-8u.js";import{n as S,t as C}from"./PanelHeaderContent-BULFZzAo.js";import{n as w,t as T}from"./PanelHeaderContext-BpuRyJFH.js";import{n as E,t as D}from"./Cell-Co3d1Bhe.js";import{n as O,t as k}from"./Div-Cd0q8MDi.js";import{n as A,t as j}from"./PanelHeaderBack-CGkt6sNu.js";import{i as M,n as N,t as P}from"./constants-cjed6ZWB.js";import{n as F,t as I}from"./createStoryParameters-CMHckkzt.js";var L,R,z,B,V;e((()=>{L=t(n(),1),l(),a(),v(),M(),F(),E(),O(),m(),y(),A(),b(),S(),f(),w(),R=t(r(),1),z={title:`Navigation/PanelHeaderContext`,component:T,parameters:I(`PanelHeaderContext`,P,N),decorators:[h],tags:[`Навигация`]},B=()=>{let[e,t]=L.useState(!0),[n,r]=L.useState(`all`),a=()=>{t(e=>!e)},l=e=>{let t=e.currentTarget.dataset.mode;r(t),requestAnimationFrame(a)};return(0,R.jsx)(_,{id:`main`,activePanel:`panel1`,children:(0,R.jsxs)(p,{id:`panel1`,children:[(0,R.jsx)(g,{before:(0,R.jsx)(j,{onClick:i}),after:(0,R.jsx)(x,{onClick:i,children:(0,R.jsx)(d,{})}),children:(0,R.jsx)(C,{aside:(0,R.jsx)(u,{style:{transform:`rotate(${e?`180deg`:`0`})`}}),onClick:a,children:`Communities`})}),(0,R.jsxs)(T,{opened:e,onClose:a,children:[(0,R.jsx)(D,{before:(0,R.jsx)(o,{}),after:n===`all`?(0,R.jsx)(s,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:l,"data-mode":`all`,children:`Communities`}),(0,R.jsx)(D,{before:(0,R.jsx)(c,{}),after:n===`managed`?(0,R.jsx)(s,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:l,"data-mode":`managed`,children:`Managed Communities`})]}),(0,R.jsx)(k,{children:`PanelHeaderContext`})]})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [contextOpened, setContextOpened] = React.useState(true);
  const [mode, setMode] = React.useState<string | undefined>('all');
  const toggleContext = () => {
    setContextOpened(prev => !prev);
  };
  const select = (e: React.MouseEvent<HTMLElement>) => {
    const mode = e.currentTarget.dataset.mode;
    setMode(mode);
    requestAnimationFrame(toggleContext);
  };
  return <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderBack onClick={noop} />} after={<PanelHeaderButton onClick={noop}>
              <Icon28AddOutline />
            </PanelHeaderButton>}>
          <PanelHeaderContent aside={<Icon16Dropdown style={{
          transform: \`rotate(\${contextOpened ? '180deg' : '0'})\`
        }} />} onClick={toggleContext}>
            Communities
          </PanelHeaderContent>
        </PanelHeader>
        <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
          <Cell before={<Icon28UsersOutline />} after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">
            Communities
          </Cell>
          <Cell before={<Icon28SettingsOutline />} after={mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">
            Managed Communities
          </Cell>
        </PanelHeaderContext>
        <Div>PanelHeaderContext</Div>
      </Panel>
    </View>;
}`,...B.parameters?.docs?.source}}},V=[`Playground`]}))();export{B as Playground,V as __namedExportsOrder,z as default};