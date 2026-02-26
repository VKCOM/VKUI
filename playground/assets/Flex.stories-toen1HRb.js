import{j as r,n}from"./iframe-C4bTyPBQ.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-BsgLmU76.js";import{B as g}from"./Button-D-zltIHu.js";import{I as x}from"./Image-DSb-Miue.js";import{F as m}from"./Flex-BzibNvH8.js";import{I as f}from"./play_24-D4DAxfj2.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme-B5qdSLTx.js";import"./IconButton-BXe704ZF.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./Title-CK3YofNd.js";import"./dismiss_dark_24-DbMhVZmn.js";import"./SvgIconRootV2-DbftVVP5.js";import"./dismiss_24-Cd9gXJpm.js";import"./cancel_24-BKCyLyjW.js";import"./chevron_24-DAtZ7tdt.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./ImageBase-DM5ndQnB.js";import"./ImageBaseBadge-oFfOfujq.js";import"./useFocusWithin-CWJCpHmP.js";import"./useIsClient-B8qKshG4.js";import"./gaps-BaMG6Eg5.js";const $={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const rr=["Playground"];export{o as Playground,rr as __namedExportsOrder,$ as default};
