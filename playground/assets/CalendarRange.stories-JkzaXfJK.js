import{j as g}from"./iframe-DTUKIQpa.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-tqvm7hDL.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CP_4pwkL.js";import{C as s}from"./CalendarRange-BkeeGtF4.js";import"./Caption-D0cKPzOT.js";import"./DisplayTitle-Zs0zCNUZ.js";import"./education_12-CtRtBMqP.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./CalendarHeader-DMAGB71Q.js";import"./Clickable-DRtJbe2S.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-Br6ZM5HO.js";import"./InputUtils-Db1DLuWS.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./Footnote-rQhC0WQs.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DB15qcvA.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-BaNto5dO.js";import"./useStateWithPrev-U9GIjbS7.js";import"./DropdownIcon-B_Ph2ptA.js";import"./children-B8YsjXFx.js";import"./dropdown_20-DR-0bnZ1.js";import"./chevron_up_24-ilJGQ0lV.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-7BTS6Okn.js";import"./CustomScrollView-r1BN1p7I.js";import"./Popper-BSgRPBX2.js";import"./useReferenceHiddenChangeCallback-ojQ1DOCE.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./FloatingArrow-k99_XB05.js";import"./usePlacementChangeCallback-XITFD2B3.js";import"./Spinner-BjJTDPz-.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B_3mEn4N.js";import"./Paragraph-D0uPZqgj.js";import"./NativeSelect-BfY_PPcx.js";import"./FormField-bYsVG-1L.js";import"./Select.module-BWSQdVM5.js";import"./IconButton-Dy9SRYqV.js";import"./cancel_16-C6mgGc9w.js";import"./chevron_left_outline_20-DdZWpJA-.js";import"./useEnsuredControl-DZdU0p0r.js";const St={title:"Forms/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
