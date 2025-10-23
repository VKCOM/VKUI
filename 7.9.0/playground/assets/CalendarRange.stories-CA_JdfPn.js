import{j as u}from"./iframe-BdXaAE5r.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CnqJh9E5.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-B4poho75.js";import{C as o}from"./CalendarRange-Brdxxt2i.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-B8hxH2dQ.js";import"./DisplayTitle-DW0jTrOA.js";import"./education_12-CWUVNJ7E.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Cptk8zp3.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DfpzQKhB.js";import"./Clickable-0nFsuW3k.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./VisuallyHidden-DcQJc2es.js";import"./Footnote-ByXPLsYQ.js";import"./CustomSelect-Cu036XGx.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-8qOBQz0J.js";import"./children-l5OU2f11.js";import"./dropdown_20-BZfVNQlJ.js";import"./chevron_up_24-uhX6-5Hj.js";import"./CustomSelectDropdown-B1W3rkKd.js";import"./CustomScrollView-CMGGh_2P.js";import"./Popper-Beqzn5p-.js";import"./useReferenceHiddenChangeCallback-CV7-HRaM.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./FloatingArrow-Bc_HvhOO.js";import"./usePlacementChangeCallback-Eb8gezm-.js";import"./floating-ui.react-dom-Db2st6hH.js";import"./Spinner-Dsao1b5l.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_1P28cN.js";import"./Paragraph-ZazE2YSK.js";import"./NativeSelect-BsrUAl_n.js";import"./FormField-EQy9__nw.js";import"./useFocusWithin-BFFjMCCU.js";import"./Select.module-N9DEoYZ7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CXgqouLn.js";import"./cancel_16-DBln7EA6.js";import"./useStateWithPrev-DFoPjIDX.js";import"./chevron_left_outline_20-C5Eclvvd.js";import"./useEnsuredControl-dQkhshwS.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
