import{j as r,n}from"./iframe-CjlHPZNU.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-BilXeDiM.js";import{B as g}from"./Button-eWkGETfu.js";import{I as x}from"./Image-RH0dsCLS.js";import{F as m}from"./Flex-B5ulvuRF.js";import{I as f}from"./play_24-Bi8Mp9dr.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DL_Qecp_.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./VisuallyHidden-BhHQTREx.js";import"./Headline-5QXk0_9F.js";import"./Subhead-LlQLYw53.js";import"./Title-GMDilNWH.js";import"./dismiss_dark_24-DtuKqEMW.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-BlQ_aw4c.js";import"./cancel_24-DoQTGG5W.js";import"./chevron_24-Bo5p7nmg.js";import"./Spinner-BqL1JLHM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-CwOR86Dk.js";import"./ImageBaseBadge-BRgNofzo.js";import"./useColorScheme-BIeu6EL3.js";import"./useFocusWithin-CtqEkwtt.js";import"./useIsClient-DEeP5e_N.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'm',
    itemsCount: 2
  },
  render: ({
    itemsCount = 2,
    rowGap,
    columnGap,
    gap,
    ...args
  }) => <Flex gap={rowGap !== undefined || columnGap !== undefined ? [rowGap || 0, columnGap || 0] : gap} {...args}>
      {Array.from({
      length: itemsCount
    }, (_, index) => {
      return <Banner key={index} before={<Image size={96} src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />} title="Для Вас" subtitle="Обновлено сегодня" actions={<Button before={<Icon24Play />} onClick={noop}>
                Слушать
              </Button>} />;
    })}
    </Flex>,
  decorators: [Component => <div style={{
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...o.parameters?.docs?.source}}};const tr=["Playground"];export{o as Playground,tr as __namedExportsOrder,or as default};
