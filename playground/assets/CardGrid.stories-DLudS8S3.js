import{i as c,j as o,R as m,g as p,t as y,w as g,b as f}from"./iframe-CJSxyW9U.js";import{i as _}from"./type_checkers-CVMjkZjG.js";import{D as C,C as v}from"./constants-DdkjnEgz.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{C as G}from"./Card-B0o7HUw4.js";import{playgroundArgs as w}from"./Card.stories-TTklx2se.js";import{G as x}from"./Group-Bl9QB3Zd.js";const b="_host_j59a7_1",j="_padding_j59a7_11",A="_viewWidthSmallTabletMinus_j59a7_16",E="_viewWidthNone_j59a7_21",t={host:b,padding:j,viewWidthSmallTabletMinus:A,viewWidthNone:E};function S(e,r){if(r!==void 0&&r==="compact")return t.viewWidthNone;if(e==="none")return t.viewWidthSmallTabletMinus;if(e<y.SMALL_TABLET)return t.viewWidthNone}const P={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},n=({size:e="s",padding:r=!1,Component:i="ul",...s})=>{const{sizeX:d,viewWidth:l="none"}=c();return o.jsx(m,{...s,Component:i,baseClassName:p(t.host,"vkuiInternalCardGrid",r&&t.padding,P[e],S(l,d))})};try{n.displayName="CardGrid",n.__docgenInfo={description:"",displayName:"CardGrid",props:{size:{defaultValue:{value:"s"},description:"Размер карточек.",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},padding:{defaultValue:{value:"false"},description:"Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа.",name:"padding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"ul"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const W={title:"Layout/CardGrid",component:n,parameters:h("CardGrid",v,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},a={render:({count:e,...r})=>o.jsx(n,{...r,children:Array(e).fill(null).map((i,s)=>o.jsx(G,{...w},s))}),args:{count:3},decorators:[g,f]},u={...a,decorators:[(e,r)=>o.jsx(x,{children:o.jsx(e,{...r.args})}),..._(a.decorators)?a.decorators:[]]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...u.parameters?.docs?.source}}};const I=["Playground","InsideGroup"],M=Object.freeze(Object.defineProperty({__proto__:null,InsideGroup:u,Playground:a,__namedExportsOrder:I,default:W},Symbol.toStringTag,{value:"Module"}));export{n as C,a as P,M as a};
