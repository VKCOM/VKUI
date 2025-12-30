import{j as u}from"./iframe-D-vjmezP.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DeFGCIkd.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-aUbIxQF0.js";import{C as o}from"./CalendarRange-BXKulBfw.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Cdq4IzHJ.js";import"./DisplayTitle-C0x3PUzt.js";import"./education_12-Ds4GMf84.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DQ9VY9Sy.js";import"./useState-D4ynhpUN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./Tappable-DMeLy5rU.js";import"./Clickable-BMFGYTS6.js";import"./InputUtils-DJ5DGhwp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Footnote-DApQXU2r.js";import"./CustomSelect-BztTnfNo.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClEllO8Z.js";import"./children-DmJGU09q.js";import"./dropdown_20-CaZRtpS4.js";import"./chevron_up_24-D5WwjfBv.js";import"./CustomSelectDropdown-BY1VNd18.js";import"./CustomScrollView-CFBg-_BN.js";import"./Popper-BNFHN0Tn.js";import"./useReferenceHiddenChangeCallback-DQvcIGyb.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./FloatingArrow-DyGZMMOG.js";import"./usePlacementChangeCallback-BZEnW3tw.js";import"./floating-ui.react-dom-CT8q3J_f.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Jzgl7PTK.js";import"./Paragraph-Btq89l8U.js";import"./NativeSelect-8KWHHYjG.js";import"./FormField-DoheaqQo.js";import"./useFocusWithin-BzKDlGXW.js";import"./Select.module-BCbAkFOY.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DrzcArVi.js";import"./cancel_16-wQUalFDs.js";import"./useBooleanState-CJ3ersJo.js";import"./useStateWithPrev-CEbDOLKQ.js";import"./chevron_left_outline_20-06dzqiB5.js";import"./useEnsuredControl-DBfsmsB8.js";const vt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
