import{j as e,k as u,g as c,w as m,b as p}from"./iframe-CJSxyW9U.js";import{D as h,C as f}from"./constants-DdkjnEgz.js";import{c as g}from"./createStoryParameters-CcwS40kl.js";import{G as y}from"./Group-Bl9QB3Zd.js";import{H as _}from"./Header-BDiuDSjJ.js";import{S as o}from"./SimpleCell-BHTnRhyN.js";import{H as x}from"./Headline-B-NKRtjP.js";import{S as C}from"./Subhead-B39S2HHi.js";import{V as S}from"./VisuallyHidden-BRZ1JlNp.js";const j="_host_lysyk_1",R="_header_lysyk_7",l={host:j,header:R},t=({header:r,children:n,className:i,...d})=>e.jsxs(x,{...d,Component:"span",className:c(l.host,i),weight:"3",children:[u(r)&&e.jsxs(C,{Component:"strong",className:l.header,children:[r,e.jsx(S,{children:" "})]}),n]});try{t.displayName="InfoRow",t.__docgenInfo={description:"",displayName:"InfoRow",props:{header:{defaultValue:null,description:"Элемент, отображаемый над содержимым.",name:"header",required:!0,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const w={title:"Data Display/InfoRow",component:t,parameters:g("InfoRow",f,h),tags:["Отображение данных"]},a={args:{children:"3000 р.",header:"Общий бюджет"}},s={...a,decorators:[r=>e.jsxs(y,{header:e.jsx(_,{size:"s",children:"Информация о пользователе"}),children:[e.jsx(o,{multiline:!0,children:e.jsx(r,{args:{header:"Дата рождения",children:"30 января 1993"}})}),e.jsx(o,{children:e.jsx(r,{args:{header:"Родной город",children:"Ереван"}})}),e.jsx(o,{children:e.jsx(r,{args:{header:"Место работы",children:"Команда ВКонтакте"}})})]}),m,p]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '3000 р.',
    header: 'Общий бюджет'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const I=["Playground","Example"],k=Object.freeze(Object.defineProperty({__proto__:null,Example:s,Playground:a,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{t as I,a as P,k as a};
