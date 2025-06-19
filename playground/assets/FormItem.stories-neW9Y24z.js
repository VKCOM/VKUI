import{j as r}from"./iframe-k6odcVfq.js";import{D as y,C as T}from"./constants-DdkjnEgz.js";import{c as w}from"./createStoryParameters-CcwS40kl.js";import{I as x}from"./Input-C0LUXxUN.js";import{T as f}from"./Textarea-C-us_nsR.js";import{F as a}from"./FormItem-DgAYSsMp.js";import"./FormField-fetq_Z25.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusWithin-Bs7KV-km.js";import"./UnstyledTextField-BeYswI4x.js";import"./useResizeTextarea-D_zxojhn.js";import"./react_utils-CSZjvU4X.js";import"./Removable-DCOjXm07.js";import"./children-CYWK7spH.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./useConfigDirection-CxnUW9rE.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./cancel_24-fcxuZKq0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./Footnote-DHnfr3c7.js";import"./FormItemTopLabel-DEjlkVqn.js";import"./Subhead-CfBOCg31.js";const rr={title:"Forms/FormItem",component:a,parameters:w("FormItem",T,y)},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[g=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(g,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(x,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(x,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(f,{id:"about",name:"about"})}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const or=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,or as __namedExportsOrder,rr as default};
