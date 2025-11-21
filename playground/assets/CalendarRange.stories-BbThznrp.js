import{j as u}from"./iframe-BnACcuaj.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-B3i8aNb-.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-DnLlCn5Y.js";import{C as o}from"./CalendarRange-DmqC0NST.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BCwlm_4N.js";import"./DisplayTitle-DQ2QRyhL.js";import"./education_12-D5JC6DzP.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CM8KqZ_U.js";import"./useState-Bfn4OdDS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./Tappable-Bp0BqfGQ.js";import"./Clickable-BArC-ALh.js";import"./InputUtils-Bef-cQxi.js";import"./VisuallyHidden-UrXKAcy6.js";import"./Footnote-DxEsaF8U.js";import"./CustomSelect-BYB7ly6q.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClojpxKz.js";import"./children-UU2tqqG0.js";import"./dropdown_20-BGNvRmjo.js";import"./chevron_up_24-umdY8hRe.js";import"./CustomSelectDropdown-Df4Ky-qO.js";import"./CustomScrollView-6jddE_3D.js";import"./Popper-DYnz-pr0.js";import"./useReferenceHiddenChangeCallback-DuuiI3jw.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./FloatingArrow-D2O-SNso.js";import"./usePlacementChangeCallback-CDmlNiC1.js";import"./floating-ui.react-dom-bTtkFxJ_.js";import"./Spinner-gYU1puQq.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DhMyr_Z8.js";import"./Paragraph-D3a0j1Hf.js";import"./NativeSelect-a4tySREf.js";import"./FormField-4Uh0lksV.js";import"./useFocusWithin-BXXGciuN.js";import"./Select.module-BgWuEpJn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DJLKvWv6.js";import"./cancel_16-XNcRXdRh.js";import"./useStateWithPrev-7FgZ8AZO.js";import"./chevron_left_outline_20-1-xRflVr.js";import"./useEnsuredControl-CGKhw2zb.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
