import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Cr as r,dr as i,hr as a,n as o,pi as s,xr as c}from"./dist-BrTYZxJF.js";import{At as l,jt as u}from"./iframe-33ykgUxE.js";import{n as d,t as f}from"./HorizontalScroll-m10mX-rT.js";import{n as p,t as m}from"./Badge-Dqv3nlF3.js";import{n as h,t as g}from"./Group-Bp-h8t_O.js";import{n as _,t as v}from"./Tabs-DT2HNChI.js";import{n as y,t as b}from"./TabsItem-CzkhU1-W.js";import{n as x,t as S}from"./Counter-CIF6WVn6.js";import{i as C,n as w,t as T}from"./constants-DBkyy3CT.js";import{n as E,t as D}from"./createStoryParameters-DBkK1CfQ.js";var O=t({Playground:()=>j,WithHorizontalScroll:()=>M,__namedExportsOrder:()=>N,default:()=>A}),k,A,j,M,N;function P(){return(P=e((()=>{o(),l(),C(),E(),p(),x(),h(),d(),y(),_(),k=n(),A={title:`Navigation/Tabs`,component:v,parameters:D(`Tabs`,T,w),argTypes:{selectedId:{control:{type:`select`},options:[`groups`,`news`,`recommendations`,`friends`,`photos`]}},tags:[`Навигация`]},j=e=>{let t=e.count,n=[(0,k.jsx)(b,{id:`groups`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(s,{}),children:`Сообщества`},`groups`),(0,k.jsx)(b,{id:`news`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(s,{}),children:`Лента`},`news`),(0,k.jsx)(b,{id:`recommendations`,before:(0,k.jsx)(a,{}),after:(0,k.jsx)(s,{}),status:(0,k.jsx)(m,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,k.jsx)(b,{id:`friends`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(s,{}),status:(0,k.jsx)(S,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,k.jsx)(b,{id:`photos`,before:(0,k.jsx)(c,{}),after:(0,k.jsx)(s,{}),status:23,children:`Фотографии`},`photos`)].slice(0,t);return(0,k.jsx)(g,{children:(0,k.jsx)(v,{...e,children:n})})},j.args={defaultSelectedId:`groups`,count:5},M=e=>(0,k.jsx)(g,{style:{maxWidth:500},children:(0,k.jsx)(v,{...e,children:(0,k.jsxs)(f,{arrowSize:`m`,children:[(0,k.jsx)(b,{id:`groups`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(s,{}),children:`Сообщества`},`groups`),(0,k.jsx)(b,{id:`news`,before:(0,k.jsx)(r,{}),after:(0,k.jsx)(s,{}),children:`Лента`},`news`),(0,k.jsx)(b,{id:`recommendations`,before:(0,k.jsx)(a,{}),after:(0,k.jsx)(s,{}),status:(0,k.jsx)(m,{mode:`prominent`,children:`Есть обновления`}),children:`Рекомендации`},`recommendations`),(0,k.jsx)(b,{id:`friends`,before:(0,k.jsx)(i,{}),after:(0,k.jsx)(s,{}),status:(0,k.jsx)(S,{mode:`primary`,appearance:`accent-red`,size:`s`,children:`3`}),children:`Друзья`},`friends`),(0,k.jsx)(b,{id:`photos`,before:(0,k.jsx)(c,{}),after:(0,k.jsx)(s,{}),status:23,children:`Фотографии`},`photos`)]})})}),M.args={defaultSelectedId:`groups`,withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:`center`},M.decorators=[u],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: StoryTabsProps) => {
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
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`WithHorizontalScroll`]})))()}export{O as n,P as r,j as t};