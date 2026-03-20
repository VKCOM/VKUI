import{j as r,n}from"./iframe-CmkY54f5.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-Di_0wjjG.js";import{B as g}from"./Button-TSeYhrGZ.js";import{I as x}from"./Image-BPsQqnd-.js";import{F as m}from"./Flex-DLqfh1Mm.js";import{I as f}from"./play_24-2q3_fpZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-hyZ4L0bk.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./Headline-DsYeFntm.js";import"./Subhead-BS8ES9bw.js";import"./Title-DSkwAgcq.js";import"./dismiss_dark_24-ClSV9YUe.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-DdJoU00I.js";import"./cancel_24-D5GJv2PT.js";import"./chevron_24-BlOtmXlj.js";import"./Spinner-C6TWv4c6.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-CuKHTYYu.js";import"./ImageBaseBadge-qpJE4NP2.js";import"./useColorScheme-BCWY6G93.js";import"./useFocusWithin-BymUKlkD.js";import"./useIsClient-B2WktGOw.js";import"./gaps-Yg_CjNhz.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
