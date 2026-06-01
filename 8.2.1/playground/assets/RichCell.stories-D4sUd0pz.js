import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,r,t as i}from"./VKUIDecorators-Cw7mpMEU.js";import{n as a,t as o}from"./Button-OB3j1Ozm.js";import{n as s,t as c}from"./ButtonGroup-Cpm7CESt.js";import{n as l,t as u}from"./Group-DD2Hku-5.js";import{n as d,t as f}from"./RichCell-A5N5CxM9.js";import{n as p,t as m}from"./Avatar-DfGCZhtn.js";import{n as h,t as g}from"./UsersStack-BcHlzNMr.js";import{i as _,n as v,r as y,t as b}from"./constants-Cl1OGm0b.js";import{n as x,t as S}from"./createStoryParameters-DRBt1LSH.js";import{r as C}from"./getFormFieldIconsPresets-BaTG0kDc.js";import{t as w}from"./presets-B0xvKBWY.js";import{n as T,o as E}from"./mock-idUVl18T.js";var D,O,k,A,j=e((()=>{i(),_(),E(),w(),x(),p(),a(),s(),l(),h(),d(),D=t(),O={title:`Data Display/RichCell`,component:f,parameters:S(`RichCell`,b,v),argTypes:{overTitle:y,subtitle:y,extraSubtitle:y,children:y,maxAfterWidth:{control:`number`},after:C({iconSizes:[`28`],additionalPresets:{Text:`After`,LongText:`Very long after`.repeat(5),Button:(0,D.jsx)(o,{children:`Подписаться`})}}),afterCaption:y,meta:y,submeta:y,before:C({additionalPresets:{Avatar40:(0,D.jsx)(m,{size:40,src:T()}),Avatar48:(0,D.jsx)(m,{size:48,src:T()}),Avatar72:(0,D.jsx)(m,{size:72,src:T()})}}),bottom:C({additionalPresets:{UsersStack:(0,D.jsx)(g,{size:`m`,photos:[T(),T(),T(),T()]})}}),actions:C({additionalPresets:{PrimaryButton:(0,D.jsx)(o,{mode:`primary`,size:`s`,children:`Принять`}),SecondaryButton:(0,D.jsx)(o,{mode:`secondary`,size:`s`,children:`Отменить`}),ButtonsGroup:(0,D.jsxs)(c,{mode:`horizontal`,gap:`s`,stretched:!0,children:[(0,D.jsx)(o,{mode:`primary`,size:`s`,children:`Принять`}),(0,D.jsx)(o,{mode:`secondary`,size:`s`,children:`Отменить`})]})}})},tags:[`Отображение данных`]},k={args:{before:`Avatar72`,overTitle:`Over Title`,subtitle:`Subtitle`,extraSubtitle:`Extra Subtitle`,meta:`Meta`,submeta:`Submeta`,maxAfterWidth:100,maxMetaWidth:100,children:`Example`},decorators:[(e,t)=>(0,D.jsx)(u,{children:(0,D.jsx)(e,{...t.args})}),n,r],render:({maxAfterWidth:e,maxMetaWidth:t,afterCaption:n,after:r,meta:i,submeta:a,...o})=>{let s=(e,t)=>e!==void 0&&t?(0,D.jsx)(`div`,{style:{maxWidth:e},children:t}):t;return(0,D.jsx)(f,{after:s(e,r),afterCaption:s(e,n),meta:s(t,i),submeta:s(t,a),...o})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    before: 'Avatar72',
    overTitle: 'Over Title',
    subtitle: 'Subtitle',
    extraSubtitle: 'Extra Subtitle',
    meta: 'Meta',
    submeta: 'Submeta',
    maxAfterWidth: 100,
    maxMetaWidth: 100,
    children: 'Example'
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout],
  render: ({
    maxAfterWidth,
    maxMetaWidth,
    afterCaption: afterCaptionProp,
    after: afterProp,
    meta: metaProp,
    submeta: submetaProp,
    ...args
  }) => {
    const withMaxWidth = (maxWidth: number, prop: React.ReactNode) => {
      return maxWidth !== undefined && prop ? <div style={{
        maxWidth
      }}>{prop}</div> : prop;
    };
    const after = withMaxWidth(maxAfterWidth, afterProp);
    const afterCaption = withMaxWidth(maxAfterWidth, afterCaptionProp);
    const meta = withMaxWidth(maxMetaWidth, metaProp);
    const submeta = withMaxWidth(maxMetaWidth, submetaProp);
    return <RichCell after={after} afterCaption={afterCaption} meta={meta} submeta={submeta} {...args} />;
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}));export{O as i,A as n,j as r,k as t};