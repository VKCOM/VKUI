import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-KtxhC7Vu.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-a-fOL92F.js";import{C as t}from"./Cell-CUXYg48g.js";import{G as l}from"./Group-DDfvL9p6.js";import{P as s}from"./PanelHeaderBack-BRWQvPNW.js";import{S as f}from"./Search-BunZdPyF.js";import{S as v}from"./Spinner-kWF4Wnla.js";import{I as x}from"./user_outline_28-J_ZUFvv3.js";import{I as j}from"./users_outline_28-bvlWRBv0.js";import{I as h}from"./music_outline_28-DWHGDvSh.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-C6sKJwa9.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./ImageBaseBadge-NjqN0m0-.js";import"./useColorScheme-Ujmv4Cvg.js";import"./InputUtils-BueJ8J_Y.js";import"./useFocusWithin-Do1ICwdO.js";import"./useIsClient-DCYzbawC.js";import"./useConfigDirection-CX53j0Ve.js";import"./online_mobile_12-BscMHVRq.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CpxKd1Q1.js";import"./children-BMwCSNmp.js";import"./IconButton-DubnwX4y.js";import"./Tappable-BHKu77gD.js";import"./VisuallyHidden-8TqRJKxj.js";import"./useGlobalEventListener-CospsVY6.js";import"./useEventListener-DNTY0hjA.js";import"./cancel_24-B2bpUHqP.js";import"./SimpleCell-D5ovT9LX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lwK0vUsu.js";import"./Headline-DXbYuoNY.js";import"./Subhead-AWezZjK6.js";import"./chevron_compact_right_24-BiCeP8Qk.js";import"./chevron_16-DnFY0g9o.js";import"./AdaptiveIconRenderer-QcQ1TbWH.js";import"./reorder_ios_24-D-IURhsp.js";import"./check_box_on_24-8HdQZOQP.js";import"./check_circle_on_24-BWXad4v9.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-C5TbqC5W.js";import"./Title-Cl0PGkVH.js";import"./chevron_left_outline_28-oaPpT6j3.js";import"./chevron_left_outline_20-DwzXMy22.js";import"./useBooleanState-DcDcwgzq.js";import"./useNativeFormResetListener-B2TDUSrX.js";import"./Button-Md1sLJHS.js";import"./clear_16-wnvVD4bX.js";import"./search_outline_16-95Ov0dtR.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
