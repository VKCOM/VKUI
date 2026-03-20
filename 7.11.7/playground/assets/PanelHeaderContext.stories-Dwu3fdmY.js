import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-CmkY54f5.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DFHdhUIa.js";import{D as I}from"./Div-CypHjQr-.js";import{P as k}from"./PanelHeaderBack-BzwjlNlh.js";import{P as O}from"./PanelHeaderButton-7oIb3O2J.js";import{P as D}from"./PanelHeaderContent-DTVXtrjF.js";import{P as c}from"./PanelHeaderContext-C1PYi1qA.js";import{I as h}from"./dropdown_16-Bhp0DZsf.js";import{I as _}from"./add_outline_28-BW0iIwJZ.js";import{I as d}from"./done_24-D-beAwhP.js";import{I as b}from"./users_outline_28-B9706ubU.js";import{I as y}from"./settings_outline_28-B3oKLMlC.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-N-h_aW0x.js";import"./children-nFeoBYDx.js";import"./IconButton-hyZ4L0bk.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./useConfigDirection-Duqs0EiT.js";import"./useGlobalEventListener-D4VlZRSO.js";import"./useEventListener-CsQVQesK.js";import"./cancel_24-D5GJv2PT.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CINcSEmj.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./Headline-DsYeFntm.js";import"./Subhead-BS8ES9bw.js";import"./chevron_compact_right_24-CcDOCtXp.js";import"./chevron_16-CCLojpkC.js";import"./AdaptiveIconRenderer-DFYIDbB7.js";import"./reorder_ios_24-CwsIQqDe.js";import"./check_box_on_24-BBPM5bmg.js";import"./check_circle_on_24-C1CPyBlE.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-p-UxZXlx.js";import"./chevron_left_outline_20-Dm8bj3a9.js";import"./Title-DSkwAgcq.js";import"./useGlobalOnClickOutside-B7nntoG6.js";import"./useCSSKeyframesAnimationController-BVUaD1V0.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
