import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Br as n,Ct as r,J as i,Jn as a,On as o,Pi as s,St as c,a as l,co as u,i as d,n as f,no as p,o as m,ps as h,q as g,wr as _,yo as v,zn as y}from"./iframe-DYsbkMbM.js";import{n as b,t as x}from"./PanelHeaderButton-CpEyLSXO.js";import{n as S,t as C}from"./PanelHeaderContent-mGkA9Qe7.js";import{n as w,t as T}from"./PanelHeaderContext-DVyyivfW.js";import{n as E,t as D}from"./Cell-1a5TXCxi.js";import{n as O,t as k}from"./Div-DVktvkLx.js";import{n as A,t as j}from"./PanelHeaderBack-C7HEWYy3.js";import{i as M,n as N,t as P}from"./constants-CXYaXe_q.js";import{n as F,t as I}from"./createStoryParameters-CbXzS3a6.js";var L,R,z,B,V;t((()=>{L=e(h(),1),o(),p(),f(),M(),F(),E(),O(),r(),i(),A(),b(),S(),m(),w(),R=v(),z={title:`Navigation/PanelHeaderContext`,component:T,parameters:I(`PanelHeaderContext`,P,N),decorators:[d],tags:[`Навигация`]},B={render:function(){let[e,t]=L.useState(!0),[r,i]=L.useState(`all`),o=()=>{t(e=>!e)},d=e=>{let t=e.currentTarget.dataset.mode;i(t),requestAnimationFrame(o)};return(0,R.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,R.jsxs)(c,{id:`panel1`,children:[(0,R.jsx)(g,{before:(0,R.jsx)(j,{onClick:u}),after:(0,R.jsx)(x,{onClick:u,children:(0,R.jsx)(_,{})}),children:(0,R.jsx)(C,{aside:(0,R.jsx)(s,{style:{transform:`rotate(${e?`180deg`:`0`})`}}),onClick:o,children:`Communities`})}),(0,R.jsxs)(T,{opened:e,onClose:o,children:[(0,R.jsx)(D,{before:(0,R.jsx)(y,{}),after:r===`all`?(0,R.jsx)(n,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:d,"data-mode":`all`,children:`Communities`}),(0,R.jsx)(D,{before:(0,R.jsx)(a,{}),after:r===`managed`?(0,R.jsx)(n,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:d,"data-mode":`managed`,children:`Managed Communities`})]}),(0,R.jsx)(k,{children:`PanelHeaderContext`})]})})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
  }
}`,...B.parameters?.docs?.source}}},V=[`Playground`]}))();export{B as Playground,V as __namedExportsOrder,z as default};