import{j as l}from"./iframe-Cn0klKvz.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-B7rQqSeU.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BhDNog1q.js";import{C as o}from"./Calendar-7kPU56K6.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Bj6KpxiH.js";import"./DisplayTitle-C0DTK6AE.js";import"./education_12-DoF-EL2t.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./CalendarHeader-wveqIoPc.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./Tappable-CVh4vgq8.js";import"./Clickable-D6ksQ4g4.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./Footnote-BwZkqEqY.js";import"./equal-DqB04qCY.js";import"./CustomSelect-CkTIXSiu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyiI2WzX.js";import"./children-IiL0uSHX.js";import"./dropdown_20--DUJk8yW.js";import"./chevron_up_24-C7u6Xkhd.js";import"./CustomSelectDropdown-d3mz6Yj3.js";import"./CustomScrollView-DDpGxQa7.js";import"./Popper-CJSXFplp.js";import"./useReferenceHiddenChangeCallback-C__GEFDu.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./FloatingArrow-rIv3MFV8.js";import"./usePlacementChangeCallback-BcR5bXER.js";import"./floating-ui.react-dom-DkSLRTT4.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-YPe2tNNz.js";import"./Paragraph-DlmN_8kL.js";import"./NativeSelect-jlMl4W3c.js";import"./FormField-CqfiouLJ.js";import"./useFocusWithin-GdWsk7hi.js";import"./Select.module-CuMgMza5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DSEgeqcd.js";import"./cancel_16-DzhBEMr_.js";import"./useBooleanState-CzvJFu2k.js";import"./useStateWithPrev-CUCMAMWh.js";import"./chevron_left_outline_20-9God32SQ.js";import"./useEnsuredControl-0lh_FwAV.js";import"./Button-D37nVvnc.js";const Pe={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
