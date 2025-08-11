import{j as e,i as g,w as y,b as _}from"./iframe-BdL7Qu3-.js";import{D as x,C}from"./constants-DdkjnEgz.js";import{c as S}from"./createStoryParameters-CcwS40kl.js";import{G as j}from"./Group-1bWIf9u2.js";import{H as R}from"./Header-B0MknLtV.js";import{S as s}from"./SimpleCell-DtSFoJ-l.js";import{h as w}from"./react_utils-CSZjvU4X.js";import{H as I}from"./Headline-IzZ5JXBy.js";import{S as P}from"./Subhead-CEr4zt5A.js";import{V as D}from"./VisuallyHidden-DMev6gKF.js";const E="_host_lysyk_1",H="_header_lysyk_7",l={host:E,header:H},t=({header:r,children:p,className:h,...f})=>e.jsxs(I,{...f,Component:"span",className:g(l.host,h),weight:"3",children:[w(r)&&e.jsxs(P,{Component:"strong",className:l.header,children:[r,e.jsx(D,{children:" "})]}),p]});try{t.displayName="InfoRow",t.__docgenInfo={description:"",displayName:"InfoRow",props:{header:{defaultValue:null,description:"Элемент, отображаемый над содержимым.",name:"header",required:!0,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const b={title:"Data Display/InfoRow",component:t,parameters:S("InfoRow",C,x),tags:["Отображение данных"]},a={args:{children:"3000 р.",header:"Общий бюджет"}},o={...a,decorators:[r=>e.jsxs(j,{header:e.jsx(R,{size:"s",children:"Информация о пользователе"}),children:[e.jsx(s,{multiline:!0,children:e.jsx(r,{args:{header:"Дата рождения",children:"30 января 1993"}})}),e.jsx(s,{children:e.jsx(r,{args:{header:"Родной город",children:"Ереван"}})}),e.jsx(s,{children:e.jsx(r,{args:{header:"Место работы",children:"Команда ВКонтакте"}})})]}),y,_]};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: '3000 р.',
    header: 'Общий бюджет'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group header={<Header size="s">Информация о пользователе</Header>}>
        <SimpleCell multiline>
          <Component args={{
        header: 'Дата рождения',
        children: '30 января 1993'
      }} />
        </SimpleCell>
        <SimpleCell>
          <Component args={{
        header: 'Родной город',
        children: 'Ереван'
      }} />
        </SimpleCell>
        <SimpleCell>
          <Component args={{
        header: 'Место работы',
        children: 'Команда ВКонтакте'
      }} />
        </SimpleCell>
      </Group>, withSinglePanel, withVKUILayout]
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Playground","Example"],M=Object.freeze(Object.defineProperty({__proto__:null,Example:o,Playground:a,__namedExportsOrder:N,default:b},Symbol.toStringTag,{value:"Module"}));export{t as I,a as P,M as a};
