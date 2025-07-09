import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-C2_PECK0.js";import{D as f,C as x}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Dqq0a0dv.js";import{C as t}from"./Cell-BSQapRvA.js";import{G as l}from"./Group-lIrBg-Y8.js";import{P as s}from"./PanelHeaderBack-Cd1G0ert.js";import{S as h}from"./Search-BwCSHWhA.js";import{S as j}from"./Spinner-DOBIwFGK.js";import{I as b}from"./user_outline_28-0NYFXnCB.js";import{I as k}from"./users_outline_28-BO18LQDd.js";import{I as A}from"./music_outline_28-CiLe_8b0.js";import"./ImageBase-sxzcezpW.js";import"./Clickable-Ctz6ZMd9.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DnS8sQyr.js";import"./useColorScheme-5WrknPov.js";import"./InputUtils-BDpjj3t6.js";import"./useFocusWithin-gjFI-5hQ.js";import"./useIsClient-BIt4BhuW.js";import"./useConfigDirection-CkTav0j8.js";import"./online_mobile_12-CwOv5Leh.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./helpers-QklJbEbU.js";import"./Removable-DDOYN81Z.js";import"./children-n2srhEVv.js";import"./IconButton-ht7j3HPv.js";import"./Tappable-DLQDSygG.js";import"./VisuallyHidden-DSMrBIlo.js";import"./useGlobalEventListener-C0NjmmOV.js";import"./useEventListener-BmXoCYOx.js";import"./cancel_24-CulXt8M_.js";import"./SimpleCell-DNa3I5n_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_H7tDpo.js";import"./Headline-DKR4TEkK.js";import"./Subhead-tEP5dl-0.js";import"./chevron_compact_right_24-DnaIo2yl.js";import"./chevron_16-Da1nGRlC.js";import"./AdaptiveIconRenderer-BmXCsCLU.js";import"./reorder_ios_24-C3f2Xao8.js";import"./check_box_on_24-BPQ1lh6t.js";import"./check_circle_on_24-DnKnhx43.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BLFKL5uU.js";import"./Title-DA9pXnZ8.js";import"./chevron_left_outline_28-C3PIZoLz.js";import"./chevron_left_outline_20-By9_OjBN.js";import"./useBooleanState-BoeoNWy_.js";import"./useNativeFormResetListener-DM3jLXRK.js";import"./Button-DnPEcOt6.js";import"./clear_16-DElyKwrU.js";import"./search_outline_16-BsA35owY.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ge={title:"Layout/Panel",component:o,parameters:v("Panel",x,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,ge as default};
