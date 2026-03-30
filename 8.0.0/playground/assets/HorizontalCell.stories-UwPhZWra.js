import{n as e,r as t}from"./chunk-BneVvdWh.js";import{_t as n,i as r,n as i,r as a,vt as o,yo as s}from"./iframe-DYsbkMbM.js";import{n as c,t as l}from"./Flex-CNw6TAYz.js";import{n as u,t as d}from"./Group-IwBqagW_.js";import{n as f,t as p}from"./HorizontalCell-CD2-yfg7.js";import{n as m,t as h}from"./Image-Anb3V6hT.js";import{i as g,n as _,r as v,t as y}from"./constants-CXYaXe_q.js";import{n as b,t as x}from"./createStoryParameters-CbXzS3a6.js";import{n as S,o as C}from"./mock-CFHZcj-X.js";var w=t({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),T,E,D,O,k=e((()=>{n(),i(),g(),C(),b(),c(),u(),m(),f(),T=s(),E={title:`Data Display/HorizontalCell`,component:p,parameters:x(`HorizontalCell`,y,_),argTypes:{subtitle:v,extraSubtitle:v},tags:[`Отображение данных`]},D={render:function({values:e,...t}){let n=o();return(0,T.jsx)(l,{children:e.map(e=>(0,T.jsx)(p,{title:e.title,...t,children:(0,T.jsx)(h,{size:n===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})},args:{values:[{id:1,title:`Промокот`,icon:S(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:S(`app_split_bill`)},{id:3,title:`Рассылки`,icon:S(`app_emails`)},{id:4,title:`Тексты песен`,icon:S(`app_lyrics`)}]},decorators:[(e,t)=>(0,T.jsx)(d,{children:(0,T.jsx)(e,{...t.args})}),a,r]},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}));export{D as n,k as r,w as t};