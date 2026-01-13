import{j as r,n}from"./iframe-DP0c1f9Y.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-C69Y9B5-.js";import{B as g}from"./Button-DYe3R3CT.js";import{I as x}from"./Image-BGmFDCcH.js";import{F as m}from"./Flex-C--pQgbh.js";import{I as f}from"./play_24-D0vzsys9.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme-DuZucal0.js";import"./IconButton-DX6zaS9g.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./Title-S_74tDbu.js";import"./dismiss_dark_24-B6mrAttF.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./dismiss_24--0GSOPy5.js";import"./cancel_24-Cb6nnPMq.js";import"./chevron_24-B2HJQcyW.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-CQrk3-c4.js";import"./ImageBaseBadge-D4hwrB2F.js";import"./useFocusWithin-CvS6Su5o.js";import"./useIsClient-RcRRrgRO.js";import"./gaps-BRHZAyUc.js";const $={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const rr=["Playground"];export{o as Playground,rr as __namedExportsOrder,$ as default};
