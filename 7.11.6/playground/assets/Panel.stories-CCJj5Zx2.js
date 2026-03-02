import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DxxZLxeI.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BCXODrAO.js";import{C as t}from"./Cell-C9lzdJDz.js";import{G as l}from"./Group-DDJytldN.js";import{P as s}from"./PanelHeaderBack-DYoyppKZ.js";import{S as f}from"./Search-B5lcE5Po.js";import{S as v}from"./Spinner-BmfPEekg.js";import{I as x}from"./user_outline_28-CukHuPaA.js";import{I as j}from"./users_outline_28-CoFWHd22.js";import{I as h}from"./music_outline_28-BBk1tC03.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-QHQPYay9.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./ImageBaseBadge-CFYaWPus.js";import"./useColorScheme-CToT-7qP.js";import"./InputUtils-CuOtTanw.js";import"./useFocusWithin-CCKxCh5m.js";import"./useIsClient-CPE3VRxF.js";import"./useConfigDirection-Cl-SHqVT.js";import"./online_mobile_12-V1JPLwWn.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DPTeUPkV.js";import"./children-CeKSHNky.js";import"./IconButton-CgpvmjLz.js";import"./Tappable-C82LyDNp.js";import"./VisuallyHidden-DujZCwJ6.js";import"./useGlobalEventListener-BlIjoW0G.js";import"./useEventListener-DLWBolfY.js";import"./cancel_24-BuXDWULC.js";import"./SimpleCell-Dd4jE0le.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-C3-8h3B5.js";import"./Headline-WANZoqA8.js";import"./Subhead-BP7ZzX_Z.js";import"./chevron_compact_right_24-nPyqWDNh.js";import"./chevron_16-CGve78DZ.js";import"./AdaptiveIconRenderer-3rDf-OfV.js";import"./reorder_ios_24-Co8695lz.js";import"./check_box_on_24-DfMQbV1N.js";import"./check_circle_on_24-ulkn_pXb.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-8H70UPSW.js";import"./Title-BaiQADO8.js";import"./chevron_left_outline_28-CJtjEIet.js";import"./chevron_left_outline_20-B6Q-cCoY.js";import"./useBooleanState-DF3jMA5-.js";import"./useNativeFormResetListener-BGdqsEPZ.js";import"./Button-BpqQfiA7.js";import"./clear_16-u-JLbxUP.js";import"./search_outline_16-CFeBQaNj.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
