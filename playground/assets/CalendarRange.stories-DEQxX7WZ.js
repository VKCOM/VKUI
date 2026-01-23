import{j as u}from"./iframe-KtxhC7Vu.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CtiBGFZA.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-Dkq0eKsU.js";import{C as o}from"./CalendarRange-CaeOEcPg.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Yrm4oGty.js";import"./DisplayTitle-D6gYel-6.js";import"./education_12-BBfveU6S.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-GO4ikmjU.js";import"./useState-D1V9wQJY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./Tappable-BHKu77gD.js";import"./Clickable-zoSQNYwS.js";import"./InputUtils-BueJ8J_Y.js";import"./VisuallyHidden-8TqRJKxj.js";import"./Footnote-lwK0vUsu.js";import"./CustomSelect-DaqBuU38.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-B0mPTmqN.js";import"./children-BMwCSNmp.js";import"./dropdown_20-C2jnygJR.js";import"./chevron_up_24-FW-l4FSN.js";import"./CustomSelectDropdown-CwXH4hYl.js";import"./CustomScrollView-DbnS4Q0q.js";import"./Popper-Bi9VpZic.js";import"./useReferenceHiddenChangeCallback-D2CAbs8d.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./FloatingArrow-x9VSrLhI.js";import"./usePlacementChangeCallback-D7f72DhY.js";import"./floating-ui.react-dom-aiJhAjls.js";import"./Spinner-kWF4Wnla.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DwIELNai.js";import"./Paragraph-DwCH17iY.js";import"./NativeSelect-udiubFLU.js";import"./FormField-B5GJ46_3.js";import"./useFocusWithin-Do1ICwdO.js";import"./Select.module-BkIVIfSU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DubnwX4y.js";import"./cancel_16-B1WNNliN.js";import"./useStateWithPrev-BUgHxQGV.js";import"./chevron_left_outline_20-DwzXMy22.js";import"./useEnsuredControl-Dalnicbc.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
