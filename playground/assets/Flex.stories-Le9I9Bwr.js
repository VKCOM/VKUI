import{j as r,n as u}from"./iframe-DTUKIQpa.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-CtH67T54.js";import{B as h}from"./Button-BCF43kbr.js";import{I as j}from"./Image-CHi4h8Uv.js";import{F as n}from"./Flex-BfdKrZrN.js";import{I as b}from"./play_24-D3p7NP8w.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-Dy9SRYqV.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./Headline-DPZ9LHy_.js";import"./Subhead-C7vbIoTq.js";import"./Title-BNj2Lwrg.js";import"./dismiss_dark_24-BmQwg4Kk.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./dismiss_24-WWtyRmOc.js";import"./cancel_24-BG0iu8qf.js";import"./chevron_24-De_wqlp3.js";import"./Spinner-BjJTDPz-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-5nov2l7v.js";import"./ImageBaseBadge-DKeE-0Mw.js";import"./useColorScheme-BGAH8gMd.js";import"./useFocusWithin-BaNto5dO.js";import"./useIsClient-B-5KeZKv.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:n,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}}},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:s,...d})=>r.jsx(n,{gap:e!==void 0||i!==void 0?[e||0,i||0]:s,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const tr=["Playground"];export{o as Playground,tr as __namedExportsOrder,or as default};
