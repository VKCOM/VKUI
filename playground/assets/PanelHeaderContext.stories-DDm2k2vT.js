import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-BKqRoeRO.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-wI4yBQPC.js";import{D as I}from"./Div-DMJDrldB.js";import{P as k}from"./PanelHeaderBack-EIv56Mfc.js";import{P as O}from"./PanelHeaderButton-D-iZ99bJ.js";import{P as D}from"./PanelHeaderContent-YY_YEIpm.js";import{P as c}from"./PanelHeaderContext-CYadoREX.js";import{I as h}from"./dropdown_16-B0mONjhk.js";import{I as _}from"./add_outline_28-LNcsNitd.js";import{I as d}from"./done_24-B0FxN6gT.js";import{I as b}from"./users_outline_28-DwdTmEt0.js";import{I as y}from"./settings_outline_28-Dtx9CAUs.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BbK5TlWA.js";import"./children-Bm1QhBGC.js";import"./IconButton-CDypKmxT.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./VisuallyHidden-B-uFrHKw.js";import"./useConfigDirection-BH9mMD5y.js";import"./cancel_24-C2B5W1bI.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-SUBlx-6Z.js";import"./Footnote-BAb4Skv3.js";import"./Headline-CPNK2PuC.js";import"./Subhead-B3U-hqtC.js";import"./chevron_compact_right_24-C8sV5QGI.js";import"./chevron_16-o7PR2C3U.js";import"./AdaptiveIconRenderer-BhgbmtGf.js";import"./reorder_ios_24-DRf9w8zq.js";import"./check_box_on_24-7AEumDVf.js";import"./check_circle_on_24-DLZ-Vi44.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-j_6lWvz0.js";import"./chevron_left_outline_20-e81f18Y3.js";import"./Title-j8cVZj0a.js";import"./useGlobalOnClickOutside-DbOAAGx7.js";import"./FixedLayout-RCt_Hoog.js";import"./useResizeObserver-31xoh94F.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-C-fvdGBI.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
