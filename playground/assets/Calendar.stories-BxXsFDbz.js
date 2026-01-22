import{j as l}from"./iframe-BKqRoeRO.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-eb-tXmZ2.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-DgxJ9Vvm.js";import{C as o}from"./Calendar-hiZ8YwFe.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BlAl9F9i.js";import"./DisplayTitle-Cdd9RPXP.js";import"./education_12-CsAr8QaB.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-k2GZyK-1.js";import"./useState-Db1sLetb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./Tappable-EPRrmr_0.js";import"./Clickable-CadgeLyo.js";import"./InputUtils-CQaATz1N.js";import"./VisuallyHidden-B-uFrHKw.js";import"./Footnote-BAb4Skv3.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-j4qma72-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D4AaZ9gz.js";import"./children-Bm1QhBGC.js";import"./dropdown_20-CNS7PAIu.js";import"./chevron_up_24-DdS0kdly.js";import"./CustomSelectDropdown-lQtUELXY.js";import"./CustomScrollView-LtH4AA1i.js";import"./Popper-B-oQljLT.js";import"./useReferenceHiddenChangeCallback-Co2OT1Ls.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./FloatingArrow-BW-WGI2j.js";import"./usePlacementChangeCallback-CWH3mKqa.js";import"./floating-ui.react-dom-BE-hubS3.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUCRRXB7.js";import"./Paragraph-BihsN6Ji.js";import"./NativeSelect-BIaSFdWQ.js";import"./FormField-Go62Y8Xh.js";import"./useFocusWithin-cA-uu2zg.js";import"./Select.module-CQG3FEbX.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDypKmxT.js";import"./cancel_16-YezS66Hp.js";import"./useBooleanState-D0nDf7gZ.js";import"./useStateWithPrev-Bz2fUJh7.js";import"./chevron_left_outline_20-e81f18Y3.js";import"./useEnsuredControl-DrUFPpJz.js";import"./Button-U9s7wDQC.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
