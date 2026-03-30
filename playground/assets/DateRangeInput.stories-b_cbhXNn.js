import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYsbkMbM.js";import{n as r,t as i}from"./DateRangeInput-CTNeJbOs.js";import{i as a,n as o,t as s}from"./constants-CXYaXe_q.js";import{n as c,t as l}from"./createStoryParameters-CbXzS3a6.js";import{n as u,t as d}from"./getFormFieldIconsPresets-CZ22RewF.js";import{n as f,t as p}from"./createCalendarDayRenderField-I7KJN4Tq.js";import{n as m,t as h}from"./useCustomArgs-DjsaFHBV.js";var g=t({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=e((()=>{a(),f(),u(),c(),h(),r(),_=n(),v=d(),y={title:`Dates/DateRangeInput`,component:i,parameters:l(`DateRangeInput`,s,o),argTypes:{readOnly:{control:{type:`boolean`}},value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},before:v,after:v,renderDayContent:p()},tags:[`Работа с датами`]},b={render:function({startDate:e,endDate:t,...n}){let[,r]=m(),a=e=>{let[t,n]=e||[null,null];r({startDate:t?new Date(t):null,endDate:n?new Date(n):null})},o=e?new Date(e):null,s=t?new Date(t):null;return(0,_.jsx)(i,{...n,value:[o,s],onChange:a})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: DateRangeInputProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <DateRangeInput {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{b as n,S as r,g as t};