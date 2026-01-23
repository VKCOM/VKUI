import{j as u}from"./iframe-BJ9555aC.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DNSLBXl_.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-rQABBE_Q.js";import{C as o}from"./CalendarRange-gzAI56hN.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BrB5DlXi.js";import"./DisplayTitle-BEMvCdAB.js";import"./education_12-BZSlzGy3.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CFpGUA92.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./Tappable-Bz7LtOMO.js";import"./Clickable-BL1AyP3s.js";import"./InputUtils-8LhFcqKY.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Footnote-xxqNAETB.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-D5JbKYX_.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_KDqP4gW.js";import"./children-CFPqwV5J.js";import"./dropdown_20-DyA2EYYB.js";import"./chevron_up_24-CRtNUENt.js";import"./CustomSelectDropdown-i-AfigEh.js";import"./CustomScrollView-kMAABzAe.js";import"./Popper-BhaeA0Qs.js";import"./useReferenceHiddenChangeCallback-DY7Th_c3.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./FloatingArrow-C4JFmSBi.js";import"./usePlacementChangeCallback-BKmBlkkK.js";import"./floating-ui.react-dom-DIn9Ikqa.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BAbpEHx_.js";import"./Paragraph-Cp7CvK2x.js";import"./NativeSelect-ByWiiYIv.js";import"./FormField-DvQPBwxb.js";import"./useFocusWithin-ClOWbdUU.js";import"./Select.module-DhR9NBbI.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DRWEpqxT.js";import"./cancel_16-DW-e6Ezq.js";import"./useBooleanState-BYJEPe49.js";import"./useStateWithPrev-BGjF88uR.js";import"./chevron_left_outline_20-CfdM4DXq.js";import"./useEnsuredControl-3-CGTCCX.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
