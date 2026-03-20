import{j as u}from"./iframe-CmkY54f5.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DfbM-5lS.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-Cef6yby2.js";import{C as o}from"./CalendarRange-Z1tkuUKp.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CsrSECTC.js";import"./DisplayTitle-6ocqSTzX.js";import"./education_12-7kmE7HMU.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BKLaiCrE.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./Tappable-DW-ilhli.js";import"./Clickable-BrVjzu4L.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./Footnote-Dh1koNQe.js";import"./CustomSelect-BQ59V0Ch.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BANyY5dI.js";import"./children-nFeoBYDx.js";import"./dropdown_20-DWPbLuVF.js";import"./chevron_up_24-BXf7h9wL.js";import"./CustomSelectDropdown-BiT3ExQW.js";import"./CustomScrollView-BW102QqZ.js";import"./Popper-B4G3Cw95.js";import"./useReferenceHiddenChangeCallback-CXmxCSux.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./FloatingArrow-BVH0iJE6.js";import"./usePlacementChangeCallback-D4ejLsOm.js";import"./floating-ui.react-dom-l5QuDyvu.js";import"./Spinner-C6TWv4c6.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dgp_7LMZ.js";import"./Paragraph-DRaKBji1.js";import"./NativeSelect-CcaCMbDP.js";import"./FormField-CeGCA5oR.js";import"./useFocusWithin-BymUKlkD.js";import"./Select.module-BkMYHOVU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-hyZ4L0bk.js";import"./cancel_16-BvUE-S4Y.js";import"./useStateWithPrev-_03xRjJs.js";import"./chevron_left_outline_20-Dm8bj3a9.js";import"./useEnsuredControl-DvsDNI3j.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
