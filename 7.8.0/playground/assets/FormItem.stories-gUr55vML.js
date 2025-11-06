import{j as r}from"./iframe-F_0bvJrc.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-C5xpv7RL.js";import{T as c}from"./Textarea-DGtG9S10.js";import{F as a}from"./FormItem-CR1ltdco.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-Dkyvpq47.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./useFocusWithin-CDt5X1od.js";import"./UnstyledTextField-odxkRx3q.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-BSSGaYva.js";import"./react_utils-CSZjvU4X.js";import"./Removable-CQf4vu_q.js";import"./children-CfV6Kr3n.js";import"./IconButton-BHFFi_8a.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./VisuallyHidden-CRrL_L2y.js";import"./useConfigDirection-poWhsvcV.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./cancel_24-CEwNt985.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-DfPFidfa.js";import"./FormItemTopLabel-DG5nnJu-.js";import"./Subhead-CtWFTcAD.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
