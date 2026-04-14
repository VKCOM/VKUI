import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-lhb8_BzR.js";import{n as r,t as i}from"./Calendar-BFDX1nCk.js";import{i as a,n as o,t as s}from"./constants-CXYaXe_q.js";import{n as c,t as l}from"./createStoryParameters-CbXzS3a6.js";import{n as u,t as d}from"./createCalendarDayRenderField-Dv2uQSIo.js";import{n as f,t as p}from"./createCalendarTimezoneField-DUyFlsgf.js";import{n as m,t as h}from"./useCustomArgs-Du0njoQk.js";var g=t({Playground:()=>y,__namedExportsOrder:()=>b,default:()=>v}),_,v,y,b,x=e((()=>{a(),u(),f(),c(),h(),r(),_=n(),v={title:`Dates/Calendar`,component:i,parameters:l(`Calendar`,s,o),argTypes:{value:{control:{type:`date`}},minDateTime:{control:{type:`date`}},maxDateTime:{control:{type:`date`}},shouldDisableDate:{control:!1},renderDayContent:d(),timezone:p()},tags:[`Работа с датами`]},y={render:function({value:e,minDateTime:t,maxDateTime:n,...r}){let[,a]=m(),o=e&&new Date(e),s=t&&new Date(t),c=n&&new Date(n),l=e=>{a({value:e?.getTime()})};return(0,_.jsx)(i,{value:o,minDateTime:s,maxDateTime:c,...r,onChange:l})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render({
    value,
    minDateTime,
    maxDateTime,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
    const updateValue = (newDate: Date | undefined) => {
      updateArgs({
        value: newDate?.getTime()
      });
    };
    return <Calendar value={parsedValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} onChange={updateValue} />;
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}));export{y as n,x as r,g as t};