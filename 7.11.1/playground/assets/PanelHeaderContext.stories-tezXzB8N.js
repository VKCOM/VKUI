import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-BqdgnJE0.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Bcr1t-wG.js";import{D as I}from"./Div-DwZZolAX.js";import{P as k}from"./PanelHeaderBack-SOTUUZhJ.js";import{P as O}from"./PanelHeaderButton-DR2JVGbW.js";import{P as D}from"./PanelHeaderContent-DZrzQz_4.js";import{P as c}from"./PanelHeaderContext-Dq8kpXef.js";import{I as h}from"./dropdown_16-CcO8MLCc.js";import{I as _}from"./add_outline_28-6BEHuNbo.js";import{I as d}from"./done_24-CEsSfocz.js";import{I as b}from"./users_outline_28-COf4JgXO.js";import{I as y}from"./settings_outline_28-8xR12Yhy.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CQjuFWD6.js";import"./children-rmDURaUl.js";import"./IconButton-C7jcJUXx.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./InputUtils-ESzsNRN2.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./useConfigDirection-D5bRs-MF.js";import"./useGlobalEventListener-BJBa7VdU.js";import"./useEventListener-C8S8CDSH.js";import"./cancel_24-DLsb6enM.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-_uNqJntM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Bj-28HDg.js";import"./Headline-ByN4fZVg.js";import"./Subhead-ubP323Lg.js";import"./chevron_compact_right_24-BvUpUGT6.js";import"./chevron_16-DLrfULAr.js";import"./AdaptiveIconRenderer-CDzx7HHu.js";import"./reorder_ios_24-Basz8dwa.js";import"./check_box_on_24-DR_37w56.js";import"./check_circle_on_24-B7hJoFmH.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-D5Xjq3gQ.js";import"./chevron_left_outline_20-C8nGg7bJ.js";import"./Title-C5m838CH.js";import"./useGlobalOnClickOutside-Bom_H9q_.js";import"./useCSSKeyframesAnimationController-zfEdbc1w.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
