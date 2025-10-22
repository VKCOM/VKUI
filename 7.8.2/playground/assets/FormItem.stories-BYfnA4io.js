import{j as r}from"./iframe-DvQ0hW0I.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-GdcltOHR.js";import{T as c}from"./Textarea-DVsXLXPE.js";import{F as a}from"./FormItem-C5zTkEQQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-C5R4IHoT.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./useFocusWithin-C0XX_iqt.js";import"./UnstyledTextField-DNG8pGli.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-DMvWg6TP.js";import"./react_utils-CSZjvU4X.js";import"./Removable-B6FxApdQ.js";import"./children-BdLlg6DR.js";import"./IconButton-Dmx4oOAb.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./VisuallyHidden-CGlAvVNH.js";import"./useConfigDirection-DmTY1Se6.js";import"./useGlobalEventListener-Cq3tChGi.js";import"./useEventListener-BWoYhQmZ.js";import"./cancel_24-BcD8qa0A.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-DYSqrBFj.js";import"./FormItemTopLabel-bElxnhmd.js";import"./Subhead-DE0FovKO.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
