import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{At as r,Mt as i,jt as a}from"./iframe-kY6v1YfM.js";import{i as o,n as s,r as c,t as l}from"./constants-BWBR8eWE.js";import{n as u,t as d}from"./createStoryParameters-D_aKMzVl.js";import{n as f,t as p}from"./Group-BYaqcOTu.js";import{n as m,t as h}from"./Button-UIWLqw4_.js";import{n as g,t as _}from"./createFieldWithPresets-Cqp-m3Wk.js";import{n as v,o as y}from"./mock-gn_3WRVn.js";import{n as b,t as x}from"./Avatar-D5eC2z7e.js";import{n as S,t as C}from"./ButtonGroup-BLQqI9iP.js";import{n as w,t as T}from"./UsersStack-BaOwjAe0.js";import{n as E,t as D}from"./RichCell-VZZai9PR.js";var O=t({Playground:()=>j,__namedExportsOrder:()=>M,default:()=>A}),k,A,j,M;function N(){return(N=e((()=>{r(),o(),y(),g(),u(),b(),m(),S(),f(),w(),E(),k=n(),A={title:`Data Display/RichCell`,component:D,parameters:d(`RichCell`,l,s),argTypes:{overTitle:c,subtitle:c,extraSubtitle:c,children:c,maxAfterWidth:{control:`number`},after:_({iconSizes:[`28`],additionalPresets:{Text:`After`,LongText:`Very long after`.repeat(5),Button:(0,k.jsx)(h,{children:`Подписаться`})}}),afterCaption:c,meta:c,submeta:c,before:_({additionalPresets:{Avatar40:(0,k.jsx)(x,{size:40,src:v()}),Avatar48:(0,k.jsx)(x,{size:48,src:v()}),Avatar72:(0,k.jsx)(x,{size:72,src:v()})}}),bottom:_({additionalPresets:{UsersStack:(0,k.jsx)(T,{size:`m`,photos:[v(),v(),v(),v()]})}}),actions:_({additionalPresets:{PrimaryButton:(0,k.jsx)(h,{mode:`primary`,size:`s`,children:`Принять`}),SecondaryButton:(0,k.jsx)(h,{mode:`secondary`,size:`s`,children:`Отменить`}),ButtonsGroup:(0,k.jsxs)(C,{mode:`horizontal`,gap:`s`,stretched:!0,children:[(0,k.jsx)(h,{mode:`primary`,size:`s`,children:`Принять`}),(0,k.jsx)(h,{mode:`secondary`,size:`s`,children:`Отменить`})]})}})},tags:[`Отображение данных`]},j=({maxAfterWidth:e,maxMetaWidth:t,afterCaption:n,after:r,meta:i,submeta:a,...o})=>{let s=(e,t)=>e!==void 0&&t?(0,k.jsx)(`div`,{style:{maxWidth:e},children:t}):t,c=s(e,r),l=s(e,n),u=s(t,i),d=s(t,a);return(0,k.jsx)(p,{children:(0,k.jsx)(D,{after:c,afterCaption:l,meta:u,submeta:d,...o})})},j.args={before:`Avatar72`,overTitle:`Over Title`,subtitle:`Subtitle`,extraSubtitle:`Extra Subtitle`,meta:`Meta`,submeta:`Submeta`,maxAfterWidth:100,maxMetaWidth:100,children:`Example`},j.decorators=[a,i],M=[`Playground`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`({
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
}`,...j.parameters?.docs?.source}}}})))()}export{O as n,N as r,j as t};