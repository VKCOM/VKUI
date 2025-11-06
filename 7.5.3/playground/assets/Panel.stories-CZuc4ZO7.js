import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-VQuwIBim.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-C7wjORe_.js";import{C as t}from"./Cell-SlhzKCcn.js";import{G as l}from"./Group-CM6wWYyu.js";import{P as s}from"./PanelHeaderBack-BCacLBn1.js";import{S as h}from"./Search-CM7emOyV.js";import{S as j}from"./Spinner-D45v6N1-.js";import{I as b}from"./user_outline_28-BoQqpMJI.js";import{I as k}from"./users_outline_28-CXN3-JYF.js";import{I as A}from"./music_outline_28-BMxKdTi-.js";import"./ImageBase-BsyA3SxR.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-lUb35v5x.js";import"./useColorScheme-3PoJfbUB.js";import"./InputUtils-esLGIMz7.js";import"./useFocusWithin-C9W7nehx.js";import"./useIsClient--20LXL4m.js";import"./useConfigDirection-BhKWnP92.js";import"./online_mobile_12-22TycoA2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./helpers-QklJbEbU.js";import"./Removable-B69Ae71z.js";import"./children-DbSAwzjm.js";import"./IconButton-CsO6Fs2D.js";import"./Tappable-DJKRXU4j.js";import"./VisuallyHidden-Bn9barOE.js";import"./useGlobalEventListener-Dg2G1Bu3.js";import"./useEventListener-buG494Se.js";import"./cancel_24-76PwI_pT.js";import"./SimpleCell-Bx23Z_Ak.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CFr_RCRn.js";import"./Headline-DlMci9v_.js";import"./Subhead-BovRsuwk.js";import"./chevron_compact_right_24-NA_iCiSP.js";import"./chevron_16-CrLMruU6.js";import"./AdaptiveIconRenderer-BncaVmUu.js";import"./reorder_ios_24-CgAqhjsg.js";import"./check_box_on_24-Dr4fiKV4.js";import"./check_circle_on_24-BhaJOotW.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DJT3S1vC.js";import"./Title-kPzeN8_R.js";import"./chevron_left_outline_28-BNUSJPAR.js";import"./chevron_left_outline_20-DULcAu75.js";import"./useBooleanState-BLss2W4z.js";import"./useNativeFormResetListener-BYO0qqZX.js";import"./Button-DX8vp4-B.js";import"./clear_16-DagTQ_ym.js";import"./search_outline_16-Dv2IJxw_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ye={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
