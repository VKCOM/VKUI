import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./DateRangeInput-BDsXromR.js";import{i,n as a,t as o}from"./constants-Dj6vOzIh.js";import{n as s,t as c}from"./createStoryParameters-pz1UrWMe.js";import{n as l,t as u}from"./getFormFieldIconsPresets-Rpdnz0zC.js";import{n as d,t as f}from"./createCalendarDayRenderField-5Cb7KVKd.js";import{n as p,t as m}from"./useCustomArgs-CrFDt-oX.js";var h,g,_,v,y,b=e((()=>{i(),d(),l(),s(),m(),n(),h=t(),g=u(),_={title:`Dates/DateRangeInput`,component:r,parameters:c(`DateRangeInput`,o,a),argTypes:{readOnly:{control:{type:`boolean`}},value:{description:`Используйте startDate и endDate для задания периода`,control:!1},startDate:{description:`Дата начала периода`,table:{type:{summary:`string`}},control:{type:`date`}},endDate:{description:`Дата окончания периода`,table:{type:{summary:`string`}},control:{type:`date`}},before:g,after:g,renderDayContent:f()},tags:[`Работа с датами`]},v={render:function({startDate:e,endDate:t,...n}){let[,i]=p(),a=e=>{let[t,n]=e||[null,null];i({startDate:t?new Date(t):null,endDate:n?new Date(n):null})},o=e?new Date(e):null,s=t?new Date(t):null;return(0,h.jsx)(r,{...n,value:[o,s],onChange:a})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}));export{_ as i,y as n,b as r,v as t};