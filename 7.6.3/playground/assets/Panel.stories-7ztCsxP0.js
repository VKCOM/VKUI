import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-DvsMcRqO.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-ZT3wy4qo.js";import{C as t}from"./Cell-8cassXI6.js";import{G as l}from"./Group-CqteXIEy.js";import{P as s}from"./PanelHeaderBack-CrfGiHYi.js";import{S as j}from"./Search-CSlLebKQ.js";import{S as h}from"./Spinner-Nh-MMopi.js";import{I as b}from"./user_outline_28-Bi8eTBEI.js";import{I as k}from"./users_outline_28-BsvhM6hA.js";import{I as A}from"./music_outline_28-DZt4zyTk.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-CcOjubak.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-C13bCicO.js";import"./useColorScheme-Bl3NVSSg.js";import"./InputUtils-D1AbCbBE.js";import"./useFocusWithin-Bvi6Sdqy.js";import"./useIsClient-BccSIQM3.js";import"./useConfigDirection-CN1nmZoK.js";import"./online_mobile_12-pFagfEAZ.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-B20LGpmh.js";import"./children-lVZQ7uKR.js";import"./IconButton-B-myA0wM.js";import"./Tappable-Dogw4jpa.js";import"./VisuallyHidden-BGLO0lAS.js";import"./useGlobalEventListener-BdJfJj1z.js";import"./useEventListener-BkrsSu0A.js";import"./cancel_24-CxtMKOmC.js";import"./SimpleCell-Cc4B-ydZ.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BnZcEJ_G.js";import"./Headline-CDYdreGb.js";import"./Subhead-Bc3iAQV-.js";import"./chevron_compact_right_24-B3rJ9RFm.js";import"./chevron_16-BxodZLo_.js";import"./AdaptiveIconRenderer-BgTnNLug.js";import"./reorder_ios_24-Bjz4Yiy0.js";import"./check_box_on_24-gtYbFFHx.js";import"./check_circle_on_24-D_xf0Bvx.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Cwv_3u9I.js";import"./Title-SHnE0uDa.js";import"./chevron_left_outline_28-Djuv1E3d.js";import"./chevron_left_outline_20-yZ80JCLp.js";import"./useBooleanState-CDL0uU2Q.js";import"./useNativeFormResetListener-CeopMCzS.js";import"./Button-DoX3DA-M.js";import"./clear_16-DZogZ4wK.js";import"./search_outline_16-C0EHpExN.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
