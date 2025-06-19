import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-k6odcVfq.js";import{D as f,C as x}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BhZm66jC.js";import{C as t}from"./Cell-PL4IxNDy.js";import{G as l}from"./Group-O3l4QVPu.js";import{P as s}from"./PanelHeaderBack-hdh0BKdZ.js";import{S as h}from"./Search-CaKL0u2w.js";import{S as j}from"./Spinner-COoI1Hcx.js";import{I as b}from"./user_outline_28-BTGCbugu.js";import{I as k}from"./users_outline_28-yEh1nkpA.js";import{I as A}from"./music_outline_28-DdbWuiIs.js";import"./ImageBase-BDH625NM.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DRsh_8l_.js";import"./useColorScheme-DOgN8xDN.js";import"./InputUtils-C1ugcw4m.js";import"./useFocusWithin-Bs7KV-km.js";import"./useIsClient-C3_XghNw.js";import"./useConfigDirection-CxnUW9rE.js";import"./online_mobile_12-DaP3HP9x.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./helpers-QklJbEbU.js";import"./Removable-DCOjXm07.js";import"./children-CYWK7spH.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./VisuallyHidden-D-1P4bzL.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./cancel_24-fcxuZKq0.js";import"./SimpleCell-LorozRfg.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DHnfr3c7.js";import"./Headline-BdgiMIb0.js";import"./Subhead-CfBOCg31.js";import"./chevron_compact_right_24-Baa4ZBCF.js";import"./chevron_16-C9RD0OpX.js";import"./AdaptiveIconRenderer-gQn7di2U.js";import"./reorder_ios_24-BFpJaCA4.js";import"./check_box_on_24-EC5CB3Pr.js";import"./check_circle_on_24-C1ooPDFD.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-GCQOmFAe.js";import"./Title-DF65glat.js";import"./chevron_left_outline_28-D__XxM12.js";import"./chevron_left_outline_20-DzkmYzqa.js";import"./useBooleanState-DLDFlLOy.js";import"./useNativeFormResetListener-Bp97Moh6.js";import"./Button-BOH5rx1N.js";import"./clear_16-DnpS3CYl.js";import"./search_outline_16-Bxb80Ms-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ge={title:"Layout/Panel",component:o,parameters:v("Panel",x,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,ge as default};
