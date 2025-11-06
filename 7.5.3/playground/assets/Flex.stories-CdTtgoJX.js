import{j as r,n as u}from"./iframe-VQuwIBim.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-DFzLQZ3j.js";import{B as h}from"./Button-DX8vp4-B.js";import{I as j}from"./Image-BFFNP3y3.js";import{F as s}from"./Flex-kPD-kOt0.js";import{I as b}from"./play_24-DHwEiyim.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-CsO6Fs2D.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./VisuallyHidden-Bn9barOE.js";import"./Headline-DlMci9v_.js";import"./Subhead-BovRsuwk.js";import"./Title-kPzeN8_R.js";import"./dismiss_dark_24-BTRe4GH0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./dismiss_24-Cn3Zod_D.js";import"./cancel_24-76PwI_pT.js";import"./chevron_24-Imo4hgKT.js";import"./Spinner-D45v6N1-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-BsyA3SxR.js";import"./ImageBaseBadge-lUb35v5x.js";import"./useColorScheme-3PoJfbUB.js";import"./useFocusWithin-C9W7nehx.js";import"./useIsClient--20LXL4m.js";import"./gaps-BRHZAyUc.js";const tr={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
