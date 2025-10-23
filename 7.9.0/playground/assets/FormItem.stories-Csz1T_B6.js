import{j as r}from"./iframe-BdXaAE5r.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-DVvWA0Cs.js";import{T as c}from"./Textarea-DypoDlvf.js";import{F as a}from"./FormItem-Cxh1g4KJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-EQy9__nw.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./useFocusWithin-BFFjMCCU.js";import"./UnstyledTextField-C7-kPwgr.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-B5SwJdxl.js";import"./react_utils-CSZjvU4X.js";import"./Removable-CjePy1wL.js";import"./children-l5OU2f11.js";import"./IconButton-CXgqouLn.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./VisuallyHidden-DcQJc2es.js";import"./useConfigDirection-B4zlYhYT.js";import"./useGlobalEventListener-BXli_s0F.js";import"./useEventListener-C9KDACQG.js";import"./cancel_24-Cel532NE.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-ByXPLsYQ.js";import"./FormItemTopLabel-slYrJWd0.js";import"./Subhead-CM9E3HB6.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
