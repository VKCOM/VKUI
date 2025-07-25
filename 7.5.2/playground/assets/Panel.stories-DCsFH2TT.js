import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-D2wkiYbA.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CF99X8XP.js";import{C as t}from"./Cell-C46aOp-5.js";import{G as l}from"./Group-Caj3mZPX.js";import{P as s}from"./PanelHeaderBack-_bFRmiy6.js";import{S as h}from"./Search-DLEY7Eay.js";import{S as j}from"./Spinner-DVe93hh_.js";import{I as b}from"./user_outline_28-q66iRbM-.js";import{I as k}from"./users_outline_28-BVLKgcUE.js";import{I as A}from"./music_outline_28-CYzaHyYW.js";import"./ImageBase-BqLsBedM.js";import"./Clickable-BU3u--9M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DiVBFpSA.js";import"./useColorScheme-DEY2vJy9.js";import"./InputUtils-QU0WrbnN.js";import"./useFocusWithin-Cqparjzv.js";import"./useIsClient-DV0wR1eD.js";import"./useConfigDirection-DrnKoeri.js";import"./online_mobile_12-qzxLkxGc.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./helpers-QklJbEbU.js";import"./Removable-DRvNecvI.js";import"./children-Cn4G3p10.js";import"./IconButton-DhTwf-xi.js";import"./Tappable-D1Sdra8V.js";import"./VisuallyHidden-ChTSElWV.js";import"./useGlobalEventListener-dinbl7W7.js";import"./useEventListener-CNPrbSFG.js";import"./cancel_24-D23uiKG2.js";import"./SimpleCell-C3wjlPOp.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-4HzFQCBl.js";import"./Headline-kcgU3LAO.js";import"./Subhead-UUuxM49Y.js";import"./chevron_compact_right_24-4HH2VG6u.js";import"./chevron_16-DD_QuTl2.js";import"./AdaptiveIconRenderer-DEY8O_lK.js";import"./reorder_ios_24-DnNILWgv.js";import"./check_box_on_24-DTKmagV1.js";import"./check_circle_on_24-7347Up76.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-vD2nOHV6.js";import"./Title-CKYO1nSQ.js";import"./chevron_left_outline_28-9Ez7mO0R.js";import"./chevron_left_outline_20-CFkuEpie.js";import"./useBooleanState--gBTG5GA.js";import"./useNativeFormResetListener-Csd7wnJj.js";import"./Button-DffPUQY4.js";import"./clear_16-nOcKiAwv.js";import"./search_outline_16-oXqND2Us.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
