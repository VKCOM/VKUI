import{j as r}from"./iframe-C4ttrVUJ.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-ON_KScH5.js";import{T as c}from"./Textarea-5RYBd42_.js";import{F as a}from"./FormItem-DuVU0EBm.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-FAL0-RE2.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./useFocusWithin-BAJNppfT.js";import"./UnstyledTextField-CPafSolH.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-Bn46l36O.js";import"./react_utils-CSZjvU4X.js";import"./Removable-tI4hkoIu.js";import"./children-DylyViM5.js";import"./IconButton-B4UJc4kp.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CD1Rp_t7.js";import"./VisuallyHidden-XgvirjGY.js";import"./useConfigDirection-DvmYVNBa.js";import"./useGlobalEventListener-2nmt2YdY.js";import"./useEventListener-BQB6QAnN.js";import"./cancel_24-DD0i1EtC.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-D7DVMFfP.js";import"./FormItemTopLabel-DeRKkLT4.js";import"./Subhead-ChzeQqTJ.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
