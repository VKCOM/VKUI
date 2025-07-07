import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-DTUKIQpa.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CfSSn24T.js";import{D as h}from"./Div-B72Y_Vxp.js";import{P as D}from"./PanelHeaderBack-Bc-VN5vd.js";import{P as _}from"./PanelHeaderButton-BFIcF9aa.js";import{P as y}from"./PanelHeaderContent-CsiB6k50.js";import{P as C}from"./PanelHeaderContext-Dp-8OXHh.js";import{I as b}from"./dropdown_16-DuwyLl2-.js";import{I as S}from"./add_outline_28-ME5KXGPB.js";import{I as d}from"./done_24-CgLF8a8t.js";import{I as M}from"./users_outline_28-2TEcwYKn.js";import{I as w}from"./settings_outline_28-CeeikySN.js";import"./Removable-Cld3TR36.js";import"./children-B8YsjXFx.js";import"./IconButton-Dy9SRYqV.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./useConfigDirection-Cb5ryD04.js";import"./useGlobalEventListener-D8BL8vid.js";import"./useEventListener-DzYdBFwg.js";import"./cancel_24-BG0iu8qf.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./SimpleCell-CDk2kNxF.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-rQhC0WQs.js";import"./Headline-DPZ9LHy_.js";import"./Subhead-C7vbIoTq.js";import"./chevron_compact_right_24-DIcKAlfH.js";import"./chevron_16-BuSYZLHG.js";import"./AdaptiveIconRenderer-BIF-AAH3.js";import"./reorder_ios_24-CsfHOuR7.js";import"./check_box_on_24-C3zzNqq8.js";import"./check_circle_on_24-DGwl3f4B.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CU5VKeW_.js";import"./chevron_left_outline_20-DdZWpJA-.js";import"./Title-BNj2Lwrg.js";import"./useGlobalOnClickOutside-HCbB39to.js";import"./useCSSKeyframesAnimationController-CUu1yLXE.js";const _e={title:"Layout/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(y,{aside:e.jsx(b,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,_e as default};
