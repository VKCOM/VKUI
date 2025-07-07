import{r as C,m as y,j as u,R as _,i as d}from"./iframe-DTUKIQpa.js";import{w as D}from"./withCartesian-6dQsYo8G.js";import{C as T}from"./constants-DdkjnEgz.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{g}from"./children-B8YsjXFx.js";const v="_host_kr76g_1",B="_disableNativeTitle_kr76g_8",F="_content_kr76g_9",b="_contentMultiline_kr76g_23",l={host:v,disableNativeTitle:B,content:F,contentMultiline:b},t=({Component:e="span",className:m,children:r,maxWidth:x,maxLines:i=1,disableNativeTitle:o=!1,...f})=>{const s=C.useRef(null);return y(()=>{s&&s.current&&s.current.style.setProperty("-webkit-line-clamp",i>1?`${i}`:"")},[s,i]),u.jsx(_,{Component:e,className:d(l.host,o&&l.disableNativeTitle,m),title:o?void 0:g(r),...f,children:u.jsx("span",{style:{maxWidth:x},ref:s,className:d(l.content,i>1&&l.contentMultiline),children:r})})};try{t.displayName="EllipsisText",t.__docgenInfo={description:"Компонент ограничивает текстовый контент, убирая его в многоточие.",displayName:"EllipsisText",props:{maxWidth:{defaultValue:null,description:`Пользовательская маскимальная ширина.

Используйте в случаях, когда у контейнера ширина зависит от размера контента,
другими словами, когда ширина не ограничена.`,name:"maxWidth",required:!1,type:{name:"number"}},maxLines:{defaultValue:{value:"1"},description:`Максимальное количество видимых строк.

> При \`maxLines > 1\` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью
>
@see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).`,name:"maxLines",required:!1,type:{name:"number"}},disableNativeTitle:{defaultValue:{value:"false"},description:"Отключает отображение нативного тултипа с полным текстом.",name:"disableNativeTitle",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const A={title:"Typography/EllipsisText",component:t,parameters:h("EllipsisText",T),decorators:[D]},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",n={render:e=>u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{width:200},children:u.jsx(t,{...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:100,...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:150,...e,children:a})})]})};var E,c,p;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Playground"],P=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:j,default:A},Symbol.toStringTag,{value:"Module"}));export{t as E,n as P,P as a};
