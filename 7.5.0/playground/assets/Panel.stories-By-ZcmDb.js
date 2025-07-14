import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-A37C1jR-.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DDPfzaIq.js";import{C as t}from"./Cell-Ci22DGdt.js";import{G as l}from"./Group-CpVZcUzJ.js";import{P as s}from"./PanelHeaderBack-GRk06dO8.js";import{S as h}from"./Search-zAmKtsUo.js";import{S as j}from"./Spinner-CS7OnS2c.js";import{I as b}from"./user_outline_28-N7CefwMv.js";import{I as k}from"./users_outline_28-Cx_wO4RT.js";import{I as A}from"./music_outline_28-ZlrnvA8Q.js";import"./ImageBase-DHMqoXaz.js";import"./Clickable-yIrZH96-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BCjEuUCA.js";import"./useColorScheme-AJAxISWR.js";import"./InputUtils-C1lt5OkO.js";import"./useFocusWithin-Cq9HJdBy.js";import"./useIsClient-CM1J9iXh.js";import"./useConfigDirection-EbyEgXYN.js";import"./online_mobile_12-CZqrqTK7.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./helpers-QklJbEbU.js";import"./Removable-YvJNJGGv.js";import"./children-CHwlOS0u.js";import"./IconButton-DbMMimp0.js";import"./Tappable-bphv_Btw.js";import"./VisuallyHidden-DX4ud0qi.js";import"./useGlobalEventListener-Cm_NgAlW.js";import"./useEventListener-YcbCw0KM.js";import"./cancel_24-Cwv97N5Z.js";import"./SimpleCell-DQPKEDPo.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DEEoTBIm.js";import"./Headline-CWoDuoSH.js";import"./Subhead-BEeAaWS4.js";import"./chevron_compact_right_24-B5zmhySD.js";import"./chevron_16-DOWOaZPd.js";import"./AdaptiveIconRenderer-BiY9YK_m.js";import"./reorder_ios_24-DFJ54ZcX.js";import"./check_box_on_24-DAmXux97.js";import"./check_circle_on_24-DzAT-CYG.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DbPVlTUR.js";import"./Title-CFAhKLGN.js";import"./chevron_left_outline_28-1djEvebm.js";import"./chevron_left_outline_20-DgMNq689.js";import"./useBooleanState-Byeeh5u-.js";import"./useNativeFormResetListener-XO2_IJ60.js";import"./Button-DupvSECF.js";import"./clear_16--07WbYnl.js";import"./search_outline_16-wQCrYpdt.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
