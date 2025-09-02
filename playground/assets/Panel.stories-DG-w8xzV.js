import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-WscSQxk_.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-0RoHI5K7.js";import{C as t}from"./Cell-DqhTK0pF.js";import{G as l}from"./Group-qAlp-RAW.js";import{P as s}from"./PanelHeaderBack-AeK7ZT_w.js";import{S as j}from"./Search-CF20Iwbi.js";import{S as h}from"./Spinner-BOd2c3oA.js";import{I as b}from"./user_outline_28-BZUsg8uW.js";import{I as k}from"./users_outline_28-B97KE-cg.js";import{I as A}from"./music_outline_28-BBD8Otjx.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-3KL0flvN.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-wA-vnNFa.js";import"./useColorScheme-C09gZSyP.js";import"./InputUtils-JLBJXs47.js";import"./useFocusWithin-BHVkTq3i.js";import"./useIsClient-d2y8ByAY.js";import"./useConfigDirection-f8qxYIIC.js";import"./online_mobile_12-DJlNBlPs.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BJhZzne5.js";import"./children-PV0P3fmv.js";import"./IconButton-D66RFa5n.js";import"./Tappable-4pvQI-9h.js";import"./VisuallyHidden-uW7N7P-s.js";import"./useGlobalEventListener-g9jun4JN.js";import"./useEventListener-DRRpeHIY.js";import"./cancel_24-DRq5Gwy2.js";import"./SimpleCell-tB9EhAU6.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DadQ2vZ3.js";import"./Headline-Cv7evErM.js";import"./Subhead-Dng_N-gz.js";import"./chevron_compact_right_24-CjLRRqgU.js";import"./chevron_16-BY28eTD3.js";import"./AdaptiveIconRenderer-Dik8tLCs.js";import"./reorder_ios_24-BnJVoGF4.js";import"./check_box_on_24-CC2KZ1K-.js";import"./check_circle_on_24-Bku_e_js.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Bcby9WCn.js";import"./Title-C_Gav_p7.js";import"./chevron_left_outline_28-NONp-6CY.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";import"./useBooleanState-DjNPmzUO.js";import"./useNativeFormResetListener-B4OmBpYH.js";import"./Button-C7Wah6LB.js";import"./clear_16-D5G6Qwzf.js";import"./search_outline_16-wEYnmoUl.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
