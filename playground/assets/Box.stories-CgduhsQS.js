import{j as r}from"./iframe-BJ9555aC.js";import{C as n}from"./constants-DdkjnEgz.js";import{c as a}from"./createStoryParameters-CcwS40kl.js";import{A as p}from"./Avatar-B5z-sg0O.js";import{F as m}from"./Flex-DmNTXycq.js";import{B as o}from"./Box-CxnIOxVP.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DZszct4G.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./ImageBaseBadge-CeubzczD.js";import"./useColorScheme-DvMUZASe.js";import"./InputUtils-8LhFcqKY.js";import"./useFocusWithin-ClOWbdUU.js";import"./useIsClient-veih0UT_.js";import"./useConfigDirection-BeEtg5OO.js";import"./online_mobile_12-C_FfJS6S.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./gaps-DqOl4b8v.js";const L={title:"Layout/Box",component:o,parameters:a("Box",n),tags:["Раскладка"]},t={args:{},render:e=>r.jsx(o,{padding:"4xl",...e,style:{background:"grey"},children:Array.from({length:5},(l,d)=>r.jsx(p,{},d))}),decorators:[e=>r.jsx("div",{style:{background:"pink",width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},i={render:()=>r.jsxs(m,{children:[r.jsx(o,{flexGrow:1,children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]},s={render:()=>r.jsx(o,{position:"relative",blockSize:400,children:r.jsx(o,{position:"absolute",insetInlineEnd:0,inlineSize:50,padding:"4xl",children:"TEXT TEXT TEXT"})}),decorators:[e=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Box padding="4xl" {...args} style={{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Playground","MultipleBoxes","AbsoluteBox"];export{s as AbsoluteBox,i as MultipleBoxes,t as Playground,M as __namedExportsOrder,L as default};
