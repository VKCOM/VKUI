import{j as r}from"./iframe-KtxhC7Vu.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-vdvE0TeS.js";import{T as c}from"./Textarea-DTlbf0Xi.js";import{F as a}from"./FormItem-CILGV80L.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-B5GJ46_3.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./useFocusWithin-Do1ICwdO.js";import"./UnstyledTextField-Cqqod_y0.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-B37pDK1T.js";import"./react_utils-CSZjvU4X.js";import"./Removable-CpxKd1Q1.js";import"./children-BMwCSNmp.js";import"./IconButton-DubnwX4y.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BueJ8J_Y.js";import"./VisuallyHidden-8TqRJKxj.js";import"./useConfigDirection-CX53j0Ve.js";import"./useGlobalEventListener-CospsVY6.js";import"./useEventListener-DNTY0hjA.js";import"./cancel_24-B2bpUHqP.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-lwK0vUsu.js";import"./FormItemTopLabel-Dkb-hW-z.js";import"./Subhead-AWezZjK6.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
