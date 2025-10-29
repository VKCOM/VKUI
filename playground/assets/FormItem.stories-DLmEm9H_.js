import{j as r}from"./iframe-DC59t_7s.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-BYD1hwJr.js";import{T as c}from"./Textarea-CglVe7qj.js";import{F as a}from"./FormItem-CXHYL2YK.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-DYhXjH9r.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./useFocusWithin-9CYA-Xql.js";import"./UnstyledTextField-CI2KSCuu.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-CFH0rNuV.js";import"./react_utils-CSZjvU4X.js";import"./Removable-qNhpNz2M.js";import"./children-DYOU-AGd.js";import"./IconButton-DlcUkq3s.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./useConfigDirection-6hDi4KID.js";import"./useGlobalEventListener-C_qxnlQL.js";import"./useEventListener-D94pK2uE.js";import"./cancel_24-pw3fX9Xb.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-B_mvNSI1.js";import"./FormItemTopLabel-Bl9WlasH.js";import"./Subhead-CcQWHNvG.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" />
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" aria-describedby="errorId" />,
    bottom: 'Пароль должен быть не короче 8 символов.',
    bottomId: 'errorId',
    status: 'error'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: <FormItem.Top>
        <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
        <FormItem.TopAside id="counter">0/100</FormItem.TopAside>
      </FormItem.Top>,
    children: <Textarea id="about" name="about" />
  }
}`,...s.parameters?.docs?.source}}};const N=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,N as __namedExportsOrder,M as default};
