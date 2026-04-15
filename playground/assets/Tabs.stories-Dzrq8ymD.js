import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{Bt as n,It as r,Pt as i,cn as a,n as o,zt as s}from"./dist-JE-Gteso.js";import{n as c,t as l}from"./VKUIDecorators-BYQp_QSp.js";import{n as u,t as d}from"./HorizontalScroll-DatKoPXJ.js";import{n as f,t as p}from"./Group-iqbU7m06.js";import{n as m,t as h}from"./Tabs-BuZfob8b.js";import{n as g,t as _}from"./TabsItem-7TNiQqAi.js";import{i as v,n as y,t as b}from"./constants-Dj6vOzIh.js";import{n as x,t as S}from"./createStoryParameters-pz1UrWMe.js";import{n as C,t as w}from"./useCustomArgs-CrFDt-oX.js";import{a as T,i as E,n as D,r as O,s as k,t as A}from"./TabsItem.stories-Dkdum4bG.js";var j,M,N,P,F,I,L=e((()=>{o(),l(),v(),x(),w(),f(),u(),g(),k(),m(),j=t(),{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,N={title:`Navigation/Tabs`,component:h,parameters:S(`Tabs`,b,y),argTypes:{selectedId:{control:{type:`select`},options:[`groups`,`news`,`recommendations`,`friends`,`photos`]}},tags:[`Навигация`]},P={render:function({count:e,...t}){let[,o]=C(),c=[(0,j.jsx)(_,{id:`groups`,...A.args,before:(0,j.jsx)(n,{}),after:(0,j.jsx)(a,{})},`groups`),(0,j.jsx)(_,{id:`news`,...O.args,before:(0,j.jsx)(n,{}),after:(0,j.jsx)(a,{})},`news`),(0,j.jsx)(_,{id:`recommendations`,...D.args,before:(0,j.jsx)(r,{}),after:(0,j.jsx)(a,{})},`recommendations`),(0,j.jsx)(_,{id:`friends`,...E.args,before:(0,j.jsx)(i,{}),after:(0,j.jsx)(a,{})},`friends`),(0,j.jsx)(_,{id:`photos`,...T.args,before:(0,j.jsx)(s,{}),after:(0,j.jsx)(a,{})},`photos`)].slice(0,e);return(0,j.jsx)(h,{onSelectedIdChange:e=>o({selectedId:e}),...t,children:c})},args:{selectedId:`groups`,count:5},decorators:[e=>(0,j.jsx)(p,{children:(0,j.jsx)(e,{})})]},F={args:{selectedId:`groups`,withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:`center`},render:function({...e}){let[,t]=M();return(0,j.jsx)(h,{onSelectedIdChange:e=>t({selectedId:e}),...e,children:(0,j.jsxs)(d,{arrowSize:`m`,children:[(0,j.jsx)(_,{id:`groups`,...A.args,before:(0,j.jsx)(n,{}),after:(0,j.jsx)(a,{})}),(0,j.jsx)(_,{id:`news`,...O.args,before:(0,j.jsx)(n,{}),after:(0,j.jsx)(a,{})}),(0,j.jsx)(_,{id:`recommendations`,...D.args,before:(0,j.jsx)(r,{}),after:(0,j.jsx)(a,{})}),(0,j.jsx)(_,{id:`friends`,...E.args,before:(0,j.jsx)(i,{}),after:(0,j.jsx)(a,{})}),(0,j.jsx)(_,{id:`photos`,...T.args,before:(0,j.jsx)(s,{}),after:(0,j.jsx)(a,{})})]})})},decorators:[e=>(0,j.jsx)(p,{style:{maxWidth:500},children:(0,j.jsx)(e,{})}),c]},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`WithHorizontalScroll`]}));export{N as a,L as i,F as n,I as r,P as t};