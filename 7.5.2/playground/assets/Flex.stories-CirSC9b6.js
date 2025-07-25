import{j as r,n as u}from"./iframe-D2wkiYbA.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-BhAlGreb.js";import{B as h}from"./Button-DffPUQY4.js";import{I as j}from"./Image-CksJB1uU.js";import{F as s}from"./Flex-BhNTsmrg.js";import{I as b}from"./play_24-C0kFGKEK.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DhTwf-xi.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-QU0WrbnN.js";import"./VisuallyHidden-ChTSElWV.js";import"./Headline-kcgU3LAO.js";import"./Subhead-UUuxM49Y.js";import"./Title-CKYO1nSQ.js";import"./dismiss_dark_24-DglzxdkJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./dismiss_24-DaBL8P03.js";import"./cancel_24-D23uiKG2.js";import"./chevron_24-DXjYqqx4.js";import"./Spinner-DVe93hh_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-BqLsBedM.js";import"./ImageBaseBadge-DiVBFpSA.js";import"./useColorScheme-DEY2vJy9.js";import"./useFocusWithin-Cqparjzv.js";import"./useIsClient-DV0wR1eD.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,a,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const tr=["Playground"];export{o as Playground,tr as __namedExportsOrder,or as default};
