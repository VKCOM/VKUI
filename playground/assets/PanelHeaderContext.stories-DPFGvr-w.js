import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-BdXaAE5r.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-uDuhQw0X.js";import{D as I}from"./Div-D4YhIzYC.js";import{P as k}from"./PanelHeaderBack-DZBOEvz9.js";import{P as O}from"./PanelHeaderButton-CbMX-UYA.js";import{P as D}from"./PanelHeaderContent-Cz10-tsj.js";import{P as c}from"./PanelHeaderContext-yOJYi-q9.js";import{I as h}from"./dropdown_16-BvyIcC0P.js";import{I as _}from"./add_outline_28-BsmKiJyd.js";import{I as d}from"./done_24-Dl2Hvoxq.js";import{I as b}from"./users_outline_28-BawNEmqY.js";import{I as y}from"./settings_outline_28-1AFw2Niw.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CjePy1wL.js";import"./children-l5OU2f11.js";import"./IconButton-CXgqouLn.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./VisuallyHidden-DcQJc2es.js";import"./useConfigDirection-B4zlYhYT.js";import"./useGlobalEventListener-BXli_s0F.js";import"./useEventListener-C9KDACQG.js";import"./cancel_24-Cel532NE.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D4GN_-pL.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ByXPLsYQ.js";import"./Headline-DW4C0RJJ.js";import"./Subhead-CM9E3HB6.js";import"./chevron_compact_right_24-DXvgvWyE.js";import"./chevron_16-CxZx8l_q.js";import"./AdaptiveIconRenderer-xeHgus70.js";import"./reorder_ios_24-BEN6KGLx.js";import"./check_box_on_24-BX5u79Qr.js";import"./check_circle_on_24-B4zt7gl-.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BnWz5Pge.js";import"./chevron_left_outline_20-C5Eclvvd.js";import"./Title-CkdPFRXw.js";import"./useGlobalOnClickOutside-DjhN-IgT.js";import"./useCSSKeyframesAnimationController-DT0CppSw.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
