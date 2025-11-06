import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DcUCz3Gq.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DMi1jj6D.js";import{D as I}from"./Div-DK6pA_dL.js";import{P as k}from"./PanelHeaderBack-ScvfyrQ4.js";import{P as O}from"./PanelHeaderButton-CO3IJ1zl.js";import{P as D}from"./PanelHeaderContent-BN2UjBNj.js";import{P as c}from"./PanelHeaderContext-CgeWnrWI.js";import{I as h}from"./dropdown_16-BrHmn0_o.js";import{I as _}from"./add_outline_28-DRdW8wXE.js";import{I as d}from"./done_24-EPL_X--4.js";import{I as b}from"./users_outline_28-nGqj3M6b.js";import{I as y}from"./settings_outline_28-C10jzg96.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Bl3ntWOu.js";import"./children-DDwVHqk6.js";import"./IconButton-CGiS95Aa.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./VisuallyHidden-IsgabQ9w.js";import"./useConfigDirection-BglQDqbm.js";import"./useGlobalEventListener-JEtPNfzN.js";import"./useEventListener-D25pA6Ua.js";import"./cancel_24-DyhNO7vT.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D963dulm.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lAEBSvha.js";import"./Headline-_bBT78y6.js";import"./Subhead-CcORohtB.js";import"./chevron_compact_right_24-C6YK1MYa.js";import"./chevron_16-BE6lGA5Q.js";import"./AdaptiveIconRenderer-D8fi58IV.js";import"./reorder_ios_24-B8zIQhue.js";import"./check_box_on_24-CBAEM01i.js";import"./check_circle_on_24-UsLiUqKd.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Da2NQpZ9.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./Title-Cb6EL7Un.js";import"./useGlobalOnClickOutside-CHpV_-0M.js";import"./useCSSKeyframesAnimationController-lCWVHvj5.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
