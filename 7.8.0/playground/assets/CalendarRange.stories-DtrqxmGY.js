import{j as u}from"./iframe-F_0bvJrc.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DbHAgnML.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-D99MQ4pr.js";import{C as o}from"./CalendarRange-D3vud_Lw.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DLbzsWHi.js";import"./DisplayTitle-CUHPGNrK.js";import"./education_12-ChGHUbPU.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CNr3niQf.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DJ3rCQkY.js";import"./Clickable-B4aTO_qb.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./VisuallyHidden-CRrL_L2y.js";import"./Footnote-DfPFidfa.js";import"./CustomSelect-AeMOLvAM.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DKCgq7mS.js";import"./children-CfV6Kr3n.js";import"./dropdown_20-B9e7Y_E7.js";import"./chevron_up_24-Q8g1MI2x.js";import"./CustomSelectDropdown-DT35ijRC.js";import"./CustomScrollView-DEuKtSsw.js";import"./Popper-jEDCIA6z.js";import"./useReferenceHiddenChangeCallback-BgaI2Iei.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./ConfigProviderOverride-DP-FN5VZ.js";import"./FloatingArrow-BFutSiUS.js";import"./usePlacementChangeCallback-mGGiHeRj.js";import"./floating-ui.react-dom-BwXaV5NM.js";import"./Spinner-D7kEFt-1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C4XgJt4d.js";import"./Paragraph-DpqDuxuA.js";import"./NativeSelect-BnCt67fZ.js";import"./FormField-Dkyvpq47.js";import"./useFocusWithin-CDt5X1od.js";import"./Select.module-BXZZZxMR.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BHFFi_8a.js";import"./cancel_16-CJb_-qse.js";import"./useStateWithPrev-ojENS7H5.js";import"./chevron_left_outline_20-DWHaa5vd.js";import"./useEnsuredControl-BBTm3kq1.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
