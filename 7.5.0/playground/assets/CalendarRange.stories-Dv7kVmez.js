import{j as g}from"./iframe-A37C1jR-.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CKF-pSf5.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-DSu56m_V.js";import{C as s}from"./CalendarRange-DeOpr0mL.js";import"./Caption-C53AGAFT.js";import"./DisplayTitle-UDUtTFfE.js";import"./education_12-CCwd20pA.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./CalendarHeader-CtV_2svi.js";import"./Clickable-yIrZH96-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-bphv_Btw.js";import"./InputUtils-C1lt5OkO.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Footnote-DEEoTBIm.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dgmm5iJ_.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cq9HJdBy.js";import"./useStateWithPrev-DfKtIxym.js";import"./DropdownIcon-BkJ8kaVO.js";import"./children-CHwlOS0u.js";import"./dropdown_20-CvZtNoC4.js";import"./chevron_up_24-xaiJ1ycL.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-g0goFJ7o.js";import"./CustomScrollView-BZY8tbQd.js";import"./Popper-DhT02TVN.js";import"./useReferenceHiddenChangeCallback-DYfWerJO.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./FloatingArrow-CKKoyZ-4.js";import"./usePlacementChangeCallback-CIqLvTp3.js";import"./floating-ui.react-dom-O8fuuV_i.js";import"./Spinner-CS7OnS2c.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-LN6mIn.js";import"./Paragraph-UsRkYy3D.js";import"./NativeSelect-CAmRpSfb.js";import"./FormField-0WfbJfLM.js";import"./Select.module-Y-9Nm8uF.js";import"./IconButton-DbMMimp0.js";import"./cancel_16-Ce9nrR5S.js";import"./chevron_left_outline_20-DgMNq689.js";import"./useEnsuredControl-B8kDh8y7.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const vt=["Playground"];export{t as Playground,vt as __namedExportsOrder,wt as default};
