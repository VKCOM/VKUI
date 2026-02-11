import{j as u}from"./iframe-DIYy3-CH.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DInCXrFo.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-h9h7ejHK.js";import{C as o}from"./CalendarRange--0wrjrBA.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CaOppkeD.js";import"./DisplayTitle-C2cMicvR.js";import"./education_12-CqjwLMZI.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-kCZ9H7qv.js";import"./useState-p4Iaaoae.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./Tappable-sYAEqFlc.js";import"./Clickable-BAIHKsz8.js";import"./InputUtils-MuCAFNzU.js";import"./VisuallyHidden-B6N7VZPM.js";import"./Footnote-CRCyeFbn.js";import"./CustomSelect-BYDJoheE.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CpdTLJ55.js";import"./children-BgxIS89X.js";import"./dropdown_20-DCuiNVmp.js";import"./chevron_up_24-hXM5sa8Y.js";import"./CustomSelectDropdown-TSlmrZ5Y.js";import"./CustomScrollView-G7yuAOqH.js";import"./Popper-CuNxRGBX.js";import"./useReferenceHiddenChangeCallback-CW-8m34o.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./FloatingArrow-B11NdP-t.js";import"./usePlacementChangeCallback-CgA_U0ts.js";import"./floating-ui.react-dom-SH6Hwo0U.js";import"./Spinner-D5ck6QgF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D7FmCYaF.js";import"./Paragraph-C-gjngMm.js";import"./NativeSelect-juMjOPi4.js";import"./FormField-BywUP1eK.js";import"./useFocusWithin-De2BOk53.js";import"./Select.module-6jS9NVCS.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DhekZgUs.js";import"./cancel_16-7cpCCUKH.js";import"./useStateWithPrev-W9bRPnvU.js";import"./chevron_left_outline_20-CwPtsqRK.js";import"./useEnsuredControl-7dmeozfI.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
