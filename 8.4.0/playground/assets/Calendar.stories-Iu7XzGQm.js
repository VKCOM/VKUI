import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Calendar-DRawIl__.js";import{i as a,n as o,t as s}from"./constants-DBkyy3CT.js";import{n as c,t as l}from"./createStoryParameters-DBkK1CfQ.js";import{n as u,t as d}from"./createCalendarDayRenderField-xvg40cIq.js";import{n as f,t as p}from"./createCalendarTimezoneField-CuvbsMvQ.js";var m=t({Playground:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{a(),u(),f(),c(),r(),h=n(),g={title:`Dates/Calendar`,component:i,parameters:l(`Calendar`,s,o),argTypes:{value:{control:{type:`date`}},minDateTime:{control:{type:`date`}},maxDateTime:{control:{type:`date`}},shouldDisableDate:{control:!1},renderDayContent:d(),timezone:p()},tags:[`Работа с датами`]},_=({value:e,defaultValue:t,minDateTime:n,maxDateTime:r,...a})=>{let o=e&&new Date(e),s=t&&new Date(t),c=n&&new Date(n),l=r&&new Date(r);return(0,h.jsx)(i,{value:o,defaultValue:s,minDateTime:c,maxDateTime:l,...a})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`({
  value,
  defaultValue,
  minDateTime,
  maxDateTime,
  ...args
}: CalendarProps) => {
  const parsedValue = value ? new Date(value) : value;
  const parsedDefaultValue = defaultValue ? new Date(defaultValue) : defaultValue;
  const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
  const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
  return <Calendar value={parsedValue} defaultValue={parsedDefaultValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} />;
}`,..._.parameters?.docs?.source}}},v=[`Playground`]})))()}export{_ as n,y as r,m as t};