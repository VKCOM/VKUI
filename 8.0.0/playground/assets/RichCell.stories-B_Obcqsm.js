import{n as e,r as t}from"./chunk-BneVvdWh.js";import{i as n,n as r,r as i,yo as a}from"./iframe-DYsbkMbM.js";import{n as o,t as s}from"./Button-Bn0gUV0z.js";import{n as c,t as l}from"./ButtonGroup-DcYvIP5f.js";import{n as u,t as d}from"./Group-IwBqagW_.js";import{n as f,t as p}from"./RichCell-DNcXZukE.js";import{n as m,t as h}from"./Avatar-B74GJaOW.js";import{n as g,t as _}from"./UsersStack-BuC9JPs1.js";import{i as v,n as y,r as b,t as x}from"./constants-CXYaXe_q.js";import{n as S,t as C}from"./createStoryParameters-CbXzS3a6.js";import{r as w}from"./getFormFieldIconsPresets-CZ22RewF.js";import{t as T}from"./presets-BahE6g_I.js";import{n as E,o as D}from"./mock-CFHZcj-X.js";var O=t({Playground:()=>j,__namedExportsOrder:()=>M,default:()=>A}),k,A,j,M,N=e((()=>{r(),v(),D(),T(),S(),m(),o(),c(),u(),g(),f(),k=a(),A={title:`Data Display/RichCell`,component:p,parameters:C(`RichCell`,x,y),argTypes:{overTitle:b,subtitle:b,extraSubtitle:b,children:b,maxAfterWidth:{control:`number`},after:w({iconSizes:[`28`],additionalPresets:{Text:`After`,LongText:`Very long after`.repeat(5),Button:(0,k.jsx)(s,{children:`Подписаться`})}}),afterCaption:b,meta:b,submeta:b,before:w({additionalPresets:{Avatar40:(0,k.jsx)(h,{size:40,src:E()}),Avatar48:(0,k.jsx)(h,{size:48,src:E()}),Avatar72:(0,k.jsx)(h,{size:72,src:E()})}}),bottom:w({additionalPresets:{UsersStack:(0,k.jsx)(_,{size:`m`,photos:[E(),E(),E(),E()]})}}),actions:w({additionalPresets:{PrimaryButton:(0,k.jsx)(s,{mode:`primary`,size:`s`,children:`Принять`}),SecondaryButton:(0,k.jsx)(s,{mode:`secondary`,size:`s`,children:`Отменить`}),ButtonsGroup:(0,k.jsxs)(l,{mode:`horizontal`,gap:`s`,stretched:!0,children:[(0,k.jsx)(s,{mode:`primary`,size:`s`,children:`Принять`}),(0,k.jsx)(s,{mode:`secondary`,size:`s`,children:`Отменить`})]})}})},tags:[`Отображение данных`]},j={args:{before:`Avatar72`,overTitle:`Over Title`,subtitle:`Subtitle`,extraSubtitle:`Extra Subtitle`,meta:`Meta`,submeta:`Submeta`,maxAfterWidth:100,maxMetaWidth:100,children:`Example`},decorators:[(e,t)=>(0,k.jsx)(d,{children:(0,k.jsx)(e,{...t.args})}),i,n],render:({maxAfterWidth:e,maxMetaWidth:t,afterCaption:n,after:r,meta:i,submeta:a,...o})=>{let s=(e,t)=>e!==void 0&&t?(0,k.jsx)(`div`,{style:{maxWidth:e},children:t}):t;return(0,k.jsx)(p,{after:s(e,r),afterCaption:s(e,n),meta:s(t,i),submeta:s(t,a),...o})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}));export{O as n,N as r,j as t};