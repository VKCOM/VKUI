import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-DTUKIQpa.js";import{D as f,C as x}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CSba3fV-.js";import{C as t}from"./Cell-CfSSn24T.js";import{G as l}from"./Group-CZGORHer.js";import{P as s}from"./PanelHeaderBack-Bc-VN5vd.js";import{S as h}from"./Search-CkhYd8PP.js";import{S as j}from"./Spinner-BjJTDPz-.js";import{I as b}from"./user_outline_28-BYCjKU0n.js";import{I as k}from"./users_outline_28-2TEcwYKn.js";import{I as A}from"./music_outline_28-BGrbLV2S.js";import"./ImageBase-5nov2l7v.js";import"./Clickable-DRtJbe2S.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DKeE-0Mw.js";import"./useColorScheme-BGAH8gMd.js";import"./InputUtils-Db1DLuWS.js";import"./useFocusWithin-BaNto5dO.js";import"./useIsClient-B-5KeZKv.js";import"./useConfigDirection-Cb5ryD04.js";import"./online_mobile_12-BsDhKzk-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./helpers-QklJbEbU.js";import"./Removable-Cld3TR36.js";import"./children-B8YsjXFx.js";import"./IconButton-Dy9SRYqV.js";import"./Tappable-Br6ZM5HO.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./useGlobalEventListener-D8BL8vid.js";import"./useEventListener-DzYdBFwg.js";import"./cancel_24-BG0iu8qf.js";import"./SimpleCell-CDk2kNxF.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-rQhC0WQs.js";import"./Headline-DPZ9LHy_.js";import"./Subhead-C7vbIoTq.js";import"./chevron_compact_right_24-DIcKAlfH.js";import"./chevron_16-BuSYZLHG.js";import"./AdaptiveIconRenderer-BIF-AAH3.js";import"./reorder_ios_24-CsfHOuR7.js";import"./check_box_on_24-C3zzNqq8.js";import"./check_circle_on_24-DGwl3f4B.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BFIcF9aa.js";import"./Title-BNj2Lwrg.js";import"./chevron_left_outline_28-CU5VKeW_.js";import"./chevron_left_outline_20-DdZWpJA-.js";import"./useBooleanState-BWuuVZFd.js";import"./useNativeFormResetListener-CNk58Zp4.js";import"./Button-BCF43kbr.js";import"./clear_16-CAUQYn8x.js";import"./search_outline_16-t_LxZXQv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ge={title:"Layout/Panel",component:o,parameters:v("Panel",x,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
