import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-CJSxyW9U.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Ylz3rDRA.js";import{D as I}from"./Div-Ct-3pUxM.js";import{P as k}from"./PanelHeaderBack-BNRsSIKM.js";import{P as O}from"./PanelHeaderButton-CufZDOjk.js";import{P as D}from"./PanelHeaderContent-txphgV2B.js";import{P as c}from"./PanelHeaderContext-iE7VacFr.js";import{I as h}from"./dropdown_16-BA3IINKH.js";import{I as _}from"./add_outline_28-BpHUfYee.js";import{I as d}from"./done_24-Bxofc1lp.js";import{I as b}from"./users_outline_28-D-qa_Aq7.js";import{I as y}from"./settings_outline_28-Ci6vM46a.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Cn8iqEd1.js";import"./children-B_vv-93P.js";import"./IconButton-DlIx3m79.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./useConfigDirection-C3cHGESc.js";import"./cancel_24-DiZsY-MY.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BHTnRhyN.js";import"./Footnote-PeEhUyBm.js";import"./Headline-B-NKRtjP.js";import"./Subhead-B39S2HHi.js";import"./chevron_compact_right_24-DIVGPtpa.js";import"./chevron_16-BZCG5KUX.js";import"./AdaptiveIconRenderer-CCNgnGet.js";import"./reorder_ios_24-DiMTFw9o.js";import"./check_box_on_24-DgOwFitz.js";import"./check_circle_on_24-D3K6OCvg.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BA0NDnx8.js";import"./chevron_left_outline_20-Nu9zVYtc.js";import"./Title-BHBezTAx.js";import"./useGlobalOnClickOutside-D_d0MryI.js";import"./FixedLayout-FLWvLs8h.js";import"./useResizeObserver-Biiqpwp-.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-MRE4Ku0E.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,be as default};
