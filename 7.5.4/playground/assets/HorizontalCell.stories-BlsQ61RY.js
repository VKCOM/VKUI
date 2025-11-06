import{j as r,w as u,b as g,d as f}from"./iframe-DQDZnzQe.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{F as _}from"./Flex-CAa4CqOp.js";import{G as C}from"./Group-qnf_xRXF.js";import{I as b}from"./Image-DyhjwEtW.js";import{H as n}from"./HorizontalCell-DLoxlbc1.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./ImageBase-VWSBvzf0.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BUi6r-Q8.js";import"./useColorScheme-alZiR8qg.js";import"./InputUtils-CKZOM7f4.js";import"./useFocusWithin-DP8QP68V.js";import"./useIsClient-w_GYH5P_.js";import"./Avatar-4IjQEWlF.js";import"./useConfigDirection-CFM_wEcG.js";import"./online_mobile_12-BObMLxiO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./helpers-QklJbEbU.js";import"./Tappable-GGjjvyZD.js";import"./Caption-BxTGQxAz.js";import"./Subhead-CV6mVfj0.js";const $={title:"Data Display/HorizontalCell",component:n,parameters:y("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...c}){const d=f();return r.jsx(_,{children:i.map(a=>r.jsx(n,{title:a.title,...c,children:r.jsx(b,{size:d==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(C,{children:r.jsx(e,{...i.args})}),u,g]};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const rr=["Playground"];export{o as Playground,rr as __namedExportsOrder,$ as default};
