import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-D-vjmezP.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DAWW409u.js";import{C as t}from"./Cell-D2NiT4dU.js";import{G as l}from"./Group-knjA_28m.js";import{P as s}from"./PanelHeaderBack-DDGTi8vv.js";import{S as f}from"./Search-DQ_Jg1aA.js";import{S as v}from"./Spinner-CGq4yNx9.js";import{I as x}from"./user_outline_28-DXCeKL-p.js";import{I as j}from"./users_outline_28-B1_fm-d8.js";import{I as h}from"./music_outline_28-BsGfpw0K.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CkGCWqjD.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./ImageBaseBadge-B9AwrgDG.js";import"./useColorScheme-B_PTVyib.js";import"./InputUtils-DJ5DGhwp.js";import"./useFocusWithin-BzKDlGXW.js";import"./useIsClient-Ddk0YKn4.js";import"./useConfigDirection-BUJREPxm.js";import"./online_mobile_12-DwEtobzc.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-Db8Ui--t.js";import"./children-DmJGU09q.js";import"./IconButton-DrzcArVi.js";import"./Tappable-DMeLy5rU.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./cancel_24-B55ygFBW.js";import"./SimpleCell-CsYR4Aza.js";import"./Footnote-DApQXU2r.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./chevron_16-Bb1SKLei.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./reorder_ios_24-gO4PPlxx.js";import"./check_box_on_24-CgV3p_bd.js";import"./check_circle_on_24-Xof2lI9f.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BODTHbnm.js";import"./Title-5rqdnq6p.js";import"./chevron_left_outline_28-ks_3c2Qp.js";import"./chevron_left_outline_20-06dzqiB5.js";import"./useBooleanState-CJ3ersJo.js";import"./useNativeFormResetListener-JPR1G6r5.js";import"./Button-iOPheJU3.js";import"./clear_16-qZA4Frwf.js";import"./search_outline_16-Cu1pHBxS.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["Playground"];export{i as Playground,Se as __namedExportsOrder,He as default};
