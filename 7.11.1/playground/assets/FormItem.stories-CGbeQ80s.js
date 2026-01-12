import{j as r}from"./iframe-BqdgnJE0.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-C0Z8DasI.js";import{T as c}from"./Textarea-hUb67Yy_.js";import{F as a}from"./FormItem-Bf52fXjZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-Cg65d97h.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./useFocusWithin-7VHk4Gs5.js";import"./UnstyledTextField-DEee9VX2.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-D7mEqX1H.js";import"./react_utils-CSZjvU4X.js";import"./Removable-CQjuFWD6.js";import"./children-rmDURaUl.js";import"./IconButton-C7jcJUXx.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-ESzsNRN2.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./useConfigDirection-D5bRs-MF.js";import"./useGlobalEventListener-BJBa7VdU.js";import"./useEventListener-C8S8CDSH.js";import"./cancel_24-DLsb6enM.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-Bj-28HDg.js";import"./FormItemTopLabel-CWwcsuZB.js";import"./Subhead-ubP323Lg.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
