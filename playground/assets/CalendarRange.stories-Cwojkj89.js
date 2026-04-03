import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYi3TMGx.js";import{n as r,t as i}from"./CalendarRange-Dw53Rko9.js";import{i as a,n as o,t as s}from"./constants-DdtDghDm.js";import{n as c,t as l}from"./createStoryParameters-cWWuDqBQ.js";import{n as u,t as d}from"./createCalendarDayRenderField-C4qQen4M.js";import{n as f,t as p}from"./useCustomArgs-yGqPt3fG.js";var m=t({Playground:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v,y=e((()=>{a(),u(),c(),p(),r(),h=n(),g={title:`Dates/CalendarRange`,component:i,parameters:l(`CalendarRange`,s,o),argTypes:{value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},renderDayContent:d()},tags:[`Работа с датами`]},_={render:function({startDate:e,endDate:t,value:n,...r}){let[,a]=f(),o=e=>{let[t,n]=e||[null,null];a({startDate:t?new Date(t):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,c=t?new Date(t):null;return(0,h.jsx)(i,{...r,value:[s,c],onChange:o})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}));export{_ as n,y as r,m as t};