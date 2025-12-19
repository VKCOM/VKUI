import{j as r,n}from"./iframe-CGSrC79H.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-DjYXZesR.js";import{B as g}from"./Button-JZGl9x8f.js";import{I as x}from"./Image-BlnqSjn6.js";import{F as m}from"./Flex-CmxIyQQi.js";import{I as f}from"./play_24-4Iw6WlKn.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme-DM7MWYfE.js";import"./IconButton-Bq_FXaCp.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./Title-29M-U6si.js";import"./dismiss_dark_24-CguZauux.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-dGbtMLh9.js";import"./cancel_24-CsoSQ93Z.js";import"./chevron_24-DILgtZHa.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-Dr0L0DbE.js";import"./ImageBaseBadge-DwqbY7Wq.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./useIsClient-DIauWYrF.js";import"./gaps-BRHZAyUc.js";const rr={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
