import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ai as n,Gi as r,On as i,li as a,yo as o}from"./iframe-lhb8_BzR.js";import{n as s,t as c}from"./Flex-C3cq-BVx.js";import{n as l,t as u}from"./ContentBadge-D7e0nbdP.js";import{n as d,t as f}from"./Group-BJ5gURe8.js";import{i as p,n as m,t as h}from"./constants-CXYaXe_q.js";import{n as g,t as _}from"./createStoryParameters-CbXzS3a6.js";var v=t({Playground:()=>S,SingleIcon:()=>C,__namedExportsOrder:()=>w,default:()=>b}),y,b,x,S,C,w,T=e((()=>{i(),p(),g(),s(),d(),l(),y=o(),b={title:`Data Display/ContentBadge`,component:u,parameters:_(`ContentBadge`,h,m),tags:[`Отображение данных`]},x=e=>(0,y.jsx)(f,{style:{display:`flex`,alignItems:`center`,gap:24,flexWrap:`wrap`,outline:`1px dashed`,padding:24},children:(0,y.jsx)(e,{})}),S={decorators:[x],render({children:e=`Text`,size:t,...i}){return(0,y.jsxs)(c,{align:`center`,gap:24,children:[(0,y.jsx)(u,{...i,size:t,children:e}),(0,y.jsxs)(u,{...i,size:t,children:[(0,y.jsx)(u.IconSlot,{children:t===`l`?(0,y.jsx)(n,{}):(0,y.jsx)(r,{})}),e]}),(0,y.jsxs)(u,{...i,size:t,children:[e,(0,y.jsx)(u.IconSlot,{children:t===`l`?(0,y.jsx)(n,{}):(0,y.jsx)(r,{})})]}),(0,y.jsxs)(u,{...i,size:t,children:[(0,y.jsx)(u.IconSlot,{children:t===`l`?(0,y.jsx)(n,{}):(0,y.jsx)(r,{})}),e,(0,y.jsx)(u.IconSlot,{children:t===`l`?(0,y.jsx)(n,{}):(0,y.jsx)(r,{})})]})]})}},C={args:{capsule:!0},decorators:[x],render({size:e,...t}){return e===`s`?(0,y.jsx)(`div`,{children:`size="s" не поддерживает иконки`}):(0,y.jsx)(u,{...t,size:e,children:(0,y.jsx)(u.IconSlot,{children:e===`l`?(0,y.jsx)(a,{}):(0,y.jsx)(n,{})})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Container],
  render({
    children = 'Text',
    size,
    ...restProps
  }) {
    return <Flex align="center" gap={24}>
        <ContentBadge {...restProps} size={size}>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>
      </Flex>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    capsule: true
  },
  decorators: [Container],
  render({
    size,
    ...restProps
  }) {
    if (size === 's') {
      return <div>size=&quot;s&quot; не поддерживает иконки</div>;
    }
    return <ContentBadge {...restProps} size={size}>
        <ContentBadge.IconSlot>
          {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.IconSlot>
      </ContentBadge>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`SingleIcon`]}));export{S as n,T as r,v as t};