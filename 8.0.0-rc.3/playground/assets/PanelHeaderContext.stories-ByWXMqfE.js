import{w as x,r as l,j as e,V as f,P,a as g,n as s}from"./iframe-Cn0klKvz.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CddNJcfs.js";import{D as I}from"./Div-C6CxOCne.js";import{P as k}from"./PanelHeaderBack-BupP6OB1.js";import{P as O}from"./PanelHeaderButton-BYqA14CU.js";import{P as D}from"./PanelHeaderContent-CC6riAaP.js";import{P as c}from"./PanelHeaderContext-DuWTzS2e.js";import{I as h}from"./dropdown_16-BV0guf48.js";import{I as _}from"./add_outline_28-2ouzDw8O.js";import{I as d}from"./done_24-Ctb4GlzO.js";import{I as y}from"./users_outline_28-CmM5LSVt.js";import{I as S}from"./settings_outline_28-BdcaCvcp.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DJHs5oKA.js";import"./children-IiL0uSHX.js";import"./IconButton-DSEgeqcd.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./useConfigDirection-DuEYXWS_.js";import"./cancel_24-C8myLtmO.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./SimpleCell-FhAfTR8Z.js";import"./Footnote-BwZkqEqY.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./chevron_16-5H5JBddQ.js";import"./AdaptiveIconRenderer-BkROPn6l.js";import"./reorder_ios_24-C_2PjSLX.js";import"./check_box_on_24-DFXb0s76.js";import"./check_circle_on_24-D20_x5sk.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DMU6b4wv.js";import"./chevron_left_outline_20-9God32SQ.js";import"./Title-C-xuvkmu.js";import"./useGlobalOnClickOutside-BUgtwJyi.js";import"./FixedLayout-DDmK0AfG.js";import"./useResizeObserver-CO1g2sRz.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-BfW96VM9.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(y,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(S,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,_e as default};
