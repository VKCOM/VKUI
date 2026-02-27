import{j as u}from"./iframe-Cn0klKvz.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-B7rQqSeU.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BhDNog1q.js";import{C as o}from"./CalendarRange-Bmnf-2Mh.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Bj6KpxiH.js";import"./DisplayTitle-C0DTK6AE.js";import"./education_12-DoF-EL2t.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./CalendarHeader-wveqIoPc.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./Tappable-CVh4vgq8.js";import"./Clickable-D6ksQ4g4.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./Footnote-BwZkqEqY.js";import"./equal-DqB04qCY.js";import"./CustomSelect-CkTIXSiu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyiI2WzX.js";import"./children-IiL0uSHX.js";import"./dropdown_20--DUJk8yW.js";import"./chevron_up_24-C7u6Xkhd.js";import"./CustomSelectDropdown-d3mz6Yj3.js";import"./CustomScrollView-DDpGxQa7.js";import"./Popper-CJSXFplp.js";import"./useReferenceHiddenChangeCallback-C__GEFDu.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./FloatingArrow-rIv3MFV8.js";import"./usePlacementChangeCallback-BcR5bXER.js";import"./floating-ui.react-dom-DkSLRTT4.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-YPe2tNNz.js";import"./Paragraph-DlmN_8kL.js";import"./NativeSelect-jlMl4W3c.js";import"./FormField-CqfiouLJ.js";import"./useFocusWithin-GdWsk7hi.js";import"./Select.module-CuMgMza5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DSEgeqcd.js";import"./cancel_16-DzhBEMr_.js";import"./useBooleanState-CzvJFu2k.js";import"./useStateWithPrev-CUCMAMWh.js";import"./chevron_left_outline_20-9God32SQ.js";import"./useEnsuredControl-0lh_FwAV.js";const vt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
