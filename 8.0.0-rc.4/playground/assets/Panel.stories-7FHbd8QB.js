import{w as m,P as o,r as c,j as e,V as u,a as n}from"./iframe-OAvG3iJ-.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BrxjTsBH.js";import{C as t}from"./Cell-DuZuXofC.js";import{G as l}from"./Group-DBjl1Ywq.js";import{P as s}from"./PanelHeaderBack-v8MvBtxb.js";import{S as f}from"./Search-njpj6itd.js";import{S as v}from"./Spinner-e4jYbku1.js";import{I as x}from"./user_outline_28-Bd8gtqko.js";import{I as j}from"./users_outline_28-BX0EKMwC.js";import{I as h}from"./music_outline_28-nfIYzQFe.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-mTZnpbEK.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./ImageBaseBadge-DET_R2n_.js";import"./useColorScheme--3xcMoVc.js";import"./InputUtils-D-RvHd2H.js";import"./useFocusWithin-lydw_Auo.js";import"./useIsClient-DWkou9dw.js";import"./useConfigDirection-EOrqXudq.js";import"./online_mobile_12-BNH-O2OP.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-rqcSgsVP.js";import"./children-jmMlROp9.js";import"./IconButton-B0ADo2bb.js";import"./Tappable-hYlNxVzd.js";import"./VisuallyHidden-W5VCXPiv.js";import"./cancel_24-CjsEvKIV.js";import"./SimpleCell-DUlLPGhw.js";import"./Footnote-Fnz7EDP7.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./chevron_compact_right_24-_NSNPn6R.js";import"./chevron_16-BS2dVy5C.js";import"./AdaptiveIconRenderer-Dg4c0pLA.js";import"./reorder_ios_24-DarQ-ukl.js";import"./check_box_on_24-BSVcQ9Iw.js";import"./check_circle_on_24-BdyPhlE2.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-hsXPaBRD.js";import"./Title-AFjtFc-5.js";import"./chevron_left_outline_28-CZwKdYcl.js";import"./chevron_left_outline_20-BgIlB_0R.js";import"./useBooleanState-BelmnhEn.js";import"./useNativeFormResetListener-ZC8DWd8H.js";import"./Button-DKiHHryh.js";import"./clear_16-nD6jV4Ir.js";import"./search_outline_16-C8MLO-Hm.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
