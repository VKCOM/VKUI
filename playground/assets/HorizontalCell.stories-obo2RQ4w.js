import{j as r,w as u,b as g,d as f}from"./iframe-DDos8QSD.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{F as y}from"./Flex-D8iXIcI-.js";import{G as C}from"./Group-BdSAzhLh.js";import{I as b}from"./Image-Se-pZ0kj.js";import{H as n}from"./HorizontalCell-2VZVuKyD.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DolN14Rp.js";import"./ImageBase-DfIHrg5j.js";import"./Clickable-CWxsm2KA.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-duB4zrMc.js";import"./useColorScheme-DqjxLW2f.js";import"./InputUtils-Dyyzogrc.js";import"./useFocusWithin-Cy7ZAR8z.js";import"./useIsClient-CKD-xsUI.js";import"./Avatar-D7U-bWyu.js";import"./useConfigDirection-BVLc7CyO.js";import"./online_mobile_12-Ct9KWEFO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./helpers-QklJbEbU.js";import"./Tappable-B0kWxOOO.js";import"./Caption-C8aMWNCU.js";import"./Subhead-94kqPIfE.js";const Z={title:"Blocks/HorizontalCell",component:n,parameters:_("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l}},o={render:function({values:i,...c}){const d=f();return r.jsx(y,{children:i.map(e=>r.jsx(n,{title:e.title,...c,children:r.jsx(b,{size:d==="ios"?64:56,borderRadius:"l",src:e.icon})},e.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(a,i)=>r.jsx(C,{children:r.jsx(a,{...i.args})}),u,g]};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $=["Playground"];export{o as Playground,$ as __namedExportsOrder,Z as default};
