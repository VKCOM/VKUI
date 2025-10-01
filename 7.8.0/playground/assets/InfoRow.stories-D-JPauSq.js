import{j as e,h as u,w as m,b as c}from"./iframe-DJZLDe2v.js";import{D as p,C as h}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{G as g}from"./Group-ZTDDYGb3.js";import{H as y}from"./Header-DjOnrGei.js";import{S as s}from"./SimpleCell-DyfECqPx.js";import{h as _}from"./react_utils-CSZjvU4X.js";import{H as x}from"./Headline-BcxcoLKm.js";import{S as C}from"./Subhead-DeeiPlYW.js";import{V as S}from"./VisuallyHidden-D0jMNSCO.js";const j="_host_lysyk_1",R="_header_lysyk_7",l={host:j,header:R},t=({header:r,children:n,className:i,...d})=>e.jsxs(x,{...d,Component:"span",className:u(l.host,i),weight:"3",children:[_(r)&&e.jsxs(C,{Component:"strong",className:l.header,children:[r,e.jsx(S,{children:" "})]}),n]});try{t.displayName="InfoRow",t.__docgenInfo={description:"",displayName:"InfoRow",props:{header:{defaultValue:null,description:"Элемент, отображаемый над содержимым.",name:"header",required:!0,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const w={title:"Data Display/InfoRow",component:t,parameters:f("InfoRow",h,p),tags:["Отображение данных"]},a={args:{children:"3000 р.",header:"Общий бюджет"}},o={...a,decorators:[r=>e.jsxs(g,{header:e.jsx(y,{size:"s",children:"Информация о пользователе"}),children:[e.jsx(s,{multiline:!0,children:e.jsx(r,{args:{header:"Дата рождения",children:"30 января 1993"}})}),e.jsx(s,{children:e.jsx(r,{args:{header:"Родной город",children:"Ереван"}})}),e.jsx(s,{children:e.jsx(r,{args:{header:"Место работы",children:"Команда ВКонтакте"}})})]}),m,c]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '3000 р.',
    header: 'Общий бюджет'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const I=["Playground","Example"],z=Object.freeze(Object.defineProperty({__proto__:null,Example:o,Playground:a,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{t as I,a as P,z as a};
