import{S as g,j as r}from"./iframe-gnG2DlPI.js";import{D as j,C as y}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{D as h}from"./Div-DhknKQKb.js";import{G as v}from"./Group-CrrFHIS0.js";import{L as a}from"./Link-CiOe0qXR.js";import{S as n}from"./SimpleCell-BCPsJbDr.js";import{I as D}from"./notifications_28-vOIRCNSl.js";import{I as L}from"./sliders_outline_28-DukaD3n8.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CONk622S.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./Headline-K5SxFgY1.js";import"./Subhead-CTHKnpeS.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./chevron_compact_right_24-DzsR3cYI.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-UahDaYU4.js";const Y={title:"Layout/Separator",component:g,parameters:C("Separator",y,j),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},i={...o,decorators:[e=>r.jsxs(v,{children:[r.jsx(n,{before:r.jsx(D,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(L,{}),children:"Основные"})]})]},s={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(h,{style:{display:"flex"},children:[r.jsx(a,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(a,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(a,{children:"Друзья"})]})]};var p,m,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  decorators: [(Component, props) => <div style={props.args.direction === 'vertical' ? {
    display: 'flex',
    alignItems: 'center',
    height: 50
  } : undefined}>
        Before Separator
        <Component {...props} />
        After Separator
      </div>]
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>]
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var f,u,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Playground,
  args: {
    direction: 'vertical',
    size: '2xl'
  },
  decorators: [(Component, props) => <Div style={{
    display: 'flex'
  }}>
        <Link>Новости</Link>
        <Component {...props} />
        <Link>Звонки</Link>
        <Component {...props} />
        <Link>Друзья</Link>
      </Div>]
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const Z=["Playground","DefaultDirectionExample","BlockDirectionExample"];export{s as BlockDirectionExample,i as DefaultDirectionExample,o as Playground,Z as __namedExportsOrder,Y as default};
