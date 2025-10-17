import{j as e,R as l,h as c,w as p,b as m}from"./iframe-DdZr-4mP.js";import{C as d}from"./constants-DdkjnEgz.js";import{c as E}from"./createStoryParameters-CcwS40kl.js";import{D as g}from"./Div-BhOSKXhQ.js";import{G as h}from"./Group-DlK5kh75.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";const y="_host_jezat_1",f="_modeStretch_jezat_23",r={host:y,modeStretch:f};function o({ratio:u,mode:s="stretch",...n}){const i={"--vkui_internal--aspect_ratio":typeof u=="number"?String(u):u};return e.jsx(l,{baseClassName:c(r.host,s==="stretch"&&r.modeStretch),baseStyle:i,...n})}try{o.displayName="AspectRatio",o.__docgenInfo={description:"`AspectRatio` позволяет поддерживать постоянное соотношение ширины и высоты.\nЕго можно использовать для отображения изображений, карт, видео и других медиафайлов.",displayName:"AspectRatio",props:{className:{defaultValue:null,description:"`className` для компонента.",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"stretch"},description:"По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"stretch"'}]}},ratio:{defaultValue:null,description:"Например:\n- в виде числа: 16 / 9, 4 / 3, 1920 / 1080,\n- в виде css переменной: `var(--css-aspect-ratio-var)`\n- в виде сложного выражения: `calc(<какие-то вычисления>)`.",name:"ratio",required:!0,type:{name:"string | number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const v={title:"Utils/AspectRatio",component:o,parameters:E("AspectRatio",d),argTypes:{ratio:{control:{type:"select"},options:["16/9","1/1","3/4","None"],mapping:{None:16/9,"1/1":1/1,"3/4":3/4,"16/9":16/9}}},tags:["Утилиты"]},t={args:{children:e.jsx("img",{loading:"lazy",alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"}),ratio:"16/9"},decorators:[(u,s)=>e.jsx(h,{children:e.jsx(g,{children:e.jsx(u,{...s.args})})}),p,m]},a={...t,args:{ratio:"16/9",mode:"none",children:e.jsx("img",{loading:"lazy",style:{height:"100%"},alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <img loading="lazy" alt="Лаунж зона в розовом неоне" src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg" />,
    ratio: '16/9'
  },
  decorators: [(Component, context) => <Group>
        <Div>
          <Component {...context.args} />
        </Div>
      </Group>, withSinglePanel, withVKUILayout]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ratio: '16/9',
    mode: 'none',
    children: <img loading="lazy" style={{
      height: '100%'
    }} alt="Лаунж зона в розовом неоне" src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg" />
  }
}`,...a.parameters?.docs?.source}}};const A=["Playground","WithModeNone"];export{t as Playground,a as WithModeNone,A as __namedExportsOrder,v as default};
