import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-qlSEKL6e.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CnqdBX5o.js";import{D as I}from"./Div-DdcHZy0r.js";import{P as k}from"./PanelHeaderBack-BpQKCahw.js";import{P as O}from"./PanelHeaderButton-C_brz2Sq.js";import{P as D}from"./PanelHeaderContent-DvmKpeWn.js";import{P as c}from"./PanelHeaderContext-Dfk-jmxf.js";import{I as h}from"./dropdown_16-DqKUoaCo.js";import{I as _}from"./add_outline_28-caBCavnp.js";import{I as d}from"./done_24-yTqpKIJw.js";import{I as b}from"./users_outline_28-ITBpni0t.js";import{I as y}from"./settings_outline_28-Cp2dslhO.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DOcraucr.js";import"./children-DNQ1k21b.js";import"./IconButton-BRmjKqzD.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./VisuallyHidden-Bk8azc-l.js";import"./useConfigDirection-DGAPn-Y-.js";import"./cancel_24-cnh7cOD_.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BaJRQNlP.js";import"./Footnote-BzLLEJCe.js";import"./Headline-CGptYocR.js";import"./Subhead-B_pgjgAK.js";import"./chevron_compact_right_24--z_9b7zM.js";import"./chevron_16-D16aHKlh.js";import"./AdaptiveIconRenderer-DHzGBzZV.js";import"./reorder_ios_24-Dy_QYZqO.js";import"./check_box_on_24-CDCz-Sz_.js";import"./check_circle_on_24-Cchrshrn.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-B_sE7VMm.js";import"./chevron_left_outline_20-CubSQ-Yb.js";import"./Title-DQXLato0.js";import"./useGlobalOnClickOutside-CYQg1LB0.js";import"./FixedLayout-EyOmkO3k.js";import"./useResizeObserver-BEpq7gqa.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-C4k-rov6.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
