import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DxxZLxeI.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-C9lzdJDz.js";import{D as I}from"./Div-Cmsoo6vK.js";import{P as k}from"./PanelHeaderBack-DYoyppKZ.js";import{P as O}from"./PanelHeaderButton-8H70UPSW.js";import{P as D}from"./PanelHeaderContent-CXnM9k6E.js";import{P as c}from"./PanelHeaderContext-eFivP32P.js";import{I as h}from"./dropdown_16-SNtnKhYE.js";import{I as _}from"./add_outline_28-DAle6ttb.js";import{I as d}from"./done_24-CPLWvNX3.js";import{I as b}from"./users_outline_28-CoFWHd22.js";import{I as y}from"./settings_outline_28-BuGv2HYB.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DPTeUPkV.js";import"./children-CeKSHNky.js";import"./IconButton-CgpvmjLz.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./VisuallyHidden-DujZCwJ6.js";import"./useConfigDirection-Cl-SHqVT.js";import"./useGlobalEventListener-BlIjoW0G.js";import"./useEventListener-DLWBolfY.js";import"./cancel_24-BuXDWULC.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Dd4jE0le.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-C3-8h3B5.js";import"./Headline-WANZoqA8.js";import"./Subhead-BP7ZzX_Z.js";import"./chevron_compact_right_24-nPyqWDNh.js";import"./chevron_16-CGve78DZ.js";import"./AdaptiveIconRenderer-3rDf-OfV.js";import"./reorder_ios_24-Co8695lz.js";import"./check_box_on_24-DfMQbV1N.js";import"./check_circle_on_24-ulkn_pXb.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CJtjEIet.js";import"./chevron_left_outline_20-B6Q-cCoY.js";import"./Title-BaiQADO8.js";import"./useGlobalOnClickOutside-CWp7-_1_.js";import"./useCSSKeyframesAnimationController-BDDf6Nj3.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
