import{b as n,w as c,j as r,E as u}from"./iframe-OAvG3iJ-.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-KFM_xxXO.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-Cfg1JM6V.js";import{G as v}from"./Group-DBjl1Ywq.js";import{I as y}from"./Image-CrTEnsTD.js";import{H as s}from"./HorizontalCell-xRXWvgpN.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-TC-23xBl.js";import"./Footnote-Fnz7EDP7.js";import"./ImageBase-mTZnpbEK.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./ImageBaseBadge-DET_R2n_.js";import"./useColorScheme--3xcMoVc.js";import"./InputUtils-D-RvHd2H.js";import"./useFocusWithin-lydw_Auo.js";import"./useIsClient-DWkou9dw.js";import"./Avatar-BrxjTsBH.js";import"./useConfigDirection-EOrqXudq.js";import"./online_mobile_12-BNH-O2OP.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-hYlNxVzd.js";import"./Caption-Dncllwwc.js";import"./Subhead-Bec_-0uq.js";const Y={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
