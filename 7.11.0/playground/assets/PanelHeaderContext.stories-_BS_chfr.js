import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-Db0SwwYs.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Besd3YGk.js";import{D as I}from"./Div-L8zPO7Z0.js";import{P as k}from"./PanelHeaderBack-DWgV3PnX.js";import{P as O}from"./PanelHeaderButton-OvzbCTKU.js";import{P as D}from"./PanelHeaderContent-BlygH4kU.js";import{P as c}from"./PanelHeaderContext-C0MU0siD.js";import{I as h}from"./dropdown_16-CwFVHvGA.js";import{I as _}from"./add_outline_28-DfNE2NNV.js";import{I as d}from"./done_24-Cy8roEq3.js";import{I as b}from"./users_outline_28-BXtFOZvQ.js";import{I as y}from"./settings_outline_28-46ihiH-s.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DLHJRszG.js";import"./children-BEQ7OHl7.js";import"./IconButton-f4wUPwMX.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./VisuallyHidden-CZDmCAU7.js";import"./useConfigDirection-BSBBgTCk.js";import"./useGlobalEventListener-MEUpvqsm.js";import"./useEventListener-DVPMElTJ.js";import"./cancel_24-D88fKsYf.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D8uMGlub.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CJOdhFdd.js";import"./Headline-BS3jMLtX.js";import"./Subhead-C2LPCYB7.js";import"./chevron_compact_right_24-DfrVw4fn.js";import"./chevron_16-DFxn-1ZI.js";import"./AdaptiveIconRenderer-BhTVyLiV.js";import"./reorder_ios_24-BmJKAww3.js";import"./check_box_on_24-DeHtilBI.js";import"./check_circle_on_24-CVkCaerG.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DXr2h4eW.js";import"./chevron_left_outline_20-Bm5ycyz6.js";import"./Title-DrCXdOfJ.js";import"./useGlobalOnClickOutside-2iI8FmpY.js";import"./useCSSKeyframesAnimationController-D-R-i32P.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
