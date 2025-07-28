import{j as r,n as u}from"./iframe-CGpIZMk8.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-eVIX6z-C.js";import{B as h}from"./Button-7GGfFD7v.js";import{I as j}from"./Image-D8uk4S5S.js";import{F as s}from"./Flex-CMCwGEL1.js";import{I as b}from"./play_24-BM3jYL7I.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-R-pBWVQH.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Headline-ZBoX0yvc.js";import"./Subhead-D_tBif6E.js";import"./Title-Bh0cFv1G.js";import"./dismiss_dark_24-lyAAuHSF.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./dismiss_24-D2PGQNty.js";import"./cancel_24-X3lt1W_w.js";import"./chevron_24-DxaNHOrp.js";import"./Spinner-DVykHsGf.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-Dgt2gvRv.js";import"./ImageBaseBadge-Bmifrsur.js";import"./useColorScheme-B2GHpbyp.js";import"./useFocusWithin-mFqouh7d.js";import"./useIsClient-CR0g9cri.js";import"./gaps-BRHZAyUc.js";const tr={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
