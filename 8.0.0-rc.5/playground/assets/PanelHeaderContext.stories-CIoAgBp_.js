import{w as x,r as l,j as e,V as f,P,a as g,n as s}from"./iframe-CEhhJuIi.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Fksr_7Qm.js";import{D as I}from"./Div-Boz_VcR4.js";import{P as k}from"./PanelHeaderBack-BVcGQYtQ.js";import{P as O}from"./PanelHeaderButton-Td-2TVdV.js";import{P as D}from"./PanelHeaderContent-xDLu8dnK.js";import{P as c}from"./PanelHeaderContext-BBA3pS6j.js";import{I as h}from"./dropdown_16-Bbaxp_Zj.js";import{I as _}from"./add_outline_28-TRSUetPg.js";import{I as d}from"./done_24-DPzJ7hqU.js";import{I as y}from"./users_outline_28-CFW4vxQN.js";import{I as S}from"./settings_outline_28--__Ytq4-.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BCfQmLaJ.js";import"./children-fYKiCF6j.js";import"./IconButton-D0BsKVg5.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./VisuallyHidden-BYulTkKK.js";import"./useConfigDirection-K0H5l3FT.js";import"./cancel_24-CHfH8s1a.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CJqdGzsk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-wldoNL-p.js";import"./Headline-C97-pQ4K.js";import"./Subhead-4zP8hIFm.js";import"./chevron_compact_right_24-DmTjrohB.js";import"./chevron_16-CMhnb1X0.js";import"./AdaptiveIconRenderer-B1bnvO5R.js";import"./reorder_ios_24-CH4-Ar_A.js";import"./check_box_on_24-tz3ud1kS.js";import"./check_circle_on_24-Bfyxjxww.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-GWdINPcL.js";import"./chevron_left_outline_20-004eD-mk.js";import"./Title-gWx-KNT-.js";import"./useGlobalOnClickOutside-DOzt1Gf7.js";import"./useCSSKeyframesAnimationController-DHvojNoR.js";const De={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(y,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(S,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const he=["Playground"];export{t as Playground,he as __namedExportsOrder,De as default};
