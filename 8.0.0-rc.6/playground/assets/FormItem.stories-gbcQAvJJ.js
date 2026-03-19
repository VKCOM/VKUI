import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{n,t as r}from"./FormItem-Blcy5-pQ.js";import{n as i,t as a}from"./Input-DXoarOzB.js";import{n as o,t as s}from"./Textarea-BnCatBdb.js";import{i as c,n as l,t as u}from"./constants-BYo4AJCv.js";import{n as d,t as f}from"./createStoryParameters-Dbf8epgV.js";var p,m,h,g,_,v,y,b=e((()=>{c(),d(),i(),o(),n(),p=t(),m={title:`Forms/FormItem`,component:r,parameters:f(`FormItem`,u,l),tags:[`Формы и поля ввода`]},h={args:{top:`Top form item`,bottom:`Bottom form item`,children:`Form Item`},decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:`300px`},children:(0,p.jsx)(e,{})})]},g={...h,args:{top:`Пароль`,htmlFor:`password`,children:(0,p.jsx)(a,{id:`password`,type:`password`,placeholder:`Введите пароль`})}},_={...h,args:{top:`Пароль`,htmlFor:`password`,children:(0,p.jsx)(a,{id:`password`,type:`password`,placeholder:`Введите пароль`,"aria-describedby":`errorId`}),bottom:`Пароль должен быть не короче 8 символов.`,bottomId:`errorId`,status:`error`}},v={...h,args:{top:(0,p.jsxs)(r.Top,{children:[(0,p.jsx)(r.TopLabel,{htmlFor:`about`,children:`Дополнительная информация`}),(0,p.jsx)(r.TopAside,{id:`counter`,children:`0/100`})]}),children:(0,p.jsx)(s,{id:`about`,name:`about`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" aria-describedby="errorId" />,
    bottom: 'Пароль должен быть не короче 8 символов.',
    bottomId: 'errorId',
    status: 'error'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: <FormItem.Top>
        <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
        <FormItem.TopAside id="counter">0/100</FormItem.TopAside>
      </FormItem.Top>,
    children: <Textarea id="about" name="about" />
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`WithInputField`,`WithInputFieldWithError`,`WithTopAside`]}));export{y as a,v as i,g as n,b as o,_ as r,m as s,h as t};