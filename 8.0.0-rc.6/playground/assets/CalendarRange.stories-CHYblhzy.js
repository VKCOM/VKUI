import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{n,t as r}from"./CalendarRange-BOiyOVtm.js";import{i,n as a,t as o}from"./constants-BYo4AJCv.js";import{n as s,t as c}from"./createStoryParameters-Dbf8epgV.js";import{n as l,t as u}from"./createCalendarDayRenderField-DTiGiuF-.js";import{n as d,t as f}from"./useCustomArgs-DQKmcsGU.js";var p,m,h,g,_=e((()=>{i(),l(),s(),f(),n(),p=t(),m={title:`Dates/CalendarRange`,component:r,parameters:c(`CalendarRange`,o,a),argTypes:{value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},renderDayContent:u()},tags:[`Работа с датами`]},h={render:function({startDate:e,endDate:t,value:n,...i}){let[,a]=d(),o=e=>{let[t,n]=e||[null,null];a({startDate:t?new Date(t):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,c=t?new Date(t):null;return(0,p.jsx)(r,{...i,value:[s,c],onChange:o})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    value,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <CalendarRange {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}));export{m as i,g as n,_ as r,h as t};