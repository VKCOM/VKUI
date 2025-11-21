import{j as r,n}from"./iframe-BnACcuaj.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-BCW5b4cl.js";import{B as g}from"./Button-DZqU8iPb.js";import{I as x}from"./Image-BWhgqe2n.js";import{F as m}from"./Flex-DDDZ_iE9.js";import{I as f}from"./play_24-C9w5iIZE.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DJLKvWv6.js";import"./Tappable-Bp0BqfGQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./InputUtils-Bef-cQxi.js";import"./VisuallyHidden-UrXKAcy6.js";import"./Headline-B8WUXhnw.js";import"./Subhead-ctfJxtXj.js";import"./Title-DyuwQvN-.js";import"./dismiss_dark_24-DN9-KUIA.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-Dt9jOS9m.js";import"./cancel_24-CBMdiZ42.js";import"./chevron_24-DE_SBVcH.js";import"./Spinner-gYU1puQq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-C2NNu-UP.js";import"./ImageBaseBadge-ddiV_2PS.js";import"./useColorScheme-DVykw0fJ.js";import"./useFocusWithin-BXXGciuN.js";import"./useIsClient-BI688Wuj.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
