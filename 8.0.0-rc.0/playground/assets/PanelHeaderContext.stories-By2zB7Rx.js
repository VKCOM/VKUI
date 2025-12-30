import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-D-vjmezP.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-D2NiT4dU.js";import{D as I}from"./Div-B3mltvz-.js";import{P as k}from"./PanelHeaderBack-DDGTi8vv.js";import{P as O}from"./PanelHeaderButton-BODTHbnm.js";import{P as D}from"./PanelHeaderContent-CUnW35bP.js";import{P as c}from"./PanelHeaderContext-D2cawKNy.js";import{I as h}from"./dropdown_16-DpSpxmQv.js";import{I as _}from"./add_outline_28-DUeD3iUd.js";import{I as d}from"./done_24-BftqWXfM.js";import{I as b}from"./users_outline_28-B1_fm-d8.js";import{I as y}from"./settings_outline_28-DvQlLXQg.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Db8Ui--t.js";import"./children-DmJGU09q.js";import"./IconButton-DrzcArVi.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./useConfigDirection-BUJREPxm.js";import"./cancel_24-B55ygFBW.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CsYR4Aza.js";import"./Footnote-DApQXU2r.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./chevron_16-Bb1SKLei.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./reorder_ios_24-gO4PPlxx.js";import"./check_box_on_24-CgV3p_bd.js";import"./check_circle_on_24-Xof2lI9f.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-ks_3c2Qp.js";import"./chevron_left_outline_20-06dzqiB5.js";import"./Title-5rqdnq6p.js";import"./useGlobalOnClickOutside-FZPqeYZg.js";import"./FixedLayout-DViCM9Ua.js";import"./useResizeObserver-DrF7I1jG.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-BPrxArYG.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
