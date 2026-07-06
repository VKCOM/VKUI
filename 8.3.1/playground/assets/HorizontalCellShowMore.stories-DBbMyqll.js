import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{Mt as r,Nt as i,jt as a}from"./iframe-CgMGh-8q.js";import{n as o,t as s}from"./HorizontalScroll-C4rnPZz0.js";import{n as c,t as l}from"./Group-LwNPJiLD.js";import{n as u,t as d}from"./Avatar-BddMLYzH.js";import{n as f,t as p}from"./HorizontalCell-CNcxLodV.js";import{n as m,t as h}from"./HorizontalCellShowMore-2TmO4YVz.js";import{i as g,n as _,r as v,t as y}from"./constants-cjed6ZWB.js";import{n as b,o as x}from"./mock-K9LjXOLX.js";function S({size:e,height:t}){return e===`s`?56:e===`m`&&t&&t>88?88:t??96}var C,w,T,E,D,O,k,A;e((()=>{a(),g(),x(),u(),c(),f(),o(),m(),C=t(n(),1),w={title:`Data Display/HorizontalScroll/HorizontalCellShowMore`,component:h,parameters:{...y,..._},argTypes:{children:v},decorators:[r,i]},T=[{id:1,title:`Промокот`,icon:b(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:b(`app_split_bill`)},{id:3,title:`Рассылки`,icon:b(`app_emails`)},{id:4,title:`Тексты песен`,icon:b(`app_lyrics`)}],E=e=>{let t=S(e);return(0,C.jsx)(l,{children:(0,C.jsxs)(s,{children:[T.map(n=>(0,C.jsx)(p,{size:e.size,title:n.title,children:(0,C.jsx)(d,{size:t,src:n.icon,alt:`avatar: ${n.title}`})},n.id)),(0,C.jsx)(h,{...e,height:t})]})})},E.args={size:`m`,height:96},E.parameters={liveCodeEditor:{scope:{CELL_ITEMS:T,getNotTooBigHeightBySize:S}}},D=E.bind({}),D.args={size:`s`,height:56},D.parameters={liveCodeEditor:{disabled:!0}},O=E.bind({}),O.args={size:`m`,height:88},O.parameters={liveCodeEditor:{disabled:!0}},k=E.bind({}),k.args={size:`m`,height:88,children:`Show More`},k.parameters={liveCodeEditor:{disabled:!0}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
          </HorizontalCell>)}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
          </HorizontalCell>)}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
          </HorizontalCell>)}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
          </HorizontalCell>)}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>;
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Small`,`Middle`,`WithCustomText`]}))();export{O as Middle,E as Playground,D as Small,k as WithCustomText,A as __namedExportsOrder,w as default};