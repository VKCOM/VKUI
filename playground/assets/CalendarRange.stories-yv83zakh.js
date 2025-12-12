import{j as u}from"./iframe-Db0SwwYs.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DfSFnuOY.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BGYdS3iU.js";import{C as o}from"./CalendarRange-BYly1tGp.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-02ZtUboh.js";import"./DisplayTitle-Dl3xMsKF.js";import"./education_12-CufZ1OAK.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DxkK0Xhe.js";import"./useState-_pDIeHd1.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./Tappable-DPDNr6uV.js";import"./Clickable-QJYjPwzV.js";import"./InputUtils-DU65P5CC.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Footnote-CJOdhFdd.js";import"./CustomSelect-CZTYq96-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BhedKSLh.js";import"./children-BEQ7OHl7.js";import"./dropdown_20-VUDXxbjX.js";import"./chevron_up_24-C75ZrWHv.js";import"./CustomSelectDropdown-GCn6rg4P.js";import"./CustomScrollView-Z0P7fIf-.js";import"./Popper-hRMVJDOY.js";import"./useReferenceHiddenChangeCallback-BVfL_SN8.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./FloatingArrow-A8JFHQho.js";import"./usePlacementChangeCallback-Wr5lETKk.js";import"./floating-ui.react-dom-CXE2iVpv.js";import"./Spinner-Dy7IzRwA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ch_QrsP6.js";import"./Paragraph-Bv0EtTo4.js";import"./NativeSelect-BLEWKHxb.js";import"./FormField-DrhdvO2i.js";import"./useFocusWithin-CRR7Gu3h.js";import"./Select.module-Dk8aoWC7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-f4wUPwMX.js";import"./cancel_16-UMpt-5Dk.js";import"./useStateWithPrev-CUZpM60q.js";import"./chevron_left_outline_20-Bm5ycyz6.js";import"./useEnsuredControl-DC7ucSqy.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
