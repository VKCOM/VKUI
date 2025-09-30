import{j as r,w as d,b as g,c as f}from"./iframe-qoTtUH8h.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{F as _}from"./Flex-BMkjpocR.js";import{G as C}from"./Group-jWXxgMZf.js";import{I as b}from"./Image-BK5GoqvQ.js";import{H as n}from"./HorizontalCell-kiCaXVle.js";import"./preload-helper-Dp1pzeXC.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./ImageBase-DjQ3psw2.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-taKiFPaz.js";import"./useColorScheme-xLZC0aKi.js";import"./InputUtils-DCqC4s6H.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./Avatar-CkZgodeV.js";import"./useConfigDirection-DgRc04K6.js";import"./online_mobile_12-ucwY04eZ.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-D-SlRlKJ.js";import"./Caption-bIdYMpTC.js";import"./Subhead-B5MAyB6Q.js";const tr={title:"Data Display/HorizontalCell",component:n,parameters:y("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...c}){const u=f();return r.jsx(_,{children:i.map(a=>r.jsx(n,{title:a.title,...c,children:r.jsx(b,{size:u==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(C,{children:r.jsx(e,{...i.args})}),d,g]};var p,s,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const or=["Playground"];export{o as Playground,or as __namedExportsOrder,tr as default};
