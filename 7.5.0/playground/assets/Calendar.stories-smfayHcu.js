import{j as T}from"./iframe-A37C1jR-.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CKF-pSf5.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-DSu56m_V.js";import{C as n}from"./Calendar-DwrwjiZo.js";import"./Caption-C53AGAFT.js";import"./DisplayTitle-UDUtTFfE.js";import"./education_12-CCwd20pA.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./CalendarHeader-CtV_2svi.js";import"./Clickable-yIrZH96-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-bphv_Btw.js";import"./InputUtils-C1lt5OkO.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Footnote-DEEoTBIm.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dgmm5iJ_.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cq9HJdBy.js";import"./useStateWithPrev-DfKtIxym.js";import"./DropdownIcon-BkJ8kaVO.js";import"./children-CHwlOS0u.js";import"./dropdown_20-CvZtNoC4.js";import"./chevron_up_24-xaiJ1ycL.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-g0goFJ7o.js";import"./CustomScrollView-BZY8tbQd.js";import"./Popper-DhT02TVN.js";import"./useReferenceHiddenChangeCallback-DYfWerJO.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./FloatingArrow-CKKoyZ-4.js";import"./usePlacementChangeCallback-CIqLvTp3.js";import"./floating-ui.react-dom-O8fuuV_i.js";import"./Spinner-CS7OnS2c.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-LN6mIn.js";import"./Paragraph-UsRkYy3D.js";import"./NativeSelect-CAmRpSfb.js";import"./FormField-0WfbJfLM.js";import"./Select.module-Y-9Nm8uF.js";import"./IconButton-DbMMimp0.js";import"./cancel_16-Ce9nrR5S.js";import"./chevron_left_outline_20-DgMNq689.js";import"./useEnsuredControl-B8kDh8y7.js";import"./date-Z9F9_vk2.js";import"./Button-DupvSECF.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
