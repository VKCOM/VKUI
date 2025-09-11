import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-D9ctG7Ns.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DKm75c9w.js";import{C as t}from"./Cell-DfjQ-TK4.js";import{G as l}from"./Group-BG1uXLvs.js";import{P as s}from"./PanelHeaderBack-DstNbd00.js";import{S as j}from"./Search-smGhjg6V.js";import{S as h}from"./Spinner-CdhXnMLF.js";import{I as b}from"./user_outline_28-CEPd-byl.js";import{I as k}from"./users_outline_28-B7sq_Vtf.js";import{I as A}from"./music_outline_28-DmZ4Zx3t.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-qcCzGQe1.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-C5xgoBYA.js";import"./useColorScheme-D5oaSQC0.js";import"./InputUtils-dk1yVFOH.js";import"./useFocusWithin-C5Vdk2dl.js";import"./useIsClient-C6WLQkbf.js";import"./useConfigDirection-BepSmh67.js";import"./online_mobile_12-Bfp1yxmz.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-D8OEYYHJ.js";import"./children-O1ZDhWOu.js";import"./IconButton-Cu6N9yzq.js";import"./Tappable-DOmAnzcN.js";import"./VisuallyHidden-XRinxkJw.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./cancel_24-oGe7O0m1.js";import"./SimpleCell-CeGD-K3T.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BcHikxS0.js";import"./Headline-4n2ELzS2.js";import"./Subhead-DjvqikOr.js";import"./chevron_compact_right_24-DAU9zP3f.js";import"./chevron_16-BEyzHrJY.js";import"./AdaptiveIconRenderer-Bl0Wq8MO.js";import"./reorder_ios_24-DcS2iC4M.js";import"./check_box_on_24-t6dgJu0A.js";import"./check_circle_on_24-CAovDgBP.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BFVrtQgO.js";import"./Title-BxTWQERW.js";import"./chevron_left_outline_28-DgHIucOg.js";import"./chevron_left_outline_20-C2tebWfr.js";import"./useBooleanState-EYObBVXu.js";import"./useNativeFormResetListener-C2d08Zef.js";import"./Button-ClDISrDv.js";import"./clear_16-CkB26DR4.js";import"./search_outline_16-DXRGUpCs.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
