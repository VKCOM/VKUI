import{j as r}from"./iframe-D9ctG7Ns.js";import{D as y,C as T}from"./constants-DdkjnEgz.js";import{c as w}from"./createStoryParameters-CcwS40kl.js";import{I as g}from"./Input-BFLTV-Rt.js";import{T as f}from"./Textarea-Bv6VrCal.js";import{F as a}from"./FormItem-WqX-ap_M.js";import"./preload-helper-Dp1pzeXC.js";import"./FormField-DArlX69i.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./useFocusWithin-C5Vdk2dl.js";import"./UnstyledTextField-DcT-C0zT.js";import"./callMultiple-ChqatQlo.js";import"./useResizeTextarea-qQYjVDqY.js";import"./react_utils-CSZjvU4X.js";import"./Removable-D8OEYYHJ.js";import"./children-O1ZDhWOu.js";import"./IconButton-Cu6N9yzq.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-4xEXwBeB.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./VisuallyHidden-XRinxkJw.js";import"./useConfigDirection-BepSmh67.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./cancel_24-oGe7O0m1.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./Footnote-BcHikxS0.js";import"./FormItemTopLabel-BNFanwkm.js";import"./Subhead-DjvqikOr.js";const tr={title:"Forms/FormItem",component:a,parameters:w("FormItem",T,y),tags:["Формы и поля ввода"]},o={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"},decorators:[x=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(x,{})})]},t={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль"})}},e={...o,args:{top:"Пароль",htmlFor:"password",children:r.jsx(g,{id:"password",type:"password",placeholder:"Введите пароль","aria-describedby":"errorId"}),bottom:"Пароль должен быть не короче 8 символов.",bottomId:"errorId",status:"error"}},s={...o,args:{top:r.jsxs(a.Top,{children:[r.jsx(a.TopLabel,{htmlFor:"about",children:"Дополнительная информация"}),r.jsx(a.TopAside,{id:"counter",children:"0/100"})]}),children:r.jsx(f,{id:"about",name:"about"})}};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
