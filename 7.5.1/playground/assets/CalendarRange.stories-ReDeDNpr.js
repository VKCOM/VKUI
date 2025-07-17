import{j as g}from"./iframe-DSAhScPT.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DM1gFLa-.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-DbFkNmcF.js";import{C as s}from"./CalendarRange-BWNQgALy.js";import"./Caption-Cgr-BZCX.js";import"./DisplayTitle-DQzrWLCV.js";import"./education_12-CMEM6Qo8.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./CalendarHeader-D3IK7AKL.js";import"./Clickable-6oth1gD7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-41du4Si_.js";import"./InputUtils-CLCgtllv.js";import"./VisuallyHidden-DIyQgeho.js";import"./Footnote-BKhvF0_1.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DyF1ugHs.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-BI_v5t1h.js";import"./useStateWithPrev-BRDHZi1j.js";import"./DropdownIcon-BFGIuZpB.js";import"./children-Dz6__HWn.js";import"./dropdown_20-Cy4w0TaO.js";import"./chevron_up_24-BrEBZu44.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BE0sJFiQ.js";import"./CustomScrollView-Cuc8sd5U.js";import"./Popper-rmpwLWcs.js";import"./useReferenceHiddenChangeCallback-DIajmvBr.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./FloatingArrow-B8GxgOa-.js";import"./usePlacementChangeCallback-BG0wibxD.js";import"./floating-ui.react-dom-DRzDlYnr.js";import"./Spinner-KyMn6wQY.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BE3um6rG.js";import"./Paragraph-Dffse9lF.js";import"./NativeSelect-BsJweyBr.js";import"./FormField-B2769bQ_.js";import"./Select.module-RXjp17wE.js";import"./IconButton-CDVak2Pm.js";import"./cancel_16-ClU_GfUS.js";import"./chevron_left_outline_20-CkWRsy8s.js";import"./useEnsuredControl-CbqgyVDK.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
