import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./Calendar-DCyLoukG.js";import{i,n as a,t as o}from"./constants-Dj6vOzIh.js";import{n as s,t as c}from"./createStoryParameters-pz1UrWMe.js";import{n as l,t as u}from"./createCalendarDayRenderField-5Cb7KVKd.js";import{n as d,t as f}from"./createCalendarTimezoneField-VmzfIZPT.js";import{n as p,t as m}from"./useCustomArgs-CrFDt-oX.js";var h,g,_,v,y=e((()=>{i(),l(),d(),s(),m(),n(),h=t(),g={title:`Dates/Calendar`,component:r,parameters:c(`Calendar`,o,a),argTypes:{value:{control:{type:`date`}},minDateTime:{control:{type:`date`}},maxDateTime:{control:{type:`date`}},shouldDisableDate:{control:!1},renderDayContent:u(),timezone:f()},tags:[`Работа с датами`]},_={render:function({value:e,minDateTime:t,maxDateTime:n,...i}){let[,a]=p(),o=e&&new Date(e),s=t&&new Date(t),c=n&&new Date(n),l=e=>{a({value:e?.getTime()})};return(0,h.jsx)(r,{value:o,minDateTime:s,maxDateTime:c,...i,onChange:l})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}));export{g as i,v as n,y as r,_ as t};