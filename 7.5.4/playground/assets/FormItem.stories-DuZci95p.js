import{j as r}from"./iframe-BdL7Qu3-.js";import{D as y,C as T}from"./constants-DdkjnEgz.js";import{c as w}from"./createStoryParameters-CcwS40kl.js";import{I as g}from"./Input-BtY-vKev.js";import{T as f}from"./Textarea-80Eg909D.js";import{F as a}from"./FormItem-BXkhFAtY.js";import"./FormField-CqnEFqGM.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./useFocusWithin-C1xt8Yic.js";import"./UnstyledTextField-DkhACj1h.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-SizOfcPH.js";import"./react_utils-CSZjvU4X.js";import"./Removable-kBBzHwjh.js";import"./children-D33S37xY.js";import"./IconButton-oiQnZbSh.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-zgtvQHiz.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./VisuallyHidden-DMev6gKF.js";import"./useConfigDirection-D_GPblpw.js";import"./useGlobalEventListener-CWI65JCy.js";import"./useEventListener-COxWOe_W.js";import"./cancel_24-DYZXSV6w.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./Footnote-Cejbc8FV.js";import"./FormItemTopLabel-DJ2NDfgx.js";import"./Subhead-CEr4zt5A.js";const or={title:"Forms/FormItem",component:a,parameters:w("FormItem",T,y),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[x=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(x,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(f,{id:"about",name:"about"})}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const tr=["Playground","WithInputField","WithInputFieldWithError","WithTopAside"];export{o as Playground,t as WithInputField,e as WithInputFieldWithError,s as WithTopAside,tr as __namedExportsOrder,or as default};
