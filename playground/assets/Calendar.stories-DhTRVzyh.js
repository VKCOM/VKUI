import{j as l}from"./iframe-CdM-7Hfu.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-BTuwmNej.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-qkUHrTQm.js";import{C as o}from"./Calendar-DZehRJCc.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DWx61OOh.js";import"./DisplayTitle-DPUKLyc8.js";import"./education_12-iLRwjd7Q.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-SAPmEQOa.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DK6ahodC.js";import"./Clickable-B55EaeOQ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./VisuallyHidden-DydpD7lG.js";import"./Footnote-NEMh_4A6.js";import"./CustomSelect-C--NRx1n.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D6W5zn31.js";import"./children-CDGrqL8f.js";import"./dropdown_20-xwmBr5MW.js";import"./chevron_up_24-f70gZTmR.js";import"./CustomSelectDropdown-D7q3L6Db.js";import"./CustomScrollView-BJVz8Z08.js";import"./Popper-CTSbYgY-.js";import"./useReferenceHiddenChangeCallback-a5Ub5Z76.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./FloatingArrow-_HqT_hN_.js";import"./usePlacementChangeCallback-DnaDcZAl.js";import"./floating-ui.react-dom-BSROouZA.js";import"./Spinner-CsDvRUz2.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CCzazBjF.js";import"./Paragraph-cSyBj7WU.js";import"./NativeSelect-DmkV-37q.js";import"./FormField-Dc0EY2Dw.js";import"./useFocusWithin-2TkfLAdf.js";import"./Select.module-C2LvGhwM.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDyvGU-p.js";import"./cancel_16-C0t2DuYR.js";import"./useStateWithPrev-CFrunRcd.js";import"./chevron_left_outline_20-YQi-5BrD.js";import"./useEnsuredControl-CU7WNJSU.js";import"./Button-Wq0du0BJ.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
