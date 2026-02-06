import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-ChnjXsIu.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-3-gm7wf4.js";import{D as I}from"./Div-DBaJTjah.js";import{P as k}from"./PanelHeaderBack-BMfsZNDE.js";import{P as O}from"./PanelHeaderButton-CpIC6xPd.js";import{P as D}from"./PanelHeaderContent-CwOZng7V.js";import{P as c}from"./PanelHeaderContext-DqBUyAcA.js";import{I as h}from"./dropdown_16-f2dCe_Wa.js";import{I as _}from"./add_outline_28-DJtYOhFs.js";import{I as d}from"./done_24-B2InHgKK.js";import{I as b}from"./users_outline_28-CVpXx4xM.js";import{I as y}from"./settings_outline_28-C95KJZkS.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DWZ-UCU_.js";import"./children-CZfmS9px.js";import"./IconButton-DcISWAYH.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./VisuallyHidden-C0GQz0ke.js";import"./useConfigDirection-Cu4tNejP.js";import"./useGlobalEventListener-D4SgjmKz.js";import"./useEventListener-BRTI2b5J.js";import"./cancel_24-Du4R4GHJ.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Crqp4U-W.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-a8vRHGoF.js";import"./Headline-jnvlDnhz.js";import"./Subhead-4jBJxz3c.js";import"./chevron_compact_right_24-BmFJ2T-y.js";import"./chevron_16-BBzBgMAq.js";import"./AdaptiveIconRenderer-BsUJOOVb.js";import"./reorder_ios_24-BEsdD0Oy.js";import"./check_box_on_24-DmnzlGW9.js";import"./check_circle_on_24-DYFQbA8z.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CMLKi4_y.js";import"./chevron_left_outline_20-0BRPPppm.js";import"./Title-ufKZcuLl.js";import"./useGlobalOnClickOutside-CVH9hgWw.js";import"./useCSSKeyframesAnimationController-1KBRF7Rv.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
