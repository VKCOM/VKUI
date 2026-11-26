import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{d as i,t as a}from"./lib-C8oG2MKp.js";import{C as o,Dn as s,V as c,hi as l,n as u,qt as d}from"./dist-ffVrjb4g.js";import{f,n as p,p as m,t as h}from"./View-C3co4ox4.js";import{n as g,t as _}from"./PanelHeader-CkV9nDr2.js";import{At as v,Mt as y}from"./iframe-kY6v1YfM.js";import{i as b,n as x,t as S}from"./constants-BWBR8eWE.js";import{n as C,t as w}from"./createStoryParameters-D_aKMzVl.js";import{n as T,t as E}from"./Div-ByfmwV1U.js";import{n as D,t as O}from"./Cell-BcnlaGy0.js";import{n as k,t as A}from"./PanelHeaderButton-CZzfWHSf.js";import{n as j,t as M}from"./PanelHeaderBack-DVzCy1F2.js";import{n as N,t as P}from"./PanelHeaderContent-DyKWa8f9.js";import{n as F,t as I}from"./PanelHeaderContext-DcHgOJGg.js";var L,R,z,B,V;function H(){return(H=t((()=>{L=e(n(),1),u(),a(),v(),b(),C(),D(),T(),m(),g(),j(),k(),N(),p(),F(),R=r(),z={title:`Navigation/PanelHeaderContext`,component:I,parameters:w(`PanelHeaderContext`,S,x),decorators:[y],tags:[`Навигация`]},B=()=>{let[e,t]=L.useState(!0),[n,r]=L.useState(`all`),a=()=>{t(e=>!e)},u=e=>{let t=e.currentTarget.dataset.mode;r(t),requestAnimationFrame(a)};return(0,R.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,R.jsxs)(f,{id:`panel1`,children:[(0,R.jsx)(_,{before:(0,R.jsx)(M,{onClick:i}),after:(0,R.jsx)(A,{onClick:i,children:(0,R.jsx)(d,{})}),children:(0,R.jsx)(P,{aside:(0,R.jsx)(l,{style:{transform:`rotate(${e?`180deg`:`0`})`}}),onClick:a,children:`Communities`})}),(0,R.jsxs)(I,{opened:e,onClose:a,children:[(0,R.jsx)(O,{before:(0,R.jsx)(o,{}),after:n===`all`?(0,R.jsx)(s,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:u,"data-mode":`all`,children:`Communities`}),(0,R.jsx)(O,{before:(0,R.jsx)(c,{}),after:n===`managed`?(0,R.jsx)(s,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:u,"data-mode":`managed`,children:`Managed Communities`})]}),(0,R.jsx)(E,{children:`PanelHeaderContext`})]})})},V=[`Playground`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as Playground,V as __namedExportsOrder,z as default};