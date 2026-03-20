import{j as r,w as n,b as c,c as u}from"./iframe-CmkY54f5.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-DLqfh1Mm.js";import{G as v}from"./Group-6J2U7NrK.js";import{I as y}from"./Image-BPsQqnd-.js";import{H as p}from"./HorizontalCell-DQjc4N4I.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-Yg_CjNhz.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./ImageBase-CuKHTYYu.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./ImageBaseBadge-qpJE4NP2.js";import"./useColorScheme-BCWY6G93.js";import"./InputUtils-UNO81DKX.js";import"./useFocusWithin-BymUKlkD.js";import"./useIsClient-B2WktGOw.js";import"./Avatar-BFe2Ipz7.js";import"./useConfigDirection-Duqs0EiT.js";import"./online_mobile_12-C2QZUa5e.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-DW-ilhli.js";import"./Caption-CsrSECTC.js";import"./Subhead-BS8ES9bw.js";const Z={title:"Data Display/HorizontalCell",component:p,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...s}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(p,{title:a.title,...s,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const $=["Playground"];export{o as Playground,$ as __namedExportsOrder,Z as default};
