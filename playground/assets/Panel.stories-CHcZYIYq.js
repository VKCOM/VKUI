import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-CGpIZMk8.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-C-0ggE1O.js";import{C as t}from"./Cell-BGcMNrSH.js";import{G as l}from"./Group-CoQ5RzN5.js";import{P as s}from"./PanelHeaderBack-Dfx8nVVp.js";import{S as h}from"./Search-DCUTGGoF.js";import{S as j}from"./Spinner-DVykHsGf.js";import{I as b}from"./user_outline_28-D8jNnpjM.js";import{I as k}from"./users_outline_28-D1q3t6OL.js";import{I as A}from"./music_outline_28-CKiMABD8.js";import"./ImageBase-Dgt2gvRv.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bmifrsur.js";import"./useColorScheme-B2GHpbyp.js";import"./InputUtils-Z7In03iI.js";import"./useFocusWithin-mFqouh7d.js";import"./useIsClient-CR0g9cri.js";import"./useConfigDirection-Dz_AGVHb.js";import"./online_mobile_12-BfJB-Idm.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./helpers-QklJbEbU.js";import"./Removable-v2sol_eW.js";import"./children-BbEaAOxK.js";import"./IconButton-R-pBWVQH.js";import"./Tappable-BEdABn7b.js";import"./VisuallyHidden-CdBh7Iry.js";import"./useGlobalEventListener-CwAATl2v.js";import"./useEventListener-OpwGLEa0.js";import"./cancel_24-X3lt1W_w.js";import"./SimpleCell-BUqMdJ_G.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DPd01TxJ.js";import"./Headline-ZBoX0yvc.js";import"./Subhead-D_tBif6E.js";import"./chevron_compact_right_24-BC9MCbgO.js";import"./chevron_16-C7AVBXEj.js";import"./AdaptiveIconRenderer-bgOpWVtv.js";import"./reorder_ios_24-DYQT-ClO.js";import"./check_box_on_24-DmUu7cw7.js";import"./check_circle_on_24-DYgOR3Wd.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-HTx-07Vp.js";import"./Title-Bh0cFv1G.js";import"./chevron_left_outline_28-CCfp3LtF.js";import"./chevron_left_outline_20-anyUvaXU.js";import"./useBooleanState-CxDCZlwA.js";import"./useNativeFormResetListener-DzHjAfdT.js";import"./Button-7GGfFD7v.js";import"./clear_16-CA7NMDrS.js";import"./search_outline_16-CWEJeVvX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ye={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
