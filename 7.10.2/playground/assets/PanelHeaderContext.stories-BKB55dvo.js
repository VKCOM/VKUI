import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-BnACcuaj.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CPpU3HzX.js";import{D as I}from"./Div-D5ExTRCQ.js";import{P as k}from"./PanelHeaderBack-DCZmm_6-.js";import{P as O}from"./PanelHeaderButton-iDUVETp7.js";import{P as D}from"./PanelHeaderContent-DnuQvIIC.js";import{P as c}from"./PanelHeaderContext-BR-22YH0.js";import{I as h}from"./dropdown_16-Cxad8x5w.js";import{I as _}from"./add_outline_28-CnUf9DQw.js";import{I as d}from"./done_24-D6ZKiczN.js";import{I as b}from"./users_outline_28-DlrqL1uy.js";import{I as y}from"./settings_outline_28-BbA3wmip.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-oaQXNttY.js";import"./children-UU2tqqG0.js";import"./IconButton-DJLKvWv6.js";import"./Tappable-Bp0BqfGQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./InputUtils-Bef-cQxi.js";import"./VisuallyHidden-UrXKAcy6.js";import"./useConfigDirection-BP7XHPEm.js";import"./useGlobalEventListener-Bh7RxLIS.js";import"./useEventListener-Bs6dx_Bk.js";import"./cancel_24-CBMdiZ42.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CsVMJ4gj.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DxEsaF8U.js";import"./Headline-B8WUXhnw.js";import"./Subhead-ctfJxtXj.js";import"./chevron_compact_right_24-DXy50A74.js";import"./chevron_16-Cx4QM-qk.js";import"./AdaptiveIconRenderer-D8036ZRF.js";import"./reorder_ios_24-a0rGK0lo.js";import"./check_box_on_24-D3mZHWMV.js";import"./check_circle_on_24-Cl0MtjDx.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Dnne7oUr.js";import"./chevron_left_outline_20-1-xRflVr.js";import"./Title-DyuwQvN-.js";import"./useGlobalOnClickOutside-BQBFwIVb.js";import"./useCSSKeyframesAnimationController-D6K2uhIw.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
