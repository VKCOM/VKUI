import{j as e,R as g,h,w as y,b as f}from"./iframe-D9ctG7Ns.js";import{C as D}from"./constants-DdkjnEgz.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{D as C}from"./Div-BHUjwCTp.js";import{G as R}from"./Group-BG1uXLvs.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BcHikxS0.js";const B="_host_jezat_1",F="_modeStretch_jezat_23",r={host:B,modeStretch:F};function o({ratio:u,mode:s="stretch",...d}){const E={"--vkui_internal--aspect_ratio":typeof u=="number"?String(u):u};return e.jsx(g,{baseClassName:h(r.host,s==="stretch"&&r.modeStretch),baseStyle:E,...d})}try{o.displayName="AspectRatio",o.__docgenInfo={description:"`AspectRatio` позволяет поддерживать постоянное соотношение ширины и высоты.\nЕго можно использовать для отображения изображений, карт, видео и других медиафайлов.",displayName:"AspectRatio",props:{className:{defaultValue:null,description:"`className` для компонента.",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"stretch"},description:"По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"stretch"'}]}},ratio:{defaultValue:null,description:"Например:\n- в виде числа: 16 / 9, 4 / 3, 1920 / 1080,\n- в виде css переменной: `var(--css-aspect-ratio-var)`\n- в виде сложного выражения: `calc(<какие-то вычисления>)`.",name:"ratio",required:!0,type:{name:"string | number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const L={title:"Utils/AspectRatio",component:o,parameters:_("AspectRatio",D),argTypes:{ratio:{control:{type:"select"},options:["16/9","1/1","3/4","None"],mapping:{None:16/9,"1/1":1/1,"3/4":3/4,"16/9":16/9}}},tags:["Утилиты"]},t={args:{children:e.jsx("img",{loading:"lazy",alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"}),ratio:"16/9"},decorators:[(u,s)=>e.jsx(R,{children:e.jsx(C,{children:e.jsx(u,{...s.args})})}),y,f]},a={...t,args:{ratio:"16/9",mode:"none",children:e.jsx("img",{loading:"lazy",style:{height:"100%"},alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"})}};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <img loading="lazy" alt="Лаунж зона в розовом неоне" src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg" />,
    ratio: '16/9'
  },
  decorators: [(Component, context) => <Group>
        <Div>
          <Component {...context.args} />
        </Div>
      </Group>, withSinglePanel, withVKUILayout]
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ratio: '16/9',
    mode: 'none',
    children: <img loading="lazy" style={{
      height: '100%'
    }} alt="Лаунж зона в розовом неоне" src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg" />
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Playground","WithModeNone"];export{t as Playground,a as WithModeNone,V as __namedExportsOrder,L as default};
