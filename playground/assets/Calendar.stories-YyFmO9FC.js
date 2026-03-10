import{j as l}from"./iframe-OAvG3iJ-.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-WGYilvDC.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-rIrZnpl4.js";import{C as o}from"./Calendar-CRRfUxvI.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Dncllwwc.js";import"./DisplayTitle-725H0W7X.js";import"./education_12-aNSUwXEP.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BymeG1uM.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./Tappable-hYlNxVzd.js";import"./Clickable-BctbgV4x.js";import"./InputUtils-D-RvHd2H.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Footnote-Fnz7EDP7.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CSRTnPaV.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BPProJUM.js";import"./children-jmMlROp9.js";import"./dropdown_20-DLRAI4W6.js";import"./chevron_up_24-MC8dqHVP.js";import"./CustomSelectDropdown-CV-BYusI.js";import"./CustomScrollView-CzuykHDu.js";import"./Popper-CTBJG6tv.js";import"./useReferenceHiddenChangeCallback-Bc3k5tTE.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./FloatingArrow-BhWR0dA3.js";import"./usePlacementChangeCallback-BbKwBRGz.js";import"./floating-ui.react-dom-Bt2SuClg.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-z85i74hA.js";import"./Paragraph-CVcud42F.js";import"./NativeSelect-QhAso5Wu.js";import"./FormField-C34WeTI9.js";import"./useFocusWithin-lydw_Auo.js";import"./Select.module-ca_-vi-M.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B0ADo2bb.js";import"./cancel_16-IH85jasE.js";import"./useBooleanState-BelmnhEn.js";import"./useStateWithPrev-BTEx74qr.js";import"./chevron_left_outline_20-BgIlB_0R.js";import"./useEnsuredControl-BaJkbR4W.js";import"./Button-DKiHHryh.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
