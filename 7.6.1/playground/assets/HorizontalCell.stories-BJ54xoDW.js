import{j as r,w as d,b as g,c as f}from"./iframe-CdtcRMP-.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{F as _}from"./Flex-DP1hTtp-.js";import{G as C}from"./Group-BPDDF8j8.js";import{I as b}from"./Image-Dqqpopj7.js";import{H as n}from"./HorizontalCell-Cpag1eZk.js";import"./preload-helper-Dp1pzeXC.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-UnTPOYYT.js";import"./ImageBase-BuKB8O3U.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-ClYqcA4W.js";import"./useColorScheme-Bqwp8l3s.js";import"./InputUtils-4kqGTgL9.js";import"./useFocusWithin-CnBAXQ2U.js";import"./useIsClient-B7bjAOfN.js";import"./Avatar-BXKCkIBT.js";import"./useConfigDirection-I0bRjt3K.js";import"./online_mobile_12--qRJFinP.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-znRvcKvt.js";import"./Caption-DOhalbqy.js";import"./Subhead-DKX6pZDk.js";const rr={title:"Data Display/HorizontalCell",component:n,parameters:y("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...c}){const u=f();return r.jsx(_,{children:i.map(a=>r.jsx(n,{title:a.title,...c,children:r.jsx(b,{size:u==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(C,{children:r.jsx(e,{...i.args})}),d,g]};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const tr=["Playground"];export{o as Playground,tr as __namedExportsOrder,rr as default};
