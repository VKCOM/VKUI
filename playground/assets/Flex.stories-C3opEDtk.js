import{j as r,n}from"./iframe-OAvG3iJ-.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-npCI5rLW.js";import{B as g}from"./Button-DKiHHryh.js";import{I as x}from"./Image-CrTEnsTD.js";import{F as m}from"./Flex-Cfg1JM6V.js";import{I as f}from"./play_24-D8kvwtAe.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme--3xcMoVc.js";import"./IconButton-B0ADo2bb.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./Title-AFjtFc-5.js";import"./dismiss_dark_24-C20ZaDQc.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-BvHLukGE.js";import"./cancel_24-CjsEvKIV.js";import"./chevron_24-CR2v9LFD.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./ImageBase-mTZnpbEK.js";import"./ImageBaseBadge-DET_R2n_.js";import"./useFocusWithin-lydw_Auo.js";import"./useIsClient-DWkou9dw.js";import"./gaps-TC-23xBl.js";const rr={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const or=["Playground"];export{o as Playground,or as __namedExportsOrder,rr as default};
