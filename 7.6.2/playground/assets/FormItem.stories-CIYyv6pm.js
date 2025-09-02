import{j as r}from"./iframe-WscSQxk_.js";import{D as y,C as T}from"./constants-DdkjnEgz.js";import{c as w}from"./createStoryParameters-CcwS40kl.js";import{I as g}from"./Input-COvS7SZC.js";import{T as f}from"./Textarea-CByF87qm.js";import{F as a}from"./FormItem-C5jU3y7N.js";import"./preload-helper-Dp1pzeXC.js";import"./FormField-B19rMsk1.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./useFocusWithin-BHVkTq3i.js";import"./UnstyledTextField-BTqt-tQ0.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-SnCKkjM1.js";import"./react_utils-CSZjvU4X.js";import"./Removable-BJhZzne5.js";import"./children-PV0P3fmv.js";import"./IconButton-D66RFa5n.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-C7ilqGtf.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./VisuallyHidden-uW7N7P-s.js";import"./useConfigDirection-f8qxYIIC.js";import"./useGlobalEventListener-g9jun4JN.js";import"./useEventListener-DRRpeHIY.js";import"./cancel_24-DRq5Gwy2.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-DadQ2vZ3.js";import"./FormItemTopLabel-Ak2SZP--.js";import"./Subhead-Dng_N-gz.js";const tr={title:"Forms/FormItem",component:a,parameters:w("FormItem",T,y),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[x=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(x,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(f,{id:"about",name:"about"})}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,n,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" />
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,u,h;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" aria-describedby="errorId" />,
    bottom: 'Пароль должен быть не короче 8 символов.',
    bottomId: 'errorId',
    status: 'error'
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var I,F,b;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Playground,
  args: {
    top: <FormItem.Top>
        <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
        <FormItem.TopAside id="counter">0/100</FormItem.TopAside>
      </FormItem.Top>,
    children: <Textarea id="about" name="about" />
  }
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const er=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,er as __namedExportsOrder,tr as default};
