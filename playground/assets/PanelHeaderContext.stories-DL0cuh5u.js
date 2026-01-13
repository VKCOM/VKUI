import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-DP0c1f9Y.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BMthsHY3.js";import{D as I}from"./Div-BlHtRliV.js";import{P as k}from"./PanelHeaderBack-CM9RQNai.js";import{P as O}from"./PanelHeaderButton-Dmn8Tjst.js";import{P as D}from"./PanelHeaderContent-CRB_zcA5.js";import{P as c}from"./PanelHeaderContext-DdRyN5pH.js";import{I as h}from"./dropdown_16-CyIkNvIz.js";import{I as _}from"./add_outline_28-Cvqd_zZ5.js";import{I as d}from"./done_24-BnU2CKOj.js";import{I as b}from"./users_outline_28-Bx1jgdtX.js";import{I as y}from"./settings_outline_28-CtMQ461e.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BE-e-wqK.js";import"./children-Bag1sNQQ.js";import"./IconButton-DX6zaS9g.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./VisuallyHidden-CsBByQHJ.js";import"./useConfigDirection-BNkwGAZM.js";import"./cancel_24-Cb6nnPMq.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./SimpleCell-BUlM7B6J.js";import"./Footnote-DJoQQEv9.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./chevron_compact_right_24-DRgaqZzi.js";import"./chevron_16-CM-SIi30.js";import"./AdaptiveIconRenderer-C6EgprXt.js";import"./reorder_ios_24-Wjb1gd-Q.js";import"./check_box_on_24-D_JjkFdP.js";import"./check_circle_on_24-Bf67vp3K.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BG7oXPG7.js";import"./chevron_left_outline_20-CUvTDHV1.js";import"./Title-S_74tDbu.js";import"./useGlobalOnClickOutside-BcNivly3.js";import"./FixedLayout-DN6tmr_F.js";import"./useResizeObserver-bPqg49ND.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-gogItWDj.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
