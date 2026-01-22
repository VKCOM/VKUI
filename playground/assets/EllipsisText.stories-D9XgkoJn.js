import{r as m,q as x,j as u,R as f,g as d}from"./iframe-BKqRoeRO.js";import{w as C}from"./withCartesian-DC0oG0nk.js";import{C as y}from"./constants-DdkjnEgz.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{g as T}from"./children-Bm1QhBGC.js";const h="_host_kr76g_1",g="_disableNativeTitle_kr76g_8",D="_content_kr76g_9",v="_contentMultiline_kr76g_23",l={host:h,disableNativeTitle:g,content:D,contentMultiline:v},t=({Component:e="span",className:c,children:r,maxWidth:p,maxLines:n=1,disableNativeTitle:o=!1,...E})=>{const s=m.useRef(null);return x(()=>{s&&s.current&&s.current.style.setProperty("-webkit-line-clamp",n>1?`${n}`:"")},[s,n]),u.jsx(f,{Component:e,className:d(l.host,o&&l.disableNativeTitle,c),title:o?void 0:T(r),...E,children:u.jsx("span",{style:{maxWidth:p},ref:s,className:d(l.content,n>1&&l.contentMultiline),children:r})})};try{t.displayName="EllipsisText",t.__docgenInfo={description:"Компонент ограничивает текстовый контент, убирая его в многоточие.",displayName:"EllipsisText",props:{maxWidth:{defaultValue:null,description:`Пользовательская маскимальная ширина.

Используйте в случаях, когда у контейнера ширина зависит от размера контента,
другими словами, когда ширина не ограничена.`,name:"maxWidth",required:!1,type:{name:"number"}},maxLines:{defaultValue:{value:"1"},description:`Максимальное количество видимых строк.

> При \`maxLines > 1\` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью
>
@see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).`,name:"maxLines",required:!1,type:{name:"number"}},disableNativeTitle:{defaultValue:{value:"false"},description:"Отключает отображение нативного тултипа с полным текстом.",name:"disableNativeTitle",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const F={title:"Typography/EllipsisText",component:t,parameters:_("EllipsisText",y),decorators:[C],tags:["Типографика"]},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",i={render:e=>u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{width:200},children:u.jsx(t,{...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:100,...e,children:a})}),u.jsx("div",{children:u.jsx(t,{maxWidth:150,...e,children:a})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const B=["Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,__namedExportsOrder:B,default:F},Symbol.toStringTag,{value:"Module"}));export{t as E,i as P,k as a};
