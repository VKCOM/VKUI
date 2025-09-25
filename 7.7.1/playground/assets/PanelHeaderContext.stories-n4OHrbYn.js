import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-Bz8JpgqB.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-49yG8G3y.js";import{D}from"./Div-1ywPeYj4.js";import{P as h}from"./PanelHeaderBack-BDRvyIaB.js";import{P as _}from"./PanelHeaderButton-wyBE9soL.js";import{P as b}from"./PanelHeaderContent-IlIlC8Wo.js";import{P as C}from"./PanelHeaderContext-A4_DPtzU.js";import{I as y}from"./dropdown_16-x6CrutXa.js";import{I as S}from"./add_outline_28-BDUBT2yT.js";import{I as d}from"./done_24-DTyq8zhU.js";import{I as M}from"./users_outline_28-62uDnqmu.js";import{I as w}from"./settings_outline_28-D2kG_oUq.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BGzPp3kl.js";import"./children-CZEp9rCJ.js";import"./IconButton-SCSZUFVl.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./VisuallyHidden-Civmtkn4.js";import"./useConfigDirection-1j4RIbQo.js";import"./useGlobalEventListener-CHrHveT6.js";import"./useEventListener-D6V4uhmf.js";import"./cancel_24-RdK71gIA.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BZ1hDoNl.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CXG5ZQyY.js";import"./Headline-DOUR4p3R.js";import"./Subhead-CQ9JxnC_.js";import"./chevron_compact_right_24-DCACY6v7.js";import"./chevron_16-r7AvM1qe.js";import"./AdaptiveIconRenderer-Dqx16JeB.js";import"./reorder_ios_24-C1cTNx6s.js";import"./check_box_on_24-CqvgWjWx.js";import"./check_circle_on_24-DEFiirW7.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DOBdgFtc.js";import"./chevron_left_outline_20-Dck12Yqu.js";import"./Title-D2iv6BIz.js";import"./useGlobalOnClickOutside-dfXbByJN.js";import"./useCSSKeyframesAnimationController-Ca15N8Ef.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
