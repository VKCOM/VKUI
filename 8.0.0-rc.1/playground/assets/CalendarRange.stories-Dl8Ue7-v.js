import{j as u}from"./iframe-CDzsgUJ6.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-rBusiI9_.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-Bq6IdoTI.js";import{C as o}from"./CalendarRange-DuvFVZ66.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Boi85h93.js";import"./DisplayTitle-B5DQPmOh.js";import"./education_12-CY5sUM85.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BlQ0OfUz.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./Tappable-BF8rCM_k.js";import"./Clickable-Dfoj99Ww.js";import"./InputUtils-DkBsdccT.js";import"./VisuallyHidden-hrbUbT1W.js";import"./Footnote-EhoXcm5o.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-B5gSAL-X.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DDTBL4u2.js";import"./children-__GeZXUq.js";import"./dropdown_20-m9cospeT.js";import"./chevron_up_24-DjQaueWG.js";import"./CustomSelectDropdown-DUsHfkV7.js";import"./CustomScrollView-CzqE7nP0.js";import"./Popper-DWLVFobm.js";import"./useReferenceHiddenChangeCallback-CY63qTPH.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./FloatingArrow-DUrMOVGb.js";import"./usePlacementChangeCallback-Bsdm3Pu3.js";import"./floating-ui.react-dom-B9MYDRsG.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-yYAiYeUv.js";import"./Paragraph-le0T_6Gv.js";import"./NativeSelect-B4rCAioC.js";import"./FormField-BNZ78smL.js";import"./useFocusWithin-UKmiu0Co.js";import"./Select.module-DLQY8KpU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DmVT1v_5.js";import"./cancel_16-BlaGgBnb.js";import"./useBooleanState-CnmcT8ct.js";import"./useStateWithPrev-C_uAPEx8.js";import"./chevron_left_outline_20-Bp5lQnXu.js";import"./useEnsuredControl-DK0f39Al.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
