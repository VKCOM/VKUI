import{j as r}from"./iframe-CmkY54f5.js";import{D as i,C as d}from"./constants-DdkjnEgz.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{I as m}from"./Input-BtGQMChi.js";import{T as c}from"./Textarea-DNuwC3RW.js";import{F as a}from"./FormItem-CkNF-lcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-CeGCA5oR.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./useFocusWithin-BymUKlkD.js";import"./UnstyledTextField-Cpi10jqy.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-CgduApW0.js";import"./react_utils-CSZjvU4X.js";import"./Removable-N-h_aW0x.js";import"./children-nFeoBYDx.js";import"./IconButton-hyZ4L0bk.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./useConfigDirection-Duqs0EiT.js";import"./useGlobalEventListener-D4VlZRSO.js";import"./useEventListener-CsQVQesK.js";import"./cancel_24-D5GJv2PT.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-Dh1koNQe.js";import"./FormItemTopLabel-BLu4raEf.js";import"./Subhead-BS8ES9bw.js";const M={title:"Forms/FormItem",component:a,parameters:n("FormItem",d,i),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[p=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(p,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(m,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(c,{id:"about",name:"about"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
