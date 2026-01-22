import{j as u}from"./iframe-CWLi0Dwx.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-B68Lu2mc.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BFLa-2ju.js";import{C as o}from"./CalendarRange-13O1Bcba.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-7-fMsdYi.js";import"./DisplayTitle-DEBkWHdT.js";import"./education_12-BLnZyIdf.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DPPcC09q.js";import"./useState-B6GpLt4z.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./Tappable-BfbUNvge.js";import"./Clickable-qvNFYhPA.js";import"./InputUtils-y46vV6Lq.js";import"./VisuallyHidden-DcnlEFVn.js";import"./Footnote-uuGEAWzo.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-BL3f3T5w.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D64BfRQG.js";import"./children-o7IWS_m7.js";import"./dropdown_20-zJLYpS_C.js";import"./chevron_up_24-DZPWqokN.js";import"./CustomSelectDropdown-Tt1tOKnj.js";import"./CustomScrollView-CTmeeRKm.js";import"./Popper-2QpuK-_N.js";import"./useReferenceHiddenChangeCallback-BushtQXU.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./FloatingArrow-C0dKbfCi.js";import"./usePlacementChangeCallback-yI2hnKE9.js";import"./floating-ui.react-dom-CUfx7nZO.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DagysbTj.js";import"./Paragraph-BILZ1ORB.js";import"./NativeSelect-DM4YvyY5.js";import"./FormField-IzYh4c0W.js";import"./useFocusWithin-CGwmDWCX.js";import"./Select.module-B0QOxRMU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DltQDU2z.js";import"./cancel_16-YXtTtkow.js";import"./useBooleanState-DBJg9YoG.js";import"./useStateWithPrev-CXWNs8CA.js";import"./chevron_left_outline_20-C0ihW9l8.js";import"./useEnsuredControl-D9d4ZMOI.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
