import{j as g}from"./iframe-BW2_2Sqh.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-BqU4WboE.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-hmI1F5Az.js";import{C as s}from"./CalendarRange-CBXXtTNH.js";import"./Caption-B3YPJibB.js";import"./DisplayTitle-CUcUrb66.js";import"./education_12-DFgrcrGc.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./CalendarHeader-42OaW77O.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D_Pc41Ky.js";import"./InputUtils-DYuPlK4j.js";import"./VisuallyHidden-0_L4g8bM.js";import"./Footnote-DqSrPGSc.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Di5uuXSi.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cv8cds6L.js";import"./useStateWithPrev-CMG94Yfr.js";import"./DropdownIcon-C1GCze_v.js";import"./children-Dc0ieD8_.js";import"./dropdown_20-BhtxCkzn.js";import"./chevron_up_24-PXJae6b0.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BBnuosIF.js";import"./CustomScrollView-DrGLqxxz.js";import"./Popper-CvXRdepB.js";import"./useReferenceHiddenChangeCallback-D-Y2YXE4.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./FloatingArrow-BwItcUE2.js";import"./usePlacementChangeCallback-B_7WiNet.js";import"./Spinner-Ck410QJW.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DbZP3vkW.js";import"./Paragraph-DwKlZasN.js";import"./NativeSelect-DcEvGgJn.js";import"./FormField-bePIa3wK.js";import"./Select.module-ESI76py7.js";import"./IconButton-DMIGpMdh.js";import"./cancel_16-Cy5lofFG.js";import"./chevron_left_outline_20-EU2jxazt.js";import"./useEnsuredControl-C3ZVk8ic.js";const St={title:"Forms/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
