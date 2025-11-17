import{j as r,n}from"./iframe-DhuutAfC.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-BUxSALuI.js";import{B as g}from"./Button-Id7-fKaz.js";import{I as x}from"./Image-BBx_bkbK.js";import{F as m}from"./Flex-DMMHnnCT.js";import{I as f}from"./play_24-DSPdsuDa.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-CS1h91J8.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./Title-BixyGD4w.js";import"./dismiss_dark_24-4Mxm_lSh.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-hGYXZ6eM.js";import"./cancel_24-DOIBb5nA.js";import"./chevron_24-XyzuJRpc.js";import"./Spinner-gmUVON3e.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-DRHnsmF9.js";import"./ImageBaseBadge-C-TjMgFh.js";import"./useColorScheme-BGUvzePH.js";import"./useFocusWithin-TQRavq7I.js";import"./useIsClient-C6EQizwd.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
