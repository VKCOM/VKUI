import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Cr as i,dr as a,hr as o,n as s,pi as c,xr as l}from"./dist-Ddx9HyIL.js";import{Mt as u,jt as d}from"./iframe-CgMGh-8q.js";import{n as f,t as p}from"./HorizontalScroll-C4rnPZz0.js";import{n as m,t as h}from"./Badge-BBsDHKmY.js";import{n as g,t as _}from"./Group-LwNPJiLD.js";import{n as v,t as y}from"./Tabs-B1dBaVQ8.js";import{n as b,t as x}from"./TabsItem-CoiF44Xf.js";import{n as S,t as C}from"./Counter-kIq69qM_.js";import{i as w,n as T,t as E}from"./constants-cjed6ZWB.js";import{n as D,t as O}from"./createStoryParameters-CMHckkzt.js";var k=e({Playground:()=>M,WithHorizontalScroll:()=>N,__namedExportsOrder:()=>P,default:()=>j}),A,j,M,N,P,F=t((()=>{s(),d(),w(),D(),m(),S(),g(),f(),b(),v(),A=n(r(),1),j={title:`Navigation/Tabs`,component:y,parameters:O(`Tabs`,E,T),argTypes:{selectedId:{control:{type:`select`},options:[`groups`,`news`,`recommendations`,`friends`,`photos`]}},tags:[`Навигация`]},M=e=>{let t=e.count,n=[(0,A.jsx)(x,{id:`groups`,before:(0,A.jsx)(i,{}),after:(0,A.jsx)(c,{}),children:`Сообщества`},`groups`),(0,A.jsx)(x,{id:`news`,before:(0,A.jsx)(i,{}),after:(0,A.jsx)(c,{}),children:`Лента`},`news`),(0,A.jsx)(x,{id:`recommendations`,before:(0,A.jsx)(o,{}),after:(0,A.jsx)(c,{}),status:(0,A.jsx)(h,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,A.jsx)(x,{id:`friends`,before:(0,A.jsx)(a,{}),after:(0,A.jsx)(c,{}),status:(0,A.jsx)(C,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,A.jsx)(x,{id:`photos`,before:(0,A.jsx)(l,{}),after:(0,A.jsx)(c,{}),status:23,children:`Фотографии`},`photos`)].slice(0,t);return(0,A.jsx)(_,{children:(0,A.jsx)(y,{...e,children:n})})},M.args={defaultSelectedId:`groups`,count:5},N=e=>(0,A.jsx)(_,{style:{maxWidth:500},children:(0,A.jsx)(y,{...e,children:(0,A.jsxs)(p,{arrowSize:`m`,children:[(0,A.jsx)(x,{id:`groups`,before:(0,A.jsx)(i,{}),after:(0,A.jsx)(c,{}),children:`Сообщества`},`groups`),(0,A.jsx)(x,{id:`news`,before:(0,A.jsx)(i,{}),after:(0,A.jsx)(c,{}),children:`Лента`},`news`),(0,A.jsx)(x,{id:`recommendations`,before:(0,A.jsx)(o,{}),after:(0,A.jsx)(c,{}),status:(0,A.jsx)(h,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,A.jsx)(x,{id:`friends`,before:(0,A.jsx)(a,{}),after:(0,A.jsx)(c,{}),status:(0,A.jsx)(C,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,A.jsx)(x,{id:`photos`,before:(0,A.jsx)(l,{}),after:(0,A.jsx)(c,{}),status:23,children:`Фотографии`},`photos`)]})})}),N.args={defaultSelectedId:`groups`,withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:`center`},N.decorators=[u],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: StoryTabsProps) => {
  const count = args.count;
  const items = [<TabsItem key="groups" id="groups" before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />}>
      Сообщества
    </TabsItem>, <TabsItem key="news" id="news" before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />}>
      Лента
    </TabsItem>, <TabsItem key="recommendations" id="recommendations" before={<Icon20ThumbsUpOutline />} after={<Icon16Dropdown />} status={<Badge mode="prominent">Есть обновления</Badge>}>
      Рекомендации
    </TabsItem>, <TabsItem key="friends" id="friends" before={<Icon20UsersOutline />} after={<Icon16Dropdown />} status={<Counter mode="primary" appearance="accent-red" size="s">
          3
        </Counter>}>
      Друзья
    </TabsItem>, <TabsItem key="photos" id="photos" before={<Icon20PictureOutline />} after={<Icon16Dropdown />} status={23}>
      Фотографии
    </TabsItem>].slice(0, count);
  return <Group>
      <Tabs {...args}>{items}</Tabs>
    </Group>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: StoryTabsProps) => {
  return <Group style={{
    maxWidth: 500
  }}>
      <Tabs {...args}>
        <HorizontalScroll arrowSize="m">
          <TabsItem key="groups" id="groups" before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />}>
            Сообщества
          </TabsItem>
          <TabsItem key="news" id="news" before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />}>
            Лента
          </TabsItem>
          <TabsItem key="recommendations" id="recommendations" before={<Icon20ThumbsUpOutline />} after={<Icon16Dropdown />} status={<Badge mode="prominent">Есть обновления</Badge>}>
            Рекомендации
          </TabsItem>
          <TabsItem key="friends" id="friends" before={<Icon20UsersOutline />} after={<Icon16Dropdown />} status={<Counter mode="primary" appearance="accent-red" size="s">
                3
              </Counter>}>
            Друзья
          </TabsItem>
          <TabsItem key="photos" id="photos" before={<Icon20PictureOutline />} after={<Icon16Dropdown />} status={23}>
            Фотографии
          </TabsItem>
        </HorizontalScroll>
      </Tabs>
    </Group>;
}`,...N.parameters?.docs?.source}}},P=[`Playground`,`WithHorizontalScroll`]}));export{k as n,F as r,M as t};