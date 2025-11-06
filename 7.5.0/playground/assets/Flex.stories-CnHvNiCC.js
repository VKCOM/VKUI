import{j as r,n as u}from"./iframe-CRvvLw_c.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-DufRty-m.js";import{B as h}from"./Button-C8kpyiaO.js";import{I as j}from"./Image-DGsa5Nhg.js";import{F as s}from"./Flex-BcidZVNx.js";import{I as b}from"./play_24-Brm8sp0W.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-BfjgaeOF.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-jCwC7LNS.js";import"./VisuallyHidden-ExmaeT5t.js";import"./Headline-D6S1r3dC.js";import"./Subhead-BYsNdrqQ.js";import"./Title-CR_Ip4zZ.js";import"./dismiss_dark_24-o0DW5WYG.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./dismiss_24-dGl0U0Ep.js";import"./cancel_24-Bj5mGOBW.js";import"./chevron_24-ctQegZ7f.js";import"./Spinner-BeKI5I2R.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-BO5k9ugY.js";import"./ImageBaseBadge-DhBJmgl1.js";import"./useColorScheme-Dg8vGXhe.js";import"./useFocusWithin-B4DTXq5h.js";import"./useIsClient-499Yyiwu.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,a,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
