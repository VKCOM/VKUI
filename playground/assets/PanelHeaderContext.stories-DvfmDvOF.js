import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-C4ttrVUJ.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Cp71uhqk.js";import{D as I}from"./Div-Bv2x7FHc.js";import{P as k}from"./PanelHeaderBack-BkSSl-BF.js";import{P as O}from"./PanelHeaderButton-BFxm6HjQ.js";import{P as D}from"./PanelHeaderContent-BIW4__WR.js";import{P as c}from"./PanelHeaderContext-99_yNLoo.js";import{I as h}from"./dropdown_16-CCxVvRSP.js";import{I as _}from"./add_outline_28-B10vdpAB.js";import{I as d}from"./done_24-Da-SFvsY.js";import{I as b}from"./users_outline_28-DRYwm5Hr.js";import{I as y}from"./settings_outline_28-B5GiXpvl.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-tI4hkoIu.js";import"./children-DylyViM5.js";import"./IconButton-B4UJc4kp.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./VisuallyHidden-XgvirjGY.js";import"./useConfigDirection-DvmYVNBa.js";import"./useGlobalEventListener-2nmt2YdY.js";import"./useEventListener-BQB6QAnN.js";import"./cancel_24-DD0i1EtC.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BhfeHX5L.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D7DVMFfP.js";import"./Headline-B3vZWFvi.js";import"./Subhead-ChzeQqTJ.js";import"./chevron_compact_right_24-DG2tnjTt.js";import"./chevron_16-CHg4wDrn.js";import"./AdaptiveIconRenderer-DYHxirpm.js";import"./reorder_ios_24-Beh1KLTa.js";import"./check_box_on_24-CrCnysAK.js";import"./check_circle_on_24-BEYLR_Vs.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BANzBrya.js";import"./chevron_left_outline_20-BY_CTwIe.js";import"./Title-DTItDJJC.js";import"./useGlobalOnClickOutside-tvjqCD_D.js";import"./useCSSKeyframesAnimationController-iUHQQwp7.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
