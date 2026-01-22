import{j as l}from"./iframe-CWLi0Dwx.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-B68Lu2mc.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BFLa-2ju.js";import{C as o}from"./Calendar-WoyM0GG0.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-7-fMsdYi.js";import"./DisplayTitle-DEBkWHdT.js";import"./education_12-BLnZyIdf.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DPPcC09q.js";import"./useState-B6GpLt4z.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./Tappable-BfbUNvge.js";import"./Clickable-qvNFYhPA.js";import"./InputUtils-y46vV6Lq.js";import"./VisuallyHidden-DcnlEFVn.js";import"./Footnote-uuGEAWzo.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-BL3f3T5w.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D64BfRQG.js";import"./children-o7IWS_m7.js";import"./dropdown_20-zJLYpS_C.js";import"./chevron_up_24-DZPWqokN.js";import"./CustomSelectDropdown-Tt1tOKnj.js";import"./CustomScrollView-CTmeeRKm.js";import"./Popper-2QpuK-_N.js";import"./useReferenceHiddenChangeCallback-BushtQXU.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./FloatingArrow-C0dKbfCi.js";import"./usePlacementChangeCallback-yI2hnKE9.js";import"./floating-ui.react-dom-CUfx7nZO.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DagysbTj.js";import"./Paragraph-BILZ1ORB.js";import"./NativeSelect-DM4YvyY5.js";import"./FormField-IzYh4c0W.js";import"./useFocusWithin-CGwmDWCX.js";import"./Select.module-B0QOxRMU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DltQDU2z.js";import"./cancel_16-YXtTtkow.js";import"./useBooleanState-DBJg9YoG.js";import"./useStateWithPrev-CXWNs8CA.js";import"./chevron_left_outline_20-C0ihW9l8.js";import"./useEnsuredControl-D9d4ZMOI.js";import"./Button-V1CoOSHU.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
