import{j as T}from"./iframe-DSAhScPT.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DM1gFLa-.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-DbFkNmcF.js";import{C as n}from"./Calendar-q8JImfpI.js";import"./Caption-Cgr-BZCX.js";import"./DisplayTitle-DQzrWLCV.js";import"./education_12-CMEM6Qo8.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./CalendarHeader-D3IK7AKL.js";import"./Clickable-6oth1gD7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-41du4Si_.js";import"./InputUtils-CLCgtllv.js";import"./VisuallyHidden-DIyQgeho.js";import"./Footnote-BKhvF0_1.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DyF1ugHs.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-BI_v5t1h.js";import"./useStateWithPrev-BRDHZi1j.js";import"./DropdownIcon-BFGIuZpB.js";import"./children-Dz6__HWn.js";import"./dropdown_20-Cy4w0TaO.js";import"./chevron_up_24-BrEBZu44.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BE0sJFiQ.js";import"./CustomScrollView-Cuc8sd5U.js";import"./Popper-rmpwLWcs.js";import"./useReferenceHiddenChangeCallback-DIajmvBr.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./FloatingArrow-B8GxgOa-.js";import"./usePlacementChangeCallback-BG0wibxD.js";import"./floating-ui.react-dom-DRzDlYnr.js";import"./Spinner-KyMn6wQY.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BE3um6rG.js";import"./Paragraph-Dffse9lF.js";import"./NativeSelect-BsJweyBr.js";import"./FormField-B2769bQ_.js";import"./Select.module-RXjp17wE.js";import"./IconButton-CDVak2Pm.js";import"./cancel_16-ClU_GfUS.js";import"./chevron_left_outline_20-CkWRsy8s.js";import"./useEnsuredControl-CbqgyVDK.js";import"./date-BfD1Qbye.js";import"./Button-D3Kc_P4_.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
