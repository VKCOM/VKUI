import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-dTlwAXGa.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-D1LFFtlD.js";import{C as t}from"./Cell-GJHfCsHL.js";import{G as l}from"./Group-CrremWw-.js";import{P as s}from"./PanelHeaderBack-B5vV009E.js";import{S as j}from"./Search-CgBz42nW.js";import{S as h}from"./Spinner-Ct1kmwhu.js";import{I as b}from"./user_outline_28-Bgy3oXo9.js";import{I as k}from"./users_outline_28-D44ITTDr.js";import{I as A}from"./music_outline_28-Bv9JYUV0.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-AJ3e9bE9.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Gqd0lug3.js";import"./useColorScheme-BL3jX5yR.js";import"./InputUtils-CtGJ0DI4.js";import"./useFocusWithin-kuId0kJs.js";import"./useIsClient-BVOBl7-A.js";import"./useConfigDirection-BIk700TM.js";import"./online_mobile_12-CBAdE4s5.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BvBDqmqD.js";import"./children-D0xCpVZl.js";import"./IconButton-MYG7es_8.js";import"./Tappable-qMfTC7Pz.js";import"./VisuallyHidden-JumwXwcS.js";import"./useGlobalEventListener-DR7m9Uut.js";import"./useEventListener-CM8ERZU-.js";import"./cancel_24-sfpNhjae.js";import"./SimpleCell-pVFSTIJK.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DJb5ZlwN.js";import"./Headline-nnEuybdp.js";import"./Subhead-BlOKXAAl.js";import"./chevron_compact_right_24-C3ktCmz2.js";import"./chevron_16-DHR9v_Z1.js";import"./AdaptiveIconRenderer-ESMEwK9d.js";import"./reorder_ios_24-CYpPEkSN.js";import"./check_box_on_24-Be72trti.js";import"./check_circle_on_24-QthlvxfI.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CaRI3iQC.js";import"./Title-ShBYOT9p.js";import"./chevron_left_outline_28-B_MPMCfI.js";import"./chevron_left_outline_20-BbvxQo3n.js";import"./useBooleanState-BNGk2fTc.js";import"./useNativeFormResetListener-BOqnx_3w.js";import"./Button-Bf3MOszz.js";import"./clear_16-B8yVSS3e.js";import"./search_outline_16-DIsU2zm0.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const we=["Playground"];export{i as Playground,we as __namedExportsOrder,Re as default};
