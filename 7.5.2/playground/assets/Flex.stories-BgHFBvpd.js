import{j as r,n as u}from"./iframe-BzXYREd1.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-CEmpraFd.js";import{B as h}from"./Button-C3UHKLcX.js";import{I as j}from"./Image-DAmz61mV.js";import{F as s}from"./Flex-Bzv7DO_H.js";import{I as b}from"./play_24-Cmtnuc_l.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-DmYSjyYz.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Headline-CvUEvu-v.js";import"./Subhead-fVUucS5M.js";import"./Title-2928E8uu.js";import"./dismiss_dark_24-KPsW6NM4.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./dismiss_24-4JmtZctL.js";import"./cancel_24-CYr0_4vC.js";import"./chevron_24-BlfWBDw8.js";import"./Spinner-CKaqwWiI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./ImageBase-D7jndpfS.js";import"./ImageBaseBadge-Ltyfjkpt.js";import"./useColorScheme-BFL8-8ar.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useIsClient-DE0-CiwS.js";import"./gaps-BRHZAyUc.js";const or={title:"Layout/Flex",component:s,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:n,...d})=>r.jsx(s,{gap:e!==void 0||i!==void 0?[e||0,i||0]:n,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,a,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
