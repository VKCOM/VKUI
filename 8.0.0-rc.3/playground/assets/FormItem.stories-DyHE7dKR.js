import{j as r}from"./iframe-Cn0klKvz.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-AzUTv79i.js";import{T as c}from"./Textarea-BBiPDw4s.js";import{F as a}from"./FormItem-BmMuskhE.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-CqfiouLJ.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./useFocusWithin-GdWsk7hi.js";import"./UnstyledTextField-ogVVFYld.js";import"./useResizeObserver-CO1g2sRz.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-faF15oTq.js";import"./Removable-DJHs5oKA.js";import"./children-IiL0uSHX.js";import"./IconButton-DSEgeqcd.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./useConfigDirection-DuEYXWS_.js";import"./cancel_24-C8myLtmO.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./Footnote-BwZkqEqY.js";import"./FormItemTopLabel-CT7Moikm.js";import"./Subhead-BQyoBjlR.js";const K={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,M as __namedExportsOrder,K as default};
