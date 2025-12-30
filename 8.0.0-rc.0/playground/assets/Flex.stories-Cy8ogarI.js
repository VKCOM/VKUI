import{j as r,n}from"./iframe-D-vjmezP.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-Cg4hKy1y.js";import{B as g}from"./Button-iOPheJU3.js";import{I as x}from"./Image-BANFEh34.js";import{F as m}from"./Flex-C_be27FX.js";import{I as f}from"./play_24-D2WNiXc9.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme-B_PTVyib.js";import"./IconButton-DrzcArVi.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./Title-5rqdnq6p.js";import"./dismiss_dark_24-BD1lQS6H.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-cJPxsGgW.js";import"./cancel_24-B55ygFBW.js";import"./chevron_24-BqyT2lKx.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-CkGCWqjD.js";import"./ImageBaseBadge-B9AwrgDG.js";import"./useFocusWithin-BzKDlGXW.js";import"./useIsClient-Ddk0YKn4.js";import"./gaps-BRHZAyUc.js";const rr={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
