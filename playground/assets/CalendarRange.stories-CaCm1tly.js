import{j as u}from"./iframe-CGSrC79H.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DPVsrHAS.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-DuFii-g_.js";import{C as o}from"./CalendarRange-CkHlFhyI.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BHHO6d1x.js";import"./DisplayTitle-CNlukW7S.js";import"./education_12-DLTepyJs.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-VsKo-Tpi.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./Tappable-HtqfSGDW.js";import"./Clickable-DvGk0QGJ.js";import"./InputUtils-AL_dRhAR.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Footnote-9-fttdTG.js";import"./CustomSelect-CdNt_4m7.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CBX_pcLT.js";import"./children-C-hCqQRI.js";import"./dropdown_20-DdgqA2FX.js";import"./chevron_up_24-DNC5aBg8.js";import"./CustomSelectDropdown-BHVzRpO-.js";import"./CustomScrollView-ClAxltNi.js";import"./Popper-BXCfD9qH.js";import"./useReferenceHiddenChangeCallback-BEYGsRvY.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./FloatingArrow-DPBTaDMU.js";import"./usePlacementChangeCallback-C_EKg3Ob.js";import"./floating-ui.react-dom-C7nxf647.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-YXDM9fUX.js";import"./Paragraph-MD0IQtl5.js";import"./NativeSelect-DgoKDWkN.js";import"./FormField-CQtfDQHY.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./Select.module-Bmdgm75C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bq_FXaCp.js";import"./cancel_16--_Pgj7hA.js";import"./useBooleanState-BkBFPaFP.js";import"./useStateWithPrev-DYD-gkn1.js";import"./chevron_left_outline_20-CVNV5cAz.js";import"./useEnsuredControl-AiFtRieF.js";const vt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
