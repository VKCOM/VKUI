import{j as g}from"./iframe-BzXYREd1.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-zVnnmcZr.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BXMOsghN.js";import{C as s}from"./CalendarRange-rS-t2KBB.js";import"./Caption-DQdafhaO.js";import"./DisplayTitle-ChLVdz5k.js";import"./education_12-ChFkpu24.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./CalendarHeader-BWjYhd4-.js";import"./Clickable-DoSI9phS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CEn82fQ0.js";import"./InputUtils-DULFm0M2.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Footnote-ChYIirVi.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DnEqJaTG.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useStateWithPrev-DIRc7sTN.js";import"./DropdownIcon-dYyUG-ER.js";import"./children-Cg6pG0uN.js";import"./dropdown_20-BW-ZuK3W.js";import"./chevron_up_24-B_k7NpvP.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CTieeYsw.js";import"./CustomScrollView-Bjlru_-d.js";import"./Popper-CRKef3MV.js";import"./useReferenceHiddenChangeCallback-2xtRrg1t.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./FloatingArrow-C9T5GfxJ.js";import"./usePlacementChangeCallback-Cr19q53p.js";import"./floating-ui.react-dom-gQYdXTBL.js";import"./Spinner-CKaqwWiI.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CALDRXE3.js";import"./Paragraph-IO_n1Dux.js";import"./NativeSelect-DPfma8_h.js";import"./FormField-DMycdJEz.js";import"./Select.module-B_-em5IN.js";import"./IconButton-DmYSjyYz.js";import"./cancel_16-D3jkawaL.js";import"./chevron_left_outline_20-DVvIs5zx.js";import"./useEnsuredControl-ZZij51Ca.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
