import{j as r,n}from"./iframe-Cn0klKvz.js";import{D as d,C as l}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{B as c}from"./Banner-BTavMEpk.js";import{B as g}from"./Button-D37nVvnc.js";import{I as x}from"./Image-DioABL8J.js";import{F as m}from"./Flex-BH7NtNud.js";import{I as f}from"./play_24-56-z5aKk.js";import"./preload-helper-PPVm8Dsz.js";import"./useColorScheme-C7zCwRzY.js";import"./IconButton-DSEgeqcd.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./Title-C-xuvkmu.js";import"./dismiss_dark_24-DnZCpvlV.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./dismiss_24-BoeVLlmb.js";import"./cancel_24-C8myLtmO.js";import"./chevron_24-D9aYLatK.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./ImageBase-BDlDuAlq.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./gaps-BaMG6Eg5.js";const $={title:"Layout/Flex",component:m,parameters:u("Flex",l,d),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}},tags:["Раскладка"]},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:p,...a})=>r.jsx(m,{gap:e!==void 0||i!==void 0?[e||0,i||0]:p,...a,children:Array.from({length:t},(h,s)=>r.jsx(c,{before:r.jsx(x,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(g,{before:r.jsx(f,{}),onClick:n,children:"Слушать"})},s))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
