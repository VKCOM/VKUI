import{j as o,R as i,h as u,w as d,b as l}from"./iframe-DhuutAfC.js";import{D as c,C as p}from"./constants-DdkjnEgz.js";import{c as m}from"./createStoryParameters-CcwS40kl.js";import{G as R}from"./Group-BZNrT2Zp.js";import{R as s}from"./Radio-DeD5nNAx.js";import{Playground as g,WithDescription as y}from"./Radio.stories-uoW0BL_Z.js";const _="_modeHorizontal_1lkh7_1",f="_host_1lkh7_10",n={modeHorizontal:_,host:f},t=({mode:r="vertical",...e})=>o.jsx(i,{baseClassName:u(n.host,"vkuiInternalRadioGroup",r==="horizontal"&&n.modeHorizontal),role:"radiogroup",...e});try{t.displayName="RadioGroup",t.__docgenInfo={description:"",displayName:"RadioGroup",props:{mode:{defaultValue:{value:"vertical"},description:"Режим расположения элементов.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const h={title:"Layout/RadioGroup",component:t,parameters:m("RadioGroup",p,c),tags:["Раскладка"]},a={render:function(e){return o.jsxs(t,{...e,children:[o.jsx(s,{...g.args,children:"SberPay"}),o.jsx(s,{...y.args})]})},decorators:[(r,e)=>o.jsx(R,{children:o.jsx(r,{...e.args})}),d,l]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <RadioGroup {...args}>
        <BasicRadio {...BasicRadioStory.args}>SberPay</BasicRadio>
        <BasicRadio {...RadioWithDescriptionStory.args} />
      </RadioGroup>;
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...a.parameters?.docs?.source}}};const x=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{a as P,t as R,b as a};
