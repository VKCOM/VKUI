import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{Lt as n,in as r,n as i,yn as a}from"./dist-JE-Gteso.js";import{n as o,t as s}from"./Flex-d_Ls15u9.js";import{n as c,t as l}from"./ContentBadge-DSqs2FRW.js";import{n as u,t as d}from"./Group-BsDFq5nd.js";import{i as f,n as p,t as m}from"./constants-Dj6vOzIh.js";import{n as h,t as g}from"./createStoryParameters-pz1UrWMe.js";var _,v,y,b,x,S,C=e((()=>{i(),f(),h(),o(),u(),c(),_=t(),v={title:`Data Display/ContentBadge`,component:l,parameters:g(`ContentBadge`,m,p),tags:[`Отображение данных`]},y=e=>(0,_.jsx)(d,{style:{display:`flex`,alignItems:`center`,gap:24,flexWrap:`wrap`,outline:`1px dashed`,padding:24},children:(0,_.jsx)(e,{})}),b={decorators:[y],render({children:e=`Text`,size:t,...n}){return(0,_.jsxs)(s,{align:`center`,gap:24,children:[(0,_.jsx)(l,{...n,size:t,children:e}),(0,_.jsxs)(l,{...n,size:t,children:[(0,_.jsx)(l.IconSlot,{children:t===`l`?(0,_.jsx)(r,{}):(0,_.jsx)(a,{})}),e]}),(0,_.jsxs)(l,{...n,size:t,children:[e,(0,_.jsx)(l.IconSlot,{children:t===`l`?(0,_.jsx)(r,{}):(0,_.jsx)(a,{})})]}),(0,_.jsxs)(l,{...n,size:t,children:[(0,_.jsx)(l.IconSlot,{children:t===`l`?(0,_.jsx)(r,{}):(0,_.jsx)(a,{})}),e,(0,_.jsx)(l.IconSlot,{children:t===`l`?(0,_.jsx)(r,{}):(0,_.jsx)(a,{})})]})]})}},x={args:{capsule:!0},decorators:[y],render({size:e,...t}){return e===`s`?(0,_.jsx)(`div`,{children:`size="s" не поддерживает иконки`}):(0,_.jsx)(l,{...t,size:e,children:(0,_.jsx)(l.IconSlot,{children:e===`l`?(0,_.jsx)(n,{}):(0,_.jsx)(r,{})})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`SingleIcon`]}));export{v as a,C as i,x as n,S as r,b as t};