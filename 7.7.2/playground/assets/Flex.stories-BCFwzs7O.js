import{j as r,n as u}from"./iframe-qoTtUH8h.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner--yGkFxTi.js";import{B as h}from"./Button-qb2UxdVt.js";import{I as j}from"./Image-BK5GoqvQ.js";import{F as s}from"./Flex-BMkjpocR.js";import{I as b}from"./play_24-NrtGYc9z.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./Headline-BOHGExn8.js";import"./Subhead-B5MAyB6Q.js";import"./Title-ksxyfi6H.js";import"./dismiss_dark_24-DbZIi2JD.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-CrBKiPR2.js";import"./cancel_24-CLPDrLYl.js";import"./chevron_24-Bbrz8tmk.js";import"./Spinner-C8UkQVmM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-DjQ3psw2.js";import"./ImageBaseBadge-taKiFPaz.js";import"./useColorScheme-xLZC0aKi.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./gaps-BRHZAyUc.js";const ir={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const mr=["Playground"];export{o as Playground,mr as __namedExportsOrder,ir as default};
