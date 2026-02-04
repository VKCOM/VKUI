import{j as r,b as n,w as c,B as u}from"./iframe-CDzsgUJ6.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-KFM_xxXO.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-BmPCO_o2.js";import{G as v}from"./Group-BHUvSep0.js";import{I as y}from"./Image-jT-1CpcD.js";import{H as s}from"./HorizontalCell-Du1Zw8Sc.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-DqOl4b8v.js";import"./Footnote-EhoXcm5o.js";import"./ImageBase-Dib2k8_n.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./ImageBaseBadge-BJaRDGAe.js";import"./useColorScheme-BJ9q12Ap.js";import"./InputUtils-DkBsdccT.js";import"./useFocusWithin-UKmiu0Co.js";import"./useIsClient-CDj3wCHu.js";import"./Avatar-P09vjEf9.js";import"./useConfigDirection-BVbAx_rU.js";import"./online_mobile_12-D0RCPVny.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-BF8rCM_k.js";import"./Caption-Boi85h93.js";import"./Subhead-BNbydgjR.js";const Y={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Z=["Playground"];export{o as Playground,Z as __namedExportsOrder,Y as default};
