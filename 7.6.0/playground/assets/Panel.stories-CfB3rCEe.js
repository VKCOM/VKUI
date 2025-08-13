import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-CNYWi-tv.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-TjmQFdIo.js";import{C as t}from"./Cell-DzugrAQG.js";import{G as l}from"./Group-DYQ1okdd.js";import{P as s}from"./PanelHeaderBack-w2E1cxVJ.js";import{S as j}from"./Search-Ds-VoekZ.js";import{S as h}from"./Spinner-CLko12L1.js";import{I as b}from"./user_outline_28-DPECVqTe.js";import{I as k}from"./users_outline_28-D80K7E_S.js";import{I as A}from"./music_outline_28-CO11CL7R.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-CFZsMum9.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bgl2uxCI.js";import"./useColorScheme-Cfkm4fLV.js";import"./InputUtils-Bfhccirq.js";import"./useFocusWithin-DPWwC_DA.js";import"./useIsClient-C2GKbeGN.js";import"./useConfigDirection-C_6xjTM7.js";import"./online_mobile_12-Dq0U4GIg.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DXEozIKZ.js";import"./children-D9VTJ2FF.js";import"./IconButton-1hwVmaZf.js";import"./Tappable-Bt2S1yMc.js";import"./VisuallyHidden-CIbqknZb.js";import"./useGlobalEventListener-JcQvOfhM.js";import"./useEventListener-DZQbwQUn.js";import"./cancel_24-CquaKNSW.js";import"./SimpleCell-DUb12Fwu.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BYeJ88ZB.js";import"./Headline-DsqdPKjD.js";import"./Subhead-BeVsNNt7.js";import"./chevron_compact_right_24-DunAwNUB.js";import"./chevron_16-CN_guPgl.js";import"./AdaptiveIconRenderer-B0gv9O0k.js";import"./reorder_ios_24-CNqJgXj_.js";import"./check_box_on_24-DW3URTdi.js";import"./check_circle_on_24-CSfj3dp4.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DQxaVwVs.js";import"./Title-BvqIwHMA.js";import"./chevron_left_outline_28-AJCnQtWu.js";import"./chevron_left_outline_20-LPpqaviN.js";import"./useBooleanState-C7K6InNc.js";import"./useNativeFormResetListener-DF-A76M1.js";import"./Button-CRnRhdN6.js";import"./clear_16-DAX7ZSXs.js";import"./search_outline_16-C1Wz_Kov.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Re=["Playground"];export{i as Playground,Re as __namedExportsOrder,Me as default};
