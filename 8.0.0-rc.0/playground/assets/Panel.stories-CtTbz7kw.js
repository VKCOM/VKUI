import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-CWLi0Dwx.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DeL1blhr.js";import{C as t}from"./Cell-BaKeF3zh.js";import{G as l}from"./Group-vgwGhKNH.js";import{P as s}from"./PanelHeaderBack-Br4v5JbH.js";import{S as f}from"./Search-CfYMAG0E.js";import{S as v}from"./Spinner-ClXGWKNH.js";import{I as x}from"./user_outline_28-BPlt0ykA.js";import{I as j}from"./users_outline_28-D_TNTN8u.js";import{I as h}from"./music_outline_28-EhGeFymS.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CuMyBcnL.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./ImageBaseBadge-CO-iwG6X.js";import"./useColorScheme-BJrTZoRu.js";import"./InputUtils-y46vV6Lq.js";import"./useFocusWithin-CGwmDWCX.js";import"./useIsClient-e26nd6xF.js";import"./useConfigDirection-EPKxpKX2.js";import"./online_mobile_12-zVNMIc5b.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DbtKpkoR.js";import"./children-o7IWS_m7.js";import"./IconButton-DltQDU2z.js";import"./Tappable-BfbUNvge.js";import"./VisuallyHidden-DcnlEFVn.js";import"./cancel_24-k8gLLgTE.js";import"./SimpleCell-DMUbLJWk.js";import"./Footnote-uuGEAWzo.js";import"./Headline-BBfhp0Vp.js";import"./Subhead-BNTLgiWX.js";import"./chevron_compact_right_24-Dab3JeUv.js";import"./chevron_16-SZNMdhZS.js";import"./AdaptiveIconRenderer-hRcm_dd1.js";import"./reorder_ios_24-hj8b2gpk.js";import"./check_box_on_24-UkSxJzoK.js";import"./check_circle_on_24-CeocUogp.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DmnQ5iiZ.js";import"./Title-B966ALEh.js";import"./chevron_left_outline_28-BWjXhAwp.js";import"./chevron_left_outline_20-C0ihW9l8.js";import"./useBooleanState-DBJg9YoG.js";import"./useNativeFormResetListener-DvFQgiPf.js";import"./Button-V1CoOSHU.js";import"./clear_16-DeivK5kH.js";import"./search_outline_16-BE8F4Afj.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');
    return <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell chevron="auto" before={<Icon28UserOutline />} onClick={() => setActivePanel('panel2')}>
              Friends
            </Cell>
            <Cell chevron="auto" before={<Icon28UsersOutline />} onClick={() => setActivePanel('panel2')}>
              Communities
            </Cell>
            <Cell chevron="auto" before={<Icon28MusicOutline />} onClick={() => setActivePanel('panel2')}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader delimiter="spacing" before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}>
            Communities
          </PanelHeader>
          <Group>
            <Search />
            <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Swipe Right
            </Cell>
            <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Out Cinema
            </Cell>
            <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{
          marginTop: 10
        }}>Centered Content</div>
        </Panel>
      </View>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["Playground"];export{i as Playground,Se as __namedExportsOrder,He as default};
