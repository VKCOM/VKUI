import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-DvsMcRqO.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-8cassXI6.js";import{D}from"./Div-DMGjRIPr.js";import{P as h}from"./PanelHeaderBack-CrfGiHYi.js";import{P as _}from"./PanelHeaderButton-Cwv_3u9I.js";import{P as b}from"./PanelHeaderContent-C5rLp9rH.js";import{P as C}from"./PanelHeaderContext-DKBpqIoe.js";import{I as y}from"./dropdown_16-QQCD03Ye.js";import{I as S}from"./add_outline_28-CZbzaYjp.js";import{I as d}from"./done_24-DRhzIwoN.js";import{I as M}from"./users_outline_28-BsvhM6hA.js";import{I as w}from"./settings_outline_28-DTnJ_lK_.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-B20LGpmh.js";import"./children-lVZQ7uKR.js";import"./IconButton-B-myA0wM.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./VisuallyHidden-BGLO0lAS.js";import"./useConfigDirection-CN1nmZoK.js";import"./useGlobalEventListener-BdJfJj1z.js";import"./useEventListener-BkrsSu0A.js";import"./cancel_24-CxtMKOmC.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Cc4B-ydZ.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BnZcEJ_G.js";import"./Headline-CDYdreGb.js";import"./Subhead-Bc3iAQV-.js";import"./chevron_compact_right_24-B3rJ9RFm.js";import"./chevron_16-BxodZLo_.js";import"./AdaptiveIconRenderer-BgTnNLug.js";import"./reorder_ios_24-Bjz4Yiy0.js";import"./check_box_on_24-gtYbFFHx.js";import"./check_circle_on_24-D_xf0Bvx.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Djuv1E3d.js";import"./chevron_left_outline_20-yZ80JCLp.js";import"./Title-SHnE0uDa.js";import"./useGlobalOnClickOutside-D_iI2RLJ.js";import"./useCSSKeyframesAnimationController-BOjpqJyH.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Se=["Playground"];export{t as Playground,Se as __namedExportsOrder,ye as default};
