import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-C2_PECK0.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BSQapRvA.js";import{D as h}from"./Div-DrMWkE3k.js";import{P as D}from"./PanelHeaderBack-Cd1G0ert.js";import{P as _}from"./PanelHeaderButton-BLFKL5uU.js";import{P as y}from"./PanelHeaderContent-BL4_hXbW.js";import{P as C}from"./PanelHeaderContext-G6CWoABb.js";import{I as b}from"./dropdown_16-DThUSUJJ.js";import{I as S}from"./add_outline_28-B_FRAhVU.js";import{I as d}from"./done_24-DFwu5HV5.js";import{I as M}from"./users_outline_28-BO18LQDd.js";import{I as w}from"./settings_outline_28-OTJEUG1f.js";import"./Removable-DDOYN81Z.js";import"./children-n2srhEVv.js";import"./IconButton-ht7j3HPv.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./VisuallyHidden-DSMrBIlo.js";import"./useConfigDirection-CkTav0j8.js";import"./useGlobalEventListener-C0NjmmOV.js";import"./useEventListener-BmXoCYOx.js";import"./cancel_24-CulXt8M_.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./SimpleCell-DNa3I5n_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_H7tDpo.js";import"./Headline-DKR4TEkK.js";import"./Subhead-tEP5dl-0.js";import"./chevron_compact_right_24-DnaIo2yl.js";import"./chevron_16-Da1nGRlC.js";import"./AdaptiveIconRenderer-BmXCsCLU.js";import"./reorder_ios_24-C3f2Xao8.js";import"./check_box_on_24-BPQ1lh6t.js";import"./check_circle_on_24-DnKnhx43.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-C3PIZoLz.js";import"./chevron_left_outline_20-By9_OjBN.js";import"./Title-DA9pXnZ8.js";import"./useGlobalOnClickOutside-Dn3BANiI.js";import"./useCSSKeyframesAnimationController-Cim7AI2v.js";const _e={title:"Layout/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(y,{aside:e.jsx(b,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
