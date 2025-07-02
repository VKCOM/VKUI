import{j as r,w as u,b as g,d as f}from"./iframe-BW2_2Sqh.js";import{S as l,D as x,C as v}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-BznupqUM.js";import{c as _}from"./createStoryParameters-CcwS40kl.js";import{F as y}from"./Flex-DFbImX0X.js";import{G as C}from"./Group-CUaPdFZ2.js";import{I as b}from"./Image-DeTqP2HE.js";import{H as n}from"./HorizontalCell-BGr36AFd.js";import"./gaps-BRHZAyUc.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DqSrPGSc.js";import"./ImageBase-CoAaMLqa.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DZQOp4mD.js";import"./useColorScheme-DfFLwB8B.js";import"./InputUtils-DYuPlK4j.js";import"./useFocusWithin-Cv8cds6L.js";import"./useIsClient-fZBb-eaz.js";import"./Avatar-C504pHwc.js";import"./useConfigDirection-DNUhHzMQ.js";import"./online_mobile_12-Dt81a55b.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./helpers-QklJbEbU.js";import"./Tappable-D_Pc41Ky.js";import"./Caption-B3YPJibB.js";import"./Subhead-BlMIzlRi.js";const Z={title:"Blocks/HorizontalCell",component:n,parameters:_("HorizontalCell",v,x),argTypes:{subtitle:l,extraSubtitle:l}},o={render:function({values:i,...c}){const d=f();return r.jsx(y,{children:i.map(e=>r.jsx(n,{title:e.title,...c,children:r.jsx(b,{size:d==="ios"?64:56,borderRadius:"l",src:e.icon})},e.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(a,i)=>r.jsx(C,{children:r.jsx(a,{...i.args})}),u,g]};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
