import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./CalendarRange-CHKU-xBG.js";import{i as a,n as o,t as s}from"./constants-DBkyy3CT.js";import{n as c,t as l}from"./createStoryParameters-DBkK1CfQ.js";import{n as u,t as d}from"./createCalendarDayRenderField-xvg40cIq.js";var f=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{a(),u(),c(),r(),p=n(),m={title:`Dates/CalendarRange`,component:i,parameters:l(`CalendarRange`,s,o),argTypes:{value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},renderDayContent:d()},tags:[`Работа с датами`]},h=({startDate:e,endDate:t,value:n,...r})=>{let a=e?new Date(e):null,o=t?new Date(t):null;return(0,p.jsx)(i,{...r,defaultValue:[a,o]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  startDate,
  endDate,
  value,
  ...args
}: StoryCalendarRangeProps) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  return <CalendarRange {...args} defaultValue={[parsedStartDate, parsedEndDate]} />;
}`,...h.parameters?.docs?.source}}},g=[`Playground`]})))()}export{h as n,_ as r,f as t};