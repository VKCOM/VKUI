import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-BnACcuaj.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BDDoFCjB.js";import{C as t}from"./Cell-CPpU3HzX.js";import{G as l}from"./Group-D4VE5Gz7.js";import{P as s}from"./PanelHeaderBack-DCZmm_6-.js";import{S as f}from"./Search-Q860f38W.js";import{S as v}from"./Spinner-gYU1puQq.js";import{I as x}from"./user_outline_28-D-YwOyxU.js";import{I as j}from"./users_outline_28-DlrqL1uy.js";import{I as h}from"./music_outline_28-CfNwtmVF.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-C2NNu-UP.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./ImageBaseBadge-ddiV_2PS.js";import"./useColorScheme-DVykw0fJ.js";import"./InputUtils-Bef-cQxi.js";import"./useFocusWithin-BXXGciuN.js";import"./useIsClient-BI688Wuj.js";import"./useConfigDirection-BP7XHPEm.js";import"./online_mobile_12-BJe7c2HV.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-oaQXNttY.js";import"./children-UU2tqqG0.js";import"./IconButton-DJLKvWv6.js";import"./Tappable-Bp0BqfGQ.js";import"./VisuallyHidden-UrXKAcy6.js";import"./useGlobalEventListener-Bh7RxLIS.js";import"./useEventListener-Bs6dx_Bk.js";import"./cancel_24-CBMdiZ42.js";import"./SimpleCell-CsVMJ4gj.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DxEsaF8U.js";import"./Headline-B8WUXhnw.js";import"./Subhead-ctfJxtXj.js";import"./chevron_compact_right_24-DXy50A74.js";import"./chevron_16-Cx4QM-qk.js";import"./AdaptiveIconRenderer-D8036ZRF.js";import"./reorder_ios_24-a0rGK0lo.js";import"./check_box_on_24-D3mZHWMV.js";import"./check_circle_on_24-Cl0MtjDx.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-iDUVETp7.js";import"./Title-DyuwQvN-.js";import"./chevron_left_outline_28-Dnne7oUr.js";import"./chevron_left_outline_20-1-xRflVr.js";import"./useBooleanState-CcPy88nu.js";import"./useNativeFormResetListener-mFlyahES.js";import"./Button-DZqU8iPb.js";import"./clear_16-CsXkLQJ2.js";import"./search_outline_16-BEA_8Pdw.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
