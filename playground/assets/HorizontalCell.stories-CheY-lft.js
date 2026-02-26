import{j as r,b as n,w as c,B as u}from"./iframe-C4bTyPBQ.js";import{S as l,D as d,C as g}from"./constants-DdkjnEgz.js";import{g as t}from"./mock-KFM_xxXO.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{F as x}from"./Flex-BzibNvH8.js";import{G as v}from"./Group-B0qSQvWx.js";import{I as y}from"./Image-DSb-Miue.js";import{H as s}from"./HorizontalCell-BnnwsX7F.js";import"./preload-helper-PPVm8Dsz.js";import"./gaps-BaMG6Eg5.js";import"./Footnote-wW_hecXF.js";import"./ImageBase-DM5ndQnB.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./ImageBaseBadge-oFfOfujq.js";import"./useColorScheme-B5qdSLTx.js";import"./InputUtils-Ns7QNyDT.js";import"./useFocusWithin-CWJCpHmP.js";import"./useIsClient-B8qKshG4.js";import"./Avatar-Bsyc_Tpa.js";import"./useConfigDirection-OBrCdmzr.js";import"./online_mobile_12-CQS8ULfi.js";import"./SvgIconRootV2-DbftVVP5.js";import"./helpers-QklJbEbU.js";import"./Tappable-BZW__-HP.js";import"./Caption-D_3C1Hvb.js";import"./Subhead-CGMBr7DJ.js";const X={title:"Data Display/HorizontalCell",component:s,parameters:f("HorizontalCell",g,d),argTypes:{subtitle:l,extraSubtitle:l},tags:["Отображение данных"]},o={render:function({values:i,...p}){const m=u();return r.jsx(x,{children:i.map(a=>r.jsx(s,{title:a.title,...p,children:r.jsx(y,{size:m==="ios"?64:56,borderRadius:"l",src:a.icon})},a.id))})},args:{values:[{id:1,title:"Промокот",icon:t("app_promokot")},{id:2,title:"Разделите счёт",icon:t("app_split_bill")},{id:3,title:"Рассылки",icon:t("app_emails")},{id:4,title:"Тексты песен",icon:t("app_lyrics")}]},decorators:[(e,i)=>r.jsx(v,{children:r.jsx(e,{...i.args})}),n,c]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
