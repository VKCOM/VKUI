import{j as g}from"./iframe-gnG2DlPI.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DJ-xDfYu.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-xenh2TAE.js";import{C as s}from"./CalendarRange-BUqAaSeh.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-BFNedaFH.js";import"./DisplayTitle-JRJHIR7t.js";import"./education_12-BUGot4fb.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DnFziZa5.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-03YLyRIn.js";import"./Clickable-CEzYBb4W.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./Footnote-CONk622S.js";import"./CustomSelect-CzylMRq9.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3MQ6Zfj.js";import"./children-f2sIKLUn.js";import"./dropdown_20-BBKaGv9g.js";import"./chevron_up_24-DoyCz406.js";import"./CustomSelectDropdown-C16WVPUt.js";import"./CustomScrollView-DrMf6IgL.js";import"./Popper-DC-k3Bn1.js";import"./useReferenceHiddenChangeCallback-DFZxSJq2.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./FloatingArrow-BxfAO7YE.js";import"./usePlacementChangeCallback-BKIMntET.js";import"./floating-ui.react-dom-B5yNzxXa.js";import"./Spinner-CpE2KS8o.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-htb9b17L.js";import"./Paragraph-C-NM1n3-.js";import"./NativeSelect-CDarQ2Cp.js";import"./FormField-BCUJfz82.js";import"./useFocusWithin-XtLgfp-_.js";import"./Select.module-DzrzSPIQ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cf4dAO-u.js";import"./cancel_16-CitrMCMl.js";import"./useStateWithPrev-CHGTfIix.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./useEnsuredControl-25o_zjEi.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
