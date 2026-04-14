import{n as e}from"./chunk-BneVvdWh.js";import{i as t,n,r,yo as i}from"./iframe-lhb8_BzR.js";import{n as a,t as o}from"./HorizontalScroll-DbzA3x5N.js";import{n as s,t as c}from"./Group-BJ5gURe8.js";import{n as l,t as u}from"./Avatar--LLTvRd4.js";import{n as d,t as f}from"./HorizontalCell-Bc0hHhtP.js";import{n as p,t as m}from"./HorizontalCellShowMore-DIJ7NeBA.js";import{i as h,n as g,r as _,t as v}from"./constants-CXYaXe_q.js";import{n as y,o as b}from"./mock-CFHZcj-X.js";function x({size:e,height:t}){return e===`s`?56:e===`m`&&t&&t>88?88:t}var S,C,w,T,E,D,O,k,A;e((()=>{n(),h(),b(),l(),s(),d(),a(),p(),S=i(),C={title:`Data Display/HorizontalScroll/HorizontalCellShowMore`,component:m,parameters:{...v,...g},argTypes:{children:_}},w=[{id:1,title:`Промокот`,icon:y(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:y(`app_split_bill`)},{id:3,title:`Рассылки`,icon:y(`app_emails`)},{id:4,title:`Тексты песен`,icon:y(`app_lyrics`)}],T={render:function({...e}){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(m,{...e,height:x(e),children:e.children})})},args:{size:`m`,height:96},decorators:[(e,{args:t})=>{let n=x(t);return(0,S.jsx)(c,{children:(0,S.jsxs)(o,{children:[w.map(e=>(0,S.jsx)(f,{size:t.size,title:e.title,children:(0,S.jsx)(u,{size:n,src:e.icon,alt:`avatar: ${e.title}`})},e.id)),(0,S.jsx)(e,{...t})]})})},r,t]},E={...T,args:{...T.args,size:`s`,height:56}},D={...T,args:{...T.args,size:`m`,height:88}},O=T,k={...T,args:{...T.args,size:`m`,height:88,children:`Show More`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render({
    ...args
  }) {
    return <>
        <HorizontalCellShowMore {...args} height={getNotTooBigHeightBySize(args)}>
          {args.children}
        </HorizontalCellShowMore>
      </>;
  },
  args: {
    size: 'm',
    height: 96
  },
  decorators: [(Component, {
    args
  }) => {
    const cellImageSize = getNotTooBigHeightBySize(args);
    return <Group>
          <HorizontalScroll>
            {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
                <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
              </HorizontalCell>)}
            <Component {...args} />
          </HorizontalScroll>
        </Group>;
  }, withSinglePanel, withVKUILayout]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 's',
    height: 56
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`Playground`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88,
    children: 'Show More'
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Small`,`Middle`,`Large`,`WithCustomText`]}))();export{O as Large,D as Middle,T as Playground,E as Small,k as WithCustomText,A as __namedExportsOrder,C as default};