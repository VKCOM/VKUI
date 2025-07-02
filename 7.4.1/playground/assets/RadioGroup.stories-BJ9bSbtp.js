import{j as o,R as l,i as c,w as p,b as m}from"./iframe-BW2_2Sqh.js";import{D as R,C as g}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{G as _}from"./Group-CUaPdFZ2.js";import{R as s}from"./Radio-D7jkvd2p.js";import{Playground as f,WithDescription as h}from"./Radio.stories-DONt8gE0.js";const x="_modeHorizontal_1lkh7_1",G="_host_1lkh7_10",n={modeHorizontal:x,host:G},t=({mode:r="vertical",...e})=>o.jsx(l,{baseClassName:c(n.host,"vkuiInternalRadioGroup",r==="horizontal"&&n.modeHorizontal),role:"radiogroup",...e});try{t.displayName="RadioGroup",t.__docgenInfo={description:"",displayName:"RadioGroup",props:{mode:{defaultValue:{value:"vertical"},description:"Режим расположения элементов.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const P={title:"Forms/RadioGroup",component:t,parameters:y("RadioGroup",g,R)},a={render:function(e){return o.jsxs(t,{...e,children:[o.jsx(s,{...f.args,children:"SberPay"}),o.jsx(s,{...h.args})]})},decorators:[(r,e)=>o.jsx(_,{children:o.jsx(r,{...e.args})}),p,m]};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    return <RadioGroup {...args}>
        <BasicRadio {...BasicRadioStory.args}>SberPay</BasicRadio>
        <BasicRadio {...RadioWithDescriptionStory.args} />
      </RadioGroup>;
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const v=["Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{a as P,t as R,B as a};
