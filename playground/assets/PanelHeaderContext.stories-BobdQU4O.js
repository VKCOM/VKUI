import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DC59t_7s.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-D1-zqLEr.js";import{D as I}from"./Div-C8S3oCMc.js";import{P as k}from"./PanelHeaderBack-Blph9B3b.js";import{P as O}from"./PanelHeaderButton-CmBd8Pyt.js";import{P as D}from"./PanelHeaderContent-CnIuApU6.js";import{P as c}from"./PanelHeaderContext-DvS0i94b.js";import{I as h}from"./dropdown_16-Domlnxy0.js";import{I as _}from"./add_outline_28-j5xq8AiU.js";import{I as d}from"./done_24-BitlX6Op.js";import{I as b}from"./users_outline_28-C7Rbpbal.js";import{I as y}from"./settings_outline_28-CZBnngC0.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-qNhpNz2M.js";import"./children-DYOU-AGd.js";import"./IconButton-DlcUkq3s.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./useConfigDirection-6hDi4KID.js";import"./useGlobalEventListener-C_qxnlQL.js";import"./useEventListener-D94pK2uE.js";import"./cancel_24-pw3fX9Xb.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BLFw8LVq.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_mvNSI1.js";import"./Headline-bNrKkYhC.js";import"./Subhead-CcQWHNvG.js";import"./chevron_compact_right_24-oTms1QP_.js";import"./chevron_16-DtWL8gcK.js";import"./AdaptiveIconRenderer-DnHspDix.js";import"./reorder_ios_24-D9YjfHpX.js";import"./check_box_on_24-B4x-cDuo.js";import"./check_circle_on_24-QLmxxhyq.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-5WFmeHy_.js";import"./chevron_left_outline_20-BIdPFGBs.js";import"./Title-DbXaHY-Y.js";import"./useGlobalOnClickOutside-RchS6C8M.js";import"./useCSSKeyframesAnimationController-CFavuQq6.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
