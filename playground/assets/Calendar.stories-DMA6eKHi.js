import{j as l}from"./iframe-CmkY54f5.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DfbM-5lS.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-Cef6yby2.js";import{C as o}from"./Calendar-DUKpUVdl.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CsrSECTC.js";import"./DisplayTitle-6ocqSTzX.js";import"./education_12-7kmE7HMU.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BKLaiCrE.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./Tappable-DW-ilhli.js";import"./Clickable-BrVjzu4L.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./Footnote-Dh1koNQe.js";import"./CustomSelect-BQ59V0Ch.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BANyY5dI.js";import"./children-nFeoBYDx.js";import"./dropdown_20-DWPbLuVF.js";import"./chevron_up_24-BXf7h9wL.js";import"./CustomSelectDropdown-BiT3ExQW.js";import"./CustomScrollView-BW102QqZ.js";import"./Popper-B4G3Cw95.js";import"./useReferenceHiddenChangeCallback-CXmxCSux.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./FloatingArrow-BVH0iJE6.js";import"./usePlacementChangeCallback-D4ejLsOm.js";import"./floating-ui.react-dom-l5QuDyvu.js";import"./Spinner-C6TWv4c6.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dgp_7LMZ.js";import"./Paragraph-DRaKBji1.js";import"./NativeSelect-CcaCMbDP.js";import"./FormField-CeGCA5oR.js";import"./useFocusWithin-BymUKlkD.js";import"./Select.module-BkMYHOVU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-hyZ4L0bk.js";import"./cancel_16-BvUE-S4Y.js";import"./useStateWithPrev-_03xRjJs.js";import"./chevron_left_outline_20-Dm8bj3a9.js";import"./useEnsuredControl-DvsDNI3j.js";import"./Button-TSeYhrGZ.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
