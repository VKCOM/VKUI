import{j as r,w as n,b as c,c as u}from"./iframe-BJ9555aC.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-CiudtyON.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-DmNTXycq.js";import{G as v}from"./Group-DpwBrIOF.js";import{I as y}from"./Image-BcO8fath.js";import{H as s}from"./HorizontalCell-BacFtNb6.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-DqOl4b8v.js";import"./Footnote-xxqNAETB.js";import"./ImageBase-DZszct4G.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./ImageBaseBadge-CeubzczD.js";import"./useColorScheme-DvMUZASe.js";import"./InputUtils-8LhFcqKY.js";import"./useFocusWithin-ClOWbdUU.js";import"./useIsClient-veih0UT_.js";import"./Avatar-B5z-sg0O.js";import"./useConfigDirection-BeEtg5OO.js";import"./online_mobile_12-C_FfJS6S.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Tappable-Bz7LtOMO.js";import"./Caption-BrB5DlXi.js";import"./Subhead-ppzL9p3g.js";const Y={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
