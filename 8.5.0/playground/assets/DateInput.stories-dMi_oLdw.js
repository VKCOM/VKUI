import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./DateInput-D2tOw8bT.js";import{i as a,n as o,r as s,t as c}from"./constants-BWBR8eWE.js";import{n as l,t as u}from"./createStoryParameters-D_aKMzVl.js";import{n as d,t as f}from"./getFormFieldIconsPresets-C7ZqH5gB.js";import{n as p,t as m}from"./createCalendarDayRenderField-MiWNmiRS.js";import{n as h,t as g}from"./createCalendarTimezoneField-3orKwBGF.js";var _=t({Playground:()=>S,__namedExportsOrder:()=>C,default:()=>x}),v,y,b,x,S,C;function w(){return(w=e((()=>{a(),p(),h(),d(),l(),r(),v=n(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=f(),x={title:`Dates/DateInput`,component:i,parameters:u(`DateInput`,c,o),args:{onChange:y()},argTypes:{readOnly:{control:{type:`boolean`}},value:{control:{type:`date`}},after:b,before:b,renderDayContent:m(),renderCustomValue:s,timezone:g()},tags:[`Работа с датами`]},S=({value:e,renderCustomValue:t,...n})=>{let r=e&&new Date(e);return(0,v.jsx)(i,{value:r,renderCustomValue:()=>t,...n})},C=[`Playground`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  value,
  renderCustomValue: renderCustomValueProp,
  ...args
}: DateInputStoryProps) => {
  const parsedValue = value ? new Date(value) : value;
  const renderCustomValue = () => renderCustomValueProp;
  return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
}`,...S.parameters?.docs?.source}}}})))()}export{S as n,w as r,_ as t};