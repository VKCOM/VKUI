import{j as r,w as u,b as g,d as f}from"./iframe-DTUKIQpa.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{F as y}from"./Flex-BfdKrZrN.js";import{G as C}from"./Group-CZGORHer.js";import{I as b}from"./Image-CHi4h8Uv.js";import{H as n}from"./HorizontalCell-ClXKWJ-_.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-rQhC0WQs.js";import"./ImageBase-5nov2l7v.js";import"./Clickable-DRtJbe2S.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DKeE-0Mw.js";import"./useColorScheme-BGAH8gMd.js";import"./InputUtils-Db1DLuWS.js";import"./useFocusWithin-BaNto5dO.js";import"./useIsClient-B-5KeZKv.js";import"./Avatar-CSba3fV-.js";import"./useConfigDirection-Cb5ryD04.js";import"./online_mobile_12-BsDhKzk-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./helpers-QklJbEbU.js";import"./Tappable-Br6ZM5HO.js";import"./Caption-D0cKPzOT.js";import"./Subhead-C7vbIoTq.js";const Z={title:"Blocks/HorizontalCell",component:n,parameters:_("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l}},o={render:function({values:i,...c}){const d=f();return r.jsx(y,{children:i.map(e=>r.jsx(n,{title:e.title,...c,children:r.jsx(b,{size:d==="ios"?64:56,borderRadius:"l",src:e.icon})},e.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(a,i)=>r.jsx(C,{children:r.jsx(a,{...i.args})}),u,g]};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $=["Playground"];export{o as Playground,$ as __namedExportsOrder,Z as default};
