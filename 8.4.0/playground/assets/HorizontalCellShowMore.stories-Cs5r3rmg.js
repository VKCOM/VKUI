import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{At as n,Mt as r,jt as i}from"./iframe-33ykgUxE.js";import{n as a,t as o}from"./HorizontalScroll-m10mX-rT.js";import{n as s,t as c}from"./Group-Bp-h8t_O.js";import{n as l,t as u}from"./Avatar-DoiR7xFu.js";import{n as d,t as f}from"./HorizontalCell-DX3tFRcf.js";import{n as p,t as m}from"./HorizontalCellShowMore-bu4jsA9F.js";import{i as h,n as g,r as _,t as v}from"./constants-DBkyy3CT.js";import{n as y,o as b}from"./mock-CkzEkxhs.js";function x({size:e,height:t}){return e===`s`?56:e===`m`&&t&&t>88?88:t??96}var S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),h(),b(),l(),s(),d(),a(),p(),S=t(),C={title:`Data Display/HorizontalScroll/HorizontalCellShowMore`,component:m,parameters:{...v,...g},argTypes:{children:_},decorators:[i,r]},w=[{id:1,title:`Промокот`,icon:y(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:y(`app_split_bill`)},{id:3,title:`Рассылки`,icon:y(`app_emails`)},{id:4,title:`Тексты песен`,icon:y(`app_lyrics`)}],T=e=>{let t=x(e);return(0,S.jsx)(c,{children:(0,S.jsxs)(o,{children:[w.map(n=>(0,S.jsx)(f,{size:e.size,title:n.title,children:(0,S.jsx)(u,{size:t,src:n.icon,alt:`avatar: ${n.title}`})},n.id)),(0,S.jsx)(m,{...e,height:t})]})})},T.args={size:`m`,height:96},T.parameters={liveCodeEditor:{scope:{CELL_ITEMS:w,getNotTooBigHeightBySize:x}}},E=T.bind({}),E.args={size:`s`,height:56},E.parameters={liveCodeEditor:{disabled:!0}},D=T.bind({}),D.args={size:`m`,height:88},D.parameters={liveCodeEditor:{disabled:!0}},O=T.bind({}),O.args={size:`m`,height:88,children:`Show More`},O.parameters={liveCodeEditor:{disabled:!0}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
          </HorizontalCell>)}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
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
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Small`,`Middle`,`WithCustomText`]})))()}A();export{D as Middle,T as Playground,E as Small,O as WithCustomText,k as __namedExportsOrder,C as default};