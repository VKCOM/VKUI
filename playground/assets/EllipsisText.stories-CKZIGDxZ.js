import{r as m,l as x,j as u,R as f,h as d}from"./iframe-CdM-7Hfu.js";import{w as C}from"./withCartesian-BhVv3VNh.js";import{C as y}from"./constants-DdkjnEgz.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{g as h}from"./children-CDGrqL8f.js";const D="_host_kr76g_1",T="_disableNativeTitle_kr76g_8",g="_content_kr76g_9",v="_contentMultiline_kr76g_23",l={host:D,disableNativeTitle:T,content:g,contentMultiline:v},t=({Component:e="span",className:E,children:r,maxWidth:c,maxLines:i=1,disableNativeTitle:o=!1,...p})=>{const s=m.useRef(null);return x(()=>{s&&s.current&&s.current.style.setProperty("-webkit-line-clamp",i>1?`${i}`:"")},[s,i]),u.jsx(f,{Component:e,className:d(l.host,o&&l.disableNativeTitle,E),title:o?void 0:h(r),...p,children:u.jsx("span",{style:{maxWidth:c},ref:s,className:d(l.content,i>1&&l.contentMultiline),children:r})})};try{t.displayName="EllipsisText",t.__docgenInfo={description:"Компонент ограничивает текстовый контент, убирая его в многоточие.",displayName:"EllipsisText",props:{maxWidth:{defaultValue:null,description:`Пользовательская маскимальная ширина.

Используйте в случаях, когда у контейнера ширина зависит от размера контента,
другими словами, когда ширина не ограничена.`,name:"maxWidth",required:!1,type:{name:"number"}},maxLines:{defaultValue:{value:"1"},description:`Максимальное количество видимых строк.

> При \`maxLines > 1\` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью
>
@see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).`,name:"maxLines",required:!1,type:{name:"number"}},disableNativeTitle:{defaultValue:{value:"false"},description:"Отключает отображение нативного тултипа с полным текстом.",name:"disableNativeTitle",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const B={title:"Typography/EllipsisText",component:t,parameters:_("EllipsisText",y),decorators:[C],tags:["Типографика"]},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",n={render:e=>u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{width:200},children:u.jsx(t,{...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:100,...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:150,...e,children:a})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <div style={{
      width: 200
    }}>
        <EllipsisText {...args}>{ellipsisText}</EllipsisText>
      </div>
      <div>
        <EllipsisText maxWidth={100} {...args}>
          {ellipsisText}
        </EllipsisText>
      </div>
      <div>
        <EllipsisText maxWidth={150} {...args}>
          {ellipsisText}
        </EllipsisText>
      </div>
    </>
}`,...n.parameters?.docs?.source}}};const F=["Playground"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{t as E,n as P,R as a};
