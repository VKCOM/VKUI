import{j as l}from"./iframe-D-vjmezP.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DeFGCIkd.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-aUbIxQF0.js";import{C as o}from"./Calendar-DdkoS38y.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Cdq4IzHJ.js";import"./DisplayTitle-C0x3PUzt.js";import"./education_12-Ds4GMf84.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DQ9VY9Sy.js";import"./useState-D4ynhpUN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./Tappable-DMeLy5rU.js";import"./Clickable-BMFGYTS6.js";import"./InputUtils-DJ5DGhwp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Footnote-DApQXU2r.js";import"./CustomSelect-BztTnfNo.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClEllO8Z.js";import"./children-DmJGU09q.js";import"./dropdown_20-CaZRtpS4.js";import"./chevron_up_24-D5WwjfBv.js";import"./CustomSelectDropdown-BY1VNd18.js";import"./CustomScrollView-CFBg-_BN.js";import"./Popper-BNFHN0Tn.js";import"./useReferenceHiddenChangeCallback-DQvcIGyb.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./FloatingArrow-DyGZMMOG.js";import"./usePlacementChangeCallback-BZEnW3tw.js";import"./floating-ui.react-dom-CT8q3J_f.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Jzgl7PTK.js";import"./Paragraph-Btq89l8U.js";import"./NativeSelect-8KWHHYjG.js";import"./FormField-DoheaqQo.js";import"./useFocusWithin-BzKDlGXW.js";import"./Select.module-BCbAkFOY.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DrzcArVi.js";import"./cancel_16-wQUalFDs.js";import"./useBooleanState-CJ3ersJo.js";import"./useStateWithPrev-CEbDOLKQ.js";import"./chevron_left_outline_20-06dzqiB5.js";import"./useEnsuredControl-DBfsmsB8.js";import"./Button-iOPheJU3.js";const Pe={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
