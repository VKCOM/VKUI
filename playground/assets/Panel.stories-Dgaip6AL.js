import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-BdL7Qu3-.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DQW5Aa4w.js";import{C as t}from"./Cell-GFBGULyk.js";import{G as l}from"./Group-1bWIf9u2.js";import{P as s}from"./PanelHeaderBack-bH9gkTGG.js";import{S as h}from"./Search-CxASwyWd.js";import{S as j}from"./Spinner-CchhrSOA.js";import{I as b}from"./user_outline_28-CHZJfQwo.js";import{I as k}from"./users_outline_28-Myc8YHJ0.js";import{I as A}from"./music_outline_28-CSfBTMgA.js";import"./ImageBase-B2iDi54_.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BeqMr1RR.js";import"./useColorScheme-BFusLRUe.js";import"./InputUtils-DfOLgQuD.js";import"./useFocusWithin-C1xt8Yic.js";import"./useIsClient-C0Y1oVh7.js";import"./useConfigDirection-D_GPblpw.js";import"./online_mobile_12-DGd3l17M.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./helpers-QklJbEbU.js";import"./Removable-kBBzHwjh.js";import"./children-D33S37xY.js";import"./IconButton-oiQnZbSh.js";import"./Tappable-DH_64QBQ.js";import"./VisuallyHidden-DMev6gKF.js";import"./useGlobalEventListener-CWI65JCy.js";import"./useEventListener-COxWOe_W.js";import"./cancel_24-DYZXSV6w.js";import"./SimpleCell-DtSFoJ-l.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./Headline-IzZ5JXBy.js";import"./Subhead-CEr4zt5A.js";import"./chevron_compact_right_24-AP5wuFgI.js";import"./chevron_16-Dq6TqX7-.js";import"./AdaptiveIconRenderer-QlRoKo4f.js";import"./reorder_ios_24-7wcSxEed.js";import"./check_box_on_24-Bm5iZahs.js";import"./check_circle_on_24-B-NXeGAt.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DEHQmu78.js";import"./Title-D-2PMsHx.js";import"./chevron_left_outline_28-Fd_7gajD.js";import"./chevron_left_outline_20-B13X4oR-.js";import"./useBooleanState-gpCLyzW9.js";import"./useNativeFormResetListener-DMFxA_vu.js";import"./Button-Bf-yaCMi.js";import"./clear_16-CM5ZDj6Z.js";import"./search_outline_16-DlISJcf9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ye={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Me=["Playground"];export{i as Playground,Me as __namedExportsOrder,ye as default};
