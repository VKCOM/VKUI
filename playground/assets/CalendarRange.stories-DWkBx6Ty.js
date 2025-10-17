import{j as u}from"./iframe-DdZr-4mP.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-BgPuI0El.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-Ba7SdRgj.js";import{C as o}from"./CalendarRange-BufkUBVU.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DtU_BWrV.js";import"./DisplayTitle-Djtt-it5.js";import"./education_12-DrlYhy_2.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BnHcgTbn.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CovdKVQt.js";import"./Clickable-J2yyQqq6.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./Footnote-1KqsUf4m.js";import"./CustomSelect-Cr2rMPnz.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DNE5t4x-.js";import"./children-oqymHkiK.js";import"./dropdown_20-C51VVF26.js";import"./chevron_up_24-B5_EUz2K.js";import"./CustomSelectDropdown-hbWLPmhW.js";import"./CustomScrollView-D6gFw0v4.js";import"./Popper-qax9FHdX.js";import"./useReferenceHiddenChangeCallback-CSiwGfQ7.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./FloatingArrow-CqnmVrPx.js";import"./usePlacementChangeCallback-DXOFFQMQ.js";import"./floating-ui.react-dom-BugnXWB1.js";import"./Spinner-BjrDa5Np.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CH1KRfzF.js";import"./Paragraph-x1XJ9xj3.js";import"./NativeSelect-BQNnBwtV.js";import"./FormField-C4XpjwD8.js";import"./useFocusWithin-Bj820Lyk.js";import"./Select.module-edfV4YsO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7aWXmKO.js";import"./cancel_16-BJb-DamK.js";import"./useStateWithPrev-Z0taGhgw.js";import"./chevron_left_outline_20-BKzfgAPG.js";import"./useEnsuredControl-CmGQ-V-a.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
