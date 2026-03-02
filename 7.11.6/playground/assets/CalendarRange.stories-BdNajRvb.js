import{j as u}from"./iframe-DxxZLxeI.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-Dk6dzhYm.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-C4d-hFtX.js";import{C as o}from"./CalendarRange-CbhwaFzA.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BaO_eCgt.js";import"./DisplayTitle-WtppXOCm.js";import"./education_12-DM1fxi-Q.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CKoRdS3h.js";import"./useState-CSsh5GFH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./Tappable-C82LyDNp.js";import"./Clickable-iBjUcv74.js";import"./InputUtils-CuOtTanw.js";import"./VisuallyHidden-DujZCwJ6.js";import"./Footnote-C3-8h3B5.js";import"./CustomSelect-Ds3g0wO8.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyCEZRIL.js";import"./children-CeKSHNky.js";import"./dropdown_20-jAyRuGir.js";import"./chevron_up_24-CCkXxAU-.js";import"./CustomSelectDropdown-BvnjxXii.js";import"./CustomScrollView-BgNbYtGX.js";import"./Popper-BqSSJ4b-.js";import"./useReferenceHiddenChangeCallback-Bdeh3c_U.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./FloatingArrow-2W0GhyuX.js";import"./usePlacementChangeCallback-BQqykK7j.js";import"./floating-ui.react-dom-DLojga1i.js";import"./Spinner-BmfPEekg.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dwyu7_r7.js";import"./Paragraph-DoYA-tO3.js";import"./NativeSelect-xxKpWJ_l.js";import"./FormField-D_s9Gk1O.js";import"./useFocusWithin-CCKxCh5m.js";import"./Select.module-CgaTlf0q.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CgpvmjLz.js";import"./cancel_16-B5ZWMyK2.js";import"./useStateWithPrev-DQv0ILTY.js";import"./chevron_left_outline_20-B6Q-cCoY.js";import"./useEnsuredControl-DmtaIsBi.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
