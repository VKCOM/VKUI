import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-qlSEKL6e.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BOMwlGKk.js";import{C as t}from"./Cell-CnqdBX5o.js";import{G as l}from"./Group-cIlrarQZ.js";import{P as s}from"./PanelHeaderBack-BpQKCahw.js";import{S as f}from"./Search-BwnRjS7k.js";import{S as v}from"./Spinner-BoZXPbho.js";import{I as x}from"./user_outline_28-BpKr_xTN.js";import{I as j}from"./users_outline_28-ITBpni0t.js";import{I as h}from"./music_outline_28-BqF0Lz9q.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BkLZgAtt.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./ImageBaseBadge-xd7NdiaS.js";import"./useColorScheme-BxcR7ZEW.js";import"./InputUtils-vU1H8cid.js";import"./useFocusWithin-BRbaVvSY.js";import"./useIsClient-DC0ADYc0.js";import"./useConfigDirection-DGAPn-Y-.js";import"./online_mobile_12-BcfHqoSs.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DOcraucr.js";import"./children-DNQ1k21b.js";import"./IconButton-BRmjKqzD.js";import"./Tappable-BHeAowlI.js";import"./VisuallyHidden-Bk8azc-l.js";import"./cancel_24-cnh7cOD_.js";import"./SimpleCell-BaJRQNlP.js";import"./Footnote-BzLLEJCe.js";import"./Headline-CGptYocR.js";import"./Subhead-B_pgjgAK.js";import"./chevron_compact_right_24--z_9b7zM.js";import"./chevron_16-D16aHKlh.js";import"./AdaptiveIconRenderer-DHzGBzZV.js";import"./reorder_ios_24-Dy_QYZqO.js";import"./check_box_on_24-CDCz-Sz_.js";import"./check_circle_on_24-Cchrshrn.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-C_brz2Sq.js";import"./Title-DQXLato0.js";import"./chevron_left_outline_28-B_sE7VMm.js";import"./chevron_left_outline_20-CubSQ-Yb.js";import"./useBooleanState-C-4zMXro.js";import"./useNativeFormResetListener-BRnsZhRX.js";import"./Button-DRTEtUEH.js";import"./clear_16-BajJzDYZ.js";import"./search_outline_16-BRsWpUxT.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
