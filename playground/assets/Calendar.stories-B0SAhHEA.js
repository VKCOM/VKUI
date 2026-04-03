import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYi3TMGx.js";import{n as r,t as i}from"./Calendar-Bzd_-WsM.js";import{i as a,n as o,t as s}from"./constants-DdtDghDm.js";import{n as c,t as l}from"./createStoryParameters-cWWuDqBQ.js";import{n as u,t as d}from"./createCalendarDayRenderField-C4qQen4M.js";import{n as f,t as p}from"./createCalendarTimezoneField-BHDPxV5m.js";import{n as m,t as h}from"./useCustomArgs-yGqPt3fG.js";var g=t({Playground:()=>y,__namedExportsOrder:()=>b,default:()=>v}),_,v,y,b,x=e((()=>{a(),u(),f(),c(),h(),r(),_=n(),v={title:`Dates/Calendar`,component:i,parameters:l(`Calendar`,s,o),argTypes:{value:{control:{type:`date`}},minDateTime:{control:{type:`date`}},maxDateTime:{control:{type:`date`}},shouldDisableDate:{control:!1},renderDayContent:d(),timezone:p()},tags:[`Работа с датами`]},y={render:function({value:e,minDateTime:t,maxDateTime:n,...r}){let[,a]=m(),o=e&&new Date(e),s=t&&new Date(t),c=n&&new Date(n),l=e=>{a({value:e?.getTime()})};return(0,_.jsx)(i,{value:o,minDateTime:s,maxDateTime:c,...r,onChange:l})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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