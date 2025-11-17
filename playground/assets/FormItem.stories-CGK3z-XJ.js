import{j as r}from"./iframe-DhuutAfC.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-D3upZWxR.js";import{T as c}from"./Textarea-C14EHmpK.js";import{F as a}from"./FormItem-CYX1XfPE.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-a8bHx8UE.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./useFocusWithin-TQRavq7I.js";import"./UnstyledTextField-D0QkvVah.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-CADi9nfI.js";import"./react_utils-CSZjvU4X.js";import"./Removable-WF0wvkrR.js";import"./children-f71tIclX.js";import"./IconButton-CS1h91J8.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./useConfigDirection-BKOpe2-3.js";import"./useGlobalEventListener-B3NjbVmX.js";import"./useEventListener-BINAhqZ-.js";import"./cancel_24-DOIBb5nA.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-BE0sRU6f.js";import"./FormItemTopLabel-BMO1L17I.js";import"./Subhead-N3Y6Abab.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
