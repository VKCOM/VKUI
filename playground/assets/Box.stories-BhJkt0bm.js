import{j as r}from"./iframe-C4bTyPBQ.js";import{C as n}from"./constants-DdkjnEgz.js";import{c as a}from"./createStoryParameters-CcwS40kl.js";import{A as p}from"./Avatar-Bsyc_Tpa.js";import{F as m}from"./Flex-BzibNvH8.js";import{B as o}from"./Box-CO7e9mLd.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DM5ndQnB.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./ImageBaseBadge-oFfOfujq.js";import"./useColorScheme-B5qdSLTx.js";import"./InputUtils-Ns7QNyDT.js";import"./useFocusWithin-CWJCpHmP.js";import"./useIsClient-B8qKshG4.js";import"./useConfigDirection-OBrCdmzr.js";import"./online_mobile_12-CQS8ULfi.js";import"./SvgIconRootV2-DbftVVP5.js";import"./helpers-QklJbEbU.js";import"./gaps-BaMG6Eg5.js";const I={title:"Layout/Box",component:o,parameters:a("Box",n),tags:["Раскладка"]},t={args:{},render:e=>r.jsx(o,{padding:"system",...e,style:{background:"grey"},children:Array.from({length:5},(l,d)=>r.jsx(p,{},d))}),decorators:[e=>r.jsx("div",{style:{background:"pink",width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},s={render:()=>r.jsxs(m,{children:[r.jsx(o,{flexGrow:1,children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},i={render:()=>r.jsx(o,{position:"relative",blockSize:400,children:r.jsx(o,{position:"absolute",insetInlineEnd:0,inlineSize:50,padding:"4xl",children:"TEXT TEXT TEXT"})}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
