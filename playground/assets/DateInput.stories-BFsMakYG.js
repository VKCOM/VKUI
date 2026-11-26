import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./constants-BWBR8eWE.js";import{n as s,t as c}from"./createStoryParameters-D_aKMzVl.js";import{n as l,t as u}from"./getFormFieldIconsPresets-zZBPHn-D.js";import{n as d,t as f}from"./createCalendarDayRenderField-BoC896SY.js";import{n as p,t as m}from"./createCalendarTimezoneField-3orKwBGF.js";import{n as h,t as g}from"./DateInput-2qldKcZ2.js";var _=t({Playground:()=>S,__namedExportsOrder:()=>C,default:()=>x}),v,y,b,x,S,C;function w(){return(w=e((()=>{r(),d(),p(),l(),s(),h(),v=n(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=u(),x={title:`Dates/DateInput`,component:g,parameters:c(`DateInput`,o,i),args:{onChange:y()},argTypes:{readOnly:{control:{type:`boolean`}},value:{control:{type:`date`}},after:b,before:b,renderDayContent:f(),renderCustomValue:a,timezone:m()},tags:[`Работа с датами`]},S=({value:e,renderCustomValue:t,...n})=>{let r=e&&new Date(e);return(0,v.jsx)(g,{value:r,renderCustomValue:()=>t,...n})},C=[`Playground`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  value,
  renderCustomValue: renderCustomValueProp,
  ...args
}: DateInputStoryProps) => {
  const parsedValue = value ? new Date(value) : value;
  const renderCustomValue = () => renderCustomValueProp;
  return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
}`,...S.parameters?.docs?.source}}}})))()}export{S as n,w as r,_ as t};