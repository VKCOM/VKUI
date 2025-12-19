import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-CGSrC79H.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CNqxogX7.js";import{D as I}from"./Div-lVz1kQ98.js";import{P as k}from"./PanelHeaderBack-DCPoMRgZ.js";import{P as O}from"./PanelHeaderButton-6uIRYiPQ.js";import{P as D}from"./PanelHeaderContent-Dv8r1ddW.js";import{P as c}from"./PanelHeaderContext-B-NbGyOG.js";import{I as h}from"./dropdown_16-BVtjFKHX.js";import{I as _}from"./add_outline_28-CHtruVmx.js";import{I as d}from"./done_24-0mXbMPlI.js";import{I as b}from"./users_outline_28-irBRKqkL.js";import{I as y}from"./settings_outline_28-CoZ7LHO8.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-D5hMMeds.js";import"./children-C-hCqQRI.js";import"./IconButton-Bq_FXaCp.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./useConfigDirection-BDt5-3HT.js";import"./cancel_24-CsoSQ93Z.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DfFeOU4d.js";import"./Footnote-9-fttdTG.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./chevron_compact_right_24-BeoeYfvX.js";import"./chevron_16-IEGQRb6X.js";import"./AdaptiveIconRenderer-CSGInP8-.js";import"./reorder_ios_24-BjFEO8Vc.js";import"./check_box_on_24-C-ecraaY.js";import"./check_circle_on_24-e1d1quHA.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DGJaAk12.js";import"./chevron_left_outline_20-CVNV5cAz.js";import"./Title-29M-U6si.js";import"./useGlobalOnClickOutside-US1O5jC2.js";import"./FixedLayout-BrbJEiQY.js";import"./useResizeObserver-BDIywkiN.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-3EPmQPbL.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
