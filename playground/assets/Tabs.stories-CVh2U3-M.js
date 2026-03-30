import{n as e,r as t}from"./chunk-BneVvdWh.js";import{On as n,Pi as r,ci as i,di as a,fi as o,n as s,oi as c,r as l,yo as u}from"./iframe-DYsbkMbM.js";import{n as d,t as f}from"./HorizontalScroll-DTiy4Rkr.js";import{n as p,t as m}from"./Group-IwBqagW_.js";import{n as h,t as g}from"./Tabs-DGf0_i02.js";import{n as _,t as v}from"./TabsItem-C0-L_0cm.js";import{i as y,n as b,t as x}from"./constants-CXYaXe_q.js";import{n as S,t as C}from"./createStoryParameters-CbXzS3a6.js";import{n as w,t as T}from"./useCustomArgs-DjsaFHBV.js";import{a as E,i as D,o as O,r as k,s as A,t as j}from"./TabsItem.stories--BIntwPV.js";var M=t({Playground:()=>I,WithHorizontalScroll:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=e((()=>{n(),s(),y(),S(),T(),p(),d(),_(),A(),h(),N=u(),{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:`Navigation/Tabs`,component:g,parameters:C(`Tabs`,x,b),argTypes:{selectedId:{control:{type:`select`},options:[`groups`,`news`,`recommendations`,`friends`,`photos`]}},tags:[`Навигация`]},I={render:function({count:e,...t}){let[,n]=w(),s=[(0,N.jsx)(v,{id:`groups`,...j.args,before:(0,N.jsx)(o,{}),after:(0,N.jsx)(r,{})},`groups`),(0,N.jsx)(v,{id:`news`,...D.args,before:(0,N.jsx)(o,{}),after:(0,N.jsx)(r,{})},`news`),(0,N.jsx)(v,{id:`recommendations`,...k.args,before:(0,N.jsx)(i,{}),after:(0,N.jsx)(r,{})},`recommendations`),(0,N.jsx)(v,{id:`friends`,...E.args,before:(0,N.jsx)(c,{}),after:(0,N.jsx)(r,{})},`friends`),(0,N.jsx)(v,{id:`photos`,...O.args,before:(0,N.jsx)(a,{}),after:(0,N.jsx)(r,{})},`photos`)].slice(0,e);return(0,N.jsx)(g,{onSelectedIdChange:e=>n({selectedId:e}),...t,children:s})},args:{selectedId:`groups`,count:5},decorators:[e=>(0,N.jsx)(m,{children:(0,N.jsx)(e,{})})]},L={args:{selectedId:`groups`,withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:`center`},render:function({...e}){let[,t]=P();return(0,N.jsx)(g,{onSelectedIdChange:e=>t({selectedId:e}),...e,children:(0,N.jsxs)(f,{arrowSize:`m`,children:[(0,N.jsx)(v,{id:`groups`,...j.args,before:(0,N.jsx)(o,{}),after:(0,N.jsx)(r,{})}),(0,N.jsx)(v,{id:`news`,...D.args,before:(0,N.jsx)(o,{}),after:(0,N.jsx)(r,{})}),(0,N.jsx)(v,{id:`recommendations`,...k.args,before:(0,N.jsx)(i,{}),after:(0,N.jsx)(r,{})}),(0,N.jsx)(v,{id:`friends`,...E.args,before:(0,N.jsx)(c,{}),after:(0,N.jsx)(r,{})}),(0,N.jsx)(v,{id:`photos`,...O.args,before:(0,N.jsx)(a,{}),after:(0,N.jsx)(r,{})})]})})},decorators:[e=>(0,N.jsx)(m,{style:{maxWidth:500},children:(0,N.jsx)(e,{})}),l]},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render({
    count,
    ...args
  }) {
    const [, updateArg] = useCustomArgs();
    const items = [<TabsItem key="groups" id="groups" {...BasicTabsItemStory.args} before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />} />, <TabsItem key="news" id="news" {...BeforeAfterTabsItemStory.args} before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />} />, <TabsItem key="recommendations" id="recommendations" {...BadgeTabsItemStory.args} before={<Icon20ThumbsUpOutline />} after={<Icon16Dropdown />} />, <TabsItem key="friends" id="friends" {...CounterTabsItemStory.args} before={<Icon20UsersOutline />} after={<Icon16Dropdown />} />, <TabsItem key="photos" id="photos" {...NumberStatusTabsItemStory.args} before={<Icon20PictureOutline />} after={<Icon16Dropdown />} />].slice(0, count);
    return <Tabs onSelectedIdChange={id => updateArg({
      selectedId: id
    })} {...args}>
        {items}
      </Tabs>;
  },
  args: {
    selectedId: 'groups',
    count: 5
  },
  decorators: [Component => <Group>
        <Component />
      </Group>]
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    selectedId: 'groups',
    withScrollToSelectedTab: true,
    scrollBehaviorToSelectedTab: 'center'
  },
  render: function Render({
    ...args
  }) {
    const [, updateArg] = useArgs();
    return <Tabs onSelectedIdChange={id => updateArg({
      selectedId: id
    })} {...args}>
        <HorizontalScroll arrowSize="m">
          <TabsItem id="groups" {...BasicTabsItemStory.args} before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />} />
          <TabsItem id="news" {...BeforeAfterTabsItemStory.args} before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />} />
          <TabsItem id="recommendations" {...BadgeTabsItemStory.args} before={<Icon20ThumbsUpOutline />} after={<Icon16Dropdown />} />
          <TabsItem id="friends" {...CounterTabsItemStory.args} before={<Icon20UsersOutline />} after={<Icon16Dropdown />} />
          <TabsItem id="photos" {...NumberStatusTabsItemStory.args} before={<Icon20PictureOutline />} after={<Icon16Dropdown />} />
        </HorizontalScroll>
      </Tabs>;
  },
  decorators: [Component => <Group style={{
    maxWidth: 500
  }}>
        <Component />
      </Group>, withSinglePanel]
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`WithHorizontalScroll`]}));export{M as n,z as r,I as t};