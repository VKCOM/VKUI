import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,t as a}from"./constants-BWBR8eWE.js";import{n as o,t as s}from"./createStoryParameters-D_aKMzVl.js";import{n as c,t as l}from"./createCalendarDayRenderField-BoC896SY.js";import{n as u,t as d}from"./CalendarRange-C3-fyAR3.js";var f=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{r(),c(),o(),u(),p=n(),m={title:`Dates/CalendarRange`,component:d,parameters:s(`CalendarRange`,a,i),argTypes:{value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},renderDayContent:l()},tags:[`Работа с датами`]},h=({startDate:e,endDate:t,value:n,...r})=>{let i=e?new Date(e):null,a=t?new Date(t):null;return(0,p.jsx)(d,{...r,defaultValue:[i,a]})},g=[`Playground`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  startDate,
  endDate,
  value,
  ...args
}: StoryCalendarRangeProps) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  return <CalendarRange {...args} defaultValue={[parsedStartDate, parsedEndDate]} />;
}`,...h.parameters?.docs?.source}}}})))()}export{h as n,_ as r,f as t};