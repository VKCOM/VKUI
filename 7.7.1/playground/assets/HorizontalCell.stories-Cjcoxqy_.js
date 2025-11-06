import{j as r,w as d,b as g,c as f}from"./iframe-dTlwAXGa.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{F as _}from"./Flex-DdaADNh9.js";import{G as C}from"./Group-CrremWw-.js";import{I as b}from"./Image-CJu9jDBT.js";import{H as n}from"./HorizontalCell-C1Aw0h8-.js";import"./preload-helper-Dp1pzeXC.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DJb5ZlwN.js";import"./ImageBase-AJ3e9bE9.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Gqd0lug3.js";import"./useColorScheme-BL3jX5yR.js";import"./InputUtils-CtGJ0DI4.js";import"./useFocusWithin-kuId0kJs.js";import"./useIsClient-BVOBl7-A.js";import"./Avatar-D1LFFtlD.js";import"./useConfigDirection-BIk700TM.js";import"./online_mobile_12-CBAdE4s5.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-qMfTC7Pz.js";import"./Caption-BzXaktSd.js";import"./Subhead-BlOKXAAl.js";const tr={title:"Data Display/HorizontalCell",component:n,parameters:y("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...c}){const u=f();return r.jsx(_,{children:i.map(a=>r.jsx(n,{title:a.title,...c,children:r.jsx(b,{size:u==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(C,{children:r.jsx(e,{...i.args})}),d,g]};var p,s,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
