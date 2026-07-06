import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./Calendar-abYAQIio.js";import{i as o,n as s,t as c}from"./constants-cjed6ZWB.js";import{n as l,t as u}from"./createStoryParameters-CMHckkzt.js";import{n as d,t as f}from"./createCalendarDayRenderField-C0FwQYmf.js";import{n as p,t as m}from"./createCalendarTimezoneField-c98lGC9U.js";var h=e({Playground:()=>v,__namedExportsOrder:()=>y,default:()=>_}),g,_,v,y,b=t((()=>{o(),d(),p(),l(),i(),g=n(r(),1),_={title:`Dates/Calendar`,component:a,parameters:u(`Calendar`,c,s),argTypes:{value:{control:{type:`date`}},minDateTime:{control:{type:`date`}},maxDateTime:{control:{type:`date`}},shouldDisableDate:{control:!1},renderDayContent:f(),timezone:m()},tags:[`Работа с датами`]},v=({value:e,defaultValue:t,minDateTime:n,maxDateTime:r,...i})=>(0,g.jsx)(a,{value:e&&new Date(e),defaultValue:t&&new Date(t),minDateTime:n&&new Date(n),maxDateTime:r&&new Date(r),...i}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}));export{v as n,b as r,h as t};