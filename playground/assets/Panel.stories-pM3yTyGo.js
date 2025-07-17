import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-DSAhScPT.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BPQQA8cc.js";import{C as t}from"./Cell-CO3a19JY.js";import{G as l}from"./Group-B7gcv2RN.js";import{P as s}from"./PanelHeaderBack-C-J2rQae.js";import{S as h}from"./Search-CljGqiey.js";import{S as j}from"./Spinner-KyMn6wQY.js";import{I as b}from"./user_outline_28-BqTsr7Bf.js";import{I as k}from"./users_outline_28-lW9xKrRU.js";import{I as A}from"./music_outline_28-CYWsEzuP.js";import"./ImageBase-CmtPvhF-.js";import"./Clickable-6oth1gD7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-rAm5hXMS.js";import"./useColorScheme-Cus1gWwQ.js";import"./InputUtils-CLCgtllv.js";import"./useFocusWithin-BI_v5t1h.js";import"./useIsClient-_KK5KAr3.js";import"./useConfigDirection-Dm4173QE.js";import"./online_mobile_12-DSh9l_YU.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./helpers-QklJbEbU.js";import"./Removable-D5ZrDV4g.js";import"./children-Dz6__HWn.js";import"./IconButton-CDVak2Pm.js";import"./Tappable-41du4Si_.js";import"./VisuallyHidden-DIyQgeho.js";import"./useGlobalEventListener-CiW_WKtR.js";import"./useEventListener-DJyKCYx1.js";import"./cancel_24-5SKzeyoh.js";import"./SimpleCell-CyR_YWOH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BKhvF0_1.js";import"./Headline-CdViHbNM.js";import"./Subhead-CkgCAX-J.js";import"./chevron_compact_right_24-CbW-PUYO.js";import"./chevron_16-NGFInKyj.js";import"./AdaptiveIconRenderer-Cj0grb3P.js";import"./reorder_ios_24-C7_Asgli.js";import"./check_box_on_24-DwZfeea6.js";import"./check_circle_on_24-padOJU7B.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DOn4fMzv.js";import"./Title-CtXU7qo4.js";import"./chevron_left_outline_28-CpTLzWYX.js";import"./chevron_left_outline_20-CkWRsy8s.js";import"./useBooleanState-Dnoj4C3p.js";import"./useNativeFormResetListener-B1KAwo3l.js";import"./Button-D3Kc_P4_.js";import"./clear_16-C8r8A01D.js";import"./search_outline_16-C0twQCkB.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
