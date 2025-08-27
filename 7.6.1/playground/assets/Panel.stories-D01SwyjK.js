import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-CkliH7Ym.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BEa0enZg.js";import{C as t}from"./Cell-Dg3hNNv8.js";import{G as l}from"./Group-CJ2H9PHw.js";import{P as s}from"./PanelHeaderBack-Cp1_vp2i.js";import{S as j}from"./Search-BX5DYVgw.js";import{S as h}from"./Spinner-UdAHfoPk.js";import{I as b}from"./user_outline_28-knBWO9v0.js";import{I as k}from"./users_outline_28-CR6zdPdi.js";import{I as A}from"./music_outline_28-Do1xW6hE.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-duvF5alK.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-IPJndyYR.js";import"./useColorScheme-D8FQD_Wa.js";import"./InputUtils-BZxXqLFf.js";import"./useFocusWithin-njH6fdIQ.js";import"./useIsClient-C-6yeOEj.js";import"./useConfigDirection-Cu9Dkwyc.js";import"./online_mobile_12-BoRLXkQP.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BiD1BBxW.js";import"./children-B0i547Ke.js";import"./IconButton-CSrcIMnc.js";import"./Tappable-fZc2zE5Y.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./useGlobalEventListener-4U7JtIC8.js";import"./useEventListener-iURZQrFx.js";import"./cancel_24-DYiMxFG6.js";import"./SimpleCell-JD8osR6E.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CVpuTKzI.js";import"./Headline-BEImhDVB.js";import"./Subhead-DmZ-gnSD.js";import"./chevron_compact_right_24-IyXI54Ns.js";import"./chevron_16-DP-Hpqqm.js";import"./AdaptiveIconRenderer-tJvkXxLm.js";import"./reorder_ios_24-CEY4fUCg.js";import"./check_box_on_24-Dh3SQOCq.js";import"./check_circle_on_24-C_PLodX4.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BAg_-1eR.js";import"./Title-Bna-x3U_.js";import"./chevron_left_outline_28-Y56I3fhV.js";import"./chevron_left_outline_20-BvT7hjfx.js";import"./useBooleanState-BM2pyVN1.js";import"./useNativeFormResetListener-JyrmF0tg.js";import"./Button-CDpcJNjy.js";import"./clear_16-DCGggquy.js";import"./search_outline_16-AVIvLLO9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
