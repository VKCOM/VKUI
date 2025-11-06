import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-7s0T-F6L.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-uOEslU3v.js";import{D}from"./Div-BcYvEc7s.js";import{P as h}from"./PanelHeaderBack-wBfNbUSw.js";import{P as _}from"./PanelHeaderButton-DnGYfCID.js";import{P as b}from"./PanelHeaderContent-BOxU5Iwc.js";import{P as C}from"./PanelHeaderContext-BcqxDjUG.js";import{I as y}from"./dropdown_16-Bnn2OR0d.js";import{I as S}from"./add_outline_28-BTwca8UZ.js";import{I as d}from"./done_24-DMI2PNwe.js";import{I as M}from"./users_outline_28-Ctk-ULX_.js";import{I as w}from"./settings_outline_28-BkFE_8M9.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-D4HLOQNr.js";import"./children-DpgARscT.js";import"./IconButton-CH48s9Wj.js";import"./Tappable-BPO49mNS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./VisuallyHidden-CNF1CStS.js";import"./useConfigDirection--PDr40UE.js";import"./useGlobalEventListener-D2m4XbLr.js";import"./useEventListener-6ORcdIAV.js";import"./cancel_24-CXDD7VnX.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B2IgO3S2.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BCofusdy.js";import"./Headline-CfLwurX4.js";import"./Subhead-D1_aWRaG.js";import"./chevron_compact_right_24-JevFX-l5.js";import"./chevron_16-1M6O6SWX.js";import"./AdaptiveIconRenderer-CngEuoSF.js";import"./reorder_ios_24-m7_uc1ot.js";import"./check_box_on_24-Ch3Mzeh3.js";import"./check_circle_on_24-TttDJ7xG.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-B3NBgJ58.js";import"./chevron_left_outline_20-BuU6DaOs.js";import"./Title-C8ooGZRF.js";import"./useGlobalOnClickOutside-BSFvmrML.js";import"./useCSSKeyframesAnimationController-zx_Vo2k5.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
