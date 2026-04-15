import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./Flex-D-69d2T4.js";import{n as i,t as a}from"./Avatar-DDrJjOMS.js";import{n as o,t as s}from"./Box-BDS4bM17.js";import{i as c,t as l}from"./constants-Dj6vOzIh.js";import{n as u,t as d}from"./createStoryParameters-pz1UrWMe.js";var f,p,m,h,g,_;e((()=>{c(),u(),i(),n(),o(),f=t(),p={title:`Layout/Box`,component:s,parameters:d(`Box`,l),tags:[`Раскладка`]},m={args:{},render:e=>(0,f.jsx)(s,{padding:`system`,...e,style:{background:`grey`},children:Array.from({length:5},(e,t)=>(0,f.jsx)(a,{},t))}),decorators:[e=>(0,f.jsx)(`div`,{style:{background:`pink`,width:`80%`,height:500,border:`1px dotted red`},children:(0,f.jsx)(e,{})})]},h={render:()=>(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{flexGrow:1,children:`1`}),(0,f.jsx)(s,{children:`2`}),(0,f.jsx)(s,{children:`3`})]}),decorators:[e=>(0,f.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,f.jsx)(e,{})})]},g={render:()=>(0,f.jsx)(s,{position:`relative`,blockSize:400,children:(0,f.jsx)(s,{position:`absolute`,insetInlineEnd:0,inlineSize:50,padding:`4xl`,children:`TEXT TEXT TEXT`})}),decorators:[e=>(0,f.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,f.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`MultipleBoxes`,`AbsoluteBox`]}))();export{g as AbsoluteBox,h as MultipleBoxes,m as Playground,_ as __namedExportsOrder,p as default};