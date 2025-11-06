import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-F_0bvJrc.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Ch7_0cLP.js";import{D as I}from"./Div-DUAnEDrF.js";import{P as k}from"./PanelHeaderBack-X1X-pFnY.js";import{P as O}from"./PanelHeaderButton-CH8QzJHV.js";import{P as D}from"./PanelHeaderContent-CVluehsA.js";import{P as c}from"./PanelHeaderContext-CpDJ0hQC.js";import{I as h}from"./dropdown_16-DVsMelMO.js";import{I as _}from"./add_outline_28-CkN3A2V7.js";import{I as d}from"./done_24-Co3kw9nC.js";import{I as b}from"./users_outline_28-rly6SMde.js";import{I as y}from"./settings_outline_28-C00W6rp5.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CQf4vu_q.js";import"./children-CfV6Kr3n.js";import"./IconButton-BHFFi_8a.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./VisuallyHidden-CRrL_L2y.js";import"./useConfigDirection-poWhsvcV.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./cancel_24-CEwNt985.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DW3d0xtM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DfPFidfa.js";import"./Headline-B-xJiW6B.js";import"./Subhead-CtWFTcAD.js";import"./chevron_compact_right_24-CTggJSQ-.js";import"./chevron_16--5zekb9K.js";import"./AdaptiveIconRenderer-B_n2KyC-.js";import"./reorder_ios_24-GAWcheSo.js";import"./check_box_on_24-B9qcgNo6.js";import"./check_circle_on_24-DOlEs5el.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Cihnbsno.js";import"./chevron_left_outline_20-DWHaa5vd.js";import"./Title-BNzhyC_D.js";import"./useGlobalOnClickOutside-BBvlc0L4.js";import"./useCSSKeyframesAnimationController-DgQ7t2tU.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
