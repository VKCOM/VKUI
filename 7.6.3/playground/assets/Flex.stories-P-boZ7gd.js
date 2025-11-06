import{j as r,n as u}from"./iframe-OJ1C6fMc.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-CSgMoHbD.js";import{B as h}from"./Button-CRQbp7pl.js";import{I as j}from"./Image-8V9fEX5e.js";import{F as s}from"./Flex-B0i5mlpK.js";import{I as b}from"./play_24-DZHt22UZ.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-Bt_Y57sB.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./VisuallyHidden-BNf-15JI.js";import"./Headline-BAyAnA5C.js";import"./Subhead-DtXruDSo.js";import"./Title-DVdp6jeh.js";import"./dismiss_dark_24-BVy2oJmS.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-DSN9n2e6.js";import"./cancel_24-DkgWneF3.js";import"./chevron_24-uwXpkcAA.js";import"./Spinner-B_HHBggy.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-DWGPM8p5.js";import"./ImageBaseBadge-pi5uVPWv.js";import"./useColorScheme-Bl13B3Wz.js";import"./useFocusWithin-a-EzjXb7.js";import"./useIsClient-p1vmZH8b.js";import"./gaps-BRHZAyUc.js";const er={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const ir=["Playground"];export{o as Playground,ir as __namedExportsOrder,er as default};
