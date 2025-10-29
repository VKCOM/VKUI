import{j as u}from"./iframe-DC59t_7s.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-B06ZdeeT.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BLpUr6nY.js";import{C as o}from"./CalendarRange-BcdriN6I.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-k9jgJVgg.js";import"./DisplayTitle-33UX4eDH.js";import"./education_12-LFb5f-3w.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B2E7R0X5.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CRrpYa-n.js";import"./Clickable-k0omQ8uW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./Footnote-B_mvNSI1.js";import"./CustomSelect-C_yfWVZk.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C-WBznle.js";import"./children-DYOU-AGd.js";import"./dropdown_20-DyhMSWKb.js";import"./chevron_up_24-DXo7w0t3.js";import"./CustomSelectDropdown-BO85D6H2.js";import"./CustomScrollView-DqxqicWb.js";import"./Popper-BDurMwAV.js";import"./useReferenceHiddenChangeCallback-Cv-J72mi.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./FloatingArrow-uPZYtw2a.js";import"./usePlacementChangeCallback-DjeyUYH1.js";import"./floating-ui.react-dom-gjdRo9Jf.js";import"./Spinner-BHxVDILF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-rh0HPT1I.js";import"./Paragraph-CNGX9Ncs.js";import"./NativeSelect-9bMx5srV.js";import"./FormField-DYhXjH9r.js";import"./useFocusWithin-9CYA-Xql.js";import"./Select.module-Dr6pz-LO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlcUkq3s.js";import"./cancel_16-DOyKhfQK.js";import"./useStateWithPrev-DFxMBC4E.js";import"./chevron_left_outline_20-BIdPFGBs.js";import"./useEnsuredControl-B87PR-rL.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
