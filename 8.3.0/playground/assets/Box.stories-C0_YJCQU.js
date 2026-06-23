import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{n as r,t as i}from"./Flex-DSlxdUpE.js";import{n as a,t as o}from"./Avatar-Doxxlovk.js";import{n as s,t as c}from"./Box-DhKiDw1I.js";import{i as l,t as u}from"./constants-cjed6ZWB.js";import{n as d,t as f}from"./createStoryParameters-CMHckkzt.js";var p,m,h,g,_,v;e((()=>{l(),d(),a(),r(),s(),p=t(n(),1),m={title:`Layout/Box`,component:c,parameters:f(`Box`,u),tags:[`Раскладка`]},h=e=>(0,p.jsx)(`div`,{style:{background:`pink`,width:`80%`,height:500,border:`1px dotted red`},children:(0,p.jsx)(c,{padding:`system`,...e,style:{background:`grey`},children:Array.from({length:5},(e,t)=>(0,p.jsx)(o,{},t))})}),g=()=>(0,p.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,p.jsxs)(i,{children:[(0,p.jsx)(c,{flexGrow:1,children:`1`}),(0,p.jsx)(c,{children:`2`}),(0,p.jsx)(c,{children:`3`})]})}),_=()=>(0,p.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,p.jsx)(c,{position:`relative`,blockSize:400,children:(0,p.jsx)(c,{position:`absolute`,insetInlineEnd:0,inlineSize:50,padding:`4xl`,children:`TEXT TEXT TEXT`})})}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: BoxProps) => <div style={{
  background: 'pink',
  width: '80%',
  height: 500,
  border: '1px dotted red'
}}>
    <Box padding="system" {...args} style={{
    background: 'grey'
  }}>
      {Array.from({
      length: 5
    }, (_, index) => {
      return <Avatar key={index} />;
    })}
    </Box>
  </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '80%',
  height: 500,
  border: '1px dotted red'
}}>
    <Flex>
      <Box flexGrow={1}>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
  </div>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '80%',
  height: 500,
  border: '1px dotted red'
}}>
    <Box position="relative" blockSize={400}>
      <Box position="absolute" insetInlineEnd={0} inlineSize={50} padding="4xl">
        TEXT TEXT TEXT
      </Box>
    </Box>
  </div>`,..._.parameters?.docs?.source}}},v=[`Playground`,`MultipleBoxes`,`AbsoluteBox`]}))();export{_ as AbsoluteBox,g as MultipleBoxes,h as Playground,v as __namedExportsOrder,m as default};