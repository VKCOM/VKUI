import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DdZr-4mP.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-410xp239.js";import{C as t}from"./Cell-DUdnijE9.js";import{G as l}from"./Group-DlK5kh75.js";import{P as s}from"./PanelHeaderBack-C1QyAHj6.js";import{S as f}from"./Search-COAPXGuU.js";import{S as v}from"./Spinner-BjrDa5Np.js";import{I as x}from"./user_outline_28-BA3x9gVN.js";import{I as j}from"./users_outline_28-BmTrRBKu.js";import{I as h}from"./music_outline_28-BadQN7ND.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dd-xxUc3.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-B_lQou7R.js";import"./useColorScheme-DV5aetKH.js";import"./InputUtils-CcKtkKuI.js";import"./useFocusWithin-Bj820Lyk.js";import"./useIsClient-q3rRlZlM.js";import"./useConfigDirection-BdfXEpUn.js";import"./online_mobile_12-nNQkdum-.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-sBXdy_3O.js";import"./children-oqymHkiK.js";import"./IconButton-C7aWXmKO.js";import"./Tappable-CovdKVQt.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./cancel_24-SB-_Mfon.js";import"./SimpleCell-CIBNVGZX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";import"./Headline-BSoQthvj.js";import"./Subhead-xzDyxoRX.js";import"./chevron_compact_right_24-kk3EfcLj.js";import"./chevron_16-qALKhhss.js";import"./AdaptiveIconRenderer-BjiXmkQi.js";import"./reorder_ios_24-CkN9Xqz2.js";import"./check_box_on_24-Dqh-fiAD.js";import"./check_circle_on_24-Bo96Gt5Z.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-UAIvxmBF.js";import"./Title-D3itgTrb.js";import"./chevron_left_outline_28-C3rnHtyZ.js";import"./chevron_left_outline_20-BKzfgAPG.js";import"./useBooleanState-JHPHBct5.js";import"./useNativeFormResetListener-BAT6c0dk.js";import"./Button-BfB_yFLJ.js";import"./clear_16-DJ3u945u.js";import"./search_outline_16-S2_YgU4w.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
