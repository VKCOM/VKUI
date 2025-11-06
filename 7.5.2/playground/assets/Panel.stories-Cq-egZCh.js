import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-BzXYREd1.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-oYUglsPx.js";import{C as t}from"./Cell-CIK6qelj.js";import{G as l}from"./Group-BiC9EI5C.js";import{P as s}from"./PanelHeaderBack-D2vaAK4v.js";import{S as h}from"./Search-C925vAIo.js";import{S as j}from"./Spinner-CKaqwWiI.js";import{I as b}from"./user_outline_28-BYBK7aN_.js";import{I as k}from"./users_outline_28-C5RObMhS.js";import{I as A}from"./music_outline_28-B5CEnlfL.js";import"./ImageBase-D7jndpfS.js";import"./Clickable-DoSI9phS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Ltyfjkpt.js";import"./useColorScheme-BFL8-8ar.js";import"./InputUtils-DULFm0M2.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useIsClient-DE0-CiwS.js";import"./useConfigDirection-EqB_hZQh.js";import"./online_mobile_12-DqIkEPCy.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./helpers-QklJbEbU.js";import"./Removable-CqorhSR_.js";import"./children-Cg6pG0uN.js";import"./IconButton-DmYSjyYz.js";import"./Tappable-CEn82fQ0.js";import"./VisuallyHidden-CGoUHCA9.js";import"./useGlobalEventListener-B6vpDla7.js";import"./useEventListener-BVPfg_EC.js";import"./cancel_24-CYr0_4vC.js";import"./SimpleCell-5Dhw212S.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ChYIirVi.js";import"./Headline-CvUEvu-v.js";import"./Subhead-fVUucS5M.js";import"./chevron_compact_right_24-D2odf8KU.js";import"./chevron_16-BAw61TxE.js";import"./AdaptiveIconRenderer-DQJoMb-5.js";import"./reorder_ios_24-ClVg3dp1.js";import"./check_box_on_24-N2P4yWce.js";import"./check_circle_on_24-DGqsU1xy.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Tdeqy5UO.js";import"./Title-2928E8uu.js";import"./chevron_left_outline_28-DRpK4OSC.js";import"./chevron_left_outline_20-DVvIs5zx.js";import"./useBooleanState-CTryDGGC.js";import"./useNativeFormResetListener-hVAhs6fv.js";import"./Button-C3UHKLcX.js";import"./clear_16-Cqf9WRS1.js";import"./search_outline_16-CD7asbE4.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
