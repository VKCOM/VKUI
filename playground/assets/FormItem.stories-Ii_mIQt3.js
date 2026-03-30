import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYsbkMbM.js";import{n as r,t as i}from"./FormItem-CZVkXbqH.js";import{n as a,t as o}from"./Input-w9MmSrfN.js";import{n as s,t as c}from"./Textarea-kaJWltv-.js";import{i as l,n as u,t as d}from"./constants-CXYaXe_q.js";import{n as f,t as p}from"./createStoryParameters-CbXzS3a6.js";var m=t({Playground:()=>_,WithInputField:()=>v,WithInputFieldWithError:()=>y,WithTopAside:()=>b,__namedExportsOrder:()=>x,default:()=>g}),h,g,_,v,y,b,x,S=e((()=>{l(),f(),a(),s(),r(),h=n(),g={title:`Forms/FormItem`,component:i,parameters:p(`FormItem`,d,u),tags:[`Формы и поля ввода`]},_={args:{top:`Top form item`,bottom:`Bottom form item`,children:`Form Item`},decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:`300px`},children:(0,h.jsx)(e,{})})]},v={..._,args:{top:`Пароль`,htmlFor:`password`,children:(0,h.jsx)(o,{id:`password`,type:`password`,placeholder:`Введите пароль`})}},y={..._,args:{top:`Пароль`,htmlFor:`password`,children:(0,h.jsx)(o,{id:`password`,type:`password`,placeholder:`Введите пароль`,"aria-describedby":`errorId`}),bottom:`Пароль должен быть не короче 8 символов.`,bottomId:`errorId`,status:`error`}},b={..._,args:{top:(0,h.jsxs)(i.Top,{children:[(0,h.jsx)(i.TopLabel,{htmlFor:`about`,children:`Дополнительная информация`}),(0,h.jsx)(i.TopAside,{id:`counter`,children:`0/100`})]}),children:(0,h.jsx)(c,{id:`about`,name:`about`})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    top: 'Top form item',
    bottom: 'Bottom form item',
    children: 'Form Item'
  },
  decorators: [Component => <div style={{
    maxWidth: '300px'
  }}>
        <Component />
      </div>]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" aria-describedby="errorId" />,
    bottom: 'Пароль должен быть не короче 8 символов.',
    bottomId: 'errorId',
    status: 'error'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: <FormItem.Top>
        <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
        <FormItem.TopAside id="counter">0/100</FormItem.TopAside>
      </FormItem.Top>,
    children: <Textarea id="about" name="about" />
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithInputField`,`WithInputFieldWithError`,`WithTopAside`]}));export{_ as n,S as r,m as t};