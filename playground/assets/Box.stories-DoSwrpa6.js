import{j as r}from"./iframe-Cn0klKvz.js";import{C as n}from"./constants-DdkjnEgz.js";import{c as a}from"./createStoryParameters-CcwS40kl.js";import{A as p}from"./Avatar-CT-zlOwi.js";import{F as m}from"./Flex-BH7NtNud.js";import{B as o}from"./Box-DUiSbl9N.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BDlDuAlq.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useColorScheme-C7zCwRzY.js";import"./InputUtils-B6qCikuW.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./useConfigDirection-DuEYXWS_.js";import"./online_mobile_12-BKRTJpWf.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./helpers-QklJbEbU.js";import"./gaps-BaMG6Eg5.js";const I={title:"Layout/Box",component:o,parameters:a("Box",n),tags:["Раскладка"]},t={args:{},render:e=>r.jsx(o,{padding:"system",...e,style:{background:"grey"},children:Array.from({length:5},(l,d)=>r.jsx(p,{},d))}),decorators:[e=>r.jsx("div",{style:{background:"pink",width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},s={render:()=>r.jsxs(m,{children:[r.jsx(o,{flexGrow:1,children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},i={render:()=>r.jsx(o,{position:"relative",blockSize:400,children:r.jsx(o,{position:"absolute",insetInlineEnd:0,inlineSize:50,padding:"4xl",children:"TEXT TEXT TEXT"})}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Box padding="system" {...args} style={{
    background: 'grey'
  }}>
      {Array.from({
      length: 5
    }, (_, index) => {
      return <Avatar key={index} />;
    })}
    </Box>,
  decorators: [Component => <div style={{
    background: 'pink',
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex>
      <Box flexGrow={1}>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>,
  decorators: [Component => <div style={{
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box position="relative" blockSize={400}>
      <Box position="absolute" insetInlineEnd={0} inlineSize={50} padding="4xl">
        TEXT TEXT TEXT
      </Box>
    </Box>,
  decorators: [Component => <div style={{
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...i.parameters?.docs?.source}}};const L=["Playground","MultipleBoxes","AbsoluteBox"];export{i as AbsoluteBox,s as MultipleBoxes,t as Playground,L as __namedExportsOrder,I as default};
