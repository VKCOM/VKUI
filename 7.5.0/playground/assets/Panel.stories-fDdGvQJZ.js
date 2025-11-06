import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-CRvvLw_c.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-pwjjqDmg.js";import{C as t}from"./Cell-BdPBvmSn.js";import{G as l}from"./Group-QBPXGokh.js";import{P as s}from"./PanelHeaderBack-qPB6GelT.js";import{S as h}from"./Search-ScmlAn12.js";import{S as j}from"./Spinner-BeKI5I2R.js";import{I as b}from"./user_outline_28-0-y2hG6T.js";import{I as k}from"./users_outline_28-BcNsYvw8.js";import{I as A}from"./music_outline_28-Bc67Gq3-.js";import"./ImageBase-BO5k9ugY.js";import"./Clickable-C5yyRKxt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DhBJmgl1.js";import"./useColorScheme-Dg8vGXhe.js";import"./InputUtils-jCwC7LNS.js";import"./useFocusWithin-B4DTXq5h.js";import"./useIsClient-499Yyiwu.js";import"./useConfigDirection-B3mnQ7qq.js";import"./online_mobile_12-032s7S0V.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./helpers-QklJbEbU.js";import"./Removable-D6hUbfb3.js";import"./children-B6ZvQs6l.js";import"./IconButton-BfjgaeOF.js";import"./Tappable-BL_Dp9-M.js";import"./VisuallyHidden-ExmaeT5t.js";import"./useGlobalEventListener-Dcqm9qtj.js";import"./useEventListener-CJcuEL8k.js";import"./cancel_24-Bj5mGOBW.js";import"./SimpleCell-CNXhz4ds.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dyjj_lEj.js";import"./Headline-D6S1r3dC.js";import"./Subhead-BYsNdrqQ.js";import"./chevron_compact_right_24-BKdl5aVs.js";import"./chevron_16-DKMjO9ca.js";import"./AdaptiveIconRenderer-CuUFm8UV.js";import"./reorder_ios_24-ceaOoDnu.js";import"./check_box_on_24-BaAuTipL.js";import"./check_circle_on_24-IW363EmW.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-J2vwpHg5.js";import"./Title-CR_Ip4zZ.js";import"./chevron_left_outline_28-DsVDtZnQ.js";import"./chevron_left_outline_20-CfqmpdCV.js";import"./useBooleanState-FyM6sJr_.js";import"./useNativeFormResetListener-CpSR0kzW.js";import"./Button-C8kpyiaO.js";import"./clear_16-BgDF56cG.js";import"./search_outline_16-CBlYWXtp.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
