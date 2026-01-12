import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-BqdgnJE0.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-ByJop0xV.js";import{C as t}from"./Cell-Bcr1t-wG.js";import{G as l}from"./Group-ONOG8oyY.js";import{P as s}from"./PanelHeaderBack-SOTUUZhJ.js";import{S as f}from"./Search-BDNpE-cI.js";import{S as v}from"./Spinner-CHRizUnE.js";import{I as x}from"./user_outline_28-DK3DeiyQ.js";import{I as j}from"./users_outline_28-COf4JgXO.js";import{I as h}from"./music_outline_28-CsQHbZf4.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Pf-ePiu3.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./ImageBaseBadge-3t_V7Ful.js";import"./useColorScheme-B3VXvXnZ.js";import"./InputUtils-ESzsNRN2.js";import"./useFocusWithin-7VHk4Gs5.js";import"./useIsClient-BVwTWTAW.js";import"./useConfigDirection-D5bRs-MF.js";import"./online_mobile_12-83f7wa5Q.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CQjuFWD6.js";import"./children-rmDURaUl.js";import"./IconButton-C7jcJUXx.js";import"./Tappable-C0ES09y8.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./useGlobalEventListener-BJBa7VdU.js";import"./useEventListener-C8S8CDSH.js";import"./cancel_24-DLsb6enM.js";import"./SimpleCell-_uNqJntM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Bj-28HDg.js";import"./Headline-ByN4fZVg.js";import"./Subhead-ubP323Lg.js";import"./chevron_compact_right_24-BvUpUGT6.js";import"./chevron_16-DLrfULAr.js";import"./AdaptiveIconRenderer-CDzx7HHu.js";import"./reorder_ios_24-Basz8dwa.js";import"./check_box_on_24-DR_37w56.js";import"./check_circle_on_24-B7hJoFmH.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DR2JVGbW.js";import"./Title-C5m838CH.js";import"./chevron_left_outline_28-D5Xjq3gQ.js";import"./chevron_left_outline_20-C8nGg7bJ.js";import"./useBooleanState-DTN3Xx5u.js";import"./useNativeFormResetListener-BI5s8yDq.js";import"./Button-BBUIsY6v.js";import"./clear_16-DLttciY9.js";import"./search_outline_16-CnpvhS01.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
