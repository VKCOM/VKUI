import{k as l,j as o,R as c,h as p,w as m,b as y}from"./iframe-F_0bvJrc.js";import{i as g}from"./type_checkers-CVMjkZjG.js";import{D as C,C as _}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as z}from"./Card-BKoEUEIk.js";import{playgroundArgs as G}from"./Card.stories-C5k6D_xT.js";import{G as v}from"./Group-DWRY0NV1.js";const x="_host_1rywz_1",h="_padding_1rywz_11",E="_sizeXCompact_1rywz_16",P="_sizeXNone_1rywz_21",s={host:x,padding:h,sizeXCompact:E,sizeXNone:P},A={none:s.sizeXNone,compact:s.sizeXCompact},I={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},n=({size:r="s",padding:a=!1,Component:i="ul",...t})=>{const{sizeX:d="none"}=l();return o.jsx(c,{...t,Component:i,baseClassName:p(s.host,"vkuiInternalCardGrid",a&&s.padding,I[r],d!=="regular"&&A[d])})};try{n.displayName="CardGrid",n.__docgenInfo={description:"",displayName:"CardGrid",props:{size:{defaultValue:{value:"s"},description:"Размер карточек.",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},padding:{defaultValue:{value:"false"},description:"Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа.",name:"padding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"ul"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const X={title:"Layout/CardGrid",component:n,parameters:f("CardGrid",_,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},e={render:({count:r,...a})=>o.jsx(n,{...a,children:Array(r).fill(null).map((i,t)=>o.jsx(z,{...G},t))}),args:{count:3},decorators:[m,y]},u={...e,decorators:[(r,a)=>o.jsx(v,{children:o.jsx(r,{...a.args})}),...g(e.decorators)?e.decorators:[]]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    count,
    ...args
  }) => <CardGrid {...args}>
      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...basicCardPlaygroundArgs} />)}
    </CardGrid>,
  args: {
    count: 3
  },
  decorators: [withSinglePanel, withVKUILayout]
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...u.parameters?.docs?.source}}};const b=["Playground","InsideGroup"],V=Object.freeze(Object.defineProperty({__proto__:null,InsideGroup:u,Playground:e,__namedExportsOrder:b,default:X},Symbol.toStringTag,{value:"Module"}));export{n as C,e as P,V as a};
