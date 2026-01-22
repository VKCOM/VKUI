import{j as u}from"./iframe-BKqRoeRO.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-eb-tXmZ2.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-DgxJ9Vvm.js";import{C as o}from"./CalendarRange-Cn0QZ2S1.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BlAl9F9i.js";import"./DisplayTitle-Cdd9RPXP.js";import"./education_12-CsAr8QaB.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-k2GZyK-1.js";import"./useState-Db1sLetb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./Tappable-EPRrmr_0.js";import"./Clickable-CadgeLyo.js";import"./InputUtils-CQaATz1N.js";import"./VisuallyHidden-B-uFrHKw.js";import"./Footnote-BAb4Skv3.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-j4qma72-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D4AaZ9gz.js";import"./children-Bm1QhBGC.js";import"./dropdown_20-CNS7PAIu.js";import"./chevron_up_24-DdS0kdly.js";import"./CustomSelectDropdown-lQtUELXY.js";import"./CustomScrollView-LtH4AA1i.js";import"./Popper-B-oQljLT.js";import"./useReferenceHiddenChangeCallback-Co2OT1Ls.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./FloatingArrow-BW-WGI2j.js";import"./usePlacementChangeCallback-CWH3mKqa.js";import"./floating-ui.react-dom-BE-hubS3.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUCRRXB7.js";import"./Paragraph-BihsN6Ji.js";import"./NativeSelect-BIaSFdWQ.js";import"./FormField-Go62Y8Xh.js";import"./useFocusWithin-cA-uu2zg.js";import"./Select.module-CQG3FEbX.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDypKmxT.js";import"./cancel_16-YezS66Hp.js";import"./useBooleanState-D0nDf7gZ.js";import"./useStateWithPrev-Bz2fUJh7.js";import"./chevron_left_outline_20-e81f18Y3.js";import"./useEnsuredControl-DrUFPpJz.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
