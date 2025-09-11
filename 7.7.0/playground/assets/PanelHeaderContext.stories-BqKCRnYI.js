import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-DfeTZ_Fw.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BwVXTCvf.js";import{D}from"./Div-DWHB9CiA.js";import{P as h}from"./PanelHeaderBack-CqhtIpSs.js";import{P as _}from"./PanelHeaderButton-CcY6eXfT.js";import{P as b}from"./PanelHeaderContent-Ba5-_bHm.js";import{P as C}from"./PanelHeaderContext-7uv-M1um.js";import{I as y}from"./dropdown_16-B-EasIEY.js";import{I as S}from"./add_outline_28-BlJUPAVD.js";import{I as d}from"./done_24-vOaclkgK.js";import{I as M}from"./users_outline_28-Rch3cMkD.js";import{I as w}from"./settings_outline_28-2Q5EfLcj.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-RvrdKJgI.js";import"./children-DctjNuEY.js";import"./IconButton-CE4ifGYW.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./VisuallyHidden-BuJles22.js";import"./useConfigDirection-CwjKsiym.js";import"./useGlobalEventListener-BDSHjBL9.js";import"./useEventListener-DdaI75sW.js";import"./cancel_24-XhVC2QBS.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BuvX657b.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ivEbNXOe.js";import"./Headline-BbT30PkZ.js";import"./Subhead-BkL8qoJh.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./chevron_16-w2grljdX.js";import"./AdaptiveIconRenderer-S9G6ZqOh.js";import"./reorder_ios_24-CyrNisjS.js";import"./check_box_on_24-C-Ehlzip.js";import"./check_circle_on_24-Bj8lnbOB.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-bGj1lNJw.js";import"./chevron_left_outline_20-BH5O8FRo.js";import"./Title-BA2sPfYi.js";import"./useGlobalOnClickOutside--zE89PDW.js";import"./useCSSKeyframesAnimationController-Cm7x44xW.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Me=["Playground"];export{t as Playground,Me as __namedExportsOrder,Se as default};
