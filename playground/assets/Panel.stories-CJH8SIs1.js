import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DC59t_7s.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-2FNTHIuZ.js";import{C as t}from"./Cell-D1-zqLEr.js";import{G as l}from"./Group-BjjfSX7O.js";import{P as s}from"./PanelHeaderBack-Blph9B3b.js";import{S as f}from"./Search-VBLiSRIa.js";import{S as v}from"./Spinner-BHxVDILF.js";import{I as x}from"./user_outline_28-BRn-sl_Y.js";import{I as j}from"./users_outline_28-C7Rbpbal.js";import{I as h}from"./music_outline_28-Bjk9KKRr.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dh1youlf.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CdzA4sjH.js";import"./useColorScheme-Cf0PiwGW.js";import"./InputUtils-C5RWily7.js";import"./useFocusWithin-9CYA-Xql.js";import"./useIsClient-DeI2OSMJ.js";import"./useConfigDirection-6hDi4KID.js";import"./online_mobile_12-DWpmN_kZ.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-qNhpNz2M.js";import"./children-DYOU-AGd.js";import"./IconButton-DlcUkq3s.js";import"./Tappable-CRrpYa-n.js";import"./VisuallyHidden-dUOLTySp.js";import"./useGlobalEventListener-C_qxnlQL.js";import"./useEventListener-D94pK2uE.js";import"./cancel_24-pw3fX9Xb.js";import"./SimpleCell-BLFw8LVq.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_mvNSI1.js";import"./Headline-bNrKkYhC.js";import"./Subhead-CcQWHNvG.js";import"./chevron_compact_right_24-oTms1QP_.js";import"./chevron_16-DtWL8gcK.js";import"./AdaptiveIconRenderer-DnHspDix.js";import"./reorder_ios_24-D9YjfHpX.js";import"./check_box_on_24-B4x-cDuo.js";import"./check_circle_on_24-QLmxxhyq.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CmBd8Pyt.js";import"./Title-DbXaHY-Y.js";import"./chevron_left_outline_28-5WFmeHy_.js";import"./chevron_left_outline_20-BIdPFGBs.js";import"./useBooleanState-Eb4ZHiwa.js";import"./useNativeFormResetListener-q9_CarhL.js";import"./Button-TPmMtPai.js";import"./clear_16-BlQpHYDv.js";import"./search_outline_16-DBTQ77BR.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
