import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DhuutAfC.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CN0QgLTh.js";import{D as I}from"./Div-BKcZLB21.js";import{P as k}from"./PanelHeaderBack-CVSthn6w.js";import{P as O}from"./PanelHeaderButton-DP4D98Cl.js";import{P as D}from"./PanelHeaderContent-qHPwty5C.js";import{P as c}from"./PanelHeaderContext-Cc3VQax8.js";import{I as h}from"./dropdown_16-CtHHCwwF.js";import{I as _}from"./add_outline_28-Bf6vMcIp.js";import{I as d}from"./done_24-CX2R_UC_.js";import{I as b}from"./users_outline_28-BwIqwd0U.js";import{I as y}from"./settings_outline_28-Lk4H22so.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-WF0wvkrR.js";import"./children-f71tIclX.js";import"./IconButton-CS1h91J8.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./useConfigDirection-BKOpe2-3.js";import"./useGlobalEventListener-B3NjbVmX.js";import"./useEventListener-BINAhqZ-.js";import"./cancel_24-DOIBb5nA.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Ik9ZceqB.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./chevron_compact_right_24-e5As_rIW.js";import"./chevron_16-B8RroCu2.js";import"./AdaptiveIconRenderer-C_lOOdXP.js";import"./reorder_ios_24-5ExYPhZY.js";import"./check_box_on_24-DrP2BaSr.js";import"./check_circle_on_24-DIO2EvKW.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DstL_OmN.js";import"./chevron_left_outline_20-BFW3SHD3.js";import"./Title-BixyGD4w.js";import"./useGlobalOnClickOutside-CYNE3tgF.js";import"./useCSSKeyframesAnimationController-hP20fGyK.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
