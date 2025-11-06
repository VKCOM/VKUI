import{j as r,n as u}from"./iframe-DdjuqQRP.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-CR0yMXJw.js";import{B as h}from"./Button-h87Efeih.js";import{I as j}from"./Image-BKmItz4O.js";import{F as s}from"./Flex-BRpze9Bb.js";import{I as b}from"./play_24-VBeivF8p.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-B3vqP3ir.js";import"./Tappable-BrYIPFio.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CMjmakJq.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DQHFk4OZ.js";import"./VisuallyHidden-DYNTcNls.js";import"./Headline-nhn3N_7L.js";import"./Subhead-BeRrVUPj.js";import"./Title-SR3J6img.js";import"./dismiss_dark_24-DCeLPfrK.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-A7yL8vhv.js";import"./cancel_24-BfZOhllk.js";import"./chevron_24-DkuIz07A.js";import"./Spinner-CywFefQr.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-DW1D2uag.js";import"./ImageBaseBadge-DbSUYPlc.js";import"./useColorScheme-CYrptSaC.js";import"./useFocusWithin-BBPiXwue.js";import"./useIsClient-D4GCM_VE.js";import"./gaps-BRHZAyUc.js";const er={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
