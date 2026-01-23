import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-BJ9555aC.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-By-BPbxY.js";import{D as I}from"./Div-BelP9K-l.js";import{P as k}from"./PanelHeaderBack-74qSBvx1.js";import{P as O}from"./PanelHeaderButton-BUzE02Lo.js";import{P as D}from"./PanelHeaderContent-Dn3p73Q5.js";import{P as c}from"./PanelHeaderContext-BM1AnrOn.js";import{I as h}from"./dropdown_16-BnC0CgAB.js";import{I as _}from"./add_outline_28-hW6pv9cB.js";import{I as d}from"./done_24-CYVwivIG.js";import{I as b}from"./users_outline_28-BA6fxZio.js";import{I as y}from"./settings_outline_28-BPWaHLc-.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-wWHIROGY.js";import"./children-CFPqwV5J.js";import"./IconButton-DRWEpqxT.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./VisuallyHidden-BpRJPd7L.js";import"./useConfigDirection-BeEtg5OO.js";import"./cancel_24-jJgAHgAr.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DnYpeFDL.js";import"./Footnote-xxqNAETB.js";import"./Headline-Bb4b2JBA.js";import"./Subhead-ppzL9p3g.js";import"./chevron_compact_right_24-DrAMy2kd.js";import"./chevron_16-CJFbNzh_.js";import"./AdaptiveIconRenderer-DUioVxFm.js";import"./reorder_ios_24-CRqmbSYG.js";import"./check_box_on_24-Bzc3wPiJ.js";import"./check_circle_on_24-Cu0k_2dt.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-nio87lGi.js";import"./chevron_left_outline_20-CfdM4DXq.js";import"./Title-BmBt_BL_.js";import"./useGlobalOnClickOutside-NUXmRM8D.js";import"./FixedLayout-Bd-fOM1q.js";import"./useResizeObserver-B_VZPX3B.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-eOlaO98r.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
