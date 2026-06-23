import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./DateInput-NNkaHB5g.js";import{i as o,n as s,r as c,t as l}from"./constants-cjed6ZWB.js";import{n as u,t as d}from"./createStoryParameters-CMHckkzt.js";import{n as f,t as p}from"./getFormFieldIconsPresets-B8kMNs0t.js";import{n as m,t as h}from"./createCalendarDayRenderField-R3-7WLqR.js";import{n as g,t as _}from"./createCalendarTimezoneField-c98lGC9U.js";var v=e({Playground:()=>C,__namedExportsOrder:()=>w,default:()=>S}),y,b,x,S,C,w,T=t((()=>{o(),m(),g(),f(),u(),i(),y=n(r(),1),{fn:b}=__STORYBOOK_MODULE_TEST__,x=p(),S={title:`Dates/DateInput`,component:a,parameters:d(`DateInput`,l,s),args:{onChange:b()},argTypes:{readOnly:{control:{type:`boolean`}},value:{control:{type:`date`}},after:x,before:x,renderDayContent:h(),renderCustomValue:c,timezone:_()},tags:[`Работа с датами`]},C=({value:e,renderCustomValue:t,...n})=>{let r=e&&new Date(e);return(0,y.jsx)(a,{value:r,renderCustomValue:()=>t,...n})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  value,
  renderCustomValue: renderCustomValueProp,
  ...args
}: DateInputStoryProps) => {
  const parsedValue = value ? new Date(value) : value;
  const renderCustomValue = () => renderCustomValueProp;
  return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}));export{C as n,T as r,v as t};