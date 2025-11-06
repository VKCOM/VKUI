import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-DveaDHpJ.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BZ_UOjJ3.js";import{C as t}from"./Cell-DDnnBQ1r.js";import{G as l}from"./Group-jSVFVrUQ.js";import{P as s}from"./PanelHeaderBack-JTPMjxza.js";import{S as j}from"./Search-BeUTZ8fM.js";import{S as h}from"./Spinner-kmrkwAxt.js";import{I as b}from"./user_outline_28-CmXBy_2i.js";import{I as k}from"./users_outline_28-DsNF_dxj.js";import{I as A}from"./music_outline_28-BcXMa0jk.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-CSPjt5UO.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-jOcLBbtU.js";import"./useColorScheme-Ca6Q1evu.js";import"./InputUtils-DB2utYDB.js";import"./useFocusWithin-C-V6I_uV.js";import"./useIsClient-Bmcaxh8V.js";import"./useConfigDirection-C-LxfHUm.js";import"./online_mobile_12-DR7dOS3R.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-dXf4SeU2.js";import"./children-DIqfUSJp.js";import"./IconButton-B6-RVMvP.js";import"./Tappable-B6M0Cj2d.js";import"./VisuallyHidden-C4fiFLiw.js";import"./useGlobalEventListener-DxW3-2us.js";import"./useEventListener-BZXVGBW4.js";import"./cancel_24-v6kzA3DC.js";import"./SimpleCell-C5FLI9j_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DMEVDgek.js";import"./Headline-D2z7orvN.js";import"./Subhead-CMDv2ZTP.js";import"./chevron_compact_right_24-_2yPNVIn.js";import"./chevron_16-8_wEssbM.js";import"./AdaptiveIconRenderer-D02Z7Vvb.js";import"./reorder_ios_24-B1myTCle.js";import"./check_box_on_24-BsHKmyz3.js";import"./check_circle_on_24-FNfqmYlu.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-9ov5lTLg.js";import"./Title-DhgmrscL.js";import"./chevron_left_outline_28-DwyM_VoL.js";import"./chevron_left_outline_20-AC1IUGj4.js";import"./useBooleanState-Bf8gkZ5Q.js";import"./useNativeFormResetListener-DzfOEcU3.js";import"./Button-Be-a6C2x.js";import"./clear_16-DO1pR0Za.js";import"./search_outline_16-DJZJHsyn.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
