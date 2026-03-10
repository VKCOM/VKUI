import{j as u}from"./iframe-OAvG3iJ-.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-WGYilvDC.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-rIrZnpl4.js";import{C as o}from"./CalendarRange-0Z5BW7EC.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Dncllwwc.js";import"./DisplayTitle-725H0W7X.js";import"./education_12-aNSUwXEP.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BymeG1uM.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./Tappable-hYlNxVzd.js";import"./Clickable-BctbgV4x.js";import"./InputUtils-D-RvHd2H.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Footnote-Fnz7EDP7.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CSRTnPaV.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BPProJUM.js";import"./children-jmMlROp9.js";import"./dropdown_20-DLRAI4W6.js";import"./chevron_up_24-MC8dqHVP.js";import"./CustomSelectDropdown-CV-BYusI.js";import"./CustomScrollView-CzuykHDu.js";import"./Popper-CTBJG6tv.js";import"./useReferenceHiddenChangeCallback-Bc3k5tTE.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./FloatingArrow-BhWR0dA3.js";import"./usePlacementChangeCallback-BbKwBRGz.js";import"./floating-ui.react-dom-Bt2SuClg.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-z85i74hA.js";import"./Paragraph-CVcud42F.js";import"./NativeSelect-QhAso5Wu.js";import"./FormField-C34WeTI9.js";import"./useFocusWithin-lydw_Auo.js";import"./Select.module-ca_-vi-M.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B0ADo2bb.js";import"./cancel_16-IH85jasE.js";import"./useBooleanState-BelmnhEn.js";import"./useStateWithPrev-BTEx74qr.js";import"./chevron_left_outline_20-BgIlB_0R.js";import"./useEnsuredControl-BaJkbR4W.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
