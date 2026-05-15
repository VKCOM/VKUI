import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./DateInput-BrsU0DC3.js";import{i,n as a,r as o,t as s}from"./constants-Cl1OGm0b.js";import{n as c,t as l}from"./createStoryParameters-DRBt1LSH.js";import{n as u,t as d}from"./getFormFieldIconsPresets-D4uitYuF.js";import{n as f,t as p}from"./createCalendarDayRenderField-Coz5SqJ3.js";import{n as m,t as h}from"./createCalendarTimezoneField-CCoSt2mr.js";var g,_,v,y,b,x,S=e((()=>{i(),f(),m(),u(),c(),n(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v=d(),y={title:`Dates/DateInput`,component:r,parameters:l(`DateInput`,s,a),args:{onChange:_()},argTypes:{readOnly:{control:{type:`boolean`}},value:{control:{type:`date`}},after:v,before:v,renderDayContent:p(),renderCustomValue:o,timezone:h()},tags:[`Работа с датами`]},b={render:({value:e,renderCustomValue:t,...n})=>{let i=e&&new Date(e);return(0,g.jsx)(r,{value:i,renderCustomValue:()=>t,...n})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    value,
    renderCustomValue: renderCustomValueProp,
    ...args
  }) => {
    const parsedValue = value ? new Date(value) : value;
    const renderCustomValue = () => renderCustomValueProp;
    return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{y as i,x as n,S as r,b as t};