import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,Mt as i,jt as a}from"./iframe-33ykgUxE.js";import{n as o,t as s}from"./Button-DT035ZIy.js";import{n as c,t as l}from"./ButtonGroup-QQHhiMTW.js";import{n as u,t as d}from"./Group-Bp-h8t_O.js";import{n as f,t as p}from"./RichCell-P5abAQUt.js";import{n as m,t as h}from"./Avatar-DoiR7xFu.js";import{n as g,t as _}from"./UsersStack-CvIIhtLJ.js";import{i as v,n as y,r as b,t as x}from"./constants-DBkyy3CT.js";import{n as S,t as C}from"./createStoryParameters-DBkK1CfQ.js";import{n as w,t as T}from"./createFieldWithPresets-8nzub44p.js";import{n as E,o as D}from"./mock-CkzEkxhs.js";var O=t({Playground:()=>j,__namedExportsOrder:()=>M,default:()=>A}),k,A,j,M;function N(){return(N=e((()=>{r(),v(),D(),w(),S(),m(),o(),c(),u(),g(),f(),k=n(),A={title:`Data Display/RichCell`,component:p,parameters:C(`RichCell`,x,y),argTypes:{overTitle:b,subtitle:b,extraSubtitle:b,children:b,maxAfterWidth:{control:`number`},after:T({iconSizes:[`28`],additionalPresets:{Text:`After`,LongText:`Very long after`.repeat(5),Button:(0,k.jsx)(s,{children:`Подписаться`})}}),afterCaption:b,meta:b,submeta:b,before:T({additionalPresets:{Avatar40:(0,k.jsx)(h,{size:40,src:E()}),Avatar48:(0,k.jsx)(h,{size:48,src:E()}),Avatar72:(0,k.jsx)(h,{size:72,src:E()})}}),bottom:T({additionalPresets:{UsersStack:(0,k.jsx)(_,{size:`m`,photos:[E(),E(),E(),E()]})}}),actions:T({additionalPresets:{PrimaryButton:(0,k.jsx)(s,{mode:`primary`,size:`s`,children:`Принять`}),SecondaryButton:(0,k.jsx)(s,{mode:`secondary`,size:`s`,children:`Отменить`}),ButtonsGroup:(0,k.jsxs)(l,{mode:`horizontal`,gap:`s`,stretched:!0,children:[(0,k.jsx)(s,{mode:`primary`,size:`s`,children:`Принять`}),(0,k.jsx)(s,{mode:`secondary`,size:`s`,children:`Отменить`})]})}})},tags:[`Отображение данных`]},j=({maxAfterWidth:e,maxMetaWidth:t,afterCaption:n,after:r,meta:i,submeta:a,...o})=>{let s=(e,t)=>e!==void 0&&t?(0,k.jsx)(`div`,{style:{maxWidth:e},children:t}):t,c=s(e,r),l=s(e,n),u=s(t,i),f=s(t,a);return(0,k.jsx)(d,{children:(0,k.jsx)(p,{after:c,afterCaption:l,meta:u,submeta:f,...o})})},j.args={before:`Avatar72`,overTitle:`Over Title`,subtitle:`Subtitle`,extraSubtitle:`Extra Subtitle`,meta:`Meta`,submeta:`Submeta`,maxAfterWidth:100,maxMetaWidth:100,children:`Example`},j.decorators=[a,i],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`({
  maxAfterWidth,
  maxMetaWidth,
  afterCaption: afterCaptionProp,
  after: afterProp,
  meta: metaProp,
  submeta: submetaProp,
  ...args
}: RichCellStoryProps) => {
  const withMaxWidth = (maxWidth: number, prop: React.ReactNode) => {
    return maxWidth !== undefined && prop ? <div style={{
      maxWidth
    }}>
        {prop}
      </div> : prop;
  };
  const after = withMaxWidth(maxAfterWidth, afterProp);
  const afterCaption = withMaxWidth(maxAfterWidth, afterCaptionProp);
  const meta = withMaxWidth(maxMetaWidth, metaProp);
  const submeta = withMaxWidth(maxMetaWidth, submetaProp);
  return <Group>
      <RichCell after={after} afterCaption={afterCaption} meta={meta} submeta={submeta} {...args} />
    </Group>;
}`,...j.parameters?.docs?.source}}},M=[`Playground`]})))()}export{O as n,N as r,j as t};