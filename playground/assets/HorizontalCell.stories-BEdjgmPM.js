import{j as r,w as n,b as c,c as u}from"./iframe-DhuutAfC.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-DMMHnnCT.js";import{G as v}from"./Group-BZNrT2Zp.js";import{I as y}from"./Image-BBx_bkbK.js";import{H as p}from"./HorizontalCell-PyWN0afL.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./ImageBase-DRHnsmF9.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./ImageBaseBadge-C-TjMgFh.js";import"./useColorScheme-BGUvzePH.js";import"./InputUtils-BcFat9xH.js";import"./useFocusWithin-TQRavq7I.js";import"./useIsClient-C6EQizwd.js";import"./Avatar-CfoX7h1q.js";import"./useConfigDirection-BKOpe2-3.js";import"./online_mobile_12-B0P5OQgy.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-tvWVp5xX.js";import"./Caption-BhiEFCof.js";import"./Subhead-N3Y6Abab.js";const Z={title:"Data Display/HorizontalCell",component:p,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...s}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(p,{title:a.title,...s,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
