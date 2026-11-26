import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{Cr as r,Tr as i,hi as a,hr as o,n as s,yr as c}from"./dist-ffVrjb4g.js";import{At as l,jt as u}from"./iframe-kY6v1YfM.js";import{i as d,n as f,t as p}from"./constants-BWBR8eWE.js";import{n as m,t as h}from"./createStoryParameters-D_aKMzVl.js";import{n as g,t as _}from"./Group-BYaqcOTu.js";import{n as v,t as y}from"./Badge-C3etQja2.js";import{n as b,t as x}from"./Counter-QeQe1wgH.js";import{n as S,t as C}from"./HorizontalScroll-cOR9kCRx.js";import{n as w,t as T}from"./Tabs-C81MNPuX.js";import{n as E,t as D}from"./TabsItem-Dm575i02.js";var O=t({Playground:()=>j,WithHorizontalScroll:()=>M,__namedExportsOrder:()=>N,default:()=>A}),k,A,j,M,N;function P(){return(P=e((()=>{s(),l(),d(),m(),v(),b(),g(),S(),E(),w(),k=n(),A={title:`Navigation/Tabs`,component:T,parameters:h(`Tabs`,p,f),argTypes:{selectedId:{control:{type:`select`},options:[`groups`,`news`,`recommendations`,`friends`,`photos`]}},tags:[`Навигация`]},j=e=>{let t=e.count,n=[(0,k.jsx)(D,{id:`groups`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(a,{}),children:`Сообщества`},`groups`),(0,k.jsx)(D,{id:`news`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(a,{}),children:`Лента`},`news`),(0,k.jsx)(D,{id:`recommendations`,before:(0,k.jsx)(c,{}),after:(0,k.jsx)(a,{}),status:(0,k.jsx)(y,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,k.jsx)(D,{id:`friends`,before:(0,k.jsx)(o,{}),after:(0,k.jsx)(a,{}),status:(0,k.jsx)(x,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,k.jsx)(D,{id:`photos`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(a,{}),status:23,children:`Фотографии`},`photos`)].slice(0,t);return(0,k.jsx)(_,{children:(0,k.jsx)(T,{...e,children:n})})},j.args={defaultSelectedId:`groups`,count:5},M=e=>(0,k.jsx)(_,{style:{maxWidth:500},children:(0,k.jsx)(T,{...e,children:(0,k.jsxs)(C,{arrowSize:`m`,children:[(0,k.jsx)(D,{id:`groups`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(a,{}),children:`Сообщества`},`groups`),(0,k.jsx)(D,{id:`news`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(a,{}),children:`Лента`},`news`),(0,k.jsx)(D,{id:`recommendations`,before:(0,k.jsx)(c,{}),after:(0,k.jsx)(a,{}),status:(0,k.jsx)(y,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,k.jsx)(D,{id:`friends`,before:(0,k.jsx)(o,{}),after:(0,k.jsx)(a,{}),status:(0,k.jsx)(x,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,k.jsx)(D,{id:`photos`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(a,{}),status:23,children:`Фотографии`},`photos`)]})})}),M.args={defaultSelectedId:`groups`,withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:`center`},M.decorators=[u],N=[`Playground`,`WithHorizontalScroll`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: StoryTabsProps) => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: StoryTabsProps) => {
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
}`,...M.parameters?.docs?.source}}}})))()}export{O as n,P as r,j as t};