import{j as r}from"./iframe-DdZr-4mP.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-Ck1V21_9.js";import{T as c}from"./Textarea-DDwUvInO.js";import{F as a}from"./FormItem-BLIkBZYD.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-C4XpjwD8.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./useFocusWithin-Bj820Lyk.js";import"./UnstyledTextField-BPZT3vj_.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-CdKcaFpT.js";import"./react_utils-CSZjvU4X.js";import"./Removable-sBXdy_3O.js";import"./children-oqymHkiK.js";import"./IconButton-C7aWXmKO.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./useConfigDirection-BdfXEpUn.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./cancel_24-SB-_Mfon.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-1KqsUf4m.js";import"./FormItemTopLabel-Tt74abUx.js";import"./Subhead-xzDyxoRX.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
