import{j as r,w as n,b as c,c as u}from"./iframe-D-vjmezP.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-C_be27FX.js";import{G as v}from"./Group-knjA_28m.js";import{I as y}from"./Image-BANFEh34.js";import{H as s}from"./HorizontalCell-BQtT57xH.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BRHZAyUc.js";import"./Footnote-DApQXU2r.js";import"./ImageBase-CkGCWqjD.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./ImageBaseBadge-B9AwrgDG.js";import"./useColorScheme-B_PTVyib.js";import"./InputUtils-DJ5DGhwp.js";import"./useFocusWithin-BzKDlGXW.js";import"./useIsClient-Ddk0YKn4.js";import"./Avatar-DAWW409u.js";import"./useConfigDirection-BUJREPxm.js";import"./online_mobile_12-DwEtobzc.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-DMeLy5rU.js";import"./Caption-Cdq4IzHJ.js";import"./Subhead-DCgRz-zo.js";const Y={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
