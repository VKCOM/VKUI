import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-gnG2DlPI.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DkBHBjK7.js";import{C as t}from"./Cell-DOsZTVQv.js";import{G as l}from"./Group-CrrFHIS0.js";import{P as s}from"./PanelHeaderBack-B5HArLiC.js";import{S as j}from"./Search-CX649D-T.js";import{S as h}from"./Spinner-CpE2KS8o.js";import{I as b}from"./user_outline_28-QpD8DRE3.js";import{I as k}from"./users_outline_28-BdsQn2mA.js";import{I as A}from"./music_outline_28-DEMPuHT7.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-2byuyH5U.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bfs80bf8.js";import"./useColorScheme-vbaHcGpn.js";import"./InputUtils-Bge3OIaY.js";import"./useFocusWithin-XtLgfp-_.js";import"./useIsClient-D2oAkrY_.js";import"./useConfigDirection-Dd3ud1i-.js";import"./online_mobile_12-CI4-_CFI.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DDpdMjUf.js";import"./children-f2sIKLUn.js";import"./IconButton-Cf4dAO-u.js";import"./Tappable-03YLyRIn.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./useGlobalEventListener-BrlIfad1.js";import"./useEventListener-BZo6MitC.js";import"./cancel_24-D159N_1T.js";import"./SimpleCell-BCPsJbDr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CONk622S.js";import"./Headline-K5SxFgY1.js";import"./Subhead-CTHKnpeS.js";import"./chevron_compact_right_24-DzsR3cYI.js";import"./chevron_16-UahDaYU4.js";import"./AdaptiveIconRenderer-QV1MdQeO.js";import"./reorder_ios_24-CXYouv79.js";import"./check_box_on_24-qoQEq3lL.js";import"./check_circle_on_24-B7QwB07X.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DE1FFYyv.js";import"./Title-B3iIrqRR.js";import"./chevron_left_outline_28-C60arpqC.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./useBooleanState-CTKutUp4.js";import"./useNativeFormResetListener-C2Q8k3Xj.js";import"./Button-0nci1iZm.js";import"./clear_16-DIY2ubBj.js";import"./search_outline_16-BWyNHwVw.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
