import{l as C,j as o,R as _,i as f,w as z,b as G}from"./iframe-C2_PECK0.js";import{i as v}from"./type_checkers-CVMjkZjG.js";import{D as x,C as E}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{C as h}from"./Card-C3v1lNsQ.js";import{playgroundArgs as A}from"./Card.stories-CfPC3lwx.js";import{G as I}from"./Group-lIrBg-Y8.js";const X="_host_1rywz_1",b="_padding_1rywz_11",j="_sizeXCompact_1rywz_16",w="_sizeXNone_1rywz_21",s={host:X,padding:b,sizeXCompact:j,sizeXNone:w},D={none:s.sizeXNone,compact:s.sizeXCompact},N={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},n=({size:r="s",padding:a=!1,Component:i="ul",...t})=>{const{sizeX:d="none"}=C();return o.jsx(_,{...t,Component:i,baseClassName:f(s.host,"vkuiInternalCardGrid",a&&s.padding,N[r],d!=="regular"&&D[d])})};try{n.displayName="CardGrid",n.__docgenInfo={description:"",displayName:"CardGrid",props:{size:{defaultValue:{value:"s"},description:"Размер карточек.",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},padding:{defaultValue:{value:"false"},description:"Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа.",name:"padding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"ul"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const R={title:"Blocks/CardGrid",component:n,parameters:P("CardGrid",E,x),argTypes:{count:{control:{type:"number"}}}},e={render:({count:r,...a})=>o.jsx(n,{...a,children:Array(r).fill(null).map((i,t)=>o.jsx(h,{...A},t))}),args:{count:3},decorators:[z,G]},u={...e,decorators:[(r,a)=>o.jsx(I,{children:o.jsx(r,{...a.args})}),...v(e.decorators)?e.decorators:[]]};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,y,g;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...(g=(y=u.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const S=["Playground","InsideGroup"],O=Object.freeze(Object.defineProperty({__proto__:null,InsideGroup:u,Playground:e,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{n as C,e as P,O as a};
