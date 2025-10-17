import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DdZr-4mP.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DUdnijE9.js";import{D as I}from"./Div-BhOSKXhQ.js";import{P as k}from"./PanelHeaderBack-C1QyAHj6.js";import{P as O}from"./PanelHeaderButton-UAIvxmBF.js";import{P as D}from"./PanelHeaderContent-Bui4UgrJ.js";import{P as c}from"./PanelHeaderContext-iTdXhtYD.js";import{I as h}from"./dropdown_16-zQqP8w1R.js";import{I as _}from"./add_outline_28-B__xyTND.js";import{I as d}from"./done_24-NnOiLW06.js";import{I as b}from"./users_outline_28-BmTrRBKu.js";import{I as y}from"./settings_outline_28-C2PSoBH5.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-sBXdy_3O.js";import"./children-oqymHkiK.js";import"./IconButton-C7aWXmKO.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./useConfigDirection-BdfXEpUn.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./cancel_24-SB-_Mfon.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CIBNVGZX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";import"./Headline-BSoQthvj.js";import"./Subhead-xzDyxoRX.js";import"./chevron_compact_right_24-kk3EfcLj.js";import"./chevron_16-qALKhhss.js";import"./AdaptiveIconRenderer-BjiXmkQi.js";import"./reorder_ios_24-CkN9Xqz2.js";import"./check_box_on_24-Dqh-fiAD.js";import"./check_circle_on_24-Bo96Gt5Z.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-C3rnHtyZ.js";import"./chevron_left_outline_20-BKzfgAPG.js";import"./Title-D3itgTrb.js";import"./useGlobalOnClickOutside-exGRwYKA.js";import"./useCSSKeyframesAnimationController-bE-QFjLP.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
