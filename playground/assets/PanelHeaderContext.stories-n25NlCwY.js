import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-CjlHPZNU.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DlH0uhGu.js";import{D as I}from"./Div-BZ1YOreV.js";import{P as k}from"./PanelHeaderBack-BsDTtlQJ.js";import{P as O}from"./PanelHeaderButton-Xzu1VoMK.js";import{P as D}from"./PanelHeaderContent-Bssgpd4S.js";import{P as c}from"./PanelHeaderContext-CSxGh2hQ.js";import{I as h}from"./dropdown_16-B2-Nrhw2.js";import{I as _}from"./add_outline_28-7iAMFjgQ.js";import{I as d}from"./done_24-Do7WiqV_.js";import{I as b}from"./users_outline_28-BU1bSn8F.js";import{I as y}from"./settings_outline_28---3C1Ws7.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-8x1bU61T.js";import"./children-DXLPnz61.js";import"./IconButton-DL_Qecp_.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./VisuallyHidden-BhHQTREx.js";import"./useConfigDirection-CtCMtXRC.js";import"./useGlobalEventListener-B-Bh84II.js";import"./useEventListener-B0Sz5sam.js";import"./cancel_24-DoQTGG5W.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B9ylNtQr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-OilvUFbZ.js";import"./Headline-5QXk0_9F.js";import"./Subhead-LlQLYw53.js";import"./chevron_compact_right_24-D4IlNfKx.js";import"./chevron_16-CdgPvfwT.js";import"./AdaptiveIconRenderer-Bf6_Ojz6.js";import"./reorder_ios_24-Bsdplb-r.js";import"./check_box_on_24-DQrHUw8r.js";import"./check_circle_on_24-DDCkNJvr.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BXfJsUVJ.js";import"./chevron_left_outline_20-lPTczRg2.js";import"./Title-GMDilNWH.js";import"./useGlobalOnClickOutside-xSKnEgMI.js";import"./useCSSKeyframesAnimationController-DfKwHzsu.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const be=["Playground"];export{t as Playground,be as __namedExportsOrder,_e as default};
