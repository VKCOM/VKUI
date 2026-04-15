import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./usePlatform-BWVnZ007.js";import{n as i,r as a,t as o}from"./VKUIDecorators-BYQp_QSp.js";import{n as s,t as c}from"./Flex-D-69d2T4.js";import{n as l,t as u}from"./Group-iqbU7m06.js";import{n as d,t as f}from"./HorizontalCell-ivPwWfez.js";import{n as p,t as m}from"./Image-dIqcPg-e.js";import{i as h,n as g,r as _,t as v}from"./constants-Dj6vOzIh.js";import{n as y,t as b}from"./createStoryParameters-pz1UrWMe.js";import{n as x,o as S}from"./mock-D9mwry-3.js";var C,w,T,E,D=e((()=>{r(),o(),h(),S(),y(),s(),l(),p(),d(),C=t(),w={title:`Data Display/HorizontalCell`,component:f,parameters:b(`HorizontalCell`,v,g),argTypes:{subtitle:_,extraSubtitle:_},tags:[`Отображение данных`]},T={render:function({values:e,...t}){let r=n();return(0,C.jsx)(c,{children:e.map(e=>(0,C.jsx)(f,{title:e.title,...t,children:(0,C.jsx)(m,{size:r===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})},args:{values:[{id:1,title:`Промокот`,icon:x(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:x(`app_split_bill`)},{id:3,title:`Рассылки`,icon:x(`app_emails`)},{id:4,title:`Тексты песен`,icon:x(`app_lyrics`)}]},decorators:[(e,t)=>(0,C.jsx)(u,{children:(0,C.jsx)(e,{...t.args})}),i,a]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render({
    values,
    ...args
  }) {
    const platform = usePlatform();
    return <Flex>
        {values.map(value => {
        return <HorizontalCell key={value.id} title={value.title} {...args}>
              <Image size={platform === 'ios' ? 64 : 56} borderRadius="l" src={value.icon} />
            </HorizontalCell>;
      })}
      </Flex>;
  },
  args: {
    values: [{
      id: 1,
      title: 'Промокот',
      icon: getAvatarUrl('app_promokot')
    }, {
      id: 2,
      title: 'Разделите счёт',
      icon: getAvatarUrl('app_split_bill')
    }, {
      id: 3,
      title: 'Рассылки',
      icon: getAvatarUrl('app_emails')
    }, {
      id: 4,
      title: 'Тексты песен',
      icon: getAvatarUrl('app_lyrics')
    }]
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}));export{w as i,E as n,D as r,T as t};