import{j as u}from"./iframe-CdM-7Hfu.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-BTuwmNej.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-qkUHrTQm.js";import{C as o}from"./CalendarRange-gwHYt5FZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DWx61OOh.js";import"./DisplayTitle-DPUKLyc8.js";import"./education_12-iLRwjd7Q.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-SAPmEQOa.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DK6ahodC.js";import"./Clickable-B55EaeOQ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./VisuallyHidden-DydpD7lG.js";import"./Footnote-NEMh_4A6.js";import"./CustomSelect-C--NRx1n.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D6W5zn31.js";import"./children-CDGrqL8f.js";import"./dropdown_20-xwmBr5MW.js";import"./chevron_up_24-f70gZTmR.js";import"./CustomSelectDropdown-D7q3L6Db.js";import"./CustomScrollView-BJVz8Z08.js";import"./Popper-CTSbYgY-.js";import"./useReferenceHiddenChangeCallback-a5Ub5Z76.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./FloatingArrow-_HqT_hN_.js";import"./usePlacementChangeCallback-DnaDcZAl.js";import"./floating-ui.react-dom-BSROouZA.js";import"./Spinner-CsDvRUz2.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CCzazBjF.js";import"./Paragraph-cSyBj7WU.js";import"./NativeSelect-DmkV-37q.js";import"./FormField-Dc0EY2Dw.js";import"./useFocusWithin-2TkfLAdf.js";import"./Select.module-C2LvGhwM.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDyvGU-p.js";import"./cancel_16-C0t2DuYR.js";import"./useStateWithPrev-CFrunRcd.js";import"./chevron_left_outline_20-YQi-5BrD.js";import"./useEnsuredControl-CU7WNJSU.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
