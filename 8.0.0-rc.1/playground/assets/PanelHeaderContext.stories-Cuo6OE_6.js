import{w as x,r as l,j as e,V as f,P,a as g,n as s}from"./iframe-CDzsgUJ6.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BwqG9bVQ.js";import{D as I}from"./Div-DLn9z0wB.js";import{P as k}from"./PanelHeaderBack-IbbqPiHx.js";import{P as O}from"./PanelHeaderButton-CXrOsb3Q.js";import{P as D}from"./PanelHeaderContent-rHhSM7Tv.js";import{P as c}from"./PanelHeaderContext-BezAFbSA.js";import{I as h}from"./dropdown_16-BQxVsZCB.js";import{I as _}from"./add_outline_28-aJ_MeZyc.js";import{I as d}from"./done_24-CyBedsvn.js";import{I as y}from"./users_outline_28-BBpkewX8.js";import{I as S}from"./settings_outline_28-DP29kl8l.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DwrvQD9J.js";import"./children-__GeZXUq.js";import"./IconButton-DmVT1v_5.js";import"./Tappable-BF8rCM_k.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./InputUtils-DkBsdccT.js";import"./VisuallyHidden-hrbUbT1W.js";import"./useConfigDirection-BVbAx_rU.js";import"./cancel_24-D42vZ9MX.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BDHKWT_s.js";import"./Footnote-EhoXcm5o.js";import"./Headline-BViG_F4T.js";import"./Subhead-BNbydgjR.js";import"./chevron_compact_right_24-LzGagLF8.js";import"./chevron_16-BoVPvRqg.js";import"./AdaptiveIconRenderer-DYyXL8CC.js";import"./reorder_ios_24-pUC9VdWS.js";import"./check_box_on_24-CVoHOfkf.js";import"./check_circle_on_24-DAurImow.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-xeHM88FM.js";import"./chevron_left_outline_20-Bp5lQnXu.js";import"./Title-Q5c-cjF2.js";import"./useGlobalOnClickOutside-CAsM7bq_.js";import"./FixedLayout-C-hyj_8N.js";import"./useResizeObserver-HbA0siNX.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-DmqYolBH.js";const ye={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(y,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(S,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Se=["Playground"];export{t as Playground,Se as __namedExportsOrder,ye as default};
