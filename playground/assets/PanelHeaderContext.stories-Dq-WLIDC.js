import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DJZLDe2v.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CebbIM9i.js";import{D as I}from"./Div-CenMSbRC.js";import{P as k}from"./PanelHeaderBack-Dqp7TDoy.js";import{P as O}from"./PanelHeaderButton-BDWPwHoq.js";import{P as D}from"./PanelHeaderContent-vCIugJ-F.js";import{P as c}from"./PanelHeaderContext-Da9vkqbQ.js";import{I as h}from"./dropdown_16-CUEiXnu9.js";import{I as _}from"./add_outline_28-JXUNvnLp.js";import{I as d}from"./done_24-7zK9vBAI.js";import{I as b}from"./users_outline_28-CVaVBplA.js";import{I as y}from"./settings_outline_28-CY3bt6hH.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-q5QE-8nA.js";import"./children-Dhk2DcjP.js";import"./IconButton-CMOFK_Ua.js";import"./Tappable-CY0nsltg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DJi6sM1Y.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./VisuallyHidden-D0jMNSCO.js";import"./useConfigDirection-Codxpgcm.js";import"./useGlobalEventListener-BxOtw4jo.js";import"./useEventListener-Ghw_nxPQ.js";import"./cancel_24-rN7d2YWh.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DyfECqPx.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D8Ch1fTG.js";import"./Headline-BcxcoLKm.js";import"./Subhead-DeeiPlYW.js";import"./chevron_compact_right_24-BQ1Pic7C.js";import"./chevron_16-Dn3k9T89.js";import"./AdaptiveIconRenderer-B5fGDjcg.js";import"./reorder_ios_24-C-lGXIMb.js";import"./check_box_on_24-BYmefbAu.js";import"./check_circle_on_24-CqRyHPBP.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CMDzQ9Hw.js";import"./chevron_left_outline_20-DNA2miEA.js";import"./Title-a8EH9Ft1.js";import"./useGlobalOnClickOutside-piARu2k4.js";import"./useCSSKeyframesAnimationController-CGUjkk7o.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
