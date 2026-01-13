import{j as r,w as n,b as c,c as u}from"./iframe-DP0c1f9Y.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-C--pQgbh.js";import{G as v}from"./Group-uVVNnULv.js";import{I as y}from"./Image-BGmFDCcH.js";import{H as s}from"./HorizontalCell-D9sNMBSe.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BRHZAyUc.js";import"./Footnote-DJoQQEv9.js";import"./ImageBase-CQrk3-c4.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./ImageBaseBadge-D4hwrB2F.js";import"./useColorScheme-DuZucal0.js";import"./InputUtils-DpvhaK12.js";import"./useFocusWithin-CvS6Su5o.js";import"./useIsClient-RcRRrgRO.js";import"./Avatar-CijdxBeh.js";import"./useConfigDirection-BNkwGAZM.js";import"./online_mobile_12-Qc0twRcH.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./helpers-QklJbEbU.js";import"./Tappable-B2ZLiGfg.js";import"./Caption-Bf2pK2j4.js";import"./Subhead-CZ6CT0II.js";const X={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
