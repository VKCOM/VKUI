import{j as r,n as u}from"./iframe-DQDZnzQe.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner--ozAK6mG.js";import{B as h}from"./Button-CP79mmtk.js";import{I as j}from"./Image-DyhjwEtW.js";import{F as s}from"./Flex-CAa4CqOp.js";import{I as b}from"./play_24-DTpbEUcx.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-fW78sGQ1.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./VisuallyHidden-vRsYbH_6.js";import"./Headline-DFYCKKj3.js";import"./Subhead-CV6mVfj0.js";import"./Title-DVgoNOIF.js";import"./dismiss_dark_24-Dt2Q5sA7.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./dismiss_24-CGBKe4pv.js";import"./cancel_24-DxEHhXTK.js";import"./chevron_24-DPX9SsYy.js";import"./Spinner-BbRcECA7.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-VWSBvzf0.js";import"./ImageBaseBadge-BUi6r-Q8.js";import"./useColorScheme-alZiR8qg.js";import"./useFocusWithin-DP8QP68V.js";import"./useIsClient-w_GYH5P_.js";import"./gaps-BRHZAyUc.js";const tr={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const er=["Playground"];export{o as Playground,er as __namedExportsOrder,tr as default};
