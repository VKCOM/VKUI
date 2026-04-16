import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{s as i,t as a}from"./lib-BRrbp21U.js";import{Q as o,S as s,cn as c,mt as l,n as u,p as d}from"./dist-JE-Gteso.js";import{c as f,l as p,n as m,t as h}from"./View-37X3HzPx.js";import{n as g,t as _}from"./PanelHeader-sVatQzGL.js";import{r as v,t as y}from"./VKUIDecorators-DDgl8MQv.js";import{n as b,t as x}from"./PanelHeaderButton-ChodUF2W.js";import{n as S,t as C}from"./PanelHeaderContent-CYhqRIRj.js";import{n as w,t as T}from"./PanelHeaderContext-Dk_BOmxw.js";import{n as E,t as D}from"./Cell-BNh9fhlj.js";import{n as O,t as k}from"./Div-DkSA0ZW5.js";import{n as A,t as j}from"./PanelHeaderBack-C0I_a8vd.js";import{i as M,n as N,t as P}from"./constants-Dj6vOzIh.js";import{n as F,t as I}from"./createStoryParameters-pz1UrWMe.js";var L,R,z,B,V;t((()=>{L=e(n(),1),u(),a(),y(),M(),F(),E(),O(),p(),g(),A(),b(),S(),m(),w(),R=r(),z={title:`Navigation/PanelHeaderContext`,component:T,parameters:I(`PanelHeaderContext`,P,N),decorators:[v],tags:[`Навигация`]},B={render:function(){let[e,t]=L.useState(!0),[n,r]=L.useState(`all`),a=()=>{t(e=>!e)},u=e=>{let t=e.currentTarget.dataset.mode;r(t),requestAnimationFrame(a)};return(0,R.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,R.jsxs)(f,{id:`panel1`,children:[(0,R.jsx)(_,{before:(0,R.jsx)(j,{onClick:i}),after:(0,R.jsx)(x,{onClick:i,children:(0,R.jsx)(o,{})}),children:(0,R.jsx)(C,{aside:(0,R.jsx)(c,{style:{transform:`rotate(${e?`180deg`:`0`})`}}),onClick:a,children:`Communities`})}),(0,R.jsxs)(T,{opened:e,onClose:a,children:[(0,R.jsx)(D,{before:(0,R.jsx)(d,{}),after:n===`all`?(0,R.jsx)(l,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:u,"data-mode":`all`,children:`Communities`}),(0,R.jsx)(D,{before:(0,R.jsx)(s,{}),after:n===`managed`?(0,R.jsx)(l,{fill:`var(--vkui--color_icon_accent)`}):null,onClick:u,"data-mode":`managed`,children:`Managed Communities`})]}),(0,R.jsx)(k,{children:`PanelHeaderContext`})]})})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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