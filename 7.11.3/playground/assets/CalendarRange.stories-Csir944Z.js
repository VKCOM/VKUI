import{j as u}from"./iframe-C4ttrVUJ.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-c7826QIF.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-LLK5tR6T.js";import{C as o}from"./CalendarRange-BvsOiWdL.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Den-IMPb.js";import"./DisplayTitle-B3MMZEHv.js";import"./education_12-ClTQ6BEe.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BDks_1IX.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./Tappable-CL0fK4DO.js";import"./Clickable-B80alsah.js";import"./InputUtils-CD1Rp_t7.js";import"./VisuallyHidden-XgvirjGY.js";import"./Footnote-D7DVMFfP.js";import"./CustomSelect-C8Xx-RTj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BrCV9u2Z.js";import"./children-DylyViM5.js";import"./dropdown_20-BmDKn9aW.js";import"./chevron_up_24-B4YMPaHv.js";import"./CustomSelectDropdown-B-P-NVyL.js";import"./CustomScrollView-B97yUFEZ.js";import"./Popper-DFY7QZ5U.js";import"./useReferenceHiddenChangeCallback-BPKnqOos.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./FloatingArrow-DI1_-YRL.js";import"./usePlacementChangeCallback-DDIzKEgz.js";import"./floating-ui.react-dom-D2r8uzGZ.js";import"./Spinner-CeIULbGb.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1g9JWHb.js";import"./Paragraph-C9fVSqiB.js";import"./NativeSelect-C8tAULOC.js";import"./FormField-FAL0-RE2.js";import"./useFocusWithin-BAJNppfT.js";import"./Select.module-By692CQ-.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B4UJc4kp.js";import"./cancel_16-jBKFguup.js";import"./useStateWithPrev-J6FKBV8D.js";import"./chevron_left_outline_20-BY_CTwIe.js";import"./useEnsuredControl-BbUIO2GP.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
