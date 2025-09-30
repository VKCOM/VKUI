import{j as r}from"./iframe-qoTtUH8h.js";import{D as y,C as T}from"./constants-DdkjnEgz.js";import{c as w}from"./createStoryParameters-CcwS40kl.js";import{I as g}from"./Input-BYyvE7OK.js";import{T as f}from"./Textarea-D2SnPSIs.js";import{F as a}from"./FormItem-DEFVFywX.js";import"./preload-helper-Dp1pzeXC.js";import"./FormField-DCCIiDnM.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./useFocusWithin-E39X-WYV.js";import"./UnstyledTextField-Clvy-tYU.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-BgeYWyBT.js";import"./react_utils-CSZjvU4X.js";import"./Removable-CFszRLWh.js";import"./children-Tz7yKUE7.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./useConfigDirection-DgRc04K6.js";import"./useGlobalEventListener-stOUD5xR.js";import"./useEventListener-Czd3Qf-C.js";import"./cancel_24-CLPDrLYl.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-DrM4b0WC.js";import"./FormItemTopLabel-7nlHq39_.js";import"./Subhead-B5MAyB6Q.js";const er={title:"Forms/FormItem",component:a,parameters:w("FormItem",T,y),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[x=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(x,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(f,{id:"about",name:"about"})}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const sr=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,sr as __namedExportsOrder,er as default};
