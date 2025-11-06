import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-DQDZnzQe.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BjdPWmPW.js";import{D as h}from"./Div-B9g--vaV.js";import{P as D}from"./PanelHeaderBack-DR7aYIB3.js";import{P as _}from"./PanelHeaderButton-Ch6v3yZ-.js";import{P as b}from"./PanelHeaderContent-TiL9s-2x.js";import{P as C}from"./PanelHeaderContext-CgmV3bff.js";import{I as y}from"./dropdown_16-CwjlyNb8.js";import{I as S}from"./add_outline_28-DZ7mORHt.js";import{I as d}from"./done_24-DQ0K-Smj.js";import{I as M}from"./users_outline_28-DHi84qx0.js";import{I as w}from"./settings_outline_28-BHFYVCRb.js";import"./Removable-CJah0S-4.js";import"./children-JmIZewKa.js";import"./IconButton-fW78sGQ1.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./VisuallyHidden-vRsYbH_6.js";import"./useConfigDirection-CFM_wEcG.js";import"./useGlobalEventListener-DbjjJxwk.js";import"./useEventListener-DcXFqQoy.js";import"./cancel_24-DxEHhXTK.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./SimpleCell-CmzfnJ0J.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./Headline-DFYCKKj3.js";import"./Subhead-CV6mVfj0.js";import"./chevron_compact_right_24-BJHNvhLk.js";import"./chevron_16-D6ldfjxj.js";import"./AdaptiveIconRenderer-3HMdVtOM.js";import"./reorder_ios_24-CfEKpcri.js";import"./check_box_on_24-CE0mzBhH.js";import"./check_circle_on_24-Cwe4JKfo.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DOJpc35Y.js";import"./chevron_left_outline_20-BYQNaDdt.js";import"./Title-DVgoNOIF.js";import"./useGlobalOnClickOutside-BKTdEidI.js";import"./useCSSKeyframesAnimationController-B1m-T7LD.js";const be={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,be as default};
