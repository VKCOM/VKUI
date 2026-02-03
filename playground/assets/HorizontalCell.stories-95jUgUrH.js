import{j as r,w as n,b as c,c as u}from"./iframe-C4ttrVUJ.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-DGfzNkAG.js";import{G as v}from"./Group-CRpAXhsk.js";import{I as y}from"./Image-DKxpU88w.js";import{H as p}from"./HorizontalCell-Bkr4Vz54.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D7DVMFfP.js";import"./ImageBase-Cq87jgCn.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./ImageBaseBadge-Cjn2Y5VK.js";import"./useColorScheme-CRY_65bE.js";import"./InputUtils-CD1Rp_t7.js";import"./useFocusWithin-BAJNppfT.js";import"./useIsClient-CcDyD4m-.js";import"./Avatar-DLLE7n5t.js";import"./useConfigDirection-DvmYVNBa.js";import"./online_mobile_12-CiSPADre.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-CL0fK4DO.js";import"./Caption-Den-IMPb.js";import"./Subhead-ChzeQqTJ.js";const Z={title:"Data Display/HorizontalCell",component:p,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...s}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(p,{title:a.title,...s,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
