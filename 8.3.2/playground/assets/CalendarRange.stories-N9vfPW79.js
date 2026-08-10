import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./CalendarRange-DANBqiJY.js";import{i as o,n as s,t as c}from"./constants-cjed6ZWB.js";import{n as l,t as u}from"./createStoryParameters-CMHckkzt.js";import{n as d,t as f}from"./createCalendarDayRenderField-DArM2Frx.js";var p=e({Playground:()=>g,__namedExportsOrder:()=>_,default:()=>h}),m,h,g,_,v=t((()=>{o(),d(),l(),i(),m=n(r(),1),h={title:`Dates/CalendarRange`,component:a,parameters:u(`CalendarRange`,c,s),argTypes:{value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},renderDayContent:f()},tags:[`Работа с датами`]},g=({startDate:e,endDate:t,value:n,...r})=>{let i=e?new Date(e):null,o=t?new Date(t):null;return(0,m.jsx)(a,{...r,defaultValue:[i,o]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  startDate,
  endDate,
  value,
  ...args
}: StoryCalendarRangeProps) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  return <CalendarRange {...args} defaultValue={[parsedStartDate, parsedEndDate]} />;
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}));export{g as n,v as r,p as t};