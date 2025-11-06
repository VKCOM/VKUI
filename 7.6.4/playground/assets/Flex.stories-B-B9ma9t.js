import{j as r,n as u}from"./iframe-gnG2DlPI.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-BwCt4BWq.js";import{B as h}from"./Button-0nci1iZm.js";import{I as j}from"./Image-kaG2C8rU.js";import{F as s}from"./Flex-DS626cxD.js";import{I as b}from"./play_24-DiRQRI0-.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-Cf4dAO-u.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./Headline-K5SxFgY1.js";import"./Subhead-CTHKnpeS.js";import"./Title-B3iIrqRR.js";import"./dismiss_dark_24-D3Q2jyrn.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-BwJS01OX.js";import"./cancel_24-D159N_1T.js";import"./chevron_24-5gsj6H0U.js";import"./Spinner-CpE2KS8o.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-2byuyH5U.js";import"./ImageBaseBadge-Bfs80bf8.js";import"./useColorScheme-vbaHcGpn.js";import"./useFocusWithin-XtLgfp-_.js";import"./useIsClient-D2oAkrY_.js";import"./gaps-BRHZAyUc.js";const er={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
