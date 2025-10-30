import{j as u}from"./iframe-CjlHPZNU.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CacEC_UG.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-CX5JP4WW.js";import{C as o}from"./CalendarRange-BvBy6et8.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BGNxLEI7.js";import"./DisplayTitle-DGpgc0Ci.js";import"./education_12-EN5C4g7F.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BjQc82Sw.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-B5zgJODm.js";import"./Clickable-CtpofEGa.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./VisuallyHidden-BhHQTREx.js";import"./Footnote-OilvUFbZ.js";import"./CustomSelect-DBxHX6fS.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CYnCbTns.js";import"./children-DXLPnz61.js";import"./dropdown_20-wvnefOap.js";import"./chevron_up_24-Dmgv5k62.js";import"./CustomSelectDropdown-B3w7Q0Ob.js";import"./CustomScrollView-CjlOR93R.js";import"./Popper-BxTlfMRp.js";import"./useReferenceHiddenChangeCallback-BYBOPzRw.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./FloatingArrow-CXk5BXWM.js";import"./usePlacementChangeCallback-BUGqU92G.js";import"./floating-ui.react-dom-BOvPne9Z.js";import"./Spinner-BqL1JLHM.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-3fHYt2O8.js";import"./Paragraph-xO9VNyZg.js";import"./NativeSelect-CjxDByOa.js";import"./FormField-DDneCC7H.js";import"./useFocusWithin-CtqEkwtt.js";import"./Select.module-Dq_Q3yEj.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DL_Qecp_.js";import"./cancel_16-H58NJ25u.js";import"./useStateWithPrev-ZsPCJv_t.js";import"./chevron_left_outline_20-lPTczRg2.js";import"./useEnsuredControl-B_VfQasx.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
