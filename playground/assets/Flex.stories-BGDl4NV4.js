import{j as r,n}from"./iframe-DcUCz3Gq.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-N3Qo1LuN.js";import{B as g}from"./Button-BU_mp-AO.js";import{I as x}from"./Image-gX3bmW6f.js";import{F as m}from"./Flex-Y1k2ohIq.js";import{I as f}from"./play_24-BJ8Cbvrm.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-CGiS95Aa.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Headline-_bBT78y6.js";import"./Subhead-CcORohtB.js";import"./Title-Cb6EL7Un.js";import"./dismiss_dark_24-DnYA-kRj.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-Ei6U7tsr.js";import"./cancel_24-DyhNO7vT.js";import"./chevron_24-DorGB4Sq.js";import"./Spinner-DB1TcyOv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-DaoVSz36.js";import"./ImageBaseBadge-FhxxxNM2.js";import"./useColorScheme-DrgIsgMO.js";import"./useFocusWithin-4tbXXtmK.js";import"./useIsClient-blsjwI61.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
