import{b as n,w as c,j as r,E as u}from"./iframe-Cn0klKvz.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-KFM_xxXO.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-BH7NtNud.js";import{G as v}from"./Group-CNhzxREQ.js";import{I as y}from"./Image-DioABL8J.js";import{H as s}from"./HorizontalCell-B7cu1S5x.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BaMG6Eg5.js";import"./Footnote-BwZkqEqY.js";import"./ImageBase-BDlDuAlq.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useColorScheme-C7zCwRzY.js";import"./InputUtils-B6qCikuW.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./Avatar-CT-zlOwi.js";import"./useConfigDirection-DuEYXWS_.js";import"./online_mobile_12-BKRTJpWf.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./helpers-QklJbEbU.js";import"./Tappable-CVh4vgq8.js";import"./Caption-Bj6KpxiH.js";import"./Subhead-BQyoBjlR.js";const X={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["Playground"];export{o as Playground,Y as __namedExportsOrder,X as default};
