import{j as u}from"./iframe-C4bTyPBQ.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-mOuJYCxo.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BNhG4qp1.js";import{C as o}from"./CalendarRange-y-Lucl_u.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-D_3C1Hvb.js";import"./DisplayTitle-CJqodZD2.js";import"./education_12-63IQx91m.js";import"./SvgIconRootV2-DbftVVP5.js";import"./CalendarHeader-Dai295k5.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./Tappable-BZW__-HP.js";import"./Clickable-BhDfuptR.js";import"./InputUtils-Ns7QNyDT.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Footnote-wW_hecXF.js";import"./equal-DqB04qCY.js";import"./CustomSelect-DzCYC4SR.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DgnNzXl1.js";import"./children-DNxvoAyX.js";import"./dropdown_20-BAdDJnDY.js";import"./chevron_up_24-vYRkVu4w.js";import"./CustomSelectDropdown-Bf66ayKC.js";import"./CustomScrollView-BsG9TUbn.js";import"./Popper-BdfxQDqx.js";import"./useReferenceHiddenChangeCallback-DNsZVkB4.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./FloatingArrow-Bxs0n5DK.js";import"./usePlacementChangeCallback-CvoK5TDA.js";import"./floating-ui.react-dom-D2lgGwq0.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-CcwpPq37.js";import"./Paragraph-DjR0IJ5A.js";import"./NativeSelect-Cospdbm8.js";import"./FormField-Cu0jfNj8.js";import"./useFocusWithin-CWJCpHmP.js";import"./Select.module-BrSpg0k5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BXe704ZF.js";import"./cancel_16-CoNztr4w.js";import"./useBooleanState-CoNuuFWh.js";import"./useStateWithPrev-BIxy4Pbm.js";import"./chevron_left_outline_20-DN1jhhy8.js";import"./useEnsuredControl-D1T8oqbk.js";const vt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
