import{j as r,n as u}from"./iframe-k6odcVfq.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-D5F_IxOv.js";import{B as h}from"./Button-BOH5rx1N.js";import{I as j}from"./Image-BI540uYW.js";import{F as n}from"./Flex-B4FLAW9v.js";import{I as b}from"./play_24-CCrmX-GH.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Headline-BdgiMIb0.js";import"./Subhead-CfBOCg31.js";import"./Title-DF65glat.js";import"./dismiss_dark_24-DIoFn9fy.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./dismiss_24-Dq3VQxfU.js";import"./cancel_24-fcxuZKq0.js";import"./chevron_24-C1n-aqzu.js";import"./Spinner-COoI1Hcx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-BDH625NM.js";import"./ImageBaseBadge-DRsh_8l_.js";import"./useColorScheme-DOgN8xDN.js";import"./useFocusWithin-Bs7KV-km.js";import"./useIsClient-C3_XghNw.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:n,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}}},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:s,...d})=>r.jsx(n,{gap:e!==void 0||i!==void 0?[e||0,i||0]:s,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
