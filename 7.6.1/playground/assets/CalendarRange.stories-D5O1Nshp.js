import{j as g}from"./iframe-CdtcRMP-.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CbOCyvoP.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CoFU7EkZ.js";import{C as s}from"./CalendarRange-BCS4-pCf.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-DOhalbqy.js";import"./DisplayTitle-B29xSz1D.js";import"./education_12-6HQQm3ZW.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-ChP8yCH6.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-znRvcKvt.js";import"./Clickable-nnjkiOyK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./VisuallyHidden-CtlI0uOO.js";import"./Footnote-UnTPOYYT.js";import"./CustomSelect-yWjErFJk.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CZjsFca3.js";import"./children-BpYEnGqU.js";import"./dropdown_20-BbFICyt9.js";import"./chevron_up_24-DN5UovyM.js";import"./CustomSelectDropdown-BWtFjGkj.js";import"./CustomScrollView-BzKXL2Z5.js";import"./Popper-T3RUj53f.js";import"./useReferenceHiddenChangeCallback-JE-hnu_T.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./FloatingArrow-BleoPFqO.js";import"./usePlacementChangeCallback-BB0AFdrs.js";import"./floating-ui.react-dom-Dfkb5x82.js";import"./Spinner-C-2OzDn_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bw5BXA_B.js";import"./Paragraph-B8xPxJlh.js";import"./NativeSelect-yM5JNzj5.js";import"./FormField-DzT87oDI.js";import"./useFocusWithin-CnBAXQ2U.js";import"./Select.module-DdA2hEwl.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-rnOj30v2.js";import"./cancel_16-CbxMAvwC.js";import"./useStateWithPrev-Dd6f6IIM.js";import"./chevron_left_outline_20-BMCptxgE.js";import"./useEnsuredControl-D2ifizI6.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
