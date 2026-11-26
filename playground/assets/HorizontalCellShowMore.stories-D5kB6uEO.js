import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{At as n,Mt as r,jt as i}from"./iframe-kY6v1YfM.js";import{i as a,n as o,r as s,t as c}from"./constants-BWBR8eWE.js";import{n as l,t as u}from"./Group-BYaqcOTu.js";import{n as d,o as f}from"./mock-gn_3WRVn.js";import{n as p,t as m}from"./Avatar-D5eC2z7e.js";import{n as h,t as g}from"./HorizontalScroll-cOR9kCRx.js";import{n as _,t as v}from"./HorizontalCell-Cy2WpV9Q.js";import{n as y,t as b}from"./HorizontalCellShowMore-CRhOQ0F3.js";function x({size:e,height:t}){return e===`s`?56:e===`m`&&t&&t>88?88:t??96}var S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),a(),f(),p(),l(),_(),h(),y(),S=t(),C={title:`Data Display/HorizontalScroll/HorizontalCellShowMore`,component:b,parameters:{...c,...o},argTypes:{children:s},decorators:[i,r]},w=[{id:1,title:`Промокот`,icon:d(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:d(`app_split_bill`)},{id:3,title:`Рассылки`,icon:d(`app_emails`)},{id:4,title:`Тексты песен`,icon:d(`app_lyrics`)}],T=e=>{let t=x(e);return(0,S.jsx)(u,{children:(0,S.jsxs)(g,{children:[w.map(n=>(0,S.jsx)(v,{size:e.size,title:n.title,children:(0,S.jsx)(m,{size:t,src:n.icon,alt:`avatar: ${n.title}`})},n.id)),(0,S.jsx)(b,{...e,height:t})]})})},T.args={size:`m`,height:96},T.parameters={liveCodeEditor:{scope:{CELL_ITEMS:w,getNotTooBigHeightBySize:x}}},E=T.bind({}),E.args={size:`s`,height:56},E.parameters={liveCodeEditor:{disabled:!0}},D=T.bind({}),D.args={size:`m`,height:88},D.parameters={liveCodeEditor:{disabled:!0}},O=T.bind({}),O.args={size:`m`,height:88,children:`Show More`},O.parameters={liveCodeEditor:{disabled:!0}},k=[`Playground`,`Small`,`Middle`,`WithCustomText`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: HorizontalCellShowMoreProps) => {
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
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as Middle,T as Playground,E as Small,O as WithCustomText,k as __namedExportsOrder,C as default};