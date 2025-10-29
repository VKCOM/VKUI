import{j as r,n}from"./iframe-DC59t_7s.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-CmHjLc3R.js";import{B as g}from"./Button-TPmMtPai.js";import{I as x}from"./Image-CuszQPsR.js";import{F as m}from"./Flex-DWfXF-df.js";import{I as f}from"./play_24-EP35FINA.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DlcUkq3s.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./Headline-bNrKkYhC.js";import"./Subhead-CcQWHNvG.js";import"./Title-DbXaHY-Y.js";import"./dismiss_dark_24-BcC2z4Lh.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-rbNyNvza.js";import"./cancel_24-pw3fX9Xb.js";import"./chevron_24-FdnyQ-I8.js";import"./Spinner-BHxVDILF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-Dh1youlf.js";import"./ImageBaseBadge-CdzA4sjH.js";import"./useColorScheme-Cf0PiwGW.js";import"./useFocusWithin-9CYA-Xql.js";import"./useIsClient-DeI2OSMJ.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
