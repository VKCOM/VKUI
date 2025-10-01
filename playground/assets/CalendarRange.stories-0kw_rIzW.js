import{j as u}from"./iframe-DJZLDe2v.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CTkqcwqD.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-Cy6H9mhl.js";import{C as o}from"./CalendarRange-Cp4lrlwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-B1NS-klr.js";import"./DisplayTitle-B79lALg2.js";import"./education_12-Cz8Y-r-n.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B0F2SwRY.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CY0nsltg.js";import"./Clickable-DJi6sM1Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./VisuallyHidden-D0jMNSCO.js";import"./Footnote-D8Ch1fTG.js";import"./CustomSelect-CXM0rP-p.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_1xQ3gYQ.js";import"./children-Dhk2DcjP.js";import"./dropdown_20-XMSN09VU.js";import"./chevron_up_24-CEaQUyyy.js";import"./CustomSelectDropdown-DJ2a33B-.js";import"./CustomScrollView-D8SujhxZ.js";import"./Popper-D8p4fWFq.js";import"./useReferenceHiddenChangeCallback-BLBLca1c.js";import"./AppRootPortal-CbG6gCHO.js";import"./useColorScheme-DOPlqjNA.js";import"./createPortal-D4c259Iv.js";import"./ColorSchemeProvider-DhQPwwFm.js";import"./ConfigProviderOverride-CI0r-TE-.js";import"./FloatingArrow-D8cEO-Yg.js";import"./usePlacementChangeCallback-DPCse-sq.js";import"./floating-ui.react-dom-lakl85H9.js";import"./Spinner-BnPfDhY3.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DfCxAhCM.js";import"./Paragraph-G8d9aizT.js";import"./NativeSelect-BoA9RpWF.js";import"./FormField-Cnff4fSG.js";import"./useFocusWithin-BwFTxwKW.js";import"./Select.module-D06y7HCU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CMOFK_Ua.js";import"./cancel_16-Df48sQ_x.js";import"./useStateWithPrev-DSVTyTdW.js";import"./chevron_left_outline_20-DNA2miEA.js";import"./useEnsuredControl-Cp0sdS7L.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
