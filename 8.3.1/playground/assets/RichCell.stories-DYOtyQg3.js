import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Mt as i,Nt as a,jt as o}from"./iframe-CgMGh-8q.js";import{n as s,t as c}from"./Button-B19ReAM4.js";import{n as l,t as u}from"./ButtonGroup-C_kHHlTS.js";import{n as d,t as f}from"./Group-LwNPJiLD.js";import{n as p,t as m}from"./RichCell-BPw9nua8.js";import{n as h,t as g}from"./Avatar-BddMLYzH.js";import{n as _,t as v}from"./UsersStack-DMAbAl5W.js";import{i as y,n as b,r as x,t as S}from"./constants-cjed6ZWB.js";import{n as C,t as w}from"./createStoryParameters-CMHckkzt.js";import{r as T}from"./getFormFieldIconsPresets-B8kMNs0t.js";import{t as E}from"./presets-DjlSDDI2.js";import{n as D,o as O}from"./mock-K9LjXOLX.js";var k=e({Playground:()=>M,__namedExportsOrder:()=>N,default:()=>j}),A,j,M,N,P=t((()=>{o(),y(),O(),E(),C(),h(),s(),l(),d(),_(),p(),A=n(r(),1),j={title:`Data Display/RichCell`,component:m,parameters:w(`RichCell`,S,b),argTypes:{overTitle:x,subtitle:x,extraSubtitle:x,children:x,maxAfterWidth:{control:`number`},after:T({iconSizes:[`28`],additionalPresets:{Text:`After`,LongText:`Very long after`.repeat(5),Button:(0,A.jsx)(c,{children:`Подписаться`})}}),afterCaption:x,meta:x,submeta:x,before:T({additionalPresets:{Avatar40:(0,A.jsx)(g,{size:40,src:D()}),Avatar48:(0,A.jsx)(g,{size:48,src:D()}),Avatar72:(0,A.jsx)(g,{size:72,src:D()})}}),bottom:T({additionalPresets:{UsersStack:(0,A.jsx)(v,{size:`m`,photos:[D(),D(),D(),D()]})}}),actions:T({additionalPresets:{PrimaryButton:(0,A.jsx)(c,{mode:`primary`,size:`s`,children:`Принять`}),SecondaryButton:(0,A.jsx)(c,{mode:`secondary`,size:`s`,children:`Отменить`}),ButtonsGroup:(0,A.jsxs)(u,{mode:`horizontal`,gap:`s`,stretched:!0,children:[(0,A.jsx)(c,{mode:`primary`,size:`s`,children:`Принять`}),(0,A.jsx)(c,{mode:`secondary`,size:`s`,children:`Отменить`})]})}})},tags:[`Отображение данных`]},M=({maxAfterWidth:e,maxMetaWidth:t,afterCaption:n,after:r,meta:i,submeta:a,...o})=>{let s=(e,t)=>e!==void 0&&t?(0,A.jsx)(`div`,{style:{maxWidth:e},children:t}):t;return(0,A.jsx)(f,{children:(0,A.jsx)(m,{after:s(e,r),afterCaption:s(e,n),meta:s(t,i),submeta:s(t,a),...o})})},M.args={before:`Avatar72`,overTitle:`Over Title`,subtitle:`Subtitle`,extraSubtitle:`Extra Subtitle`,meta:`Meta`,submeta:`Submeta`,maxAfterWidth:100,maxMetaWidth:100,children:`Example`},M.decorators=[i,a],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`({
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
}`,...M.parameters?.docs?.source}}},N=[`Playground`]}));export{k as n,P as r,M as t};