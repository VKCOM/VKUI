import{j as r,n as u}from"./iframe-BW2_2Sqh.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-_b-0Xa74.js";import{B as h}from"./Button-B8UDwXDh.js";import{I as j}from"./Image-DeTqP2HE.js";import{F as n}from"./Flex-DFbImX0X.js";import{I as b}from"./play_24-ayAZkPiY.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DMIGpMdh.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DYuPlK4j.js";import"./VisuallyHidden-0_L4g8bM.js";import"./Headline-C7EO-C2p.js";import"./Subhead-BlMIzlRi.js";import"./Title-BsNL9OHU.js";import"./dismiss_dark_24--0niBN21.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./dismiss_24-D9YuG9jq.js";import"./cancel_24-CE2mq3tL.js";import"./chevron_24-Dt54eQZB.js";import"./Spinner-Ck410QJW.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-CoAaMLqa.js";import"./ImageBaseBadge-DZQOp4mD.js";import"./useColorScheme-DfFLwB8B.js";import"./useFocusWithin-Cv8cds6L.js";import"./useIsClient-fZBb-eaz.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:n,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}}},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:s,...d})=>r.jsx(n,{gap:e!==void 0||i!==void 0?[e||0,i||0]:s,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
